import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const isValidEmail = (value: string) =>
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value);

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Supabase environment variables are not configured.");
    }

    const { question, contactEmail, wantsResponse, searchQuery, consentToShare } = await req.json();

    if (!question || typeof question !== "string" || question.trim().length < 10) {
      return new Response(JSON.stringify({ error: "Question is too short." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (question.trim().length > 2000) {
      return new Response(JSON.stringify({ error: "Question is too long." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (contactEmail && (!isValidEmail(contactEmail) || contactEmail.length > 254)) {
      return new Response(JSON.stringify({ error: "Email is invalid." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (wantsResponse && !contactEmail) {
      return new Response(JSON.stringify({ error: "Email is required for response updates." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!consentToShare) {
      return new Response(JSON.stringify({ error: "Consent is required." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { error: insertError } = await supabase.from("kidsafe_questions").insert({
      question_text: question.trim(),
      contact_email: contactEmail || null,
      wants_response: Boolean(wantsResponse),
      consent_public: true,
      search_query: searchQuery || null,
    });

    if (insertError) {
      throw insertError;
    }

    if (RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Rowan Center Alerts <alerts@therowancenter-ct.org>",
          to: ["staff@therowancenter-ct.org"],
          subject: "New KidSafeHQ Question Submitted",
          html: `
            <h1>New KidSafeHQ Question</h1>
            <p>A new anonymous KidSafeHQ question was submitted for public sharing.</p>
            <p><strong>Wants response:</strong> ${Boolean(wantsResponse) ? "Yes" : "No"}</p>
            <p><strong>Question:</strong> ${question.trim()}</p>
          `,
        }),
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
