import { Droplets, Recycle, FileCheck, Filter } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const components = [
  { icon: Filter, title: "Source Capture & Pre-treatment", desc: "Grates, catch basins and sediment traps to remove large solids before treatment." },
  { icon: Droplets, title: "Oil & Grease Separation", desc: "Passive separators or coalescing units to extract hydrocarbons from washwater." },
  { icon: Recycle, title: "Biological Treatment (Bio Series)", desc: "Compact bio-reactor modules for breaking down dissolved organics — good for water reuse where permitted." },
  { icon: FileCheck, title: "Slow Filtration / Land Treatment", desc: "Passive systems like slow sand filters for removing particulates and reducing biological load." },
];

const benefits = [
  "Reduce water hauling & disposal costs",
  "Improve compliance with pretreatment or discharge limits",
  "Reuse treated water for non-potable uses (wash cycles, dust control)",
];

export default function WastewaterTreatment() {
  return (
    <>
      <PageHero title="Wastewater Treatment Solutions" subtitle="Modular solutions from oil/water separators to biological treatment for construction and fleet operations." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Construction and excavation washwater often contains sediment, oils, grease, and hydrocarbon residues. Enzo's offers modular wastewater solutions to help you treat, reclaim, or safely discharge water per local rules.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <section className="pb-16">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-8">Typical System Components</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {components.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-6">
                  <c.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-heading font-bold">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{c.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-muted/30">
        <div className="container max-w-3xl">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-6">Benefits for Contractors</h2>
            <ul className="space-y-3">
              {benefits.map(b => (
                <li key={b} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-8 p-6 bg-card rounded-xl border border-border">
              <h3 className="font-heading font-bold">Compliance & Permitting Support</h3>
              <p className="text-sm text-muted-foreground mt-2">We help document system performance for local agencies and can coordinate with engineers to size systems to your site and effluent limits.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CTASection title="Request a Wastewater Assessment" description="Get a custom quote for your wastewater treatment needs. Contact Enzo's today." />
    </>
  );
}
