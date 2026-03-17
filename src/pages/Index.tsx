import { Link } from "react-router-dom";
import { CheckCircle, Wrench, Settings } from "lucide-react";
import CTASection from "@/components/shared/CTASection";

const serviceCards = [
  {
    title: "Free Consultations",
    description: "Let us visit your operation and provide insights and solutions to make your work easier.",
    image: "https://enzoscleaning.com/wp-content/uploads/2021/01/Enzos-Free-Consultations.jpg",
    link: "/services/free-consultations/",
  },
  {
    title: "Service & Repair",
    description: "At your location or ours, the Enzo's team handles pressure washer and other cleaning system repairs.",
    image: "https://enzoscleaning.com/wp-content/uploads/2021/01/Enzos-Service-and-Repair.jpg",
    link: "/services/pressure-washer-service-repair/",
  },
  {
    title: "Preventive Maintenance",
    description: "The best way to handle repairs? Prevent them. Let us help handle your maintenance and upkeep.",
    image: "https://enzoscleaning.com/wp-content/uploads/2021/01/Enzos-Preventive-Maintenance.jpg",
    link: "/services/scheduled-maintenance/",
  },
];

const productCards = [
  {
    title: "Hotsy Equipment",
    image: "https://enzoscleaning.com/wp-content/uploads/2020/10/Electric-Pump-Fuel-Oil-Heat-2.jpg",
    link: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/",
  },
  {
    title: "Mi-T-M Equipment",
    image: "https://enzoscleaning.com/wp-content/uploads/2020/10/natural-gas-hot-water-2-1.jpg",
    link: "/cleaning-equipment/mi-t-m/",
  },
  {
    title: "Detergents & Disinfectants",
    image: "https://enzoscleaning.com/wp-content/uploads/2020/09/vog.jpg",
    link: "/detergents/",
  },
  {
    title: "The Neutralizer – Undercarriage Unit",
    image: "https://enzoscleaning.com/wp-content/uploads/2020/10/neutralizer.jpg",
    link: "/cleaning-equipment/under-carriage-sprayers/the-neutralizer/",
  },
];

const cleanPlanSteps = [
  { num: 1, title: "Efficient", description: "Comprehensive tune up of your present system to get everything working at peak performance." },
  { num: 2, title: "Effective", description: "Accessories to increase effectiveness and efficiency of your system. Complete analysis of your chemical needs to meet each and every application." },
  { num: 3, title: "Safe", description: "A Scheduled Maintenance Plan customized to your situation with operator and safety training to ensure proper system usage." },
];

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[500px] items-center justify-center bg-enzo-dark text-primary-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://enzoscleaning.com/wp-content/uploads/2020/09/header-bg.jpg)" }}
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 container text-center py-20">
          <h1 className="text-3xl font-black uppercase md:text-5xl lg:text-6xl leading-tight">
            Are You Frustrated With Your Pressure Washer?
          </h1>
          <Link
            to="/contact-us/"
            className="mt-8 inline-block rounded-md border-2 border-primary-foreground px-10 py-4 text-lg font-bold hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Let's Talk
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold md:text-4xl">We Consistently KNOW Clean</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            <strong>Enzo's Cleaning Solutions</strong> specializes in sales, service, and installation of wash bay equipment, pressure washers, undercarriage washers, detergents and cleaning equipment. Let our team help you find the cleaning equipment, supplies and service you need to <strong>clean more efficiently, effectively and safely</strong> every day.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { icon: CheckCircle, label: "Cleaning Equipment", link: "/cleaning-equipment/" },
              { icon: Wrench, label: "Repair & Maintenance Services", link: "/services/pressure-washer-service-repair/" },
              { icon: Settings, label: "Detergent & Disinfectants", link: "/disinfecting/" },
            ].map((item) => (
              <Link key={item.label} to={item.link} className="flex flex-col items-center gap-3 rounded-lg p-6 hover:bg-muted transition-colors">
                <item.icon className="h-10 w-10 text-primary" />
                <h3 className="font-heading text-lg font-bold">{item.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">Your Services</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {serviceCards.map((card) => (
              <Link key={card.title} to={card.link} className="group overflow-hidden rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img src={card.image} alt={card.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold">{card.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-primary">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services/" className="text-primary font-semibold hover:underline">All Services →</Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">Our Products</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productCards.map((card) => (
              <Link key={card.title} to={card.link} className="group overflow-hidden rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img src={card.image} alt={card.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-heading text-sm font-bold">{card.title}</h4>
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
              src="https://www.youtube.com/embed/ejZBvIK-Bm8"
              title="Enzo's Cleaning Solutions | Wash Bay Demo | Bus Garage"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold">Custom Wash Bay Solutions</h3>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Enzo's has helped design and install wash bay solutions for clients from Maine to Alabama – and everywhere in between. Our uniquely designed under carriage cleaning system, The Neutralizer, helps make maintaining your fleet easy.
            </p>
          </div>
        </div>
      </section>

      {/* CLEAN Plan */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">Our CLEAN Accountability Plan</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
            Our CLEAN Accountability Plan is defined to keep your system working more efficiently, effectively and safe each and every time you pull the trigger.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {cleanPlanSteps.map((step) => (
              <div key={step.num} className="rounded-lg border bg-card p-8 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {step.num}
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services/scheduled-maintenance/" className="inline-block rounded-md bg-primary px-8 py-3 font-bold text-primary-foreground hover:bg-secondary transition-colors">
              Request Your Plan
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        description="Let our team help you find the cleaning equipment, supplies and service you need."
      />
    </>
  );
}
