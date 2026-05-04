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

export async function submitLead(payload: LeadPayload) {
  return await supabase.functions.invoke("submit-lead", {
    body: {
      ...payload,
      page_path: typeof window !== "undefined" ? window.location.pathname : "",
      page_name: typeof document !== "undefined" ? document.title : "",
    },
  });
}
