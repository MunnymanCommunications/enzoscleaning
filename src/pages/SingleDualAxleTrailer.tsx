import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Truck, Droplets, Gauge, Wrench, ArrowRight, CheckCircle2, Settings, Fuel, Package } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { useState } from "react";

const trailerTypes = [
  {
    title: "Single Axle Trailers",
    desc: "Compact and easy to tow with a standard pickup. Perfect for smaller operations, tight job sites, and contractors who need mobility without the bulk.",
    specs: ["Up to 200-gallon water tank", "Hose reel included", "Standard truck hitch compatible", "Ideal for residential & light commercial"],
  },
  {
    title: "Dual Axle Trailers",
    desc: "Higher capacity with larger water tanks and heavier-duty pressure washers. Built for commercial and industrial cleaning operations that demand more power and runtime.",
    specs: ["Up to 535-gallon water tank", "Multiple hose reels", "Heavy-duty suspension", "Built for all-day commercial jobs"],
  },
];

const pressureWasherOptions = [
  { name: "Hot Water — Diesel", desc: "Maximum cleaning power for grease, oil, and heavy grime. The go-to for fleet & industrial work.", icon: Fuel },
  { name: "Hot Water — Electric", desc: "Clean indoor/outdoor use with no exhaust. Perfect for enclosed wash bays and sensitive environments.", icon: Settings },
  { name: "Cold Water — Gas", desc: "Portable high-pressure cleaning without a power source. Great for remote job sites.", icon: Gauge },
  { name: "Cold Water — Electric", desc: "Quiet, efficient, and ideal for lighter-duty applications and indoor facilities.", icon: Droplets },
];

const accessories = [
  "Hose Reels (single or dual)",
  "Water Tanks (100–535 gal)",
  "Surface Cleaners",
  "Undercarriage Sprayer Kits",
  "Chemical Injection Systems",
  "Winterization Packages",
  "Tool Storage Boxes",
  "LED Work Lighting",
  "Generator Mounts",
  "Custom Paint & Branding",
];

const buildSteps = [
  { num: 1, title: "Choose Your Trailer", desc: "Single axle for mobility or dual axle for maximum capacity and power." },
  { num: 2, title: "Select Your Pressure Washer", desc: "Hot or cold water, diesel, gas, or electric — matched to your cleaning needs." },
  { num: 3, title: "Add Your Accessories", desc: "Hose reels, tanks, surface cleaners, chemical systems, and more." },
  { num: 4, title: "We Build & Deliver", desc: "Enzo's assembles, tests, and delivers your custom rig ready to work." },
];

export default function SingleDualAxleTrailer() {
  const [selectedTrailer, setSelectedTrailer] = useState(0);

  return (
    <>
      <PageHero title="Single & Dual Axle Trailers" subtitle="Mobile cleaning rigs on single and dual axle platforms. Fully customized by Enzo's." />

      {/* Intro */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Take your cleaning power on the road with trailer-mounted pressure washer systems from Enzo's. Available in single and dual axle configurations, our trailer units come equipped with water tanks, hose reels and your choice of hot or cold water pressure washers — everything you need for mobile cleaning operations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Trailer Type Selector */}
      <section className="section-padding bg-muted">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-3xl font-heading font-bold mb-10">Choose Your Platform</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {trailerTypes.map((t, i) => (
              <AnimatedSection key={t.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedTrailer(i)}
                  className={`cursor-pointer p-8 rounded-2xl border-2 transition-all h-full ${
                    selectedTrailer === i
                      ? "border-primary bg-primary/5 shadow-lg"
                      : "border-border bg-card hover:border-primary/30 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${selectedTrailer === i ? "bg-primary/20" : "bg-primary/10"}`}>
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold">{t.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{t.desc}</p>
                  <ul className="space-y-2">
                    {t.specs.map(s => (
                      <li key={s} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Design Your Trailer - Interactive Builder */}
      <section className="section-padding bg-background">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                🔧 Build Your Rig
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Design Your Custom Trailer</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every Enzo's trailer rig is built to order. Here's what goes into your custom mobile cleaning system.
              </p>
            </div>
          </AnimatedSection>

          {/* Build Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {buildSteps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1}>
                <div className="text-center p-6 rounded-xl bg-card border border-border h-full">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-heading font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Pressure Washer Options */}
          <AnimatedSection>
            <h3 className="text-2xl font-heading font-bold text-center mb-8">Select Your Pressure Washer</h3>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {pressureWasherOptions.map((pw, i) => (
              <AnimatedSection key={pw.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all h-full"
                >
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                    <pw.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-heading font-bold text-sm mb-2">{pw.name}</h4>
                  <p className="text-xs text-muted-foreground">{pw.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Accessories Grid */}
          <AnimatedSection>
            <h3 className="text-2xl font-heading font-bold text-center mb-8">Add Your Accessories</h3>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-4xl mx-auto">
            {accessories.map((acc, i) => (
              <AnimatedSection key={acc} delay={i * 0.03}>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-muted border border-border text-sm">
                  <Package className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">{acc}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Links */}
      <section className="section-padding bg-muted">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-heading font-bold mb-8">Related Equipment & Solutions</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Pressure Washers", desc: "Browse our full line of hot and cold water pressure washers from Hotsy, Mi-T-M, and more.", link: "/cleaning-equipment/pressure-washers/" },
              { title: "Custom Rigs & Truck Mounts", desc: "Need a truck-mounted system instead? We build those too.", link: "/cleaning-equipment/custom-rigs/" },
              { title: "Accessories & Parts", desc: "Hoses, nozzles, surface cleaners, and everything in between.", link: "/cleaning-equipment/pressure-washer-accessories/" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <Link to={item.link} className="group block p-6 rounded-xl bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all h-full">
                  <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3">Explore <ArrowRight className="h-4 w-4" /></span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Build Your Mobile Rig" description="Tell us what you need and we'll design the perfect trailer-mounted cleaning system. Contact Enzo's today." />
    </>
  );
}
