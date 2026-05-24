import { supabase } from "@/integrations/supabase/client";

export interface LeadPayload {
  form_name: string;
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  request_type?: string;
  message?: string;
  product_context?: string;
  category_context?: string;
  referral_partner?: string;
  extra?: Record<string, unknown>;
}

export interface LeadResult {
  ok: boolean;
  error?: string;
  request_id?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Submit a lead. Returns `{ ok, error?, request_id? }`.
 * Validates email/phone client-side and normalises the edge-function response.
 */
export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  // Light client-side validation — catches obvious garbage before the round-trip.
  if (!payload?.form_name) return { ok: false, error: "Missing form name" };
  if (payload.email && !EMAIL_RE.test(payload.email.trim())) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (payload.email && payload.email.length > 254) return { ok: false, error: "Email is too long." };
  if (payload.phone && payload.phone.replace(/\D/g, "").length < 7) {
    return { ok: false, error: "Please enter a valid phone number." };
  }
  if (payload.message && payload.message.length > 5000) {
    return { ok: false, error: "Message is too long (5000 char max)." };
  }

  try {
    const { data, error } = await supabase.functions.invoke("submit-lead", {
      body: {
        ...payload,
        page_path: typeof window !== "undefined" ? window.location.pathname : "",
        page_url: typeof window !== "undefined" ? window.location.href : "",
        page_name: typeof document !== "undefined" ? document.title : "",
        referrer: typeof document !== "undefined" ? document.referrer : "",
      },
    });

    if (error) {
      console.error("[submitLead] invoke error", error);
      return { ok: false, error: error.message || "Network error. Please try again." };
    }
    if (!data || data.ok === false) {
      console.error("[submitLead] server returned not-ok", data);
      return { ok: false, error: data?.error || "Submission failed. Please try again.", request_id: data?.request_id };
    }
    return { ok: true, request_id: data.request_id };
  } catch (e) {
    console.error("[submitLead] unexpected exception", e);
    return { ok: false, error: "Unexpected error. Please try again or call us." };
  }
}
