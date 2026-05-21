import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import EquipmentModelCard from "@/components/shared/EquipmentModelCard";

const models = [
  {
    model: "BX Series with Hose Reel",
    partNumber: "Gasoline Cold Water",
    discharge: "Honda gas engine • Belt-drive triplex pump",
    image: "/uploads/hotsy/hotsy-bx-w-reel.jpg",
    dimensions: { length: "Varies", width: "Varies", height: "Varies", weight: "Contact" },
    description: "Portable Honda-powered cold water pressure washer with built-in hose reel for fast deployment. Belt-drive design extends pump life and reduces vibration — ideal for fleet washing, construction sites, and any mobile cleaning operation where electricity isn't available.",
  },
  {
    model: "DB Series with Hose Reel",
    partNumber: "Gasoline Cold Water",
    discharge: "Honda gas engine • Direct-drive triplex pump",
    image: "/uploads/hotsy/hotsy-db-w-reel.jpg",
    dimensions: { length: "Varies", width: "Varies", height: "Varies", weight: "Contact" },
    description: "Compact direct-drive Honda-powered cold water unit with integrated hose reel. Lightweight and maneuverable for mobile contractors, farms, and road jobs — fuel up and clean anywhere.",
  },
];

export default function HotsyGasolineColdWater() {
  return (
    <>
      <PageHero
        title="Hotsy Gasoline Cold Water Pressure Washers"
        subtitle="Portable, gas-powered cleaning power for jobs where electricity isn't available."
        bgImage="/uploads/hotsy/hotsy-bx-w-reel.jpg"
      />
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="/uploads/2024/09/hotsy-logo.png" alt="Hotsy Logo" className="h-14" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              Enjoy true portability with a Honda gas-powered cold water Hotsy pressure washer. Perfect for road jobs, mobile cleaning vehicles, construction sites, and remote applications — no electrical outlet needed.
            </p>
          </AnimatedSection>

          <div className="mt-12 space-y-8">
            {models.map((m, i) => (
              <EquipmentModelCard key={m.model} {...m} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Find the Right Gas Cold Water Washer" description="Our team will match you with the perfect Honda-powered Hotsy. Contact Enzo's today." />
    </>
  );
}
