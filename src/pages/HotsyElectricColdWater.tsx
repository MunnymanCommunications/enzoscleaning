import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import EquipmentModelCard from "@/components/shared/EquipmentModelCard";
import { Leaf, DollarSign, VolumeX, Wrench, Zap, Package, Building2, ShieldCheck, Home } from "lucide-react";

const models = [
  {
    model: "CWC Series",
    partNumber: "Stationary Electric Cold Water",
    discharge: "Self-contained with programmable smart control relay",
    image: "/uploads/hotsy/hotsy-cwc-series.jpg",
    dimensions: { length: "Varies", width: "Varies", height: "Varies", weight: "Contact" },
    description: "Hotsy's completely self-contained stationary, electric-powered cold water pressure washer with programmable smart control relay. Designed for permanent installation in indoor wash bays and facilities where reliable, fume-free cleaning is required.",
  },
  {
    model: "1700 Series",
    partNumber: "Stationary Electric Cold Water",
    discharge: "Belt-driven triplex pump with 7-year warranty",
    image: "/uploads/hotsy/hotsy-1700-series.jpg",
    dimensions: { length: "Varies", width: "Varies", height: "Varies", weight: "Contact" },
    description: "Reliable stationary, electric-powered cold water pressure washers featuring a Hotsy belt-driven triplex pump backed by an industry-leading 7-year warranty. Perfect for light-to-medium commercial cleaning operations.",
  },
];

const reasons = [
  { icon: Leaf, title: "Eco-Friendly Operation", body: "Zero direct emissions during use — a greener choice than gas-powered models." },
  { icon: DollarSign, title: "Lower Operating Cost", body: "Electricity is generally cheaper than gasoline, saving on fuel costs over the unit's lifespan." },
  { icon: VolumeX, title: "Reduced Noise", body: "Electric motors run much quieter than combustion engines — better for indoor environments." },
  { icon: Wrench, title: "Minimal Maintenance", body: "Fewer moving parts means less upkeep — no oil changes, spark plugs, or carburetor issues." },
  { icon: Zap, title: "Instant Start-Up", body: "Press a button or flip a switch — no pull-starts or choke adjustments needed." },
  { icon: Package, title: "Lightweight and Portable", body: "Typically lighter and more compact, easier to transport, maneuver, and store." },
  { icon: Building2, title: "Optimized for Light Commercial", body: "Reliable pressure for facility maintenance, vehicle washing, and indoor cleaning where fumes are restricted." },
  { icon: ShieldCheck, title: "No Fuel Storage Hassles", body: "Eliminates the need to store flammable gasoline, contributing to a safer storage area." },
  { icon: Home, title: "Versatile Indoor Use", body: "Without exhaust fumes, safe to use in garages, warehouses, or covered patios with limited ventilation." },
];

export default function HotsyElectricColdWater() {
  return (
    <>
      <PageHero
        title="Hotsy Electric Cold Water Pressure Washers"
        subtitle="Plug-and-play, fume-free commercial cleaning power. Quiet, efficient, and built for indoor operations."
      />
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="/uploads/2024/09/hotsy-logo.png" alt="Hotsy Logo" className="h-14" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              Hotsy electric cold water pressure washers deliver reliable, commercial-grade cleaning without the fumes or noise of gas engines. Ideal for indoor wash bays, food processing plants, warehouses, and light-to-medium duty applications.
            </p>
          </AnimatedSection>

          <div className="mt-12 space-y-8">
            {models.map((m, i) => (
              <EquipmentModelCard key={m.model} {...m} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">9 Reasons to Buy an Electric Cold Water Pressure Washer</h2>
            <p className="text-center text-muted-foreground mt-3 max-w-2xl mx-auto">
              Why so many commercial operators are choosing electric-powered units for their indoor and light-duty cleaning needs.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 0.05}>
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <r.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg">{r.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{r.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Find the Right Electric Pressure Washer" description="Our team will match you with the perfect Hotsy electric cold water unit for your facility. Contact Enzo's today." />
    </>
  );
}
