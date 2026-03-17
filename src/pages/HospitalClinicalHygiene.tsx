import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const sections = [
  { title: "Hand Hygiene Systems", desc: "Advanced dispensing and monitoring systems that ensure compliance.", link: "/our-hand-hygiene-systems/" },
  { title: "Implementation", desc: "Seamless deployment of cleaning and hygiene protocols into your facility.", link: "/implementation-in-hospitals/" },
  { title: "Training & Compliance", desc: "Staff training programs and compliance tracking to maintain standards.", link: "/training-compliance-support/" },
];

export default function HospitalClinicalHygiene() {
  return (
    <>
      <PageHero title="Hospital & Clinical Hygiene" subtitle="Comprehensive hygiene protocols for healthcare environments." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Healthcare facilities require the highest standards of cleanliness and infection control. Enzo's partners with hospitals, clinics and long-term care facilities to implement comprehensive hygiene programs — from hand hygiene systems to surface disinfection protocols — that protect patients, staff and visitors.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {sections.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <Link to={s.link} className="block bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow h-full">
                  <h3 className="font-heading font-bold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Improve Your Facility's Hygiene" description="Contact Enzo's for healthcare cleaning solutions." />
    </>
  );
}
