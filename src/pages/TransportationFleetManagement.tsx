import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const detergents = [
  { name: "D-Salt", bullets: ["Salt Neutralizer & Brine Remover", "Diluted 20:1, Non-acid", "Dissolves all ice melt residue", "Apply to undercarriage and outside of vehicle"] },
  { name: "EZ Fleet", bullets: ["Brushless Degreaser, Cleaner, Multi-Purpose Wash", "Diluted 20:1", "Faster cleaning performance", "Highly economical"] },
  { name: "Brigade", bullets: ["Premium high-pressure detergent", "Safe on paint, glass, vinyl, wheels", "Excellent at removing bugs", "Non-acid and biodegradable"] },
  { name: "EZ Brite SS", bullets: ["Stainless Steel and Aluminum cleaner", "Dilutes 8:1", "Brings shine back to stainless steel", "Removes rust stains without scrubbing"] },
  { name: "EZ Platinum", bullets: ["Cleans aluminum livestock trailers without scrubbing", "Removes black streaks and dirt", "Leaves new silver-like shine"] },
  { name: "Sizzle", bullets: ["Brushless truck wash — Enzo's biggest seller", "Dilutes 20:1", "Apply with high or low pressure or foaming arch"] },
  { name: "Sabre", bullets: ["General purpose cleaner", "Dilutes 20:1", "Cleans aluminum, stainless steel truck bodies", "Non-hydrofluoric acid, biodegradable"] },
  { name: "Glory", bullets: ["Brushless vehicle wash", "Dilutes 20:1", "Spot free drying", "Super-fast rinsing, safe on paint"] },
];

const equipment = [
  { title: "Portable Undercarriage Unit", image: "https://enzoscleaning.com/wp-content/uploads/2020/10/Untitled-4.jpg", link: "/cleaning-equipment/wash-bay-design/" },
  { title: "The Neutralizer", image: "https://enzoscleaning.com/wp-content/uploads/2020/10/Untitled-1.jpg", link: "/cleaning-equipment/under-carriage-sprayers/the-neutralizer/" },
  { title: "Tower Brushes", image: "https://enzoscleaning.com/wp-content/uploads/2020/10/Untitled-2.jpg", link: "/cleaning-equipment/wash-bay-design/tower-brushes/" },
];

export default function TransportationFleetManagement() {
  return (
    <>
      <PageHero title="Transportation & Fleet Management" subtitle="No one knows transportation equipment like Enzo's Cleaning Solutions." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              When it comes to fleet management, your vehicles need to be clean and problem-free year-round. Vehicles don't perform to their fullest when dirt or salt surrounds their moving parts. Leaving grime on your vehicle will degrade metal and cause decay and failure — not to mention reflecting poorly on your business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-12">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-8">Wash Bay Equipment</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {equipment.map((e, i) => (
              <AnimatedSection key={e.title} delay={i * 0.1}>
                <Link to={e.link} className="group block bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={e.image} alt={e.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-4"><h3 className="font-heading font-bold text-sm">{e.title}</h3></div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-8">Transportation Detergents</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {detergents.map((d, i) => (
              <AnimatedSection key={d.name} delay={i * 0.06}>
                <div className="bg-card rounded-xl border border-border p-4 h-full">
                  <h3 className="font-heading font-bold text-sm">{d.name}</h3>
                  <ul className="mt-2 space-y-1">
                    {d.bullets.map(b => <li key={b} className="text-xs text-muted-foreground flex gap-1.5"><span className="text-primary mt-0.5">•</span>{b}</li>)}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Schedule a Free Consultation" description="Let Enzo's help you find the right cleaning solution for your fleet." />
    </>
  );
}
