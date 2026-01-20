import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { record, table } = await req.json();

    // Map table names to human-readable titles
    const tableTitles: Record<string, string> = {
      crisis_counseling_intake: "Crisis Counseling",
      trauma_recovery_intake: "Trauma Recovery",
      victim_advocacy_intake: "Victim Advocacy",
      volunteer_applications: "Volunteer Application",
      student_advisory_applications: "Student Advisory Application",
      newsletter_subscriptions: "Newsletter Subscription",
      prevention_education_contact: "Prevention Education",
    };

    const formTitle = tableTitles[table] || "New Website Submission";
    const baseRecipients = ["ross@imagemaretingconsultants.com"];
    const tableRecipients: Record<string, string[]> = {
      crisis_counseling_intake: ["mplacide@therowancenter.org", "sanzellotti@therowancenter.org"],
      trauma_recovery_intake: ["lrobbins@traumarecoveryct.org", "inegron@traumarecoveryct.org"],
      volunteer_applications: ["rlopez@therowancenter.org"],
      student_advisory_applications: ["jbarnard@therowancenter.org"],
      prevention_education_contact: ["education@therowancenter.org"],
    };
    const defaultRecipients = ["staff@therowancenter.org"];
    const recipients = Array.from(
      new Set([...(tableRecipients[table] ?? defaultRecipients), ...baseRecipients])
    );

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Rowan Center Alerts <onboarding@resend.dev>", // Temporarily using onboarding address for testing
        to: recipients,
        subject: `New Submission: ${formTitle}`,
        html: `
          <h1>New ${formTitle} Received</h1>
          <p>A new form has been submitted on the website. Here are the details:</p>
          <ul>
            <li><strong>Name:</strong> ${record.first_name} ${record.last_name}</li>
            <li><strong>Email:</strong> ${record.email}</li>
            <li><strong>Phone:</strong> ${record.phone || 'N/A'}</li>
            <li><strong>Date:</strong> ${new Date(record.created_at || Date.now()).toLocaleString()}</li>
          </ul>
          <p>Please log in to the <a href="https://therowancenter.org/admin">Admin Dashboard</a> to see the full details.</p>
        `,
      }),
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
