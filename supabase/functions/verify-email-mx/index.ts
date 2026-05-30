// Verify that the domain of an email address has MX (or fallback A) records.
// Uses Cloudflare's DNS-over-HTTPS resolver — no API key required.
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

async function dnsQuery(name: string, type: "MX" | "A"): Promise<boolean> {
  try {
    const res = await fetch(
      `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${type}`,
      { headers: { accept: "application/dns-json" } },
    );
    if (!res.ok) return false;
    const json = await res.json();
    return Array.isArray(json?.Answer) && json.Answer.length > 0;
  } catch {
    return false;
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { email } = await req.json();
    const value = typeof email === "string" ? email.trim().toLowerCase() : "";

    if (!value || !EMAIL_RE.test(value)) {
      return new Response(
        JSON.stringify({ valid: false, reason: "format" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const domain = value.split("@")[1];
    const hasMx = await dnsQuery(domain, "MX");
    const hasA = hasMx ? true : await dnsQuery(domain, "A");

    return new Response(
      JSON.stringify({ valid: hasMx || hasA, reason: hasMx || hasA ? "ok" : "no_mx", domain }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch {
    // On unexpected error, do not block the user — let server-side handle.
    return new Response(
      JSON.stringify({ valid: true, reason: "check_failed" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
