// Returns whether an email matches an existing Trident member.
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
    let body: { email?: string };
    try { body = await req.json(); } catch (e) {
      log.warn("validation", "invalid_json_body", errMeta(e));
      return json({ error: "Invalid JSON" }, 400, log.requestId);
    }
    const email = (body?.email || "").trim();
    if (!email || !isValidEmail(email)) {
      log.warn("validation", "invalid_email", { email });
      return json({ error: "Valid email required" }, 400, log.requestId);
    }

    const url = Deno.env.get("SUPABASE_URL");
    const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!url || !key) {
      log.error("config", "missing_supabase_env", { has_url: !!url, has_key: !!key });
      return json({ error: "Server misconfigured" }, 500, log.requestId);
    }

    const supabase = createClient(url, key);
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
