import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import EquipmentModelCard from "@/components/shared/EquipmentModelCard";

const models = [
  {
    model: "DHG Series",
    partNumber: "#DHG-4004-D0H6G",
    discharge: "3.7 GPM at 4,000 PSI",
    image: "/uploads/2024/10/DHG-Series-Image.png",
    dimensions: { length: '49.5"', width: '30"', height: '48"', weight: "601 lbs" },
    description: "This powerful pressure washer series is built to blast away the toughest grease and grime. It features a 12V Beckett burner, bottom-fired heat exchanger and pneumatic tires for easy portability on any job site.",
    specSheet: "/uploads/2024/10/DHG-Series_Enzos.pdf",
  },
  {
    model: "DHS Series",
    partNumber: "#DH-3504-SP3H6A",
    discharge: "3.3 GPM at 3,500 PSI",
    image: "/uploads/2024/10/DHS-Series-Image.png",
    dimensions: { length: '43"', width: '30"', height: '41"', weight: "551 lbs" },
    description: "The DHS Series features a unique Electro Magnetic Firing (EMF) system and is great for removing grease and oils from equipment and garage and workshop floors.",
    specSheet: "/uploads/2024/10/DHS-Series-Gasoline-Direct-Drive_Enzos.pdf",
  },
];

export default function MiTMGasolineHotWaterPortable() {
  return (
    <>
      <PageHero title="Mi-T-M Gasoline Hot Water Portable" subtitle="Designed with portability in mind, making it easy to take cleaning power anywhere you need it." />
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="/uploads/2024/09/Mi-T-M-Logo.png" alt="Mi-T-M Logo" className="h-14" />
            </div>
          </AnimatedSection>
          <div className="space-y-8">
            {models.map((m, i) => <EquipmentModelCard key={m.model} {...m} index={i} />)}
          </div>
        </div>
      </section>
      <CTASection title="Find the Right Pressure Washer" description="Contact Enzo's today for help selecting the right portable pressure washer." />
    </>
  );
}
