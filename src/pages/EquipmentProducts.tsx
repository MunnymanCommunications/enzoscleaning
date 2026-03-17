import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const categories = [
  { title: "Pressure Washers", link: "/cleaning-equipment/pressure-washers/", desc: "Hot and cold water models from Hotsy and Mi-T-M." },
  { title: "Detergents & Degreasers", link: "/detergents/", desc: "Specialized chemistries for every cleaning challenge." },
  { title: "Floor Cleaning", link: "/cleaning-equipment/floor-cleaning/", desc: "Sweepers and scrubbers from Kärcher and Minuteman." },
  { title: "Accessories", link: "/cleaning-equipment/pressure-washers-accessories/", desc: "Nozzles, wands, spray guns and more." },
  { title: "Disinfecting", link: "/disinfecting/", desc: "Disinfectants, sprayers and vapor cleaning systems." },
  { title: "Val 6 Heaters", link: "/heaters/", desc: "Portable infrared heating for any work space." },
];

export default function EquipmentProducts() {
  return (
    <>
      <PageHero title="Equipment & Products" subtitle="Pressure washers, air compressors, degreasers and accessories." />
      <section className="section-padding">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {categories.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.08}>
                <Link to={c.link} className="block bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow h-full">
                  <h3 className="font-heading font-bold">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{c.desc}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Find What You Need" description="Contact Enzo's for any cleaning equipment or products." />
    </>
  );
}
