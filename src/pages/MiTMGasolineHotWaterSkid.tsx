import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import EquipmentModelCard from "@/components/shared/EquipmentModelCard";

const models = [
  {
    model: "HDC Series",
    partNumber: "#HDC-3505-1H6G",
    discharge: "4.7 GPM at 3,500 PSI",
    image: "/uploads/2024/10/HDC-Series-Skid-Gasoline.png",
    dimensions: { length: '50"', width: '34"', height: '46"', weight: "844 lbs" },
    description: "The HDC Series is extremely efficient. Mount it to a trailer or place in the back of a truck to take powerful cleaning with you on the go.",
    specSheet: "/uploads/2024/10/HDC-Series-Skid-Gasoline_Diesel-Belt-Drive_Enzos-1.pdf",
  },
  {
    model: "HVS Series",
    partNumber: "#HVS-3008-1H6G",
    discharge: "7.8 GPM at 3,000 PSI",
    image: "/uploads/2024/10/HVS-Series-Skid-Gasoline.png",
    dimensions: { length: '50"', width: '34"', height: '46"', weight: "854 lbs" },
    description: "This heavy-duty skid series was designed with professional contract cleaners in mind. The perfect option for washing large machinery, equipment and facilities.",
    specSheet: "/uploads/2024/10/HVS-Series_Enzos-1.pdf",
  },
  {
    model: "HDB Series",
    partNumber: "#HDB-3004-0K6G",
    discharge: "3.9 GPM at 3,000 PSI",
    image: "/uploads/2024/10/HDB-Series-Skid-Gasoline-Diesel-1.png",
    dimensions: { length: '53.5"', width: '28.75"', height: '42"', weight: "745 lbs" },
    description: "Built with a powder coated steel frame, this series holds up on even the most demanding jobsites. It's ideal for cleaning heavy equipment and large surfaces.",
    specSheet: "/uploads/2024/10/HDB-Series-Skid-Gasoline_Diesel-Belt-Drive_Enzos-2.pdf",
  },
  {
    model: "HDS Series",
    partNumber: "#HDS-3505-0V6G",
    discharge: "4.7 GPM at 3,500 PSI",
    image: "/uploads/2024/10/HDS-Series-Skid-Gasoline_Diesel.png",
    dimensions: { length: '50"', width: '34"', height: '46"', weight: "854 lbs" },
    description: "Most reliable for the heaviest construction applications, the HDS Series is a powerhouse. Features a wraparound frame with stainless-steel panels for maximum durability.",
    specSheet: "/uploads/2024/10/HDS-Series-Skid-Gasoline_Diesel-Belt-Drive_Enzos-1.pdf",
  },
];

export default function MiTMGasolineHotWaterSkid() {
  return (
    <>
      <PageHero title="Mi-T-M Gasoline Hot Water Skid" subtitle="Skid-mounted gas-powered hot water pressure washers — perfect for mobile wash trucks." />
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
      <CTASection title="Find the Right Skid Unit" description="Contact Enzo's today for help selecting the right Mi-T-M skid unit." />
    </>
  );
}
