import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

const products = [
  {
    title: "Disinfectants & Sanitizers",
    description: "High-efficiency solutions to get rid of germs, bacteria, molds & more.",
    image: "/uploads/2020/09/images.jpg",
    link: "/disinfecting/our-disinfectants-sanitizers/",
  },
  {
    title: "Sprayers",
    description: "Apply cleaning solutions quickly and easily with a sprayer solution.",
    image: "/uploads/2020/09/download-1.jpg",
    link: "/disinfecting/our-disinfectant-sprayers/",
  },
  {
    title: "Vapore Cleaners",
    description: "Dry vapor cleaning systems that blast away germs with high heat.",
    image: "/uploads/2020/10/Preventive_sm.jpg",
    link: "/disinfecting/vapore-dry-vapor-disinfecting/",
  },
];

export default function Disinfecting() {
  return (
    <>
      <PageHero title="Disinfecting" subtitle="Find the right equipment and supplies to keep your workspace clean and sanitized." />
      <section className="py-16">
        <div className="container">
          <p className="mx-auto max-w-3xl text-center text-muted-foreground">
            Germs, bacteria and other contaminants can cause myriad issues with operations. Find the right equipment and supplies to keep your workspace clean and sanitized at Enzo's.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {products.map((p) => (
              <Link key={p.title} to={p.link} className="group overflow-hidden rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  <span className="mt-3 inline-block font-semibold text-primary">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Get Powerful Disinfecting Supplies at Enzo's" description="Find powerful disinfectants and sanitizers and the right equipment to ensure a thorough and complete clean." />
    </>
  );
}
