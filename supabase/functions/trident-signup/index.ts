// Trident member signup: creates auth user, profile row, sends branded magic link via Resend, and pushes to CRM "Trident Members" board.
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const CRM_FORMS_WEBHOOK_URL = Deno.env.get("CRM_FORMS_WEBHOOK_URL");
const CRM_WEBHOOK_APIKEY = Deno.env.get("CRM_WEBHOOK_APIKEY");
const CRM_TRIDENT_MEMBERS_BOARD_ID = Deno.env.get("CRM_TRIDENT_MEMBERS_BOARD_ID");

const TENANT_SUBDOMAIN = "enzos";
const FROM_EMAIL = "Enzo's Trident <trident@sales.enzoscleaning.com>";
const ADMIN_EMAIL = "nick@munnymancommunications.com";

interface SignupPayload {
  email: string;
  name: string;
  company_name: string;
  phone: string;
  title?: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  notes?: string;
  redirect_to?: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const data = (await req.json()) as SignupPayload;

    if (!data.email || !data.name || !data.company_name || !data.phone) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const email = data.email.trim().toLowerCase();
    // Always send users to the production domain from the email button
    const redirectTo = "https://2.enzoscleaning.com/hardscaping/trident/";

    const admin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // 1) Reject duplicates
    const { data: existing } = await admin
      .from("trident_members")
      .select("id")
      .ilike("email", email)
      .maybeSingle();
    if (existing) {
      return new Response(JSON.stringify({ error: "An account with that email already exists. Please sign in." }), {
        status: 409,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 2) Create auth user (passwordless; email confirmed so magic link works immediately)
    const { data: created, error: createErr } = await admin.auth.admin.createUser({
      email,
      email_confirm: true,
      user_metadata: { name: data.name, company_name: data.company_name },
    });
    if (createErr || !created.user) {
      return new Response(JSON.stringify({ error: createErr?.message || "Failed to create account" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userId = created.user.id;

    // 3) Insert member profile
    const { error: profErr } = await admin.from("trident_members").insert({
      user_id: userId,
      email,
      name: data.name,
      company_name: data.company_name,
      phone: data.phone,
      title: data.title || null,
      address_line1: data.address_line1 || null,
      address_line2: data.address_line2 || null,
      city: data.city || null,
      state: data.state || null,
      postal_code: data.postal_code || null,
      country: data.country || null,
      notes: data.notes || null,
    });
    if (profErr) {
      await admin.auth.admin.deleteUser(userId);
      return new Response(JSON.stringify({ error: profErr.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 4) Grant trident_member role
    await admin.from("user_roles").insert({ user_id: userId, role: "trident_member" });

    // 5) Generate a branded magic link and send via Resend
    const { data: linkData, error: linkErr } = await admin.auth.admin.generateLink({
      type: "magiclink",
      email,
      options: { redirectTo },
    });

    let magicLink: string | undefined = linkData?.properties?.action_link;
    if (linkErr || !magicLink) {
      return new Response(JSON.stringify({ ok: true, warning: "Account created but magic link failed", error: linkErr?.message }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (RESEND_API_KEY) {
      const subject = "Welcome to Enzo's Trident — your sign-in link";
      const html = `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;padding:24px;background:#ffffff;color:#0f172a">
          <h2 style="margin:0 0 16px">Welcome, ${escapeHtml(data.name)}.</h2>
          <p>Your Enzo's Trident account is ready. Click the button below to sign in.</p>
          <p style="margin:28px 0">
            <a href="${magicLink}" style="background:#0f172a;color:#ffffff;padding:14px 22px;border-radius:8px;text-decoration:none;font-weight:600">Sign in to Trident</a>
          </p>
          <p style="font-size:12px;color:#64748b">If the button doesn't work, paste this URL in your browser:<br>${escapeHtml(magicLink)}</p>
          <p style="font-size:12px;color:#64748b">This link expires shortly. If you didn't request it, you can ignore this email.</p>
        </div>`;
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: FROM_EMAIL, to: [email], subject, html, reply_to: ADMIN_EMAIL }),
      });
    }

    // 6) CRM push to Trident Members board
    if (CRM_FORMS_WEBHOOK_URL && CRM_WEBHOOK_APIKEY && CRM_TRIDENT_MEMBERS_BOARD_ID) {
      const now = new Date();
      const crmBody = {
        board_id: CRM_TRIDENT_MEMBERS_BOARD_ID,
        tenant_subdomain: TENANT_SUBDOMAIN,
        form_name: "Trident Member Signup",
        name: data.name,
        company: data.company_name,
        email,
        phone: data.phone,
        title: data.title || "",
        address_line1: data.address_line1 || "",
        address_line2: data.address_line2 || "",
        city: data.city || "",
        state: data.state || "",
        postal_code: data.postal_code || "",
        country: data.country || "",
        notes: data.notes || "",
        submitted_at: now.toISOString(),
        submitted_date: now.toISOString().slice(0, 10),
      };
      await fetch(CRM_FORMS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-webhook-apikey": CRM_WEBHOOK_APIKEY },
        body: JSON.stringify(crmBody),
      }).catch(() => {});
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
