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
  { title: "Undercarriage Wash Unit", desc: "Integrated undercarriage cleaning to fight salt and corrosion damage.", image: "/uploads/2022/10/New-Project.jpg" },
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

      {/* Video */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-6">Witness Our Salt Neutralizer & Truck Rinse in Action</h2>
            <div className="max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/DV_4V7yt7us"
                title="Findlay City Schools Testimonial"
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
                <div className="bg-card rounded-xl border border-border overflow-hidden h-full">
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

      <CTASection title="Schedule Your Consultation" description="Let our team design a custom automatic wash system for your fleet. Contact Enzo's today." />
    </>
  );
}
