import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

const categories = [
  { title: "Transportation", link: "/detergents/transportation-truck-bus-wash/" },
  { title: "Construction", link: "/detergents/construction-equipment-cleaning/" },
  { title: "Degreasers", link: "/detergents/degreasers/" },
  { title: "Specialty", link: "/detergents/specialty-cleaning-products/" },
  { title: "Restoration", link: "/detergents/restoration-detergents/" },
];

export default function Detergents() {
  return (
    <>
      <PageHero
        title="Detergents"
        subtitle="For everything you need clean, Enzo's offers a detergent cleaning solution to get the job done."
        bgImage="/uploads/2020/11/hotsy_0003_Layer-0.jpg"
      />
      <section className="py-16">
        <div className="container">
          <p className="mx-auto max-w-3xl text-center text-muted-foreground">
            Our selection of specially formulated detergents make it easy to clean specific types of dirt, grime and grease. Whether you work in construction or transportation, or need a specific solution for unique cleaning situations, trust the Enzo's team to find the right option for you.
          </p>
          <h2 className="mt-12 text-center text-2xl font-bold">Detergent Categories</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                to={cat.link}
                className="group flex items-center justify-center rounded-lg border bg-card p-8 text-center shadow-sm hover:shadow-md hover:border-primary transition-all"
              >
                <h3 className="font-heading text-lg font-bold group-hover:text-primary transition-colors">{cat.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Get Detergents Made for Your Needs"
        description="Enzo's offers many different cleaning solutions to make dirt and grime a thing of the past. Let us help find the right option for you."
      />
    </>
  );
}
