import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export interface TridentMember {
  id: string;
  user_id: string;
  email: string;
  name: string;
  company_name: string;
  phone: string;
  title: string | null;
  address_line1: string | null;
  address_line2: string | null;
  city: string | null;
  state: string | null;
  postal_code: string | null;
  country: string | null;
}

interface TridentAuthContextValue {
  loading: boolean;
  session: Session | null;
  user: User | null;
  member: TridentMember | null;
  refresh: () => Promise<void>;
  signOut: () => Promise<void>;
  trackEvent: (event_type: string, event_data?: Record<string, unknown>) => void;
}

const Ctx = createContext<TridentAuthContextValue | undefined>(undefined);

export function TridentAuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [member, setMember] = useState<TridentMember | null>(null);
  const [loading, setLoading] = useState(true);

  const loadMember = useCallback(async (userId: string) => {
    const { data } = await supabase
      .from("trident_members")
      .select("*")
      .eq("user_id", userId)
      .maybeSingle();
    setMember((data as TridentMember) || null);
  }, []);

  useEffect(() => {
    // Subscribe first to avoid races
    const { data: sub } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess);
      if (sess?.user) {
        setTimeout(() => { loadMember(sess.user.id); }, 0);
      } else {
        setMember(null);
      }
    });

    supabase.auth.getSession().then(({ data: { session: sess } }) => {
      setSession(sess);
      if (sess?.user) {
        loadMember(sess.user.id).finally(() => setLoading(false));
      } else {
        setLoading(false);
      }
    });

    return () => { sub.subscription.unsubscribe(); };
  }, [loadMember]);

  const refresh = useCallback(async () => {
    if (session?.user) await loadMember(session.user.id);
  }, [session, loadMember]);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setSession(null);
    setMember(null);
  }, []);

  const trackEvent = useCallback((event_type: string, event_data: Record<string, unknown> = {}) => {
    if (!session?.user) return;
    supabase
      .from("trident_member_events")
      .insert({
        user_id: session.user.id,
        event_type,
        event_data: event_data as never,
        page_path: typeof window !== "undefined" ? window.location.pathname : null,
      })
      .then(() => {});
  }, [session]);

  return (
    <Ctx.Provider value={{
      loading,
      session,
      user: session?.user || null,
      member,
      refresh,
      signOut,
      trackEvent,
    }}>
      {children}
    </Ctx.Provider>
  );
}

export function useTridentAuth() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useTridentAuth must be used within TridentAuthProvider");
  return v;
}
