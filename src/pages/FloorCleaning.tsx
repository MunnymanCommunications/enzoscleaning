import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const brands = [
  {
    title: "Kärcher Floor Cleaners",
    logo: "/uploads/2020/11/download-1.png",
    link: "/cleaning-equipment/floor-cleaning/karcher-floor-cleaners/",
  },
  {
    title: "Minuteman Floor Cleaners",
    logo: "/uploads/2020/11/minuteman-logoLarge.png",
    link: "/cleaning-equipment/floor-cleaning/minuteman-floor-cleaners/",
  },
];

const types = [
  { title: "Floor Sweepers", link: "/cleaning-equipment/floor-cleaning/floor-sweepers/", desc: "Walk-behind and ride-on sweepers to pick up debris quickly." },
  { title: "Floor Scrubbers", link: "/cleaning-equipment/floor-cleaning/floor-scrubbers/", desc: "Deep-clean hard floors with walk-behind and ride-on scrubbers." },
];

export default function FloorCleaning() {
  return (
    <>
      <PageHero title="Floor Cleaning" subtitle="Trusted brands in floor cleaning — Kärcher and Minuteman." />
      <section className="section-padding">
        <div className="container max-w-4xl text-center">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Looking for reliable and durable floor cleaning equipment? Find trusted brands in floor cleaning at Enzo's Cleaning Solutions. Our Kärcher and Minuteman floor cleaners provide powerful cleaning from equipment consumers can rely on. Whether you need a versatile push cleaner or powerful ride-on equipment, we have the solution.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {brands.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.1}>
                <Link to={b.link} className="group block bg-card rounded-xl border border-border p-8 text-center hover:shadow-lg transition-shadow">
                  <img src={b.logo} alt={b.title} className="h-16 mx-auto mb-4 object-contain" loading="lazy" />
                  <h3 className="font-heading font-bold">{b.title}</h3>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mt-8">
            {types.map((t, i) => (
              <AnimatedSection key={t.title} delay={i * 0.1}>
                <Link to={t.link} className="block bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-heading font-bold">{t.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Find the Right Floor Cleaner" description="Get the cleaning power you need. Contact Enzo's today." />
    </>
  );
}
