import { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { getTridentVisitorId } from "@/components/trident/TridentGate";

export function useTridentPageTracking() {
  const location = useLocation();
  const pageViewIdRef = useRef<string | null>(null);
  const enteredAtRef = useRef<number>(Date.now());

  useEffect(() => {
    const visitorId = getTridentVisitorId();
    if (!visitorId) return;

    enteredAtRef.current = Date.now();

    // Create page view record
    supabase
      .from("trident_page_views")
      .insert({
        visitor_id: visitorId,
        page_path: location.pathname,
        entered_at: new Date().toISOString(),
      })
      .select("id")
      .single()
      .then(({ data }) => {
        if (data) pageViewIdRef.current = data.id;
      });

    // Update duration on leave
    const updateDuration = () => {
      if (pageViewIdRef.current) {
        const duration = Math.round((Date.now() - enteredAtRef.current) / 1000);
        supabase
          .from("trident_page_views")
          .update({ duration_seconds: duration })
          .eq("id", pageViewIdRef.current)
          .then(() => {});
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

    supabase.from("trident_product_views").insert({
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

    supabase.from("trident_events").insert([{
      visitor_id: visitorId,
      event_type: eventType,
      event_data: (eventData || {}) as any,
    }]);
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
              supabase.from("trident_events").insert({
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

    // Observe all trackable sections
    document.querySelectorAll("[data-track-section]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
