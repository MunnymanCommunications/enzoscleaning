import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const detergents = [
  { name: "EZ Melt", bullets: ["Tar & Asphalt remover", "Quickly removes cold tar sealer, asphalt sealer, asphalt and roofing tar", "Use on tools, equipment and vehicles", "Solvent based, non-foaming"] },
  { name: "C-Tar Melt", bullets: ["Water soluble, easily rinseable & non-hazardous", "Safe for wood, metal and masonry surfaces", "Does not cause discoloration", "Aids in separation of tar residue from rinse water"] },
  { name: "EZ Slideout", bullets: ["Water-soluble", "Produces rich foam under pressure", "Designed for application to truck beds prior to asphalt load", "Visual coating with minimal moisture"] },
  { name: "EZ Punch-Out", bullets: ["Concrete Remover", "Dissolves and removes concrete from trucks and vehicles", "Safe, low pH organic salt — outperforms traditional acids", "DOT classified as non-regulated material"] },
  { name: "Chisel", bullets: ["Sugar acid concrete cleaner", "Diluted 4:1", "Softens concrete even when cured", "Removes lime, will not etch windows or fade paint"] },
  { name: "CT Wash", bullets: ["Removes light to medium concrete buildup from mixers", "Perfect for maintaining vehicles", "Highly dilutable when regularly used"] },
  { name: "Smoke Melt", bullets: ["High alkaline", "Removes heavy soil deposits from metal, wood or masonry", "Strips latex and enamel paint", "Softens heavy black smoke"] },
  { name: "EZ Road-Crud", bullets: ["D-Limonene based degreaser", "Highly effective on all road film", "Biodegradable with citrus aroma", "Safe alternative to toxic petroleum-derived chemicals"] },
];

const equipment = [
  { title: "Pressure Washers", desc: "Hot and cold water options from Hotsy and Mi-T-M to blast away dirt, concrete and grime.", link: "/cleaning-equipment/pressure-washers/" },
  { title: "Detergents", desc: "Specialized construction detergents for tar, concrete, asphalt and more.", link: "/detergents/construction-equipment-cleaning/" },
  { title: "The Neutralizer", desc: "Fight undercarriage corrosion from road salt on your fleet of construction vehicles.", link: "/cleaning-equipment/under-carriage-sprayers/the-neutralizer/" },
];

export default function ConstructionCleaningEquipment() {
  return (
    <>
      <PageHero title="Construction Cleaning Equipment" subtitle="Keep your equipment CLEAN and operating at peak efficiency." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              At Enzo's Cleaning Solutions, we've worked with customers in the construction industry for decades. Clean equipment makes it easier to detect oil leaks and repair issues before they become a problem. Washing regularly keeps dirt and grime at bay, helping to prevent overheating and premature wear.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-12">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-6">Equipment Solutions</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {equipment.map((e, i) => (
              <AnimatedSection key={e.title} delay={i * 0.1}>
                <Link to={e.link} className="block bg-card rounded-xl border border-border p-5 hover:shadow-lg transition-shadow h-full">
                  <h3 className="font-heading font-bold">{e.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{e.desc}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-8">Construction Detergents</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {detergents.map((d, i) => (
              <AnimatedSection key={d.name} delay={i * 0.06}>
                <div className="bg-card rounded-xl border border-border p-4 h-full">
                  <h3 className="font-heading font-bold text-sm">{d.name}</h3>
                  <ul className="mt-2 space-y-1">
                    {d.bullets.map(b => (
                      <li key={b} className="text-xs text-muted-foreground flex gap-1.5">
                        <span className="text-primary mt-0.5">•</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Schedule a Free Consultation" description="Our knowledgeable sales representatives can help you find the right equipment and detergents." />
    </>
  );
}
