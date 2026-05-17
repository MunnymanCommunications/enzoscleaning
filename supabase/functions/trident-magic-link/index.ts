// Send a branded magic link to an existing Trident member via Resend.
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const FROM_EMAIL = "Enzo's Trident <trident@sales.enzoscleaning.com>";
const ADMIN_EMAIL = "nick@munnymancommunications.com";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { email, redirect_to } = await req.json();
    if (!email || typeof email !== "string") {
      return new Response(JSON.stringify({ error: "email required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const cleanEmail = email.trim().toLowerCase();
    const redirectTo = "https://2.enzoscleaning.com/hardscaping/trident/";

    const admin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: member } = await admin
      .from("trident_members")
      .select("id, name")
      .ilike("email", cleanEmail)
      .maybeSingle();

    if (!member) {
      return new Response(JSON.stringify({ exists: false, error: "Email not found." }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: linkData, error: linkErr } = await admin.auth.admin.generateLink({
      type: "magiclink",
      email: cleanEmail,
      options: { redirectTo },
    });

    const magicLink = linkData?.properties?.action_link;
    if (linkErr || !magicLink) {
      return new Response(JSON.stringify({ error: linkErr?.message || "Failed to generate link" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;padding:24px;background:#ffffff;color:#0f172a">
        <h2 style="margin:0 0 16px">Sign in to Enzo's Trident</h2>
        <p>Hi ${escapeHtml(member.name || "there")}, here is your secure sign-in link.</p>
        <p style="margin:28px 0">
          <a href="${magicLink}" style="background:#0f172a;color:#ffffff;padding:14px 22px;border-radius:8px;text-decoration:none;font-weight:600">Sign in to Trident</a>
        </p>
        <p style="font-size:12px;color:#64748b">If the button doesn't work, paste this URL into your browser:<br>${escapeHtml(magicLink)}</p>
        <p style="font-size:12px;color:#64748b">This link expires shortly. If you didn't request it, ignore this email.</p>
      </div>`;

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [cleanEmail],
        subject: "Your Enzo's Trident sign-in link",
        html,
        reply_to: ADMIN_EMAIL,
      }),
    });
    const body = await r.text();

    if (!r.ok) {
      return new Response(JSON.stringify({ error: "Failed to send email", detail: body }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" } as Record<string, string>)[c]);
}
