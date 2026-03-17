import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Wrench, Settings, ArrowRight, Play } from "lucide-react";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ProductCard from "@/components/shared/ProductCard";

const serviceCards = [
  { title: "Free Consultations", description: "Let us visit your operation and provide insights and solutions to make your work easier.", image: "https://enzoscleaning.com/wp-content/uploads/2021/01/Enzos-Free-Consultations.jpg", link: "/services/free-consultations/" },
  { title: "Service & Repair", description: "At your location or ours, the Enzo's team handles pressure washer and other cleaning system repairs.", image: "https://enzoscleaning.com/wp-content/uploads/2021/01/Enzos-Service-and-Repair.jpg", link: "/services/pressure-washer-service-repair/" },
  { title: "Preventive Maintenance", description: "The best way to handle repairs? Prevent them. Let us help handle your maintenance and upkeep.", image: "https://enzoscleaning.com/wp-content/uploads/2021/01/Enzos-Preventive-Maintenance.jpg", link: "/services/scheduled-maintenance/" },
];

const productCards = [
  { title: "Hotsy Equipment", image: "https://enzoscleaning.com/wp-content/uploads/2020/10/Electric-Pump-Fuel-Oil-Heat-2.jpg", link: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/" },
  { title: "Mi-T-M Equipment", image: "https://enzoscleaning.com/wp-content/uploads/2020/10/natural-gas-hot-water-2-1.jpg", link: "/cleaning-equipment/mi-t-m/" },
  { title: "Detergents & Disinfectants", image: "https://enzoscleaning.com/wp-content/uploads/2020/09/vog.jpg", link: "/detergents/" },
  { title: "The Neutralizer", image: "https://enzoscleaning.com/wp-content/uploads/2020/10/neutralizer.jpg", link: "/cleaning-equipment/under-carriage-sprayers/the-neutralizer/" },
];

const cleanPlanSteps = [
  { num: 1, title: "Efficient", description: "Comprehensive tune up of your present system to get everything working at peak performance." },
  { num: 2, title: "Effective", description: "Accessories to increase effectiveness and efficiency. Complete analysis of your chemical needs to meet every application." },
  { num: 3, title: "Safe", description: "Scheduled Maintenance Plan customized to your situation with operator and safety training to ensure proper system usage." },
];

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://enzoscleaning.com/wp-content/uploads/2020/09/header-bg.jpg)" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-primary/80 to-secondary/90" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
        </div>
        <div className="relative z-10 container text-center py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <span className="inline-block rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-1.5 text-sm font-medium text-primary-foreground mb-6">
              Ohio & Michigan's Cleaning Equipment Experts
            </span>
            <h1 className="text-4xl font-black text-primary-foreground md:text-6xl lg:text-7xl leading-tight tracking-tight">
              Are You Frustrated With<br className="hidden md:block" /> Your Pressure Washer?
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
              Sales, service & installation of wash bay equipment, pressure washers, and cleaning solutions.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact-us/" className="rounded-full bg-card px-8 py-4 text-base font-bold text-primary shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Let's Talk <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services/" className="rounded-full border-2 border-primary-foreground/30 px-8 py-4 text-base font-bold text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
              Our Services
            </Link>
            <Link to="/industries-we-serve/" className="rounded-full border-2 border-primary-foreground/30 px-8 py-4 text-base font-bold text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
              Industries We Serve
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">We Consistently <span className="text-gradient">KNOW Clean</span></h2>
            <p className="mx-auto mt-6 max-w-3xl text-muted-foreground text-lg leading-relaxed">
              <strong>Enzo's Cleaning Solutions</strong> specializes in sales, service, and installation of wash bay equipment, pressure washers, undercarriage washers, detergents and cleaning equipment. Let our team help you find the cleaning equipment, supplies and service you need to <strong className="text-foreground">clean more efficiently, effectively and safely</strong> every day.
            </p>
          </AnimatedSection>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { icon: CheckCircle, label: "Cleaning Equipment", desc: "Full range of pressure washers & systems", link: "/cleaning-equipment/" },
              { icon: Wrench, label: "Repair & Maintenance", desc: "Keep your equipment running strong", link: "/services/pressure-washer-service-repair/" },
              { icon: Settings, label: "Detergents & Disinfectants", desc: "Purpose-made cleaning solutions", link: "/disinfecting/" },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <Link to={item.link} className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  <div className="rounded-2xl bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors">
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

      {/* Services */}
      <section className="bg-muted section-padding">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-3xl font-bold md:text-4xl">Your Services</h2>
            <p className="text-center text-muted-foreground mt-3 max-w-2xl mx-auto">From consultations to repairs to preventive maintenance, we keep your cleaning systems running.</p>
          </AnimatedSection>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {serviceCards.map((card, i) => (
              <ProductCard key={card.title} {...card} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services/" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-3xl font-bold md:text-4xl">Our Products</h2>
          </AnimatedSection>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productCards.map((card, i) => (
              <ProductCard key={card.title} {...card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="bg-muted section-padding">
        <div className="container max-w-5xl">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe src="https://www.youtube.com/embed/ejZBvIK-Bm8" title="Enzo's Cleaning Solutions | Wash Bay Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="h-full w-full" loading="lazy" />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-10 text-center">
              <h3 className="text-2xl font-bold">Custom Wash Bay Solutions</h3>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Enzo's has helped design and install wash bay solutions for clients from Maine to Alabama – and everywhere in between. Our uniquely designed under carriage cleaning system, The Neutralizer, helps make maintaining your fleet easy.
              </p>
              <Link to="/cleaning-equipment/wash-bay-design/" className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Explore Wash Bay Design <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Third Video */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe src="https://www.youtube.com/embed/UfXQLlBvvng" title="Enzo's Cleaning Solutions" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="h-full w-full" loading="lazy" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CLEAN Plan */}
      <section className="bg-muted section-padding">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-3xl font-bold md:text-4xl">Our CLEAN Accountability Plan</h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
              Our CLEAN Accountability Plan keeps your system working more efficiently, effectively and safely each time you pull the trigger.
            </p>
          </AnimatedSection>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {cleanPlanSteps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1}>
                <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-2xl font-bold text-primary-foreground">
                    {step.num}
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services/scheduled-maintenance/" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Request Your Plan <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Ready to Get Started?" description="Let our team help you find the cleaning equipment, supplies and service you need." />
    </>
  );
}
