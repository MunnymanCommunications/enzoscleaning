import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Shield, GraduationCap, Truck, Wrench, Droplets, Layers, Sparkles, CheckCircle2, ArrowRight, Award, Package } from "lucide-react";

const offerings = [
  {
    icon: Shield,
    title: "Official Trident Product Supplier",
    description: "We stock the full Trident Sealants, Cleaners & Tools (TS&T) line — sealers, cleaners, strippers, polymeric sands and pro application tools. Get contractor pricing on every product.",
  },
  {
    icon: GraduationCap,
    title: "Authorized T3 University Trainer",
    description: "Enzo's is an authorized T3 University training partner. Earn your professional contractor certification through us — required for Trident product warranty coverage.",
  },
  {
    icon: Truck,
    title: "Custom Work Trailer Build-Outs",
    description: "We can fully equip your hardscaping work trailer — pressure washers, sprayers, surface cleaners, sealer applicators, hoses, accessories and storage. One source, ready to roll.",
  },
  {
    icon: Wrench,
    title: "Pressure Washers & Equipment",
    description: "Hot water and cold water Hotsy & Mi-T-M pressure washers built for hardscape prep work. Service, repair and scheduled maintenance included.",
  },
];

const productLines = [
  { icon: Droplets, title: "Sealers", desc: "Hurricane CAT 5/4/3, Tsunami, Typhoon, Cyclone, Jetty, Barrier — the full Trident sealer lineup." },
  { icon: Sparkles, title: "Cleaners & Strippers", desc: "Wipe Out, White Water, Point Break, Safe Harbor, Rip Tide and Tidal Wave X." },
  { icon: Layers, title: "Polymeric Sand", desc: "PolySweep, PS-1500 RJS Rapid Joint Sand and standard jointing sand in multiple colors." },
  { icon: Wrench, title: "Application Tools", desc: "Power sprayers, foam squeegees and slit foam rollers (solvent and water based)." },
];

const trainingBenefits = [
  "Certified T3 University curriculum taught by Enzo's-authorized trainers",
  "Required for Trident product warranty eligibility",
  "Hands-on installation, prep, sealer application and troubleshooting",
  "Scheduled regional sessions — book through your Enzo's rep",
  "Continuing education for crews & new hires",
];

export default function Hardscaping() {
  return (
    <>
      <PageHero
        title="Trident Hardscaping — Products, Training & Trailer Build-Outs"
        subtitle="Official Trident Product Supplier and authorized T3 University Trainer. We supply the full product line, train your crews, and outfit your work trailers."
      />

      {/* Trust badge bar */}
      <section className="bg-card border-b border-border">
        <div className="container py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-foreground/80">
            <span className="inline-flex items-center gap-2"><Award className="h-5 w-5 text-primary" /> Official Trident Supplier</span>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <span className="inline-flex items-center gap-2"><GraduationCap className="h-5 w-5 text-primary" /> Authorized T3 University Trainer</span>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <span className="inline-flex items-center gap-2"><Truck className="h-5 w-5 text-primary" /> Custom Trailer Build-Outs</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Your One-Stop Trident Partner in Ohio</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Enzo's Cleaning Solutions is an official Trident product supplier and an authorized T3 University training partner. From your first sealer order to fully outfitting your work trailer with pressure washers and tools — and certifying your crew through T3 University — we're the single source built to keep your hardscaping business running.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/hardscaping/trident/"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-base font-bold text-primary-foreground hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                View Product Catalog & Pricing <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact-us/"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-3 text-base font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Talk to Our Team
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Catalog access requires a free contractor account — sign up or sign in via magic link.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Offerings grid */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">What We Offer Hardscape Contractors</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need from one local partner — products, training and equipment.</p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {offerings.map((o, i) => (
              <AnimatedSection key={o.title} delay={i * 0.05} variant="fadeUp">
                <div className="rounded-2xl border border-border bg-card p-6 h-full hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                    <o.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">{o.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{o.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Product lines */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">The Complete Trident Product Line</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We carry every category in the Trident TS&T system. Detailed product specs and contractor pricing are available inside our catalog.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productLines.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.05} variant="fadeUp">
                <div className="rounded-2xl border border-border bg-card p-6 h-full text-center hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                    <p.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/hardscaping/trident/"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-base font-bold text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              Browse Full Product Catalog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* T3 University */}
      <section className="section-padding bg-gradient-to-br from-secondary via-primary to-secondary text-primary-foreground">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-bold mb-4">
                <GraduationCap className="h-4 w-4" /> T3 UNIVERSITY
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Get Certified Through Enzo's</h2>
              <p className="text-primary-foreground/85 leading-relaxed mb-6">
                T3 University is the official Trident contractor training program. As an authorized trainer, Enzo's offers regional certification sessions covering surface prep, cleaner & sealer application, polymeric sand installation and warranty requirements.
              </p>
              <ul className="space-y-2 mb-8">
                {trainingBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-foreground mt-0.5 shrink-0" />
                    <span className="text-primary-foreground/90 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/hardscaping/trident/university/"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-bold text-primary hover:bg-primary-foreground/90 transition-all"
                >
                  T3 University Info <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact-us/"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground px-6 py-3 text-sm font-bold text-primary-foreground hover:bg-primary-foreground/10 transition-all"
                >
                  Schedule Training
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-8">
                <Package className="h-10 w-10 mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-3">Full Trailer Build-Outs</h3>
                <p className="text-primary-foreground/85 leading-relaxed mb-4">
                  Bring us your trailer — or let us spec one for you. We'll outfit it with everything a hardscape crew needs:
                </p>
                <ul className="space-y-2 text-sm text-primary-foreground/90">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" /> Hot or cold water pressure washers</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" /> Surface cleaners, wands, hoses & nozzles</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" /> Trident sealer & cleaner inventory</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" /> Power sprayers, squeegees, foam rollers</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" /> Storage, racking & water tanks</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" /> Ongoing service, repair & maintenance</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Account / access info */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="rounded-2xl border-2 border-primary/30 bg-card p-8 md:p-12 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Access the Full Catalog & Place Orders</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                Detailed product specs, contractor pricing and online ordering live inside our gated Trident catalog. Sign in with a magic link sent to your email — or create a free contractor account in under a minute.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/hardscaping/trident/"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-base font-bold text-primary-foreground hover:shadow-lg hover:scale-105 transition-all"
                >
                  Sign In / Create Account <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact-us/"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-3 text-base font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Request a Callback
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Ready to upgrade your hardscape operation?"
        description="Whether you need products, training, equipment or a full trailer build-out — Enzo's is your local Trident partner. Let's talk."
      />
    </>
  );
}
