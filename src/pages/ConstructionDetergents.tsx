import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import DetergentList from "@/components/shared/DetergentList";

const products = [
  { name: "EZ Melt", bullets: ["Tar & Asphalt remover", "Quickly removes cold tar sealer, asphalt sealer, asphalt and roofing tar", "Use on tools, equipment and vehicles", "Solvent based, Non-foaming"] },
  { name: "C-Tar Melt", bullets: ["Tar & Asphalt remover", "Water soluble, easily rinseable & non-hazardous", "Safe for wood, metal and masonry", "Aids in separation of tar residue from rinse water"] },
  { name: "EZ Slideout", bullets: ["Water-soluble", "Produces rich foam under pressure", "Designed for application to truck beds prior to asphalt load", "Visual coating with minimal moisture"] },
  { name: "Asphalt", bullets: ["Purpose-built asphalt cleaning solution", "Removes asphalt buildup from equipment and tools", "Safe for use on metal surfaces", "Effective on fresh and cured asphalt deposits"] },
  { name: "EZ Asphalt Remover G", bullets: ["Green-formula asphalt remover", "Biodegradable and environmentally friendly", "Dissolves asphalt, tar and bitumen from equipment", "Safe for painted surfaces and metal"] },
  { name: "Chisel", bullets: ["Sugar acid concrete cleaner", "Diluted 4:1", "Softens concrete even when cured", "Will not etch windows", "Does not fade paint"] },
];

export default function ConstructionDetergents() {
  return (
    <>
      <PageHero title="Construction Equipment Cleaning" subtitle="Keep your construction equipment clean and running at peak efficiency." bgImage="/uploads/2020/09/DSC_0184.jpg" />
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <p className="mx-auto max-w-3xl text-center text-muted-foreground text-lg mb-12">
              Construction is dirty work. Your machinery gets covered in tar, asphalt, grease and grime. This built-up dirt can lead to rust, mechanical problems and other issues, making cleaning incredibly important.
            </p>
          </AnimatedSection>
          <DetergentList items={products} />
        </div>
      </section>
      <CTASection title="Get Construction Cleaning Solutions" description="Find detergents made for the construction industry at Enzo's." />
    </>
  );
}
