import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, Wrench, Settings, ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import CTASection from "@/components/shared/CTASection";
import HeroCarousel from "@/components/home/HeroCarousel";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ProductCard from "@/components/shared/ProductCard";
import InteractiveSchematic from "@/components/shared/InteractiveSchematic";

const serviceCards = [
  { title: "Free Consultations", description: "Let us visit your operation and provide insights and solutions to make your work easier.", image: "/uploads/2021/01/Enzos-Free-Consultations.jpg", link: "/services/free-consultations/" },
  { title: "Service & Repair", description: "At your location or ours, the Enzo's team handles pressure washer and other cleaning system repairs.", image: "/uploads/2021/01/Enzos-Service-and-Repair.jpg", link: "/services/pressure-washer-service-repair/" },
  { title: "Preventive Maintenance", description: "The best way to handle repairs? Prevent them. Let us help handle your maintenance and upkeep.", image: "/uploads/2021/01/Enzos-Preventive-Maintenance.jpg", link: "/services/scheduled-maintenance/" },
];

const productCards = [
  { title: "Hotsy Equipment", image: "/uploads/2020/10/Electric-Pump-Fuel-Oil-Heat-2.jpg", link: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/" },
  { title: "Mi-T-M Equipment", image: "/uploads/2020/10/natural-gas-hot-water-2-1.jpg", link: "/cleaning-equipment/mi-t-m/" },
  { title: "Detergents & Disinfectants", image: "/uploads/vital-oxide-disinfectant.jpg", alt: "Vital Oxide EPA-registered hospital-grade disinfectant and sanitizer — food-safe, no-PPE cleaner for bacteria, viruses and mold, available from Enzo's Cleaning Solutions in Ohio", link: "/detergents/" },
  { title: "The Neutralizer", image: "/uploads/2020/10/neutralizer.jpg", link: "/cleaning-equipment/under-carriage-sprayers/the-neutralizer/" },
];

const cleanPlanSteps = [
  { num: 1, title: "Efficient", description: "Comprehensive tune up of your present system to get everything working at peak performance." },
  { num: 2, title: "Effective", description: "Accessories to increase effectiveness and efficiency. Complete analysis of your chemical needs to meet every application." },
  { num: 3, title: "Safe", description: "Scheduled Maintenance Plan customized to your situation with operator and safety training to ensure proper system usage." },
];

function ParallaxOrb({ className, speed = 0.3 }: { className: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * -200]);

  return (
    <motion.div ref={ref} style={{ y }} className={className} />
  );
}

