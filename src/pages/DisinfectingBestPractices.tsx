import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const practices = [
  { title: "Choose the Right Product", desc: "Select EPA-registered disinfectants appropriate for the pathogens you need to eliminate." },
  { title: "Follow Contact Time", desc: "Disinfectants require a specific wet contact time to be effective. Don't wipe too soon." },
  { title: "Clean Before Disinfecting", desc: "Remove visible dirt and debris first — disinfectants work best on clean surfaces." },
  { title: "Use Proper PPE", desc: "Wear appropriate gloves, eye protection and ventilate the area during application." },
  { title: "High-Touch Surfaces First", desc: "Prioritize doorknobs, light switches, handrails, restrooms and shared equipment." },
  { title: "Document Your Protocol", desc: "Maintain cleaning logs and schedules for compliance and accountability." },
];

export default function DisinfectingBestPractices() {
  return (
    <>
      <PageHero title="Disinfecting Best Practices" subtitle="Guidelines and recommendations for effective disinfection." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection className="mb-10 flex justify-center rounded-2xl border border-border bg-white p-8 shadow-sm">
            <img
              src="/uploads/enzos-cleaning-solutions-logo.jpg"
              alt="Enzo's Cleaning Solutions logo — trusted Ohio provider of disinfecting equipment, sanitizers and best-practice guidance for commercial facilities"
              loading="lazy"
              className="max-h-48 w-auto object-contain"
            />
          </AnimatedSection>
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Effective disinfection requires more than just spraying a surface. Following proper protocols ensures you're actually eliminating harmful pathogens and keeping your facility safe. Here are the best practices recommended by Enzo's cleaning experts.
            </p>
          </AnimatedSection>
          <div className="mt-10 space-y-4">
            {practices.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.08}>
                <div className="bg-card rounded-xl border border-border p-5 flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Need Help with Your Disinfection Protocol?" description="Contact Enzo's for expert guidance on disinfecting your facility." />
    </>
  );
}
