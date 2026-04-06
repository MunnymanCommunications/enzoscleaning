import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Droplets, Gauge, Wrench, Phone, ArrowRight, CheckCircle2, Zap, Timer, DollarSign, Download, Truck, AlertTriangle, Users, Play } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import InteractiveSchematic from "@/components/shared/InteractiveSchematic";

const neutralizerHero = "/uploads/neutralizer-hero-wash.jpg";
const neutralizerCorrosion = "/uploads/neutralizer-drive-over.jpg";
const neutralizerFleet = "/uploads/undercarriage-wash-system.jpg";

const features = [
  {
    icon: Droplets,
    title: "Detergent Distribution System",
    desc: "4-chemical selector manifold plumbed to a downstream injector. Choose from Sizzle brushless truck wash, D-Salt neutralizer, Buckshot 10 Gauge De-Greaser, or specialty disinfectants — all on the fly.",
  },
  {
    icon: Gauge,
    title: "High Pressure Manifold",
    desc: "Single inlet connects to your pressure washer with two outlets — one to each spray bar — controlled by high pressure ball valves for precise flow control.",
  },
  {
    icon: Wrench,
    title: "Drive Over Unit",
    desc: "Dual pad & dual spray bar design: one rinse bar and one chemical bar. Simply drive over for a complete undercarriage wash in seconds.",
  },
  {
    icon: Zap,
    title: "Works With Your Existing Washer",
    desc: "The Neutralizer works with any pressure washer meeting minimum 4 GPM @ 2,000 PSI. No need to buy new equipment — just plug in and go.",
  },
];

const benefits = [
  "Stops corrosive effects of road salt & brine",
  "Extends vehicle lifespan by years",
  "Reduces costly undercarriage repairs",
  "Complete wash in under five minutes per vehicle",
  "Works with your existing pressure washer",
  "4-chemical switching without disconnecting",
  "Designed & built by Enzo's — proven in the field",
  "Perfect for fleets, fire departments & municipalities",
];

const stats = [
  { value: "<5 min", label: "Per Vehicle Wash" },
  { value: "4", label: "Chemical Channels" },
  { value: "2,000+", label: "PSI Minimum" },
  { value: "4+", label: "GPM Flow Rate" },
];

const idealFor = [
  { icon: Truck, title: "Municipal Fleets", desc: "Plow trucks, salt spreaders, dump trucks, and utility vehicles that face the worst salt exposure every winter." },
  { icon: Users, title: "School Bus Fleets", desc: "Protect your entire bus fleet from costly undercarriage damage with a quick drive-over wash." },
  { icon: Shield, title: "Fire Departments", desc: "Keep engines, tankers, and rescue vehicles in peak condition — ready when your community needs them." },
  { icon: Wrench, title: "Private Fleets", desc: "Delivery trucks, service vans, and any commercial vehicle that runs through salt states all winter." },
];

const corrosionFacts = [
  { stat: "$3B+", desc: "Annual cost of vehicle corrosion in the U.S. — much of it preventable" },
  { stat: "23%", desc: "Shorter lifespan for vehicles regularly exposed to road salt without treatment" },
  { stat: "$2,000+", desc: "Average cost of a single fuel line or brake line corrosion repair" },
  { stat: "5+ Years", desc: "Additional vehicle life with regular undercarriage neutralization" },
];

