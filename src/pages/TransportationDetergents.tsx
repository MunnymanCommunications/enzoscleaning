import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import DetergentList from "@/components/shared/DetergentList";

const products = [
  { name: "D-Salt", bullets: ["Salt Neutralizer & Brine Remover", "Diluted 20:1", "Non-acid", "Dissolves all ice melt residue", "Apply to undercarriage and outside of vehicle", "May be used on carpet"] },
  { name: "EZ Fleet", bullets: ["Brushless – Degreaser, Cleaner, Multi-Purpose Wash", "Diluted 20:1", "Faster cleaning performance", "Highly economical"] },
  { name: "Brigade", bullets: ["Premium high-pressure detergent", "Safe on paint, glass, vinyl, wheels", "Excellent at removing bugs", "Pleasant tropical fruit fragrance", "Non-acid and biodegradable"] },
  { name: "EZ Brite SS", bullets: ["Stainless Steel and Aluminum cleaner", "Dilutes 8:1", "Brings shine back to stainless steel body", "Removes rust stains without scrubbing"] },
  { name: "EZ Platinum", bullets: ["Designed to clean aluminum livestock trailers without scrubbing", "Removes black streaks and dirt leaving new silver-like shine"] },
  { name: "Sizzle", bullets: ["Brushless truck wash", "Dilutes 20:1", "Apply with high or low pressure or foaming arch", "A favorite of Enzo's customers – our biggest seller"] },
  { name: "Sabre", bullets: ["General purpose cleaner"] },
];

export default function TransportationDetergents() {
  return (
    <>
      <PageHero title="Transportation / Truck & Bus Wash" subtitle="Keep your fleet looking clean with powerful detergent solutions." bgImage="https://enzoscleaning.com/wp-content/uploads/2020/09/136c6030-0d5c-4f51-86ad-93842523d1c6.jpg" />
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <p className="mx-auto max-w-3xl text-center text-muted-foreground text-lg mb-12">
              Your fleet vehicles see many miles of dirt and grime day after day. Keep your trucks, buses and other fleet equipment looking clean with powerful detergent solutions designed to wash away the soils of the road.
            </p>
          </AnimatedSection>
          <DetergentList items={products} />
        </div>
      </section>
      <CTASection title="Get Transportation Detergents" description="Get rid of road salt, grease, mud and more with detergents made for the transportation industry." />
    </>
  );
}
