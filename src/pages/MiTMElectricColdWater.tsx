import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import EquipmentModelCard from "@/components/shared/EquipmentModelCard";

const models = [
  {
    model: "Aluminum Series",
    partNumber: "#DC-4004-W1E3G",
    discharge: "3.9 GPM at 3,000 PSI",
    image: "https://enzoscleaning.com/wp-content/uploads/2024/10/Aluminum-Series-Electric-Pressure-Washer.png",
    dimensions: { length: '46.4"', width: '23.8"', height: '24.6"', weight: "257 lbs" },
    description: "With this powerful, electric series, quickly remove unwanted dirt and debris from most any home garage or workshop surface. Easy to use and gets the job done every time.",
    specSheet: "https://enzoscleaning.com/wp-content/uploads/2024/09/Aluminum-Series-Electric-Direct-Drive_Enzos.pdf",
  },
  {
    model: "Premium Series – Belt Drive",
    partNumber: "#DC-3004-A1E3G",
    discharge: "3.9 GPM at 4,000 PSI",
    image: "https://enzoscleaning.com/wp-content/uploads/2024/10/Premium-Series-Electric-Pressure-Washer.png",
    dimensions: { length: '45.5"', width: '32.5"', height: '30"', weight: "505 lbs" },
    description: "With up to 5000-PSI of cleaning power, this series is used for paint preparation and mold and mildew removal around commercial facilities, barns and large workshops.",
    specSheet: "https://enzoscleaning.com/wp-content/uploads/2024/09/Premium-Series-Electric-Belt-Drive_Enzos.pdf",
  },
  {
    model: "CAW Aluminum Series",
    partNumber: "#CAW-2004-0ME1",
    discharge: "3.9 GPM at 2,000 PSI",
    image: "https://enzoscleaning.com/wp-content/uploads/2024/10/CAW-Aluminum-Series-Electric-Pressure-Washer.png",
    dimensions: { length: '34"', width: '17.25"', height: '18"', weight: "248 lbs" },
    description: "This electric series can be used to clean in various locations. Mount it in a garage, shop or wash bay to blast away mud and dirt from vehicles and equipment.",
    specSheet: "https://enzoscleaning.com/wp-content/uploads/2024/10/CAW-Aluminum-Series-Electric-Direct-Drive_Enzos-1.pdf",
  },
  {
    model: "Premium Series – Stationary",
    partNumber: "#DC-3004-A1E2G",
    discharge: "3.9 GPM at 2,000 PSI",
    image: "https://enzoscleaning.com/wp-content/uploads/2024/10/Premuim-Series-Electric-Pressure-Washer.png",
    dimensions: { length: '29.5"', width: '20.5"', height: '15"', weight: "272 lbs" },
    description: "Food and beverage industries use this stationary series to keep floors, worktables and appliances spotless. Also a great addition to any wash bay.",
    specSheet: "https://enzoscleaning.com/wp-content/uploads/2024/10/Premium-Series-Electric-Stationary-Belt-Drive_Enzos-1.pdf",
  },
];

export default function MiTMElectricColdWater() {
  return (
    <>
      <PageHero title="Mi-T-M Electric Cold Water" subtitle="Electric cold water pressure washers ready to make dirt and grime a thing of the past." />
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="https://enzoscleaning.com/wp-content/uploads/2024/09/Mi-T-M-Logo.png" alt="Mi-T-M Logo" className="h-14" />
            </div>
          </AnimatedSection>
          <div className="space-y-8">
            {models.map((m, i) => <EquipmentModelCard key={m.model} {...m} index={i} />)}
          </div>
        </div>
      </section>
      <CTASection title="Find the Right Pressure Washer" description="Contact Enzo's today for help selecting the right Mi-T-M." />
    </>
  );
}
