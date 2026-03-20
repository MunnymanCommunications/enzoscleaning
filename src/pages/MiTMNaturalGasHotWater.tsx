import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import EquipmentModelCard from "@/components/shared/EquipmentModelCard";

const models = [
  {
    model: "HEG Series – Belt Driven",
    partNumber: "#HEG-2004-0E2G",
    discharge: "4.2 GPM at 2,000 PSI",
    image: "/uploads/2024/10/HEG-Series-Stationary-Natural-Gas-Pressure-Washer.png",
    dimensions: { length: '56.5"', width: '29"', height: '49.75"', weight: "844 lbs" },
    description: "Ranging from 1800 up to 3000 PSI, the HEG Series is capable of effortlessly cleaning caked on dirt and build-up off vehicles and equipment.",
    specSheet: "/uploads/2024/10/HEG-Series-Stationary-Natural-Gas-LP-Belt-Drive_Enzos.pdf",
  },
  {
    model: "HEG High Volume Wash Series",
    partNumber: "#HEG-3008-1E3G",
    discharge: "7.8 GPM at 2,400 PSI",
    image: "/uploads/2024/10/HEG-HV-Series-Natural-Gas-Pressure-Washer.png",
    dimensions: { length: '70"', width: '34.75"', height: '54.5"', weight: "1,207 lbs" },
    description: "The HEG High Volume series can handle jobs that require maximum cleaning power. This series has a unique coil design that keeps the unit temperature steady.",
    specSheet: "/uploads/2024/10/HEG-HV-Series-Stationary-Natural-Gas-LP-Belt-Drive_Enzos.pdf",
  },
];

export default function MiTMNaturalGasHotWater() {
  return (
    <>
      <PageHero title="Mi-T-M Natural Gas Hot Water" subtitle="The perfect solution for wash bays and cleaning operations. Find yours at Enzo's." />
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
      <CTASection title="Find the Right Pressure Washer" description="Contact Enzo's today for help selecting the right Mi-T-M for your operations." />
    </>
  );
}
