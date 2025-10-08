import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Invalid email address").max(255),
  first_name: z.string().max(100).optional(),
  last_name: z.string().max(100).optional(),
});

type FormData = z.infer<typeof formSchema>;

export const NewsletterSubscription = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("newsletter_subscriptions").insert([
        {
          email: data.email,
          first_name: data.first_name || null,
          last_name: data.last_name || null,
        },
      ]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "You're already subscribed!",
            description: "This email is already on our mailing list.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Welcome to our newsletter!",
          description: "You'll receive updates and news alerts at your email.",
        });
        reset();
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-6 bg-secondary/5 rounded-lg p-6">
        <div className="flex-shrink-0">
          <Mail className="h-10 w-10 text-secondary" />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-seasons font-normal mb-1 text-foreground">
            Subscribe for Updates & News Alerts
          </h3>
          <p className="text-sm font-roboto text-muted-foreground">
            Stay informed about our programs, events, and important community updates
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex-shrink-0 w-full md:w-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email" 
              {...register("email")}
              className="min-w-[280px]"
            />
            <Button type="submit" disabled={isSubmitting} className="whitespace-nowrap">
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
          {errors.email && (
            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
          )}
          <p className="text-xs text-muted-foreground mt-2">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </div>
  );
};
