import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import EquipmentModelCard from "@/components/shared/EquipmentModelCard";

const models = [
  {
    model: "HHS Series",
    partNumber: "#HHS-2004-2E2G",
    discharge: "4.2 GPM at 2,000 PSI",
    image: "/uploads/2024/10/HHS-Series-Electric-Hot-Water-Pressure-Washer.png",
    dimensions: { length: '57"', width: '30"', height: '41.5"', weight: "670 lbs" },
    description: "This HHS Series is a popular choice amongst contractors because it is suitable for even the most rugged applications in oil, trucking and manufacturing industries.",
    specSheet: "/uploads/2024/10/HHS-Series_Enzos-1.pdf",
  },
  {
    model: "DHA Series",
    partNumber: "#DH-3004-AE0E4G",
    discharge: "3.9 GPM at 3,000 PSI",
    image: "/uploads/2024/10/DHA-Series-Electric-Hot-Water-Pressure-Washer.png",
    dimensions: { length: '36"', width: '25"', height: '49"', weight: "830 lbs" },
    description: "The DHA Series is all-electric and features a patented heat exchanger design to provide consistent and efficient hot water on-demand.",
    specSheet: "/uploads/2024/10/DHA-Series_Enzos.pdf",
  },
  {
    model: "DHS Series – Belt Drive",
    partNumber: "#DH-2504-SE0E3G",
    discharge: "3.2 GPM at 2,500 PSI",
    image: "/uploads/2024/10/DHS-Series-Electric-Belt-Drive-Pressure-Washer.png",
    dimensions: { length: '49.5"', width: '28"', height: '40.5"', weight: "688 lbs" },
    description: "Contractors rely on the DHS Series for its efficiency, reliability and longevity. It is heavy-duty and is great for melting away greasy residue and debris on industrial and commercial worksites.",
    specSheet: "/uploads/2024/10/DHS-Series-Electric-Belt-Drive_Enzos-1.pdf",
  },
  {
    model: "DHS Series – Direct Drive",
    partNumber: "#DH-2003-SE0E2G",
    discharge: "2.8 GPM at 2,000 PSI",
    image: "/uploads/2024/10/DHS-Series-Electric-Direct-Drive-Pressure-Washer.png",
    dimensions: { length: '43"', width: '29.5"', height: '36.5"', weight: "439 lbs" },
    description: "The DHS Series is designed with a powder coated steel frame, making it extremely durable. It is ideal for cleaning on construction sites, farms, mining and oil fields.",
    specSheet: "/uploads/2024/10/DHS-Series-Electric-Direct-Drive_Enzos-1.pdf",
  },
  {
    model: "HHB Series",
    partNumber: "#HHB-2503-0E2A",
    discharge: "2.8 GPM at 2,500 PSI",
    image: "/uploads/2024/10/HHB-Series-Portable-Electric-Pressure-Washer.png",
    dimensions: { length: '57"', width: '30"', height: '41.5"', weight: "650 lbs" },
    description: "Tackle tough grease, grime and stubborn stains with the portable HHB Series. This series features an open drip-proof motor and stainless-steel coil wrap heat exchanger.",
    specSheet: "/uploads/2024/10/HHB-Series_Enzos-1.pdf",
  },
];

export default function MiTMElectricHotWater() {
  return (
    <>
      <PageHero title="Mi-T-M Electric Hot Water" subtitle="Same power and performance as traditional fuel units with portability for enclosed and outdoor cleaning." />
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="/uploads/2024/09/Mi-T-M-Logo.png" alt="Mi-T-M Logo" className="h-14" />
            </div>
            <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
              Hot water pressure washers are the most effective tool for removing grease, grime, and a variety of other contaminants from virtually any surface. Enzo's offers a variety of Mi-T-M hot water pressure washers available in a wide variety of sizes and models, providing the power, performance, and mobility businesses need to clean and sanitize effectively.
            </p>
          </AnimatedSection>
          <div className="space-y-8 mt-10">
            {models.map((m, i) => <EquipmentModelCard key={m.model} {...m} index={i} />)}
          </div>
        </div>
      </section>
      <CTASection title="Find the Right Pressure Washer" description="Contact Enzo's today for help selecting the right electric hot water pressure washer." />
    </>
  );
}
