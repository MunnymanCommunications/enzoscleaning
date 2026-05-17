import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import PartnersMarquee from "@/components/shared/PartnersMarquee";

const categories = [
  { title: "Pressure Washers", link: "/cleaning-equipment/pressure-washers/", desc: "Hot and cold water models from Hotsy and Mi-T-M." },
  { title: "Detergents", link: "/detergents/", desc: "Degreasers, truck wash, construction and specialty chemistries." },
  { title: "Floor Cleaning", link: "/cleaning-equipment/floor-cleaning/", desc: "Sweepers and scrubbers from Kärcher and Minuteman." },
  { title: "Accessories", link: "/cleaning-equipment/pressure-washers-accessories/", desc: "Nozzles, wands, spray guns, surface cleaners." },
  { title: "Disinfecting", link: "/disinfecting/", desc: "Disinfectants, sprayers, Vapore systems." },
  { title: "Heaters", link: "/heaters/", desc: "VAL6 portable infrared heaters." },
];

export default function Shop() {
  return (
    <>
      <PageHero title="Shop" subtitle="Browse our full catalog of cleaning equipment and supplies." />
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="mb-10 flex justify-center rounded-2xl border border-border bg-white p-8 shadow-sm">
              <img
                src="/uploads/enzos-logo-stem.jpg"
                alt="Enzo's Cleaning Solutions logo — shop pressure washers, detergents, floor cleaning equipment and disinfectants in Ohio"
                className="max-h-40 w-auto"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto mb-10">
              Explore Enzo's complete product lineup. From industrial pressure washers to specialized detergents, we have everything you need to keep your operation CLEAN.
            </p>
          </AnimatedSection>
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
      <PartnersMarquee />
      <CTASection title="Need Help Finding Something?" description="Contact Enzo's and our team will point you in the right direction." />
    </>
  );
}