export default function Index() {
  return (
    <>
      {/* Hero */}
      <HeroCarousel />

      {/* Intro with mesh gradient background */}
      <section className="relative section-padding overflow-hidden">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 mesh-gradient" />
        <ParallaxOrb className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" speed={0.2} />
        <ParallaxOrb className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-accent/8 blur-3xl" speed={0.4} />

        <div className="relative container text-center">
          <AnimatedSection variant="blurIn">
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Ohio & Michigan's Trusted Cleaning Partner</span>
            </div>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">We Consistently <span className="text-gradient-shine">KNOW Clean</span></h2>
            <p className="mx-auto mt-6 max-w-3xl text-muted-foreground text-lg leading-relaxed">
              <strong className="text-foreground">Enzo's Cleaning Solutions</strong> specializes in sales, service, and installation of wash bay equipment, pressure washers, undercarriage washers, detergents and cleaning equipment. Let our team help you find the cleaning equipment, supplies and service you need to <strong className="text-foreground">clean more efficiently, effectively and safely</strong> every day.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { icon: CheckCircle, label: "Cleaning Equipment", desc: "Full range of pressure washers & systems", link: "/cleaning-equipment/" },
              { icon: Wrench, label: "Repair & Maintenance", desc: "Keep your equipment running strong", link: "/services/pressure-washer-service-repair/" },
              { icon: Settings, label: "Detergents & Disinfectants", desc: "Purpose-made cleaning solutions", link: "/disinfecting/" },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.12} variant="scaleIn">
                <Link to={item.link} className="group flex flex-col items-center gap-4 rounded-2xl glass p-8 hover:shadow-xl hover:scale-[1.03] transition-all duration-500">
                  <div className="rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 p-4 group-hover:from-primary/25 group-hover:to-accent/20 transition-all duration-500 group-hover:scale-110">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services with glass cards */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted via-background to-muted" />
        <ParallaxOrb className="absolute top-20 right-10 h-[250px] w-[250px] rounded-full bg-primary/6 blur-3xl" speed={0.3} />

        <div className="relative container">
          <AnimatedSection variant="blurIn">
            <h2 className="text-center text-3xl font-bold md:text-4xl">Your Services</h2>
            <p className="text-center text-muted-foreground mt-3 max-w-2xl mx-auto">From consultations to repairs to preventive maintenance, we keep your cleaning systems running.</p>
          </AnimatedSection>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {serviceCards.map((card, i) => (
              <ProductCard key={card.title} {...card} index={i} />
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <div className="mt-10 text-center">
              <Link to="/services/" className="group inline-flex items-center gap-2 glass rounded-full px-6 py-3 text-primary font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                All Services <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Products */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative container">
          <AnimatedSection variant="blurIn">
            <h2 className="text-center text-3xl font-bold md:text-4xl">Our Products</h2>
          </AnimatedSection>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productCards.map((card, i) => (
              <ProductCard key={card.title} {...card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Salt Neutralizer & Rinse Demo Videos */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted to-background" />
        <ParallaxOrb className="absolute top-10 left-20 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" speed={0.3} />
        <div className="relative container">
          <AnimatedSection variant="blurIn">
            <h2 className="text-center text-3xl font-bold md:text-4xl">See Our Systems in Action</h2>
            <p className="text-center text-muted-foreground mt-3 max-w-2xl mx-auto">Watch how Enzo's undercarriage wash and salt neutralization systems protect your fleet from costly corrosion damage.</p>
          </AnimatedSection>
          <div className="mt-12 grid gap-8 md:grid-cols-2 items-center">
            <AnimatedSection delay={0.1} variant="scaleIn">
              <div className="rounded-3xl glass p-2 shadow-2xl">
                <div className="rounded-2xl overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/ejZBvIK-Bm8?autoplay=1&mute=1"
                      title="Salt neutralizer application on fleet vehicle undercarriage"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold">Salt Neutralizer Application</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">Our D-Salt neutralizing solution bonds to metal surfaces, stopping corrosion before it starts — saving you thousands in fleet repairs.</p>
                <Link to="/cleaning-equipment/under-carriage-sprayers/the-neutralizer/" className="group mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 font-bold text-primary-foreground shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Explore The Neutralizer <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} variant="scaleIn">
              <div className="rounded-3xl glass p-2 shadow-2xl mx-auto max-w-[240px]">
                <div className="rounded-2xl overflow-hidden">
                  <video
                    src="/uploads/videos/rinse-wash.mov"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-[9/16] object-cover"
                    title="Wash bay rinse system cleaning fleet vehicle"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold">Custom Wash Bay Rinse System</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">Fully automated rinse cycles designed for your facility — maximize uptime and keep your fleet spotless with minimal labor.</p>
                <Link to="/cleaning-equipment/wash-bay-design/" className="group mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 font-bold text-primary-foreground shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Explore Wash Bay Design <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* Second Video */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative container max-w-5xl">
          <AnimatedSection variant="scaleIn">
            <div className="rounded-3xl glass p-2 shadow-2xl">
              <div className="rounded-2xl overflow-hidden">
                <div className="aspect-video">
                  <iframe src="https://www.youtube.com/embed/UfXQLlBvvng" title="Enzo's Cleaning Solutions" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="h-full w-full" loading="lazy" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CLEAN Plan with glass numbered cards */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted" />
        <ParallaxOrb className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-accent/8 blur-3xl" speed={0.25} />
        <ParallaxOrb className="absolute top-10 left-10 h-[200px] w-[200px] rounded-full bg-primary/6 blur-3xl" speed={0.35} />

        <div className="relative container">
          <AnimatedSection variant="blurIn">
            <h2 className="text-center text-3xl font-bold md:text-4xl">Our CLEAN Accountability Plan</h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
              Our CLEAN Accountability Plan keeps your system working more efficiently, effectively and safely each time you pull the trigger.
            </p>
          </AnimatedSection>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {cleanPlanSteps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.12} variant="scaleIn">
                <div className="group rounded-2xl glass p-8 text-center hover:shadow-xl hover:scale-[1.03] transition-all duration-500 h-full">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-2xl font-bold text-primary-foreground shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                    {step.num}
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <div className="mt-10 text-center">
              <Link to="/services/scheduled-maintenance/" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 font-bold text-primary-foreground shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 glow-primary">
                Request Your Plan <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive Schematic */}
      <section className="section-padding bg-background">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-heading font-bold mb-2">Explore the Complete System</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Hover over each component to learn how Enzo's Automatic Drive-Through Wash System protects your fleet from salt corrosion and keeps vehicles spotless.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <InteractiveSchematic />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-10 text-center">
              <Link to="/cleaning-equipment/wash-bay-design/" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 font-bold text-primary-foreground shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Explore Wash Bay Design <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Neutralizer Cross-Link */}
      <section className="section-padding bg-muted/30">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/uploads/neutralizer-hero-wash.jpg"
                  alt="The Neutralizer undercarriage wash system in a fleet wash bay"
                  className="w-full h-full object-cover aspect-video"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3">🛡️ Featured Product</span>
                <h2 className="text-2xl font-heading font-bold mb-4">The Neutralizer — The Heart of Every Wash Bay</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every wash bay is better with The Neutralizer. Enzo's original undercarriage wash system chemically neutralizes salt and brine on contact — not just rinsing, but actually stopping corrosion before it starts.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/cleaning-equipment/under-carriage-sprayers/the-neutralizer/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-all"
                  >
                    Explore The Neutralizer <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/cleaning-equipment/wash-bay-design/"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Wash Bay Design <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection title="Ready to Get Started?" description="Let our team help you find the cleaning equipment, supplies and service you need." />
    </>
  );
}
