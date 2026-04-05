import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Electric Hot Water",
    image: "/uploads/2020/10/electric-hot-water-1.jpg",
    link: "/cleaning-equipment/mi-t-m/electric-hot-water/",
    desc: "Clean, quiet hot water cleaning powered entirely by electricity. Ideal for indoor wash bays and enclosed facilities.",
  },
  {
    title: "Natural Gas Hot Water",
    image: "/uploads/2020/10/natural-gas-hot-water-2-1.jpg",
    link: "/cleaning-equipment/mi-t-m/natural-gas-hot-water/",
    desc: "Lower fuel costs with natural gas heat. Perfect for permanent installations and high-volume cleaning operations.",
  },
  {
    title: "Gasoline Hot Water Portable",
    image: "/uploads/2020/10/gasoline-hot-water-portable-3.jpg",
    link: "/cleaning-equipment/mi-t-m/gasoline-hot-water-portable/",
    desc: "Portable hot water power that goes wherever you need it. No electrical hookup required — great for remote job sites.",
  },
  {
    title: "Gasoline Hot Water Skid",
    image: "/uploads/2020/10/gasoline-hot-water-skid-4.jpg",
    link: "/cleaning-equipment/mi-t-m/gasoline-hot-water-skid/",
    desc: "Skid-mounted for trucks, trailers, and permanent mounting. Maximum power and portability for mobile cleaning operations.",
  },
  {
    title: "Electric Cold Water",
    image: "/uploads/2020/10/electric-cold-water-8.jpg",
    link: "/cleaning-equipment/mi-t-m/electric-cold-water/",
    desc: "Compact, fume-free cold water cleaning for indoor facilities, warehouses, and light commercial applications.",
  },
  {
    title: "Gas Air Compressors",
    image: "/uploads/2020/10/air-compresso-rgas-6.jpg",
    link: "/cleaning-equipment/mi-t-m/air-compressor-gas/",
    desc: "Industrial gas-powered air compressors built for job sites. Reliable compressed air wherever you need it.",
  },
  {
    title: "Electric Air Compressors",
    image: "/uploads/2020/10/air-compressor-electric-7.jpg",
    link: "/cleaning-equipment/mi-t-m/air-compressor-electric/",
    desc: "Quiet, clean electric air compressors for shops, garages, and indoor applications.",
  },
];

export default function MiTM() {
  return (
    <>
      <PageHero
        title="Mi-T-M Pressure Washers & Equipment"
        subtitle="Experience the power, performance and reliability of Mi-T-M. Built to tackle the dirtiest jobs."
      />
      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading">Find Your Mi-T-M</h2>
            <p className="text-center mt-2 text-muted-foreground max-w-2xl mx-auto">
              Mi-T-M manufactures a complete line of pressure washers and air compressors — from portable cold water units to high-output skid-mounted systems. Choose your power source and heating method below.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.08}>
                <Link to={cat.link} className="group overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all block h-full">
                  <div className="aspect-square overflow-hidden">
                    <img src={cat.image} alt={cat.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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
      <CTASection title="Find the Right Mi-T-M Product" description="Not sure which model fits your operation? Our team will help you choose the right equipment for the job. Contact Enzo's today." />
    </>
  );
}
