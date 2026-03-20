import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

const equipmentCategories = [
  {
    title: "Pressure Washers",
    subcategories: [
      { label: "Hotsy Pressure Washers", path: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/" },
      { label: "MI-T-M Pressure Washers", path: "/cleaning-equipment/mi-t-m/" },
    ],
    image: "/uploads/2020/10/pressure-washers.jpg",
  },
  {
    title: "Accessories",
    subcategories: [
      { label: "Pressure Washer Accessories", path: "/cleaning-equipment/pressure-washers-accessories/" },
    ],
    image: "/uploads/2020/10/Accessories.jpg",
  },
  {
    title: "Under Carriage",
    subcategories: [
      { label: "Under Carriage Sprayers", path: "/cleaning-equipment/under-carriage-sprayers/" },
    ],
    image: "/uploads/2020/10/Untitled-1.jpg",
  },
  {
    title: "Floor Cleaning",
    subcategories: [
      { label: "Floor Cleaners", path: "/cleaning-equipment/floor-cleaning/" },
    ],
    image: "/uploads/2020/10/floor-cleaning.jpg",
  },
];

export default function CleaningEquipment() {
  return (
    <>
      <PageHero
        title="Our Equipment"
        subtitle="Find cleaning equipment to tackle your toughest dirt, grime and soils at Enzo's Cleaning Solutions."
      />
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {equipmentCategories.map((cat) => (
              <div key={cat.title} className="overflow-hidden rounded-lg bg-card shadow-md">
                <div className="aspect-video overflow-hidden">
                  <img src={cat.image} alt={cat.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold">{cat.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {cat.subcategories.map((sub) => (
                      <li key={sub.path}>
                        <Link to={sub.path} className="text-primary font-semibold hover:underline">
                          {sub.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="bg-muted py-16">
        <div className="container max-w-4xl">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/ejZBvIK-Bm8"
              title="Enzo's Cleaning Solutions | Wash Bay Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <CTASection title="Find the Right Equipment" description="Get the cleaning power you need. Let our team help." />
    </>
  );
}
