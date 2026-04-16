import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import EquipmentModelCard from "@/components/shared/EquipmentModelCard";

const singleStageModels = [
  {
    model: "Work Pro Single Stage",
    partNumber: "#AM1-HE15-03QM",
    discharge: "4.2 CFM at 90 PSI",
    image: "/uploads/2024/10/5-Gallon-Single-Stage-Electric-Air-Compressor.png",
    dimensions: { length: '16"', width: '15.5"', height: '14.5"', weight: "58 lbs" },
    description: "The Work Pro Series delivers great air power for air tools such as brad staplers and nail guns. Its compact design makes it portable and easy to move from one job to the next.",
    specSheet: "/uploads/2024/10/Work-Pro-Series-Single-Stage-Electric_Gasoline_Enzos.pdf",
  },
  {
    model: "5 Gallon Single Stage",
    partNumber: "#AM1-HE02-05M",
    discharge: "4.2 CFM at 90 PSI",
    image: "/uploads/2024/10/8-Gallon-Single-Stage-Electric-Air-Compressor.png",
    dimensions: { length: '20.5"', width: '15.5"', height: '17.5"', weight: "70 lbs" },
    description: "This 5-gallon, hand-carry air compressor is perfect for small, interior jobs where space is limited and portability is essential.",
    specSheet: "/uploads/2024/10/5-Gallon-Single-Stage-Electric_Enzos.pdf",
  },
  {
    model: "8 Gallon Single Stage",
    partNumber: "#AM1-PE15-08M",
    discharge: "7.3 CFM at 90 PSI",
    image: "/uploads/2024/10/20-Gallon-Electric-Air-Compressor.png",
    dimensions: { length: '44.5"', width: '18.5"', height: '25"', weight: "190 lbs" },
    description: "The popular 8-gallon electric air compressor is a great solution for both small jobs around the home and larger jobs around the garage or workshop.",
    specSheet: "/uploads/2024/10/8-Gallon-Single-Stage-Electric_Enzos.pdf",
  },
  {
    model: "20 Gallon Single Stage",
    partNumber: "#AM1-PE02-20M",
    discharge: "8.0 CFM at 90 PSI",
    image: "/uploads/2024/10/20-Gallon-Single-Stage-Electric-Air-Compressor.png",
    dimensions: { length: '40"', width: '24"', height: '32"', weight: "272 lbs" },
    description: "The 20-gallon electric air compressor easily provides the power needed for projects where running multiple air tools is a necessity.",
    specSheet: "/uploads/2024/10/20-Gallon-Single-Stage-Electric_Enzos.pdf",
  },
];

const twoStageModels = [
  {
    model: "80 & 120 Gallon Two Stage",
    partNumber: "#ACS-23105-80H",
    discharge: "18.0 CFM at 175 PSI",
    image: "/uploads/2024/10/80-to-120-Gallon-Electric-Air-Compressor.png",
    dimensions: { length: '52"', width: '26.5"', height: '53"', weight: "660 lbs" },
    description: "These horizontal and vertical 80 and 120-gallon units are specifically designed to finish jobs quickly and efficiently in workshops, service bays and more.",
    specSheet: "/uploads/2024/10/80-120-Gallon-Two-Stage-Electric-Simplex_Enzos.pdf",
  },
  {
    model: "M-Series 80 & 120 Gallon Two Stage",
    partNumber: "#ADS-23110-120HM",
    discharge: "34.2 CFM at 175 PSI",
    image: "/uploads/2024/10/120-Gallon-two-Stage.png",
    dimensions: { length: '74"', width: '26.5"', height: '58"', weight: "1,016 lbs" },
    description: "The M Series air compressors are available in many motor configurations and offer maximum air power day-in and day-out. Choose from either a vertical or horizontal tank for your specific needs.",
    specSheet: "/uploads/2024/10/M-Series-80-120-Gallon-Two-Stage-Electric-Simplex_Enzos.pdf",
  },
];

const duplexModels = [
  {
    model: "120 Gallon Two Stage Duplex",
    partNumber: "#ADD-23310-120H",
    discharge: "68.4 CFM at 175 PSI",
    image: "/uploads/2024/10/120-Gallon-Two-Stage-Duplex-Air-Compressor.png",
    dimensions: { length: '74"', width: '26.5"', height: '58"', weight: "1,313 lbs" },
    description: "The duplex horizontal 120-gallon units are specifically designed to finish jobs quickly and efficiently in workshops, service bays and more.",
    specSheet: "/uploads/2024/10/120-Gallon-Two-Stage-Electric-Duplex_Enzos.pdf",
  },
  {
    model: "M-Series 120 Gallon Two Stage Duplex",
    partNumber: "#ACD-23375-120HM",
    discharge: "46.4 CFM at 175 PSI",
    image: "/uploads/2024/10/120-Gallon-two-Stage.png",
    dimensions: { length: '74"', width: '26.5"', height: '58"', weight: "1,029 lbs" },
    description: "The M Series horizontal air compressors are available in many motor configurations and offer maximum air power day-in and day-out.",
    specSheet: "/uploads/2024/10/M-Series-120-Gallon-Two-Stage-Electric-Duplex_Enzos.pdf",
  },
];

export default function MiTMAirCompressorElectric() {
  return (
    <>
      <PageHero title="Mi-T-M Electric Air Compressors" subtitle="Electric air compressors designed to finish jobs quickly and efficiently in workshops, service bays and more." />
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="/uploads/2024/09/Mi-T-M-Logo.png" alt="Mi-T-M Logo" className="h-14" />
            </div>
            <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
              These units are specifically designed to finish jobs quickly and efficiently in workshops, service bays and more. See below for details on our many electric air compressor options.
            </p>
          </AnimatedSection>

          {/* Single Stage */}
          <AnimatedSection delay={0.1}>
            <h2 className="font-heading text-2xl font-bold text-center mt-12 mb-8">Single Stage Electric Air Compressors</h2>
          </AnimatedSection>
          <div className="space-y-8">
            {singleStageModels.map((m, i) => <EquipmentModelCard key={m.model} {...m} index={i} />)}
          </div>

          {/* Two Stage Simplex */}
          <AnimatedSection delay={0.1}>
            <h2 className="font-heading text-2xl font-bold text-center mt-16 mb-8">Two Stage Electric Air Compressors</h2>
          </AnimatedSection>
          <div className="space-y-8">
            {twoStageModels.map((m, i) => <EquipmentModelCard key={m.model} {...m} index={i} />)}
          </div>

          {/* Two Stage Duplex */}
          <AnimatedSection delay={0.1}>
            <h2 className="font-heading text-2xl font-bold text-center mt-16 mb-8">Two Stage Duplex Electric Air Compressors</h2>
          </AnimatedSection>
          <div className="space-y-8">
            {duplexModels.map((m, i) => <EquipmentModelCard key={m.model} {...m} index={i} />)}
          </div>
        </div>
      </section>
      <CTASection title="Find the Right Air Compressor" description="Contact Enzo's today for help selecting the right electric air compressor." />
    </>
  );
}
