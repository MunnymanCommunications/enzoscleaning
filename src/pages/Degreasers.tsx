import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import DetergentList from "@/components/shared/DetergentList";

const degreasers = [
  { name: "Grease Beast", bullets: ["Heavy duty cleaner and degreaser", "Formulated with pine oil", "Use on floors, walls, equipment, machinery", "Extremely effective at removing grease from engine compartments"] },
  { name: "AP Plus BC", bullets: ["Water-based degreaser", "Removes heavy grease, oil build up and stains", "Great on heavy equipment, rolling stock and concrete", "Cleans pressure washer coils as degreaser runs through machine"], specLink: "https://eacochem.com/wp-content/uploads/2024/11/productSpec_APPlusBC.pdf" },
  { name: "Buckshot 10 Gauge", bullets: ["All-purpose extra heavy-duty degreaser", "Cuts heavy grease and oil on oil rigs, engines, forklifts, fifth wheels", "Biodegradable", "Does not contain petroleum solvents"] },
  { name: "Buckshot 12 Gauge", bullets: ["Heavy duty degreaser", "Cuts film, oil, and grease from industrial parts, chassis, painted surfaces", "Exceptional general-purpose floor cleaner", "Safer than most other corrosive degreasers", "Biodegradable"] },
  { name: "EZ Purple Punch", bullets: ["Concentrated industrial strength butyl formulation", "Cuts through greases and oils", "Low foaming, free rinsing", "Biodegradable"] },
];

export default function Degreasers() {
  return (
    <>
      <PageHero title="Degreasers" subtitle="Blast away grease and oil with powerful degreasing solutions from Enzo's." />
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <p className="mx-auto max-w-3xl text-center text-muted-foreground text-lg mb-12">
              Grease is tenacious and difficult to clean with water alone. Whether you need to clean equipment, vehicles or surfaces, Enzo's has a degreasing solution to help blast away grease and oil.
            </p>
          </AnimatedSection>
          <DetergentList items={degreasers} />
        </div>
      </section>
      <CTASection title="Find the Right Degreaser" description="Don't struggle with greasy grime. Find degreasers made for the job at Enzo's." />
    </>
  );
}
