import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

export default function TestForm() {
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    setResult("Testing...");

    try {
      // Test 1: Check connection
      const { data: healthCheck, error: healthError } = await supabase
        .from('crisis_counseling_intake')
        .select('count')
        .limit(0);

      if (healthError) {
        setResult(`❌ Connection Error: ${healthError.message}\n\nDetails: ${JSON.stringify(healthError, null, 2)}`);
        return;
      }

      // Test 2: Try to insert
      const testData = {
        first_name: "Test",
        last_name: "User",
        email: "test@example.com",
        phone: "123-456-7890",
        town_of_residence: "Test Town",
        preferred_language: "English",
        voicemail_permission: true,
        request_description: "Test request from diagnostic tool",
        is_client: true,
        form_language: "en"
      };

      const { data, error } = await supabase
        .from('crisis_counseling_intake')
        .insert(testData)
        .select();

      if (error) {
        setResult(`❌ Insert Error: ${error.message}\n\nCode: ${error.code}\n\nDetails: ${JSON.stringify(error, null, 2)}\n\nThis usually means RLS policies are not allowing public inserts.`);
        return;
      }

      setResult(`✅ SUCCESS! Form submission works!\n\nInserted data: ${JSON.stringify(data, null, 2)}\n\nYour forms should be working now.`);
    } catch (err: any) {
      setResult(`❌ Unexpected Error: ${err.message}\n\n${JSON.stringify(err, null, 2)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Form Submission Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Click the button below to test if forms can submit to the database.</p>

          <Button onClick={testConnection} disabled={loading} size="lg" className="w-full">
            {loading ? "Testing..." : "Test Form Submission"}
          </Button>

          {result && (
            <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-auto max-h-96 whitespace-pre-wrap">
              {result}
            </pre>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
