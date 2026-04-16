import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import EquipmentModelCard from "@/components/shared/EquipmentModelCard";

const gasolineModels = [
  {
    model: "Single Stage: 5 Gallon",
    partNumber: "#AM1-HH04-05M",
    discharge: "4.8 CFM at 90 PSI",
    image: "/uploads/2024/10/5-gallon-single-stage-Air-Compressor.png",
    dimensions: { length: '21"', width: '17.5"', height: '22.25"', weight: "85 lbs" },
    description: "Great for projects around the house, at a business or small property, this 5-gallon air compressor is a perfect option for do-it-yourselfers.",
    specSheet: "/uploads/2024/10/5-Gallon-Single-Stage-Gasoline_Enzos.pdf",
  },
  {
    model: "Dual Stage: 8 Gallon",
    partNumber: "#AM2-PK95-08M",
    discharge: "7.2 CFM at 175 PSI",
    image: "/uploads/2024/10/8-Gallon-Dual-Stage-Air-Compressor.png",
    dimensions: { length: '44"', width: '26"', height: '31"', weight: "337 lbs" },
    description: "This wheelbarrow style, versatile unit is perfect for new construction, remodeling and shop projects. It can be used to power a variety of air tools including paint sprayers and pneumatic drills.",
    specSheet: "/uploads/2024/10/8-Gallon-Two-Stage-Gasoline_Enzos.pdf",
  },
  {
    model: "Single Stage: 8 Gallon",
    partNumber: "#AM1-PH65-08M",
    discharge: "13.9 CFM at 90 PSI",
    image: "/uploads/2024/10/8-Gallon-Single-Stage-Air-Compressor.png",
    dimensions: { length: '44"', width: '18.5"', height: '27"', weight: "200 lbs" },
    description: "The 8-gallon air compressor is essential for powering air tools. The wheelbarrow design allows for easy portability from one job to the next.",
    specSheet: "/uploads/2024/10/8-Gallon-Single-Stage-Gasoline_Enzos.pdf",
  },
  {
    model: "Single Stage: 20 Gallon",
    partNumber: "#AM1-PH65-20M",
    discharge: "13.9 CFM at 90 PSI",
    image: "/uploads/2024/10/20-Gallon-Single-Stage-Air-Compressor.png",
    dimensions: { length: '37"', width: '23.5"', height: '33"', weight: "272 lbs" },
    description: "Power a wide variety of air tools with the 20-gallon single stage air compressor. Contractors love it for the maximum air storage to get jobs done right.",
    specSheet: "/uploads/2024/10/20-Gallon-Single-Stage-Gasoline_Enzos.pdf",
  },
  {
    model: "Dual Stage: 20 Gallon",
    partNumber: "#AM2-SH09-20M",
    discharge: "17.2 CFM at 175 PSI",
    image: "/uploads/2024/10/20-Gallon-Dual-Stage-Air-Compressor.png",
    dimensions: { length: '46"', width: '26"', height: '39.5"', weight: "356 lbs" },
    description: "Mount this unit in the back of a service truck or trailer to service large equipment in remote locations. This two stage, 20-gallon air compressor offers large air storage capacity and delivers optimum air power.",
    specSheet: "/uploads/2024/10/20-Gallon-Two-Stage-Gasoline_Enzos.pdf",
  },
  {
    model: "Dual Stage: 30 Gallon Base-Mount",
    partNumber: "#AM2-SH09-30ME",
    discharge: "17.2 CFM at 175 PSI",
    image: "/uploads/2024/10/30-Gallon-Base-Mount-Two-Stage-Gasolin.png",
    dimensions: { length: '40.5"', width: '17.5"', height: '44.5"', weight: "460 lbs" },
    description: "Designed with a powder coated ASME receiver tank, you will experience proven performance from the 30-gallon and base-mount air compressors time after time.",
    specSheet: "/uploads/2024/10/30-Gallon-Base-Mount-Two-Stage-Gasoline_Enzos.pdf",
  },
  {
    model: "Dual Stage: 30/80 Gallon & Base-Mount",
    partNumber: "#ABS-14K-30H",
    discharge: "29 CFM at 175 PSI",
    image: "/uploads/2024/10/30-80-Gallon-Base-Mount-Two-Stage-Gasoline.png",
    dimensions: { length: '38"', width: '23"', height: '46"', weight: "480 lbs" },
    description: "Commonly used for industrial and automotive applications, these air compressors can be mounted in the back of a trailer or service truck to take to the most demanding jobsites.",
    specSheet: "/uploads/2024/10/30-80-Gallon-Base-Mount-Two-Stage-Gasoline_Enzos.pdf",
  },
];