export default function TheNeutralizer() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <img
          src={neutralizerHero}
          alt="The Neutralizer undercarriage wash system spraying underneath a truck to neutralize road salt and prevent corrosion"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-white text-sm font-semibold mb-6 border border-accent/30 backdrop-blur-sm">
                🛡️ Enzo's Original
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[0.95] mb-6">
                The<br />
                <span className="text-accent">
                  Neutralizer
                </span>
              </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 max-w-xl">
                  Stop the corrosive effects of road salt and brine. Our undercarriage wash system delivers a complete clean in under five minutes per vehicle.
                </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact-us/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Get a Free Quote <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="/downloads/neutralizer-flyer.jpg"
                  download="Neutralizer-Salt-Plow-Flyer.jpg"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full text-lg border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all"
                >
                  <Download className="h-5 w-5" /> Download Flyer
                </a>
                <a
                  href="tel:4195020007"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full text-lg border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all"
                >
                  <Phone className="h-5 w-5" /> 419-502-0007
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-y border-border">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-heading font-black text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* See It In Action - Main Video - Moved Near Top */}
      <section className="section-padding bg-background">
        <div className="container max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">See It in Action</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Watch The Neutralizer deliver a complete undercarriage wash — protecting vehicles from salt corrosion in under five minutes.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="scaleIn">
            <div className="rounded-3xl glass p-2 shadow-2xl">
              <div className="rounded-2xl overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/ejZBvIK-Bm8?autoplay=1&mute=1&loop=1&playlist=ejZBvIK-Bm8"
                    title="The Neutralizer Wash Bay System Demo — Enzo's Cleaning Solutions"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Corrosion Problem */}
      <section className="section-padding bg-muted">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-4">
                <AlertTriangle className="h-4 w-4" />
                <span className="text-sm font-semibold">The Hidden Threat</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                The True Cost of <span className="text-destructive">Salt Corrosion</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Road salt doesn't just sit on the surface — it creeps into every crevice, attacking brake lines, fuel lines, electrical connections, and frame rails from the inside out.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={neutralizerCorrosion}
                  alt="Severely corroded vehicle undercarriage showing rust damage from road salt on brake lines and frame rails"
                  className="w-full object-cover"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="grid grid-cols-2 gap-4">
                {corrosionFacts.map((fact, i) => (
                  <motion.div
                    key={fact.stat}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-5 rounded-xl bg-card border border-border shadow-sm"
                  >
                    <div className="text-2xl md:text-3xl font-heading font-black text-destructive">{fact.stat}</div>
                    <p className="text-sm text-muted-foreground mt-2">{fact.desc}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Road Salt is <span className="text-destructive">Destroying</span> Your Fleet
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every winter, salt and brine eat away at your vehicles from underneath — where you can't see the damage until it's too late. Brake lines, fuel lines, electrical connections, and frame rails corrode silently, leading to thousands in repairs and dangerous failures on the road.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={neutralizerHero}
                  alt="The Neutralizer pressure washer system in action cleaning a truck undercarriage"
                  className="w-full object-cover aspect-video"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                  The Solution: <span className="text-primary">Neutralize on Contact</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The Neutralizer is Enzo's original undercarriage wash system, designed from the ground up to blast away salt, brine, and road chemicals from underneath your vehicles. Combined with our D-Salt neutralizing detergent, it doesn't just wash — it chemically neutralizes corrosive agents on contact.
                </p>
                <ul className="space-y-3">
                  {benefits.slice(0, 4).map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding bg-muted/50">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Built for the Toughest Fleets</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From school buses to snow plows, The Neutralizer protects the vehicles your community depends on</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {idealFor.map((item) => (
              <AnimatedSection key={item.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all h-full text-center"
                >
                  <div className="mx-auto mb-4 p-4 rounded-xl bg-primary/10 w-fit">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="section-padding bg-muted">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">The Complete System</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Four integrated components working together for the ultimate undercarriage protection</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f) => (
              <AnimatedSection key={f.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all h-full"
                >
                  <div className="flex items-start gap-5">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <f.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-2">{f.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-gradient-to-br from-primary to-secondary section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Why Fleets Choose The Neutralizer</h2>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-5 rounded-xl bg-white/10 border border-white/10"
              >
                <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white text-sm font-medium">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Deep Dive Video */}
      <section className="section-padding bg-background">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                📚 For Serious Buyers
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Invest in Your Fleet's Future?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                If you're seriously evaluating undercarriage protection for your fleet, this in-depth walkthrough covers everything you need to know — from system specs to real-world ROI. It's longer because the decision deserves it.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="scaleIn">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/UfXQLlBvvng"
                  title="The Neutralizer In-Depth System Walkthrough — Enzo's Cleaning Solutions"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-sm font-semibold">Return on Investment</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  One Repair Avoided Pays for the Entire System
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A single brake line replacement can cost $500–$1,500. Fuel line corrosion repairs run $800–$2,000+. Frame rail damage? That's a vehicle off the road entirely. The Neutralizer pays for itself the first time it prevents just one of these failures.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Timer className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Under five minutes per vehicle — minimal downtime impact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Reduces annual maintenance costs by thousands</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Extends vehicle service life by years</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={neutralizerFleet}
                    alt="Enzo's undercarriage wash system installed in a fleet wash bay"
                    className="w-full object-cover"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Real Installations. Real Results.</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See how fleets across the country are using The Neutralizer and Enzo's wash bay systems to protect their investments.</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden shadow-lg bg-card border border-border">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/EFv5gxKsMSo"
                    title="Enzo's Wash Bay Installation — Complete System Tour"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-sm">Complete System Tour</h3>
                  <p className="text-xs text-muted-foreground mt-1">Walk through a full Enzo's wash bay installation — from undercarriage sprayers to the rinse arch.</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl overflow-hidden shadow-lg bg-card border border-border">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/fKTmdAAZicY"
                    title="Fire Station Wash Bay Installation by Enzo's Cleaning Solutions"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-sm">Fire Station Wash Bay</h3>
                  <p className="text-xs text-muted-foreground mt-1">See how this fire department keeps their engines and rescue vehicles protected year-round.</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg bg-card border border-border">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/DV_4V7yt7us"
                    title="Municipal Fleet Wash System — Salt Neutralization Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-sm">Municipal Fleet Demo</h3>
                  <p className="text-xs text-muted-foreground mt-1">Watch a full municipal fleet wash cycle — from salt neutralization to final rinse.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Interactive Schematic */}
      <section className="section-padding bg-background">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-heading font-bold mb-2">Explore the Complete Wash Bay System</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Hover over each component to learn how Enzo's Automatic Drive-Through Wash System protects your fleet from salt corrosion and keeps vehicles spotless.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <InteractiveSchematic />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-10 text-center">
              <p className="text-muted-foreground mb-4">Want to see how this all comes together in a full wash bay?</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/cleaning-equipment/wash-bay-design/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-all"
                >
                  Explore Wash Bay Design <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/touchless-drive-thru/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full font-bold hover:shadow-lg transition-all"
                >
                  Automatic Drive-Through Systems <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.2),transparent_60%)]" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6">
              Ready to Protect Your Fleet?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Get a free consultation and see how The Neutralizer can save you thousands in corrosion damage every year.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact-us/"
                className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-accent-foreground font-bold rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Schedule a Free Consultation <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:4195020007"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 text-white font-bold rounded-full text-lg border-2 border-white/20 hover:bg-white/20 transition-all"
              >
                <Phone className="h-5 w-5" /> 419-502-0007
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
