import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

// Generates / persists a session id per browser tab
function getSessionId(): string {
  if (typeof window === "undefined") return "";
  let id = sessionStorage.getItem("enzo_session_id");
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem("enzo_session_id", id);
    sessionStorage.setItem("enzo_session_started_at", new Date().toISOString());
  }
  return id;
}

interface PageVisit {
  path: string;
  title: string;
  entered_at: string;
  duration_ms: number;
}

function getVisits(): PageVisit[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(sessionStorage.getItem("enzo_visits") || "[]");
  } catch {
    return [];
  }
}

function setVisits(v: PageVisit[]) {
  sessionStorage.setItem("enzo_visits", JSON.stringify(v));
}

export function useSiteTracking() {
  const location = useLocation();
  const enteredAtRef = useRef<number>(Date.now());
  const sentRef = useRef(false);

  // Track page changes & accumulate duration
  useEffect(() => {
    if (typeof window === "undefined") return;
    const sessionId = getSessionId();
    const path = location.pathname + location.search;
    const enteredAt = Date.now();
    enteredAtRef.current = enteredAt;

    const visits = getVisits();
    visits.push({
      path,
      title: document.title,
      entered_at: new Date(enteredAt).toISOString(),
      duration_ms: 0,
    });
    setVisits(visits);

    return () => {
      const vs = getVisits();
      const last = vs[vs.length - 1];
      if (last && last.path === path) {
        last.duration_ms = Date.now() - enteredAt;
        setVisits(vs);
      }
    };
  }, [location]);

  // Send summary on session end
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sendSummary = () => {
      if (sentRef.current) return;
      sentRef.current = true;

      // finalize current visit duration
      const vs = getVisits();
      if (vs.length) {
        vs[vs.length - 1].duration_ms = Date.now() - enteredAtRef.current;
      }

      const sessionId = getSessionId();
      const startedAt = sessionStorage.getItem("enzo_session_started_at") || new Date().toISOString();
      const totalMs = vs.reduce((a, v) => a + v.duration_ms, 0);
      const sorted = [...vs].sort((a, b) => b.duration_ms - a.duration_ms);
      const longest = sorted[0];

      const payload = {
        session_id: sessionId,
        started_at: startedAt,
        ended_at: new Date().toISOString(),
        total_duration_ms: totalMs,
        page_count: vs.length,
        longest_page: longest ? { path: longest.path, title: longest.title, duration_ms: longest.duration_ms } : null,
        visits: vs,
        referrer: document.referrer || "",
        landing_page: vs[0]?.path || "",
      };

      const url = `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/track-session`;
      // Use text/plain to avoid triggering a CORS preflight — sendBeacon cannot complete preflighted requests
      const blob = new Blob([JSON.stringify(payload)], { type: "text/plain;charset=UTF-8" });
      const ok = navigator.sendBeacon?.(url, blob);
      if (!ok) {
        supabase.functions.invoke("track-session", { body: payload }).catch(() => {});
      }
    };

    const onVis = () => {
      if (document.visibilityState === "hidden") sendSummary();
    };
    window.addEventListener("pagehide", sendSummary);
    window.addEventListener("beforeunload", sendSummary);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      window.removeEventListener("pagehide", sendSummary);
      window.removeEventListener("beforeunload", sendSummary);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);
}
