import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Clock, Wrench, Truck, Phone, ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const pillars = [
  { icon: Shield, title: "PROTECT", desc: "Shield your fleet from corrosive road salts, brine and environmental damage with automatic undercarriage and body washing." },
  { icon: Clock, title: "PRESERVE", desc: "Maintain vehicle appearance and structural integrity to maximize resale value and reduce costly body repairs." },
  { icon: Wrench, title: "PROLONG", desc: "Extend the operational life of every vehicle in your fleet with consistent, thorough cleaning after every run." },
];

const washOptions = [
  { title: "High Touch / Touchless Designs", desc: "Choose the wash configuration that matches your fleet's needs and sensitivity.", image: "/uploads/2022/10/New-Project-2.jpg" },
  { title: "Reverse Osmosis System", desc: "Spot-free rinse and finish every time with advanced water purification.", image: "/uploads/2022/08/New-Project-1.png" },
  { title: "Wireless Remotes", desc: "Operate your wash system from any location with convenient wireless controls.", image: "/uploads/2022/08/New-Project.png" },
  { title: "Undercarriage Wash Unit", desc: "Integrated undercarriage cleaning to fight salt and corrosion damage.", image: "/uploads/neutralizer-hero-wash.jpg" },
];

const processSteps = [
  { title: "CONSULT", desc: "We work with you to understand your needs." },
  { title: "EVALUATE", desc: "We evaluate your current system and make suggestions. We also offer demonstrations." },
  { title: "ESTIMATE", desc: "We provide you an estimate of the products and services you choose." },
  { title: "DELIVERY", desc: "We deliver, install, and ensure proper working order." },
];

export default function TouchlessDriveThru() {
  return (
    <>
      <PageHero
        title="Automatic Drive-Through Wash System"
        subtitle="Completely automatic and deliver an unparalleled clean for your fleet. Protect, preserve, and prolong."
      />

      {/* Protect Preserve Prolong */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-3xl font-bold font-heading mb-4">Protect, Preserve & Prolong the Life of Your Fleet</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="text-center p-6 rounded-xl bg-card border border-border">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <p.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-heading">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Main Video */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-6">Witness Our Automatic Wash System in Action</h2>
            <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/ejZBvIK-Bm8"
                title="Enzo's Automatic Drive-Through Wash System Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Wash System Options */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-2">Fully Customized to Meet Your Fleet's Cleaning Needs</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">Every drive-through system is built to your specifications with the features you need.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {washOptions.map((opt, i) => (
              <AnimatedSection key={opt.title} delay={i * 0.08}>
                <div className="bg-card rounded-xl border border-border overflow-hidden h-full hover:shadow-lg hover:scale-[1.02] transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={opt.image} alt={opt.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-bold text-sm">{opt.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{opt.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Neutralizer Cross-Link */}
      <section className="section-padding bg-muted">
        <div className="container">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/uploads/neutralizer-hero-wash.jpg"
                  alt="The Neutralizer undercarriage wash system spraying salt-neutralizing solution under a fleet truck"
                  className="w-full h-full object-cover aspect-video"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3">🛡️ Enzo's Original</span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Pair It With The Neutralizer</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Every automatic drive-through system works even harder when paired with The Neutralizer — Enzo's original undercarriage wash unit. It doesn't just rinse — it chemically neutralizes salt and brine on contact, stopping corrosion before it starts.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Complete undercarriage wash in under 5 minutes", "4-chemical switching on the fly", "Pays for itself with one avoided repair"].map(b => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/cleaning-equipment/under-carriage-sprayers/the-neutralizer/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-all"
                >
                  Explore The Neutralizer <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Fire Station Video */}
      <section className="py-12 bg-background">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-2">Trusted by Fire Departments</h2>
            <p className="text-center text-muted-foreground mb-6 max-w-xl mx-auto">See how fire stations keep their apparatus clean, protected, and ready for service.</p>
            <div className="max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/fKTmdAAZicY"
                title="Fire Station Wash Bay Installation by Enzo's Cleaning Solutions"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-10">Our Process</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-3">
                    {i + 1}
                  </div>
                  <h3 className="font-heading font-bold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section-padding bg-background">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-8">Explore Related Solutions</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <AnimatedSection>
              <Link to="/cleaning-equipment/wash-bay-design/" className="group block p-6 rounded-xl bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all">
                <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">Wash Bay Design</h3>
                <p className="text-sm text-muted-foreground">Let Enzo's design a complete wash bay — from layout to equipment selection — tailored to your operation.</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3">Learn More <ArrowRight className="h-4 w-4" /></span>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Link to="/cleaning-equipment/under-carriage-sprayers/" className="group block p-6 rounded-xl bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all">
                <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">Push Under Carriage Sprayers</h3>
                <p className="text-sm text-muted-foreground">Explore Enzo's full line of push-under carriage sprayer systems for every fleet size.</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3">Learn More <ArrowRight className="h-4 w-4" /></span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection title="Schedule Your Consultation" description="Let our team design a custom automatic wash system for your fleet. Contact Enzo's today." />
    </>
  );
}
