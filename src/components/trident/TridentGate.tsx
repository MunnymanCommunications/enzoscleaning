import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Lock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const GATE_PASSWORD = "ENZOS";
const STORAGE_KEY = "trident_visitor_id";

interface TridentGateProps {
  children: React.ReactNode;
}

export default function TridentGate({ children }: TridentGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    company_name: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    const visitorId = localStorage.getItem(STORAGE_KEY);
    if (visitorId) {
      // Returning visitor — update last_visit_at
      supabase
        .from("trident_visitors")
        .update({ last_visit_at: new Date().toISOString() })
        .eq("id", visitorId)
        .then(() => {
          setUnlocked(true);
          setLoading(false);
        });

      // Log return visit event
      supabase.from("trident_events").insert([{
        visitor_id: visitorId,
        event_type: "return_visit",
        event_data: {
          user_agent: navigator.userAgent,
          referrer: document.referrer,
          screen_width: window.screen.width,
          screen_height: window.screen.height,
        } as any,
      }]);
    } else {
      setLoading(false);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.password.toUpperCase() !== GATE_PASSWORD) {
      setError("Incorrect password. Please try again.");
      return;
    }

    setSubmitting(true);

    try {
      // Get IP address
      let ip_address = null;
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipRes.json();
        ip_address = ipData.ip;
      } catch {
        // IP fetch failed, continue without it
      }

      // Check if visitor already exists by email
      const { data: existing } = await supabase
        .from("trident_visitors")
        .select("id")
        .eq("email", form.email)
        .maybeSingle();

      let visitorId: string;

      if (existing) {
        visitorId = existing.id;
        await supabase
          .from("trident_visitors")
          .update({
            last_visit_at: new Date().toISOString(),
            name: form.name,
            company_name: form.company_name,
            phone: form.phone,
            ip_address: ip_address || undefined,
          })
          .eq("id", visitorId);
      } else {
        const { data, error: insertError } = await supabase
          .from("trident_visitors")
          .insert([{
            name: form.name,
            company_name: form.company_name,
            email: form.email,
            phone: form.phone,
            ip_address,
          }])
          .select("id")
          .single();

        if (insertError || !data) {
          setError("Something went wrong. Please try again.");
          setSubmitting(false);
          return;
        }
        visitorId = data.id;
      }

      // Log gate_unlock event
      await supabase.from("trident_events").insert([{
        visitor_id: visitorId,
        event_type: "gate_unlock",
        event_data: {
          user_agent: navigator.userAgent,
          referrer: document.referrer,
          screen_width: window.screen.width,
          screen_height: window.screen.height,
          url: window.location.href,
        } as any,
      }]);

      localStorage.setItem(STORAGE_KEY, visitorId);
      setUnlocked(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Trident Products</h1>
          <p className="text-slate-400">
            Enter your information and access code to view our professional product catalog.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4 border border-white/10">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Full Name *</Label>
            <Input
              id="name"
              required
              placeholder="John Smith"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-white">Company Name *</Label>
            <Input
              id="company"
              required
              placeholder="ABC Landscaping"
              value={form.company_name}
              onChange={(e) => setForm({ ...form, company_name: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email Address *</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="john@company.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              required
              placeholder="(555) 123-4567"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white flex items-center gap-2">
              <Lock className="h-4 w-4" /> Access Code *
            </Label>
            <Input
              id="password"
              type="password"
              required
              placeholder="Enter access code"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-500"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
          >
            {submitting ? "Verifying..." : "Access Trident Catalog"}
          </Button>

          <p className="text-xs text-slate-500 text-center mt-4">
            Contact your Enzo's representative for the access code.
          </p>
        </form>
      </div>
    </div>
  );
}

export function getTridentVisitorId(): string | null {
  return localStorage.getItem(STORAGE_KEY);
}
