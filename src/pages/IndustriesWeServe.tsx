import { Link } from "react-router-dom";
import { Truck, Building2, Factory, Tractor, HeartPulse } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const industries = [
  { icon: Truck, title: "Transportation & Fleet", desc: "No one knows transportation equipment like Enzo's. From buses to tractor trailers, we keep your fleet clean.", link: "/transportation-and-fleet-management/" },
  { icon: Building2, title: "Construction", desc: "Keep your construction equipment CLEAN and operating at peak efficiency with the right cleaning solutions.", link: "/construction-cleaning-equipment/" },
  { icon: Tractor, title: "Agriculture", desc: "Protect your machinery from corrosive fertilizers and the elements with proper cleaning equipment.", link: "/agriculture-cleaning-equipment/" },
  { icon: Factory, title: "Manufacturing", desc: "Keep production lines working safely and efficiently with industrial-grade cleaning.", link: "/manufacturing/" },
  { icon: HeartPulse, title: "Healthcare", desc: "Hospital-grade hygiene solutions for clinical environments and patient safety.", link: "/hospital-clinical-hygiene-overview-protocols/" },
];

export default function IndustriesWeServe() {
  return (
    <>
      <PageHero title="Industries We Serve" subtitle="Serving customers across the Northeast and Midwest with cleaning solutions tailored to your industry." />
      <section className="section-padding">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.title} delay={i * 0.08}>
                <Link to={ind.link} className="group block bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow h-full">
                  <ind.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-lg">{ind.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{ind.desc}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Need a Custom Solution?" description="Let our team design the right cleaning solution for your industry. Contact Enzo's today." />
    </>
  );
}
