import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Bell, Calendar } from "lucide-react";

// Validate that the URL is a legitimate Zapier webhook
const isValidZapierUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    return parsed.hostname === 'hooks.zapier.com' && parsed.protocol === 'https:';
  } catch {
    return false;
  }
};

export const ReminderSetup = () => {
  const [webhookUrl, setWebhookUrl] = useState("");
  const [reminderTask, setReminderTask] = useState("");
  const [reminderDate, setReminderDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 14); // 2 weeks from now
    return date.toISOString().split('T')[0];
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSetReminder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter your Zapier webhook URL",
        variant: "destructive",
      });
      return;
    }

    // Validate the webhook URL is a legitimate Zapier URL
    if (!isValidZapierUrl(webhookUrl)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid Zapier webhook URL (https://hooks.zapier.com/...)",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          task: reminderTask,
          reminder_date: reminderDate,
          created_at: new Date().toISOString(),
        }),
      });

      toast({
        title: "Reminder Sent to Zapier!",
        description: "Your reminder has been sent. Set up a 'Delay Until' action in your Zap to schedule the notification.",
      });
      
      // Clear the form after successful setup
      setWebhookUrl("");
      setReminderTask("");
    } catch (error) {
      console.error("Error setting up reminder:", error);
      toast({
        title: "Error",
        description: "Failed to set up reminder. Please check the webhook URL and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bell className="h-6 w-6 text-primary" />
          <CardTitle>Set Up Reminder</CardTitle>
        </div>
        <CardDescription>
          Get reminded to complete important tasks using Zapier
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSetReminder} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="task">What do you want to be reminded about?</Label>
            <Textarea
              id="task"
              value={reminderTask}
              onChange={(e) => setReminderTask(e.target.value)}
              placeholder="e.g., Add authentication and admin dashboard"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Reminder Date
            </Label>
            <Input
              id="date"
              type="date"
              value={reminderDate}
              onChange={(e) => setReminderDate(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="webhook">Zapier Webhook URL</Label>
            <Input
              id="webhook"
              type="url"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              placeholder="https://hooks.zapier.com/hooks/catch/..."
              required
            />
            <p className="text-sm text-muted-foreground">
              Create a Zap with a "Catch Hook" trigger, then add a "Delay Until" action set to the reminder date, 
              followed by an email/SMS action to send the notification.
            </p>
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Setting Up..." : "Set Reminder"}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Bell className="h-4 w-4" />
            How to set up your Zap:
          </h4>
          <ol className="text-sm space-y-2 list-decimal list-inside text-muted-foreground">
            <li>Go to Zapier and create a new Zap</li>
            <li>Add a "Webhooks by Zapier" trigger (Catch Hook)</li>
            <li>Copy the webhook URL and paste it above</li>
            <li>Add a "Delay Until" action and set it to the reminder_date field</li>
            <li>Add an action to send yourself an email or SMS with the task details</li>
            <li>Turn on your Zap and click "Set Reminder" above</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
};