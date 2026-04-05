import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Shield, CheckCircle2, ArrowRight, Phone, Wrench, Truck, Users, Award } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const whoShouldAttend = [
  { icon: Wrench, title: "Mobile Pressure Washing Contractors", desc: "Learn proper product selection, application techniques and warranty requirements for hardscape cleaning and sealing." },
  { icon: Users, title: "Landscapers & Hardscape Installers", desc: "Expand your service offerings with professional sealing and maintenance — backed by Trident's warranty program." },
  { icon: Truck, title: "Field Operators & Crew Leaders", desc: "Hands-on training ensures your team applies products correctly the first time, every time." },
];

const trainingCovers = [
  "Product selection for different substrates and conditions",
  "Proper surface preparation and cleaning techniques",
  "Sealer application methods and best practices",
  "Polymeric sand installation and activation",
  "Troubleshooting common field issues",
  "Trident warranty requirements and documentation",
  "Equipment setup and maintenance for application tools",
  "Job costing and estimating for sealing projects",
];

export default function TridentUniversity() {
  return (
    <>
      <PageHero
        title="Trident University"
        subtitle="Professional certification training for contractors — required for Trident product warranty coverage."
      />

      {/* Event Details Banner */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-accent" />
              <div>
                <p className="text-sm font-medium text-primary-foreground/70">Next Training Date</p>
                <p className="text-xl font-bold">May 7, 2025</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-accent" />
              <div>
                <p className="text-sm font-medium text-primary-foreground/70">Location</p>
                <p className="text-xl font-bold">Nicholas Munn's Shop — Open House & Training Event</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-accent" />
              <div>
                <p className="text-sm font-medium text-primary-foreground/70">Format</p>
                <p className="text-xl font-bold">Hands-On Training + Certification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Training is Required */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-4">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-semibold">Warranty Requirement</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Certification is Required for Warranty Coverage
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Trident requires all contractors to complete Trident University training before purchasing or applying Trident products with warranty coverage. This ensures every installation meets Trident's quality standards and protects both you and your clients.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold mb-3">Complete Training → Get Certified → Buy with Warranty</h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Once you've completed the Trident University course, you'll be certified to purchase and apply Trident products with full manufacturer warranty backing. Without certification, warranty claims will not be honored.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="section-padding bg-muted">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Who Should Attend?</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {whoShouldAttend.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all h-full text-center"
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

      {/* What Training Covers */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">What the Training Covers</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-4">
            {trainingCovers.map((item, i) => (
              <AnimatedSection key={item} delay={i * 0.05}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open House Event Details */}
      <section className="section-padding bg-muted">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Open House & Training Event</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join us at Nicholas Munn's shop for a combined open-house and training event. Meet the team, see products in action, and get certified — all in one day.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl bg-card border border-border p-8">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-bold">May 7, 2025</h4>
                  <p className="text-sm text-muted-foreground">Training Day</p>
                </div>
                <div>
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-bold">Nicholas Munn's Shop</h4>
                  <p className="text-sm text-muted-foreground">Sandusky, OH</p>
                </div>
                <div>
                  <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-bold">Certification Included</h4>
                  <p className="text-sm text-muted-foreground">Walk away certified</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Reserve Your Spot at Trident University"
        description="Contact Enzo's to register for the May 7 training event. Space is limited — secure your certification and start selling Trident products with full warranty coverage."
        buttonText="Register Now"
      />
    </>
  );
}
