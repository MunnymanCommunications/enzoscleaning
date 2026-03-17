import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

const team = [
  { name: "Tim & Maureen Esposito", role: "President & Director of Operations", image: "https://enzoscleaning.com/wp-content/uploads/2020/11/30.jpg" },
  { name: "Michael Taylor", role: "Sales & Technical Consultant", image: "https://enzoscleaning.com/wp-content/uploads/2020/11/Enzosjpg.jpg" },
  { name: "Ray Reece", role: "Service Manager", image: "https://enzoscleaning.com/wp-content/uploads/2020/11/19_1.jpg" },
  { name: "Rogan", role: "Enzo's Mascot (Guard Dog)", image: "https://enzoscleaning.com/wp-content/uploads/2020/11/mascot.jpg" },
];

const values = [
  "Serving Ohio, Pennsylvania and Surrounding States",
  "Scheduled maintenance, on-site and in-shop service and repair options",
  "Parts, service, detergents, accessories and more to maximize your cleaning power",
];

export default function About() {
  return (
    <>
      <PageHero title="About Us" subtitle="If You Have A Need, We Have The Solution!" />

      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold">Our Purpose</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <div>
                <strong className="text-foreground">Integrity and Honesty</strong>
                <p>Treat customers with respect and do what we say we are going to do.</p>
              </div>
              <div>
                <strong className="text-foreground">We care about YOU, our customer</strong>
                <p>Always investing in our knowledge and skills with continued education.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-center text-2xl font-bold">Our Experts</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="overflow-hidden rounded-lg bg-card shadow-md text-center">
                <div className="aspect-square overflow-hidden">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-center text-2xl font-bold">Complete Solutions</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            We specialize in finding everything you need to upfit your shop. Call our offices and speak to one of our trained sales representatives to assist you in finding the right equipment and detergents to complete your job safely and efficiently.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {values.map((v) => (
              <div key={v} className="flex items-start gap-3 rounded-lg border bg-card p-6 shadow-sm">
                <img src="https://enzoscleaning.com/wp-content/uploads/2020/09/Check_Icon.jpg" alt="" className="h-8 w-8 flex-shrink-0" />
                <p className="font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Let's Talk About Your Needs" />
    </>
  );
}