const dieselModels = [
  {
    model: "Diesel Dual Stage: 30 Gallon",
    partNumber: "#ABS-9KD-30H",
    discharge: "29 CFM at 175 PSI",
    image: "/uploads/2024/10/30-Gallon-Diesel-Dual-Stage-Air-Compressor.png",
    dimensions: { length: '38"', width: '23"', height: '46.5"', weight: "540 lbs" },
    description: "This two stage diesel-powered air compressor provides consistent and reliable air power for industrial, automotive and service body applications.",
    specSheet: "/uploads/2024/10/30-Gallon-Two-Stage-Diesel_Enzos.pdf",
  },
];

const comboModels = [
  {
    model: "8 Gallon Air Compressor & Generator",
    partNumber: "#AG2-SM14-08M1",
    discharge: "16.4 CFM at 90 PSI",
    image: "/uploads/2024/10/8-Gallon-Air-Compressor-and-Generator-Combo.png",
    dimensions: { length: '44"', width: '22"', height: '34"', weight: "465 lbs" },
    description: "Combining two machines into one, this air compressor/generator combination unit is great for completing multiple jobs requiring both air power and electricity.",
    specSheet: "/uploads/2024/10/8-Gallon-Base-Mount-Single_Two-Stage-Gasoline_Enzos.pdf",
  },
  {
    model: "30 Gallon Gasoline Air Compressor & Generator",
    partNumber: "#AG2-SH13-30M",
    discharge: "16.4 CFM at 90 PSI",
    image: "/uploads/2024/10/30-Gallon-Gasoline-Air-Compressor-and-Generator-Combo.png",
    dimensions: { length: '40"', width: '24.5"', height: '45"', weight: "550 lbs" },
    description: "The 30-gallon two stage air compressor/generators tie two units into one for optimal power remodelers, contractors and DIYers appreciate.",
    specSheet: "/uploads/2024/10/30-Gallon-Two-Stage-Gasoline_Enzos.pdf",
  },
  {
    model: "Diesel 30 Gallon Air Compressor & Generator",
    partNumber: "#AG2-SKD9-30M",
    discharge: "16.4 CFM at 90 PSI",
    image: "/uploads/2024/10/30-Gallon-Diesel-Dual-Stage-Air-Compressor.png",
    dimensions: { length: '41"', width: '23"', height: '47"', weight: "554 lbs" },
    description: "The diesel combination unit has the convenience of two machines in one, providing power for most any industrial and contractor need.",
    specSheet: "/uploads/2024/10/30-Gallon-Two-Stage-Diesel_Enzos-3.pdf",
  },
  {
    model: "AGW Series – Air Compressor, Generator & Welder",
    partNumber: "#AGW-SM14-30M",
    discharge: "15.7 CFM at 175 PSI",
    image: "/uploads/2024/10/AGW-Combination-Air-Compressor-Generator-and-Welder.png",
    dimensions: { length: '46"', width: '22"', height: '47"', weight: "650 lbs" },
    description: "This AGW Series combines an air compressor, generator and welder into one machine, making it the complete on-site unit to efficiently tackle numerous jobs at once.",
    specSheet: "/uploads/2024/10/AGW-Two-Stage-Gasoline_Enzos.pdf",
  },
];

export default function MiTMAirCompressorGas() {
  return (
    <>
      <PageHero title="Mi-T-M Gas & Diesel Air Compressors" subtitle="Gas and diesel-powered air compressors, generators and welders for mobile and industrial applications." />
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="/uploads/2024/09/Mi-T-M-Logo.png" alt="Mi-T-M Logo" className="h-14" />
            </div>
            <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
              Perfect for your mobile needs, Enzo's line of gas and diesel-powered Air Compressors, Generators and Welders are ready to make your work day a breeze. Get the power you need with Enzo's!
            </p>
          </AnimatedSection>

          {/* Gasoline Air Compressors */}
          <AnimatedSection delay={0.1}>
            <h2 className="font-heading text-2xl font-bold text-center mt-12 mb-8">Gasoline Air Compressors</h2>
          </AnimatedSection>
          <div className="space-y-8">
            {gasolineModels.map((m, i) => <EquipmentModelCard key={m.model} {...m} index={i} />)}
          </div>

          {/* Diesel Air Compressors */}
          <AnimatedSection delay={0.1}>
            <h2 className="font-heading text-2xl font-bold text-center mt-16 mb-8">Diesel Air Compressors</h2>
          </AnimatedSection>
          <div className="space-y-8">
            {dieselModels.map((m, i) => <EquipmentModelCard key={m.model} {...m} index={i} />)}
          </div>

          {/* Combo Units */}
          <AnimatedSection delay={0.1}>
            <h2 className="font-heading text-2xl font-bold text-center mt-16 mb-8">Air Compressor & Generator Combinations</h2>
          </AnimatedSection>
          <div className="space-y-8">
            {comboModels.map((m, i) => <EquipmentModelCard key={m.model} {...m} index={i} />)}
          </div>
        </div>
      </section>
      <CTASection title="Find the Right Air Compressor" description="Contact Enzo's today for help selecting the right Mi-T-M air compressor for your operations." />
    </>
  );
}
