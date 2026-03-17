import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Droplets, Gauge, Wrench, Phone, ArrowRight, CheckCircle2, Zap, Timer, DollarSign } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

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
  "Complete wash in under 60 seconds per vehicle",
  "Works with your existing pressure washer",
  "4-chemical switching without disconnecting",
  "Designed & built by Enzo's — proven in the field",
  "Perfect for fleets, fire departments & municipalities",
];

const stats = [
  { value: "60s", label: "Per Vehicle Wash" },
  { value: "4", label: "Chemical Channels" },
  { value: "2,000+", label: "PSI Minimum" },
  { value: "4+", label: "GPM Flow Rate" },
];

export default function TheNeutralizer() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('https://enzoscleaning.com/wp-content/uploads/2021/02/Undercarriage-wash-system.jpg')] bg-cover bg-center opacity-15" />

        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-semibold mb-6 border border-accent/30">
                🛡️ Enzo's Original
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-primary-foreground leading-[0.95] mb-6">
                The<br />
                <span className="text-gradient bg-gradient-to-r from-accent to-primary-foreground bg-clip-text text-transparent">
                  Neutralizer
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-8 max-w-xl">
                Stop the corrosive effects of road salt and brine. Our undercarriage wash system delivers a complete clean in under 60 seconds.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact-us/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Get a Free Quote <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="tel:4195020007"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-bold rounded-full text-lg border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all"
                >
                  <Phone className="h-5 w-5" /> Call 419-502-0007
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-foreground/10">
                <img
                  src="https://enzoscleaning.com/wp-content/uploads/2020/10/neutralizer.jpg"
                  alt="The Neutralizer undercarriage wash system"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
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
                  src="https://enzoscleaning.com/wp-content/uploads/2021/02/The-Neutralizer-Pressure-Washer.jpg"
                  alt="The Neutralizer pressure washer system"
                  className="w-full object-cover"
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

      {/* Video Section */}
      <section className="bg-muted section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">See It in Action</h2>
              <p className="text-muted-foreground text-lg">Watch The Neutralizer deliver a complete undercarriage wash at Westfield Fire & Rescue</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-secondary/10">
                <iframe
                  src="https://www.youtube.com/embed/4ocg_o1HB9E"
                  title="The Neutralizer - Bus Garage Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-secondary/10">
                <iframe
                  src="https://www.youtube.com/embed/ejZBvIK-Bm8"
                  title="Wash Bay Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* System Components */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">The Complete System</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Four integrated components working together for the ultimate undercarriage protection</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f, i) => (
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
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Why Fleets Choose The Neutralizer</h2>
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
                className="flex items-start gap-3 p-5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/10"
              >
                <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground text-sm font-medium">{b}</span>
              </motion.div>
            ))}
          </div>
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
                    <span>Under 60 seconds per vehicle — no downtime impact</span>
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
                    src="https://enzoscleaning.com/wp-content/uploads/2021/02/Undercarriage-wash-system.jpg"
                    alt="Neutralizer undercarriage wash system in action"
                    className="w-full object-cover"
                  />
                </div>
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
            <h2 className="text-3xl md:text-5xl font-heading font-black text-primary-foreground mb-6">
              Ready to Protect Your Fleet?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
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
                className="inline-flex items-center gap-2 px-10 py-5 bg-primary-foreground/10 text-primary-foreground font-bold rounded-full text-lg border-2 border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all"
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
