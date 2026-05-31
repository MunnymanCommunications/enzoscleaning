import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Mail, LogOut, AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useTridentAuth } from "@/contexts/TridentAuthContext";
import { validateEmail } from "@/lib/validateEmail";

interface Props { children: React.ReactNode }

export default function TridentAuthGate({ children }: Props) {
  const { loading, session, member, memberLoading, trackEvent, signOut, refresh } = useTridentAuth();
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [signinEmail, setSigninEmail] = useState("");
  const [signinEmailError, setSigninEmailError] = useState("");
  const [signinEmailChecking, setSigninEmailChecking] = useState(false);
  const [signinMsg, setSigninMsg] = useState<{ type: "ok" | "err" | "info"; text: string } | null>(null);
  const [signinLoading, setSigninLoading] = useState(false);

  const [signup, setSignup] = useState({
    email: "", name: "", company_name: "", phone: "",
    title: "", address_line1: "", city: "", state: "", postal_code: "", notes: "",
  });
  const [signupEmailError, setSignupEmailError] = useState("");
  const [signupEmailChecking, setSignupEmailChecking] = useState(false);
  const [signupMsg, setSignupMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const [signupLoading, setSignupLoading] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [verifyingMagicLink, setVerifyingMagicLink] = useState(false);

  useEffect(() => {
    if (signupLoading || signupSuccess) window.scrollTo({ top: 0, behavior: "auto" });
  }, [signupLoading, signupSuccess]);

  async function verifyMx(email: string): Promise<string> {
    try {
      const { data } = await supabase.functions.invoke("verify-email-mx", { body: { email } });
      if (data && data.valid === false) {
        return data.reason === "no_mx"
          ? "This email domain can't receive mail — double-check spelling."
          : "Please enter a valid email address.";
      }
    } catch {
      // network failure — don't block
    }
    return "";
  }

  // Handle magic-link token_hash arriving via our own redirect URL
  // (we bypass Supabase's /verify endpoint to keep the production domain).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token_hash = params.get("token_hash");
    const type = params.get("type");
    if (!token_hash || !type) return;
    (async () => {
      setVerifyingMagicLink(true);
      try {
        const { error } = await supabase.auth.verifyOtp({
          token_hash,
          type: type as "magiclink" | "email" | "recovery" | "invite" | "signup",
        });
        if (!error) await refresh();
      } finally {
        // Strip auth params from URL regardless of outcome
        const url = new URL(window.location.href);
        url.searchParams.delete("token_hash");
        url.searchParams.delete("type");
        window.history.replaceState({}, "", url.toString());
        setVerifyingMagicLink(false);
      }
    })();
  }, [refresh]);

  useEffect(() => {
    if (session && member) trackEvent("trident_session_active");
  }, [session, member, trackEvent]);

  if (loading || verifyingMagicLink || (session && memberLoading)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (session && member) return <>{children}</>;

  if (signupLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="max-w-md text-center space-y-4">
          <Loader2 className="mx-auto h-10 w-10 animate-spin text-primary" />
          <h1 className="text-2xl font-semibold text-foreground">Your account is being created in our system</h1>
          <p className="text-muted-foreground">Please keep this page open while we prepare your Trident profile and sign-in link.</p>
        </div>
      </div>
    );
  }

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
    setSigninEmailChecking(true);
    const mxErr = await verifyMx(email);
    setSigninEmailChecking(false);
    if (mxErr) {
      setSigninEmailError(mxErr);
      setSigninMsg({ type: "err", text: mxErr });
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
    const c = validateEmail(signup.email);
    if (!c.valid) {
      setSignupEmailError(c.message);
      setSignupMsg({ type: "err", text: c.message });
      return;
    }
    setSignupEmailChecking(true);
    const mxErr = await verifyMx(signup.email);
    setSignupEmailChecking(false);
    if (mxErr) {
      setSignupEmailError(mxErr);
      setSignupMsg({ type: "err", text: mxErr });
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
                  <div className="relative">
                    <Input
                      id="si-email" type="email" required
                      placeholder="you@company.com"
                      value={signinEmail}
                      onChange={(e) => { setSigninEmail(e.target.value); if (signinEmailError) setSigninEmailError(""); }}
                      onBlur={async (e) => {
                        const v = e.target.value.trim();
                        if (!v) { setSigninEmailError(""); return; }
                        const c = validateEmail(v);
                        if (!c.valid) { setSigninEmailError(c.message); return; }
                        setSigninEmailChecking(true);
                        const mxErr = await verifyMx(v);
                        setSigninEmailChecking(false);
                        setSigninEmailError(mxErr);
                      }}
                      aria-invalid={!!signinEmailError}
                      className={`bg-white/10 text-white placeholder:text-slate-500 pr-10 ${signinEmailError ? "border-destructive" : "border-white/20"}`}
                    />
                    {signinEmailChecking ? (
                      <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 animate-spin" />
                    ) : signinEmailError ? (
                      <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-destructive" aria-label="Invalid email" />
                    ) : null}
                  </div>
                  {signinEmailError && <p className="text-xs text-red-300">{signinEmailError}</p>}
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
                <Button type="submit" disabled={signinLoading || signinEmailChecking || !!signinEmailError} className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  {signinLoading ? "Sending link..." : signinEmailChecking ? "Checking email..." : "Send Sign-In Link"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <FieldDark label="Full Name *" id="su-name" value={signup.name} onChange={(v) => setSignup({ ...signup, name: v })} required />
                  <FieldDark label="Company *" id="su-company" value={signup.company_name} onChange={(v) => setSignup({ ...signup, company_name: v })} required />
                  <FieldDark
                    label="Email *" id="su-email" type="email" required
                    value={signup.email}
                    onChange={(v) => { setSignup({ ...signup, email: v }); if (signupEmailError) setSignupEmailError(""); }}
                    onBlur={async (v) => {
                      const t = v.trim();
                      if (!t) { setSignupEmailError(""); return; }
                      const c = validateEmail(t);
                      if (!c.valid) { setSignupEmailError(c.message); return; }
                      setSignupEmailChecking(true);
                      const mxErr = await verifyMx(t);
                      setSignupEmailChecking(false);
                      setSignupEmailError(mxErr);
                    }}
                    error={signupEmailError}
                    checking={signupEmailChecking}
                  />
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
                <Button type="submit" disabled={signupLoading || signupEmailChecking || !!signupEmailError} className="w-full">
                  {signupLoading ? "Creating account..." : signupEmailChecking ? "Checking email..." : "Create Account & Send Link"}
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

function FieldDark({ label, id, value, onChange, type = "text", required = false, onBlur, error, checking }: {
  label: string; id: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean;
  onBlur?: (v: string) => void | Promise<void>; error?: string; checking?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-white">{label}</Label>
      <div className="relative">
        <Input
          id={id} type={type} required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur ? (e) => { void onBlur(e.target.value); } : undefined}
          aria-invalid={!!error}
          className={`bg-white/10 text-white placeholder:text-slate-500 ${onBlur ? "pr-10" : ""} ${error ? "border-destructive" : "border-white/20"}`}
        />
        {checking ? (
          <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 animate-spin" />
        ) : error ? (
          <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-destructive" aria-label="Invalid" />
        ) : null}
      </div>
      {error && <p className="text-xs text-red-300">{error}</p>}
    </div>
  );
}
