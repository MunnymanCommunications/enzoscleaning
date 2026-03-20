import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, Phone, Sparkles, Snowflake, TreePine, Droplets } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CTASection from "@/components/shared/CTASection";
import citymasterProduct from "@/assets/citymaster-product.png";
import citymasterLawnTurf from "@/assets/citymaster-lawn-turf.png";
import citymasterWinter from "@/assets/citymaster-winter.png";
import citymasterMultifunction from "@/assets/citymaster-multifunction.png";

const surfaceCleaningSpecs = [
  { label: "Working Width", value: '48.9"' },
  { label: "Disc Brushes", value: "3 × 18″" },
  { label: "Down Pressure", value: "0–330 lbs (variable)" },
  { label: "Pressure Washer", value: "3.43 GPM @ 1,740 PSI" },
];

const lawnTurfAttachments = [
  { name: "Mowing Deck", parts: "#701305 / #701301" },
  { name: "Weed Removal", parts: "#701306 / #701302" },
  { name: "Wander Hose", parts: "#99144510" },
];

const winterAttachments = [
  { name: "Snow Blower", parts: "#99600200" },
  { name: "V Snow Plough", parts: "#99581500 / #99602140" },
  { name: "Sweeping Broom", parts: "#99602160" },
  { name: "Winter Spreader", parts: "#701307 / #701303" },
];

export default function CitymasterSweeper() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,hsl(var(--accent)/0.12),transparent_60%)]" />
        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-semibold mb-6 border border-accent/30">
                Hako Citymaster
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary-foreground leading-[0.95] mb-6">
                Citymaster<br />1650 / 650
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-xl">
                A versatile implement carrier and professional sweeper all in one — built for municipalities, campuses, and commercial properties year-round.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact-us/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all active:scale-[0.97]"
                >
                  Request a Quote <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="/downloads/citymaster-brochure.pdf"
                  download="Citymaster-Brochure.pdf"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-bold rounded-full text-lg border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all active:scale-[0.97]"
                >
                  <Download className="h-5 w-5" /> Brochure
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hidden lg:block"
            >
              <img
                src={citymasterMultifunction}
                alt="Hako Citymaster 1650 and 650 multifunction sweepers"
                className="w-full rounded-2xl shadow-2xl border-4 border-primary-foreground/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Model Overview */}
      <section className="section-padding bg-background">
        <div className="container max-w-5xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Two Models, One Mission</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Whether you need full-size coverage or compact maneuverability, there's a Citymaster for the job.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Citymaster 1650", desc: "Full-size ride-on sweeper for large areas — parking lots, streets, and campus grounds. Handles high-volume debris with ease.", image: citymasterProduct },
              { title: "Citymaster 650", desc: "Compact sweeper perfect for sidewalks, pedestrian zones, and tight spaces. Same versatility in a smaller footprint.", image: citymasterProduct },
            ].map((model, i) => (
              <AnimatedSection key={model.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img src={model.image} alt={model.title} className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-xl mb-2">{model.title}</h3>
                    <p className="text-muted-foreground">{model.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Surface Cleaning */}
      <section className="section-padding bg-muted/30">
        <div className="container max-w-5xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 justify-center mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Surface Cleaning</h2>
            </div>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              The City Cleaner attachment tackles stubborn dirt on hard surfaces — sidewalks, plazas, and pedestrian areas — with integrated high-pressure washing.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {surfaceCleaningSpecs.map((spec, i) => (
              <AnimatedSection key={spec.label} delay={i * 0.08}>
                <div className="bg-card rounded-xl border border-border p-5 text-center">
                  <p className="text-2xl font-heading font-bold text-primary">{spec.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{spec.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.2}>
            <div className="mt-8 bg-card rounded-xl border border-border p-6">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="h-5 w-5 text-primary" />
                <h3 className="font-heading font-bold text-lg">Integrated Pressure Washer</h3>
              </div>
              <p className="text-muted-foreground">
                The City Cleaner comes with a built-in pressure washer delivering 3.43 GPM at 1,740 PSI — powerful enough to remove gum, grease, and ingrained stains without separate equipment.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lawn & Turf */}
      <section className="section-padding bg-background">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img
                src={citymasterLawnTurf}
                alt="Citymaster lawn and turf maintenance attachments"
                className="rounded-xl shadow-lg w-full"
              />
            </AnimatedSection>
            <div>
              <AnimatedSection delay={0.1}>
                <div className="flex items-center gap-3 mb-4">
                  <TreePine className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-heading font-bold">Lawn &amp; Turf</h2>
                </div>
                <p className="text-muted-foreground mb-8">
                  Keep green spaces maintained with dedicated mowing and weed-removal attachments that convert the Citymaster in minutes.
                </p>
              </AnimatedSection>
              <div className="space-y-4">
                {lawnTurfAttachments.map((att, i) => (
                  <AnimatedSection key={att.name} delay={0.15 + i * 0.08}>
                    <div className="flex items-center justify-between bg-card rounded-xl border border-border p-4">
                      <span className="font-semibold">{att.name}</span>
                      <span className="text-sm text-muted-foreground font-mono">{att.parts}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winter Service */}
      <section className="section-padding bg-muted/30">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <AnimatedSection delay={0.1}>
                <div className="flex items-center gap-3 mb-4">
                  <Snowflake className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-heading font-bold">Winter Service</h2>
                </div>
                <p className="text-muted-foreground mb-8">
                  When the seasons change, so does the Citymaster. Swap to snow-clearing attachments for year-round productivity.
                </p>
              </AnimatedSection>
              <div className="space-y-4">
                {winterAttachments.map((att, i) => (
                  <AnimatedSection key={att.name} delay={0.15 + i * 0.08}>
                    <div className="flex items-center justify-between bg-card rounded-xl border border-border p-4">
                      <span className="font-semibold">{att.name}</span>
                      <span className="text-sm text-muted-foreground font-mono">{att.parts}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
            <AnimatedSection className="order-1 lg:order-2">
              <img
                src={citymasterWinter}
                alt="Citymaster winter service attachments — snow blower, plough, spreader"
                className="rounded-xl shadow-lg w-full"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Brochure Download */}
      <section className="section-padding bg-background">
        <div className="container max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Download the Full Brochure</h2>
            <p className="text-muted-foreground mb-8">Get the complete Citymaster specifications, attachment details, and pricing information.</p>
            <a
              href="/downloads/citymaster-brochure.pdf"
              download="Citymaster-Brochure.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all active:scale-[0.97]"
            >
              <Download className="h-5 w-5" /> Download Brochure (PDF)
            </a>
          </AnimatedSection>
        </div>
      </section>

      <CTASection title="Ready to See the Citymaster in Action?" description="Contact Enzo's for a demo, pricing, or to discuss which model fits your operation." />
    </>
  );
}
