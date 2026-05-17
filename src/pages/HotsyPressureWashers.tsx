import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ArrowRight } from "lucide-react";

const hotsyCategories = [
  {
    title: "Electric Pump, Fuel Oil Heat",
    image: "/uploads/2021/04/Electric-Pump-Fuel-Oil-Heat-Pressure-Washer.jpg",
    link: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/hotsy-electric-pump-fuel-oil-heat/",
    desc: "Electric motor drives the pump while fuel oil heats the water — ideal for indoor or covered facilities where exhaust fumes are a concern.",
  },
  {
    title: "Gasoline Pump, Fuel Oil Heat",
    image: "/uploads/hotsy/hotsy-gasoline-pump-fuel-oil-heat.jpg",
    alt: "Hotsy gasoline pump, fuel oil heat hot water pressure washer — portable skid-mounted commercial unit available at Enzo's Cleaning Systems in Ohio",
    link: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/hotsy-gasoline-pump-fuel-oil-heat/",
    desc: "Gasoline engine provides portability while fuel oil heat delivers hot water power. Perfect for outdoor job sites with no electrical hookup.",
  },
  {
    title: "Natural Gas Hot Water",
    image: "/uploads/2021/04/Natural-Gas-Hot-Water.jpg",
    link: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/natural-gas-hot-water/",
    desc: "Lower operating costs with natural gas heating. Great for permanent installations in wash bays and facilities with a gas line.",
  },
  {
    title: "Electric Cold Water",
    image: "/uploads/hotsy/hotsy-electric-cold-water.jpg",
    alt: "Hotsy electric cold water pressure washer — quiet, fume-free stainless steel wall-mount unit for indoor commercial cleaning at Enzo's Cleaning Systems in Ohio",
    link: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/electric-cold-water/",
    desc: "Quiet, fume-free cold water cleaning for indoor facilities, food processing plants, and light-duty commercial applications.",
  },
  {
    title: "Gasoline Cold Water",
    image: "/uploads/hotsy/hotsy-gasoline-cold-water.jpg",
    alt: "Hotsy gasoline cold water pressure washer — portable Honda-powered commercial unit for outdoor and remote job sites at Enzo's Cleaning Systems in Ohio",
    link: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/gasoline-cold-water/",
    desc: "Portable cold water power for outdoor and remote applications where electricity isn't available.",
  },
  {
    title: "Diesel Hot Water",
    image: "/uploads/hotsy/hotsy-diesel-hot-water.jpg",
    alt: "Hotsy diesel hot water pressure washer — heavy-duty skid-mounted industrial unit for the toughest commercial cleaning jobs at Enzo's Cleaning Systems in Ohio",
    link: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/diesel-cold-water/",
    desc: "Diesel-powered pump and heat for the toughest commercial and industrial cleaning jobs — built for heavy daily use.",
  },
];

export default function HotsyPressureWashers() {
  return (
    <>
      <PageHero title="Hotsy Pressure Washers" subtitle="The #1 name in hot water pressure washers. Choose from hot water or cold water models and select the power source that works best for your operation." />
      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center justify-center mb-8">
              <img src="/uploads/2021/04/Hotsy-Logo.png" alt="Hotsy Logo" className="h-16" />
            </div>
            <h2 className="text-center text-2xl font-bold font-heading">Find Your Hotsy</h2>
            <p className="text-center mt-2 text-muted-foreground max-w-2xl mx-auto">
              Hotsy builds the most trusted pressure washers in the industry — from compact electric models to heavy-duty diesel units. Narrow down your search by power source and heating method below.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hotsyCategories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.08}>
                <Link to={cat.link} className="group overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all block h-full">
                  <div className="aspect-square overflow-hidden">
                    <img src={cat.image} alt={(cat as any).alt ?? cat.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-lg">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{cat.desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3">
                      View Models <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Find the Right Pressure Washer" description="Not sure which Hotsy is right for your operation? Let our team match you with the perfect machine. Contact Enzo's today." />
    </>
  );
}
