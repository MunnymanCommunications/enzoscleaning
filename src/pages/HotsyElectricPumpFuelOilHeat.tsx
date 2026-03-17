import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import EquipmentModelCard from "@/components/shared/EquipmentModelCard";

const models = [
  {
    model: "700 Series",
    partNumber: "795SS / 895SS / 797SS",
    discharge: "3.0 GPM at 2,000 PSI",
    image: "https://enzoscleaning.com/wp-content/uploads/2024/10/700-series-image-.png",
    dimensions: { length: '37"', width: '28"', height: '45.5"', weight: "450 lbs" },
    description: "The 700 Series offers a balance of Hotsy ruggedness, power, and affordability. Ideal for commercial customers – on the farm, in processing facilities, construction sites and across municipalities. All models are ETL safety certified and feature the Hotsy pump backed by a non-prorated 7-year warranty. Equipped with a 50' high-pressure hose, lance, nozzles and trigger gun.",
    specSheet: "https://enzoscleaning.com/wp-content/uploads/2024/10/Hotsy-795SS-895SS-Electric-Spec-Sheet.pdf",
  },
  {
    model: "HWE Series",
    discharge: "3.5 GPM at 3,000 PSI",
    image: "https://enzoscleaning.com/wp-content/uploads/2024/10/Hotsy-HWE-Series-Hot-Water-Pressure-Washer.png",
    dimensions: { length: '34"', width: '25"', height: '52"', weight: "620 lbs" },
    description: "Powered and heated by electricity, making it a quiet machine with no fumes. Water is heated in a stainless steel heating coil immersed in a tank of water solution, allowing for instant hot water. Heating elements don't contact pressurized water, resulting in less maintenance and minimized scale buildup. Features a 6.2 HP Baldor motor driving a belt-drive Hotsy Triplex pump with 7-year warranty.",
    specSheet: "https://enzoscleaning.com/wp-content/uploads/2024/10/HWE-Electric-Spec-Sheet.pdf",
  },
  {
    model: "555HE (Black Label)",
    partNumber: "#1.109-215.0",
    discharge: "2.2 GPM at 1,300 PSI",
    image: "https://enzoscleaning.com/wp-content/uploads/2024/10/555-HE-image.png",
    dimensions: { length: '45.5"', width: '29"', height: '43"', weight: "385 lbs" },
    description: "Hotsy's 500 Series offers powerful cleaning in an affordable package that is both rugged and long lasting. Upgraded to Black Label status with loads of extra features and a technologically advanced heat exchanger that takes water to higher temperatures faster. ETL safety certified with the best warranties in the business. Includes 50-ft hose, lance, nozzles, and trigger gun.",
    specSheet: "https://enzoscleaning.com/wp-content/uploads/2024/10/Hotsy-555HE-Electric-Spec-Sheet.pdf",
  },
  {
    model: "555SS",
    partNumber: "#1.109-216.0",
    discharge: "2.2 GPM at 1,300 PSI",
    image: "https://enzoscleaning.com/wp-content/uploads/2024/10/555-ss-image.png",
    dimensions: { length: '33"', width: '27"', height: '41.5"', weight: "360 lbs" },
    description: "Hotsy's 500 Series offers the best of both worlds – powerful cleaning in an affordable, rugged and long lasting package. All models are ETL safety certified and feature the best warranties in the business. Each come with a 50-ft high-pressure hose, lance, nozzles, and trigger gun.",
    specSheet: "https://enzoscleaning.com/wp-content/uploads/2024/10/Hotsy-555SS-Electric-Spec-Sheet.pdf",
  },
];

export default function HotsyElectricPumpFuelOilHeat() {
  return (
    <>
      <PageHero
        title="Hotsy Electric Pump Hot Water Pressure Washers"
        subtitle="Versatile cleaning machines with fuel oil heating for a variety of applications. Find the right Hotsy for your operation."
      />
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="https://enzoscleaning.com/wp-content/uploads/2024/09/hotsy-logo.png" alt="Hotsy Logo" className="h-14" />
            </div>
          </AnimatedSection>
          <div className="space-y-8">
            {models.map((m, i) => (
              <EquipmentModelCard key={m.model} {...m} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Find the Right Pressure Washer" description="Get the cleaning power you need. Let our team help. Contact Enzo's today for help selecting the right pressure washer for your operations." />
    </>
  );
}
