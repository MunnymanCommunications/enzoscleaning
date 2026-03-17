import { Link } from "react-router-dom";
import { Shield, Zap, TrendingDown, Truck } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const challenges = [
  "Accelerated corrosion from road salt on chassis and undercarriage",
  "Difficult-to-remove grease and asphalt deposits on heavy rigs",
  "Limited wash window between routes — need fast, effective cleaning",
];

const chemistry = [
  { name: "Truck Wash Chemical", desc: "Daily fleet wash concentrate for painted surfaces." },
  { name: "Salt Off (Salt Neutralizer)", desc: "Neutralizes salt to reduce corrosion risk." },
  { name: "Easy Stay Wet", desc: "Improves dwell time on vertical surfaces." },
  { name: "Purple Plus HD Degreaser", desc: "Heavy grease removal for engines and bays." },
  { name: "Buckshot 10 & 12 Gauge", desc: "Penetrating cleaners for tough buildup." },
];

const systems = [
  { name: "Drive-over undercarriage wash", desc: "Mounts to pressure washer, essential for salt removal." },
  { name: "Hot-water pressure washers", desc: "Faster cleaning and improved degreasing." },
  { name: "Floor scrubbers", desc: "Maintenance of wash bays and depots." },
];

const outcomes = [
  { icon: TrendingDown, text: "Lower long-term maintenance & corrosion repair costs" },
  { icon: Zap, text: "Faster wash cycles and higher throughput" },
  { icon: Shield, text: "Safer, compliant vehicles for public transport and schools" },
];

export default function ProtectFleetCorrosion() {
  return (
    <>
      <PageHero title="Protect Your Fleet from Corrosion & Downtime" subtitle="Targeted chemistries and undercarriage systems that stop salt-related damage." />

      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold font-heading mb-6">Common Challenges</h2>
            <ul className="space-y-3">
              {challenges.map(c => (
                <li key={c} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection>
              <h2 className="text-xl font-bold font-heading mb-4">Chemistry</h2>
              <div className="space-y-3">
                {chemistry.map(c => (
                  <div key={c.name} className="bg-card rounded-lg border border-border p-4">
                    <h3 className="font-heading font-bold text-sm">{c.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{c.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h2 className="text-xl font-bold font-heading mb-4">Systems</h2>
              <div className="space-y-3">
                {systems.map(s => (
                  <div key={s.name} className="bg-card rounded-lg border border-border p-4">
                    <h3 className="font-heading font-bold text-sm">{s.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-8">Outcomes & Benefits</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {outcomes.map((o, i) => (
              <AnimatedSection key={o.text} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-6 text-center">
                  <o.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">{o.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Request a Fleet Wash Demo" description="Let Enzo's show you how to protect your fleet. Contact us today." />
    </>
  );
}
