// Returns whether an email matches an existing Trident member, or returns the
// current authenticated user's Trident profile for the portal gate.
import { createClient } from "npm:@supabase/supabase-js@2";
import { createLogger, errMeta } from "../_shared/logger.ts";
import { reportError } from "../_shared/errorAlert.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-request-id",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function isValidEmail(e: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) && e.length <= 254;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  const log = createLogger("check-trident-member", req);

  try {
    let body: { email?: string; current?: boolean };
    try { body = await req.json(); } catch (e) {
      log.warn("validation", "invalid_json_body", errMeta(e));
      return json({ error: "Invalid JSON" }, 400, log.requestId);
    }

    const url = Deno.env.get("SUPABASE_URL");
    const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY") || Deno.env.get("SUPABASE_PUBLISHABLE_KEY");
    if (!url || !key) {
      log.error("config", "missing_supabase_env", { has_url: !!url, has_key: !!key });
      return json({ error: "Server misconfigured" }, 500, log.requestId);
    }

    const supabase = createClient(url, key);

    if (body?.current) {
      if (!anonKey) {
        log.error("config", "missing_anon_key", { has_anon: !!anonKey });
        return json({ error: "Server misconfigured" }, 500, log.requestId);
      }

      const auth = createClient(url, anonKey, {
        global: { headers: { Authorization: req.headers.get("Authorization") || "" } },
      });
      const { data: userData, error: userErr } = await auth.auth.getUser();
      const user = userData?.user;
      if (userErr || !user) {
        log.warn("auth", "current_user_missing", errMeta(userErr));
        return json({ exists: false, error: "Not signed in" }, 401, log.requestId);
      }

      const memberSelect = "id, user_id, email, name, company_name, phone, title, address_line1, address_line2, city, state, postal_code, country";
      const { data: directMember, error: directErr } = await supabase
        .from("trident_members")
        .select(memberSelect)
        .eq("user_id", user.id)
        .maybeSingle();

      if (directErr) {
        log.error("database", "current_member_lookup_failed", { ...errMeta(directErr), user_id: user.id });
        return json({ error: "Lookup failed" }, 500, log.requestId);
      }
      if (directMember) {
        log.info("response", "current_member_found", { user_id: user.id, email: user.email });
        return json({ exists: true, member: directMember, request_id: log.requestId }, 200, log.requestId);
      }

      if (user.email) {
        const { data: emailMember, error: emailErr } = await supabase
          .from("trident_members")
          .select(memberSelect)
          .ilike("email", user.email)
          .maybeSingle();
        if (emailErr) {
          log.error("database", "current_member_email_lookup_failed", { ...errMeta(emailErr), user_id: user.id, email: user.email });
          return json({ error: "Lookup failed" }, 500, log.requestId);
        }
        if (emailMember) {
          const { data: repairedMember, error: repairErr } = await supabase
            .from("trident_members")
            .update({ user_id: user.id })
            .eq("id", emailMember.id)
            .select(memberSelect)
            .single();
          if (repairErr) {
            log.error("database", "current_member_relink_failed", { ...errMeta(repairErr), user_id: user.id, email: user.email });
            return json({ error: "Profile relink failed" }, 500, log.requestId);
          }
          await supabase.from("user_roles").upsert({ user_id: user.id, role: "trident_member" }, { onConflict: "user_id,role" });
          log.info("database", "current_member_relinked_by_email", { user_id: user.id, email: user.email });
          return json({ exists: true, member: repairedMember, request_id: log.requestId }, 200, log.requestId);
        }
      }

      log.info("response", "current_member_not_found", { user_id: user.id, email: user.email });
      return json({ exists: false, member: null, request_id: log.requestId }, 200, log.requestId);
    }

    const email = (body?.email || "").trim();
    if (!email || !isValidEmail(email)) {
      log.warn("validation", "invalid_email", { email });
      return json({ error: "Valid email required" }, 400, log.requestId);
    }

    const { data, error } = await supabase
      .from("trident_members")
      .select("id")
      .ilike("email", email)
      .maybeSingle();

    if (error) {
      log.error("database", "trident_members_lookup_failed", { ...errMeta(error), email });
      return json({ error: "Lookup failed" }, 500, log.requestId);
    }

    log.info("response", "lookup_complete", { exists: !!data, email });
    return json({ exists: !!data, request_id: log.requestId }, 200, log.requestId);
  } catch (err) {
    log.error("unexpected", "unhandled_exception", errMeta(err));
    await reportError({ fn: "check-trident-member", error: err, request: req, requestId: log.requestId });
    return json({ error: "Internal error" }, 500, log.requestId);
  }
});

function json(body: unknown, status: number, requestId: string) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json", "x-request-id": requestId },
  });
}
