import { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { getTridentVisitorId } from "@/components/trident/TridentGate";

async function track(action: string, payload: Record<string, unknown>) {
  try {
    const { data } = await supabase.functions.invoke("trident-track", {
      body: { action, ...payload },
    });
    return data as Record<string, unknown> | null;
  } catch {
    return null;
  }
}

export function useTridentPageTracking() {
  const location = useLocation();
  const pageViewIdRef = useRef<string | null>(null);
  const enteredAtRef = useRef<number>(Date.now());

  useEffect(() => {
    const visitorId = getTridentVisitorId();
    if (!visitorId) return;

    enteredAtRef.current = Date.now();
    pageViewIdRef.current = null;

    track("page_view_start", { visitor_id: visitorId, page_path: location.pathname }).then((res) => {
      if (res && typeof res.page_view_id === "string") pageViewIdRef.current = res.page_view_id;
    });

    const updateDuration = () => {
      if (pageViewIdRef.current) {
        const duration = Math.round((Date.now() - enteredAtRef.current) / 1000);
        track("page_view_duration", { page_view_id: pageViewIdRef.current, duration_seconds: duration });
      }
    };

    window.addEventListener("beforeunload", updateDuration);
    return () => {
      updateDuration();
      window.removeEventListener("beforeunload", updateDuration);
    };
  }, [location.pathname]);
}

export function useTridentProductTracking() {
  const trackProduct = useCallback((productName: string, productSku?: string, category?: string) => {
    const visitorId = getTridentVisitorId();
    if (!visitorId) return;
    track("product_view", {
      visitor_id: visitorId,
      product_name: productName,
      product_sku: productSku || null,
      category: category || null,
    });
  }, []);
  return { trackProduct };
}

export function useTridentEventTracking() {
  const trackEvent = useCallback((eventType: string, eventData?: Record<string, unknown>) => {
    const visitorId = getTridentVisitorId();
    if (!visitorId) return;
    track("event", { visitor_id: visitorId, event_type: eventType, event_data: eventData || {} });
  }, []);
  return { trackEvent };
}

export function useTridentSectionTracking() {
  const trackedSections = useRef<Set<string>>(new Set());

  useEffect(() => {
    const visitorId = getTridentVisitorId();
    if (!visitorId) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-track-section");
            if (sectionId && !trackedSections.current.has(sectionId)) {
              trackedSections.current.add(sectionId);
              track("event", {
                visitor_id: visitorId,
                event_type: "section_viewed",
                event_data: { section: sectionId, page: window.location.pathname },
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("[data-track-section]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
