import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

const hotsyCategories = [
  { title: "Electric Pump, Fuel Oil Heat", image: "/uploads/2021/04/Electric-Pump-Fuel-Oil-Heat-Pressure-Washer.jpg", link: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/hotsy-electric-pump-fuel-oil-heat/" },
  { title: "Gasoline Pump, Fuel Oil Heat", image: "/uploads/2021/04/Hotsy-Gasoline-Pump-Fuel-Oil-Heat.jpg", link: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/hotsy-gasoline-pump-fuel-oil-heat/" },
  { title: "Natural Gas Hot Water", image: "/uploads/2021/04/Natural-Gas-Hot-Water.jpg", link: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/natural-gas-hot-water/" },
  { title: "Electric Cold Water", image: "/uploads/2021/04/Electric-Cold-Water-Power-Washer.jpg", link: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/electric-cold-water/" },
  { title: "Gasoline Cold Water", image: "/uploads/2021/04/Hotsy-Gasoline-Cold-Water-Washer.jpg", link: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/gasoline-cold-water/" },
  { title: "Diesel Hot Water", image: "/uploads/2021/04/Diesel-Hot-Water-Pressure-Washer.jpg", link: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/diesel-cold-water/" },
];

export default function HotsyPressureWashers() {
  return (
    <>
      <PageHero title="Hotsy Pressure Washers" subtitle="Choose from hot water or cold water models, and select the power source that works best for your operation." />
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-center mb-8">
            <img src="/uploads/2021/04/Hotsy-Logo.png" alt="Hotsy Logo" className="h-16" />
          </div>
          <h2 className="text-center text-2xl font-bold">Find Your Hotsy</h2>
          <p className="text-center mt-2 text-muted-foreground">Narrow down your search for the right Hotsy pressure washer by using the categories below.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hotsyCategories.map((cat) => (
              <Link key={cat.title} to={cat.link} className="group overflow-hidden rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img src={cat.image} alt={cat.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-heading font-bold">{cat.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Find the Right Pressure Washer" description="Get the cleaning power you need. Let our team help. Contact Enzo's today for help selecting the right pressure washer for your operations." />
    </>
  );
}
