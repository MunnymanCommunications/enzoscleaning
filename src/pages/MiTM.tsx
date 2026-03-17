import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const categories = [
  { title: "Electric Hot Water", image: "https://enzoscleaning.com/wp-content/uploads/2020/10/electric-hot-water-1.jpg", link: "/cleaning-equipment/mi-t-m/electric-hot-water/" },
  { title: "Natural Gas Hot Water", image: "https://enzoscleaning.com/wp-content/uploads/2020/10/natural-gas-hot-water-2-1.jpg", link: "/cleaning-equipment/mi-t-m/natural-gas-hot-water/" },
  { title: "Gasoline Hot Water Portable", image: "https://enzoscleaning.com/wp-content/uploads/2020/10/gasoline-hot-water-portable-3.jpg", link: "/cleaning-equipment/mi-t-m/gasoline-hot-water-portable/" },
  { title: "Gasoline Hot Water Skid", image: "https://enzoscleaning.com/wp-content/uploads/2020/10/gasoline-hot-water-skid-4.jpg", link: "/cleaning-equipment/mi-t-m/gasoline-hot-water-skid/" },
  { title: "Electric Cold Water", image: "https://enzoscleaning.com/wp-content/uploads/2020/10/electric-cold-water-8.jpg", link: "/cleaning-equipment/mi-t-m/electric-cold-water/" },
  { title: "Gas Air Compressors", image: "https://enzoscleaning.com/wp-content/uploads/2020/10/air-compresso-rgas-6.jpg", link: "/cleaning-equipment/mi-t-m/air-compressor-gas/" },
  { title: "Electric Air Compressors", image: "https://enzoscleaning.com/wp-content/uploads/2020/10/air-compressor-electric-7.jpg", link: "/cleaning-equipment/mi-t-m/air-compressor-electric/" },
];

export default function MiTM() {
  return (
    <>
      <PageHero
        title="Mi-T-M Pressure Washers"
        subtitle="Experience the power, performance and reliability of Mi-T-M. Built to tackle the dirtiest jobs."
      />
      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading">Find Your Mi-T-M</h2>
            <p className="text-center mt-2 text-muted-foreground max-w-2xl mx-auto">
              Narrow down your search for the right Mi-T-M by using the categories below. Choose from hot water or cold water models and select the power source that works best for your operation.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.08}>
                <Link to={cat.link} className="group overflow-hidden rounded-xl bg-card shadow-md hover:shadow-lg transition-shadow block">
                  <div className="aspect-square overflow-hidden">
                    <img src={cat.image} alt={cat.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-heading font-bold">{cat.title}</h3>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Find the Right Mi-T-M Product" description="Get the cleaning power you need. Let our team help. Contact Enzo's today for help selecting the right product for your operations." />
    </>
  );
}
