import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import EquipmentModelCard from "@/components/shared/EquipmentModelCard";

const models = [
  {
    model: "1475N",
    partNumber: "#1.109-953.0",
    discharge: "5 GPM at 3,000 PSI",
    image: "/uploads/2024/09/Natural-gas-pressure-washer-image.png",
    dimensions: { length: '47.5"', width: '21"', height: '51"', weight: "740 lbs" },
    description: "Hot water, high pressure, electric powered washer capable of operating on fresh water with appropriate safety controls. ETL/UL/CSA certified to UL1776 standard. Built in ISO-9001 registered factory. Perfect for wash bays with simple natural gas connection.",
    specSheet: "/uploads/2024/09/1475N-Nat-gas-Spec-Sheet.pdf",
  },
  {
    model: "1473N",
    partNumber: "#1.109-713.0",
    discharge: "5 GPM at 3,000 PSI",
    image: "/uploads/2024/09/Natural-gas-pressure-washer-image.png",
    dimensions: { length: '47.5"', width: '21"', height: '51"', weight: "677 lbs" },
    description: "Hot water, high pressure, electric powered washer. ETL/UL/CSA certified to UL1776 safety standard. Built in ISO-9001 registered factory. Ideal for wash bays and facilities with natural gas hookups.",
    specSheet: "/uploads/2024/09/1473N-Nat-gas-Bid-Spec-Sheet.pdf",
  },
  {
    model: "1452N",
    partNumber: "#1.109-703.0",
    discharge: "4 GPM at 3,000 PSI",
    image: "/uploads/2024/09/Natural-gas-pressure-washer-image.png",
    dimensions: { length: '47.5"', width: '21"', height: '51"', weight: "625 lbs" },
    description: "Hot water, high pressure, electric powered portable washer. ETL/UL/CGA/CSA certified conforming to UL standard 1776 for pressure washers. Built in ISO-9001 2008 registered factory.",
    specSheet: "/uploads/2024/09/1452N-Nat-gas-Spec-Sheet.pdf",
  },
  {
    model: "943N",
    partNumber: "#1.109-696.0",
    discharge: "4 GPM at 2,000 PSI",
    image: "/uploads/2024/09/Natural-gas-pressure-washer-image.png",
    dimensions: { length: '47.5"', width: '21"', height: '51"', weight: "685 lbs" },
    description: "Hot water, high pressure, electric powered washer. ETL/UL/CGA/CSA certified to UL1776 safety standard. Built in ISO-9001 2008 registered factory. Great entry-level natural gas option.",
    specSheet: "/uploads/2024/09/943N-Nat-gas-Spec-Sheet.pdf",
  },
];

export default function HotsyNaturalGasHotWater() {
  return (
    <>
      <PageHero
        title="Hotsy Natural Gas Hot Water"
        subtitle="Great for wash bays with simple connection and powerful cleaning. Find your new pressure washer at Enzo's."
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
      <CTASection title="Find the Right Pressure Washer" description="Get the cleaning power you need. Contact Enzo's today." />
    </>
  );
}
