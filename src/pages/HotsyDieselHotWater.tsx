import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import EquipmentModelCard from "@/components/shared/EquipmentModelCard";

const models = [
  {
    model: "790SS",
    partNumber: "#1.109-612.0",
    discharge: "3.0 GPM at 2,000 PSI",
    image: "/uploads/2024/09/790ss-washer-image.png",
    dimensions: { length: '32"', width: '28"', height: '45.5"', weight: "450 lbs" },
    description: "Hot water, high pressure, gas engine powered washer capable of operating on fresh water. Manually operated with appropriate safety controls. ETL/UL/CGA/CSA certified to UL1776 safety standard. Built in ISO-9001; 2008 registered factory. Perfect for mobile cleaning needs.",
    specSheet: "/uploads/2024/09/790SS-Diesel-Spec-Sheet-1.pdf",
  },
  {
    model: "871SS",
    partNumber: "#1.110-014.0",
    discharge: "2.7 GPM at 2,400 PSI",
    image: "/uploads/2024/09/871ss-Diesel-Pressure-Washer.png",
    dimensions: { length: '43"', width: '27"', height: '39"', weight: "400 lbs" },
    description: "Hot water, high pressure, gas engine powered washer. Manually operated with appropriate safety controls. ETL/UL/CGA/CSA certified to UL1776 industry safety standard. Built in ISO-9001; 2008 registered factory. Compact diesel-powered performance for on-the-go cleaning.",
    specSheet: "/uploads/2024/09/871SS-Diesel-Spec-Sheet-1.pdf",
  },
];

export default function HotsyDieselHotWater() {
  return (
    <>
      <PageHero
        title="Hotsy Diesel Hot Water Pressure Washers"
        subtitle="Perfect for mobile cleaning needs with powerful diesel-powered performance. Make dirt and grime a thing of the past."
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
