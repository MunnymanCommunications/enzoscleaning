import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import EquipmentModelCard from "@/components/shared/EquipmentModelCard";

const models = [
  {
    model: "1260SS",
    partNumber: "#1.110-533.0",
    discharge: "4.7 GPM at 3,500 PSI",
    image: "/uploads/2024/10/1260ss-Image.png",
    dimensions: { length: '45"', width: '33"', height: '52"', weight: "745 lbs" },
    description: "The 1260SS delivers serious hot water cleaning capability, built to hold up under the toughest conditions. Rugged roll cage design protects the stainless steel coil and Vanguard gas engine, delivering 4.5 GPM @ 3000 PSI. Features electric start (12V battery required), the Hotsy Triplex pump with 7-year warranty, ETL safety certification and CSA-Certified. Equipped with standard flow switch and 50' hose.",
    specSheet: "/uploads/2024/10/1200-Series-Oil-Fired-Gas-or-Diesel-Spec-Sheet.pdf",
  },
  {
    model: "1291SSG",
    partNumber: "#1.110-076.0",
    discharge: "8 GPM at 3,000 PSI",
    image: "/uploads/2024/10/1291ss-image.png",
    dimensions: { length: '45"', width: '33"', height: '52"', weight: "920 lbs" },
    description: "The 1291SSG delivers serious hot water cleaning capability, built for the toughest conditions. Rugged roll cage design protects the stainless steel coil and Vanguard gas engine, delivering 8 GPM @ 3000 PSI. Features electric start (12V battery required), the Hotsy Triplex pump with 7-year warranty, ETL safety certification and CSA-Certified. Equipped with standard flow switch and 50' hose.",
    specSheet: "/uploads/2024/10/1200-Series-Oil-Fired-Gas-or-Diesel-Spec-Sheet.pdf",
  },
];

export default function HotsyGasolinePumpFuelOilHeat() {
  return (
    <>
      <PageHero
        title="Hotsy 1200 Series Hot Water"
        subtitle="Gas-powered, fuel oil heated for outdoor and heavy soil cleaning. Find your pressure washer today."
      />
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="/uploads/2024/09/hotsy-logo.png" alt="Hotsy Logo" className="h-14" />
            </div>
          </AnimatedSection>
          <div className="space-y-8">
            {models.map((m, i) => (
              <EquipmentModelCard key={m.model} {...m} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Find the Right Pressure Washer" description="Get the cleaning power you need. Let our team help. Contact Enzo's today." />
    </>
  );
}
