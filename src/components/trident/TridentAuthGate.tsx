import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Mail, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useTridentAuth } from "@/contexts/TridentAuthContext";
import { validateEmail } from "@/lib/validateEmail";

interface Props { children: React.ReactNode }

export default function TridentAuthGate({ children }: Props) {
  const { loading, session, member, trackEvent, signOut, refresh } = useTridentAuth();
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [signinEmail, setSigninEmail] = useState("");
  const [signinEmailError, setSigninEmailError] = useState("");
  const [signinMsg, setSigninMsg] = useState<{ type: "ok" | "err" | "info"; text: string } | null>(null);
  const [signinLoading, setSigninLoading] = useState(false);

  const [signup, setSignup] = useState({
    email: "", name: "", company_name: "", phone: "",
    title: "", address_line1: "", city: "", state: "", postal_code: "", notes: "",
  });
  const [signupEmailError, setSignupEmailError] = useState("");
  const [signupMsg, setSignupMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const [signupLoading, setSignupLoading] = useState(false);

  useEffect(() => {
    if (session && member) trackEvent("trident_session_active");
  }, [session, member, trackEvent]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (session && member) return <>{children}</>;

  if (session && !member) {
    // Authenticated but profile missing — orphan account; force sign-out.
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="max-w-md text-center space-y-4">
          <p className="text-muted-foreground">Your account is missing a Trident profile. Please contact your Enzo's representative or sign out and sign up.</p>
          <Button onClick={signOut}><LogOut className="h-4 w-4 mr-2" /> Sign out</Button>
        </div>
      </div>
    );
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setSigninMsg(null);
    const email = signinEmail.trim().toLowerCase();
    const c = validateEmail(email);
    if (!c.valid) {
      setSigninEmailError(c.message);
      setSigninMsg({ type: "err", text: c.message });
      return;
    }
    setSigninLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("trident-magic-link", {
        body: { email, redirect_to: window.location.origin + "/hardscaping/trident/" },
      });

      if (error || !data?.ok) {
        const status = (error as { context?: { status?: number } })?.context?.status;
        if (status === 404 || data?.exists === false) {
          setSigninMsg({ type: "info", text: "Email not found. Would you like to sign up?" });
          setSignup((s) => ({ ...s, email }));
        } else {
          setSigninMsg({ type: "err", text: data?.error || "Could not send link. Please try again." });
        }
        return;
      }
      setSigninMsg({ type: "ok", text: "Check your email for a sign-in link." });
    } finally {
      setSigninLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupMsg(null);
    if (!signup.email || !signup.name || !signup.company_name || !signup.phone) {
      setSignupMsg({ type: "err", text: "Name, company, email and phone are required." });
      return;
    }
    setSignupLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("trident-signup", {
        body: { ...signup, redirect_to: window.location.origin + "/hardscaping/trident/" },
      });
      if (error || !data?.ok) {
        setSignupMsg({ type: "err", text: data?.error || error?.message || "Signup failed. Please try again." });
        return;
      }
      setSignupMsg({ type: "ok", text: "Account created! Check your email for a sign-in link." });
      await refresh();
    } finally {
      setSignupLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-12">
      <div className="w-full max-w-xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Trident Members Portal</h1>
          <p className="text-slate-400">Sign in with your registered email to access the professional catalog and place order requests.</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <Tabs value={tab} onValueChange={(v) => setTab(v as typeof tab)}>
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-white/10">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="si-email" className="text-white">Email Address</Label>
                  <Input
                    id="si-email" type="email" required
                    placeholder="you@company.com"
                    value={signinEmail}
                    onChange={(e) => setSigninEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-500"
                  />
                </div>
                {signinMsg && (
                  <div className={`text-sm rounded-lg p-3 ${
                    signinMsg.type === "ok" ? "bg-emerald-500/15 text-emerald-200" :
                    signinMsg.type === "info" ? "bg-amber-500/15 text-amber-200" :
                    "bg-red-500/15 text-red-200"
                  }`}>
                    {signinMsg.text}
                    {signinMsg.type === "info" && (
                      <Button type="button" variant="link" className="text-amber-100 px-2" onClick={() => setTab("signup")}>
                        Sign up →
                      </Button>
                    )}
                  </div>
                )}
                <Button type="submit" disabled={signinLoading} className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  {signinLoading ? "Sending link..." : "Send Sign-In Link"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <FieldDark label="Full Name *" id="su-name" value={signup.name} onChange={(v) => setSignup({ ...signup, name: v })} required />
                  <FieldDark label="Company *" id="su-company" value={signup.company_name} onChange={(v) => setSignup({ ...signup, company_name: v })} required />
                  <FieldDark label="Email *" id="su-email" type="email" value={signup.email} onChange={(v) => setSignup({ ...signup, email: v })} required />
                  <FieldDark label="Phone *" id="su-phone" type="tel" value={signup.phone} onChange={(v) => setSignup({ ...signup, phone: v })} required />
                  <FieldDark label="Title / Role" id="su-title" value={signup.title} onChange={(v) => setSignup({ ...signup, title: v })} />
                  <FieldDark label="Street Address" id="su-addr" value={signup.address_line1} onChange={(v) => setSignup({ ...signup, address_line1: v })} />
                  <FieldDark label="City" id="su-city" value={signup.city} onChange={(v) => setSignup({ ...signup, city: v })} />
                  <FieldDark label="State" id="su-state" value={signup.state} onChange={(v) => setSignup({ ...signup, state: v })} />
                  <FieldDark label="Postal Code" id="su-zip" value={signup.postal_code} onChange={(v) => setSignup({ ...signup, postal_code: v })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="su-notes" className="text-white">Notes (optional)</Label>
                  <Textarea
                    id="su-notes" value={signup.notes}
                    onChange={(e) => setSignup({ ...signup, notes: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-500"
                    rows={2}
                  />
                </div>
                {signupMsg && (
                  <div className={`text-sm rounded-lg p-3 ${signupMsg.type === "ok" ? "bg-emerald-500/15 text-emerald-200" : "bg-red-500/15 text-red-200"}`}>
                    {signupMsg.text}
                  </div>
                )}
                <Button type="submit" disabled={signupLoading} className="w-full">
                  {signupLoading ? "Creating account..." : "Create Account & Send Link"}
                </Button>
                <p className="text-xs text-slate-500 text-center">
                  We'll create your member profile and email you a secure sign-in link.
                </p>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

function FieldDark({ label, id, value, onChange, type = "text", required = false }: {
  label: string; id: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-white">{label}</Label>
      <Input
        id={id} type={type} required={required}
        value={value} onChange={(e) => onChange(e.target.value)}
        className="bg-white/10 border-white/20 text-white placeholder:text-slate-500"
      />
    </div>
  );
}
