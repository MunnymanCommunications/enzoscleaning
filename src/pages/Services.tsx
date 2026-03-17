import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

const serviceCards = [
  {
    title: "Free Consultations",
    description: "Get a consultation with our team to help find the right solution for your operation.",
    image: "https://enzoscleaning.com/wp-content/uploads/2020/11/Enzo-Still-10.jpg",
    link: "/services/free-consultations/",
  },
  {
    title: "Service & Repair",
    description: "Get your equipment back working correctly with our trained service and repair technicians.",
    image: "https://enzoscleaning.com/wp-content/uploads/2020/09/Service-Repair.jpg",
    link: "/services/pressure-washer-service-repair/",
  },
  {
    title: "Scheduled Maintenance",
    description: "Downtime is preventable with proper upkeep and maintenance. Let us show you how.",
    image: "https://enzoscleaning.com/wp-content/uploads/2020/11/Enzo-Still-13.jpg",
    link: "/services/scheduled-maintenance/",
  },
  {
    title: "Wash Bay Design",
    description: "Create the perfect space for cleaning your vehicles with Enzo's wash bay design services.",
    image: "https://enzoscleaning.com/wp-content/uploads/2020/11/Enzo-Still-8.jpg",
    link: "/cleaning-equipment/wash-bay-design/",
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        title="Your Services"
        subtitle="At Enzo's Cleaning Solutions, you have a need, we have the solution. Learn more about our full range of services and capabilities below."
      />
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {serviceCards.map((card) => (
              <Link key={card.title} to={card.link} className="group overflow-hidden rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img src={card.image} alt={card.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold">{card.title}</h3>
                  <p className="mt-2 text-muted-foreground">{card.description}</p>
                  <span className="mt-3 inline-block font-semibold text-primary">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="bg-muted py-16">
        <div className="container max-w-4xl">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/EFv5gxKsMSo"
              title="Enzo's Cleaning Solutions | Westfield Fire & Rescue Installation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <CTASection title="Let Us Help You Find the Right Solution" description="Contact our team today to discuss your cleaning needs." />
    </>
  );
}
