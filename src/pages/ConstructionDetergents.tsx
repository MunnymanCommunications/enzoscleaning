import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import DetergentList from "@/components/shared/DetergentList";

const products = [
  { name: "EZ Melt", bullets: ["Tar & Asphalt remover", "Quickly removes cold tar sealer, asphalt sealer, asphalt and roofing tar", "Use on tools, equipment and vehicles", "Solvent based, Non-foaming"] },
  { name: "C-Tar Melt", bullets: ["Tar & Asphalt remover", "Water soluble, easily rinseable & non-hazardous", "Safe for wood, metal and masonry", "Aids in separation of tar residue from rinse water"] },
  { name: "EZ Slideout", bullets: ["Water-soluble", "Produces rich foam under pressure", "Designed for application to truck beds prior to asphalt load", "Visual coating with minimal moisture"] },
  { name: "EZ Punch-Out", bullets: ["Concrete Remover", "Dissolves and removes concrete from trucks and vehicles", "Safe, low pH organic salt", "DOT classified as non-regulated material"] },
  { name: "Chisel", bullets: ["Sugar acid concrete cleaner", "Diluted 4:1", "Softens concrete even when cured", "Will not etch windows", "Does not fade paint"] },
];

export default function ConstructionDetergents() {
  return (
    <>
      <PageHero title="Construction Equipment Cleaning" subtitle="Keep your construction equipment clean and running at peak efficiency." bgImage="https://enzoscleaning.com/wp-content/uploads/2020/09/DSC_0184.jpg" />
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
