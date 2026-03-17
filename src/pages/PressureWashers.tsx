import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ProductCard from "@/components/shared/ProductCard";

const categories = [
  { title: "Hotsy Pressure Washers", image: "https://enzoscleaning.com/wp-content/uploads/2020/09/Consultation.jpg", link: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/", description: "Dozens of hot- and cold-water pressure washers backed by the industry's best warranty." },
  { title: "Mi-T-M Pressure Washers", image: "https://enzoscleaning.com/wp-content/uploads/2020/09/Service-Repair.jpg", link: "/cleaning-equipment/mi-t-m/", description: "Wide variety of cold and hot-water models powered by electricity or natural gas." },
];

export default function PressureWashers() {
  return (
    <>
      <PageHero title="Pressure Washers" subtitle="At Enzo's we have a full line of pressure washers for every application." />
      <section className="section-padding">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {categories.map((cat, i) => (
              <ProductCard key={cat.title} {...cat} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Don't Wait. Call Today" description="Let our team help you find the right pressure washer for your operations." />
    </>
  );
}
