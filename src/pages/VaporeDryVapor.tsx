import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function VaporeDryVapor() {
  return (
    <>
      <PageHero title="Vapore Dry Vapor Disinfecting" subtitle="Clean, sanitize, and disinfect any surface with hot vapor." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Vapore's line of commercial professional ecological vapor cleaning equipment is ideally suited to clean, sanitize, and disinfect any surface. Unlike conventional steam cleaners, these machines produce a hot vapor (4%-6% humidity) so you can use them to clean electronics with virtually no dry time. You can disinfect touch screens and keyboards or degrease an engine block.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="mt-10 max-w-3xl mx-auto">
              <img
                src="/uploads/vapore/vapore-certified-destroy.jpg"
                alt="Vapore ecological dry vapor cleaning systems certified to destroy bacteria, viruses, and pathogens including SARS, H1N1, E-Coli, Listeria, Salmonella and Staphylococcus"
                className="w-full rounded-xl border border-border shadow-md"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-8 bg-accent/10 rounded-xl p-6 border border-accent/20 max-w-3xl mx-auto">
              <h3 className="font-heading font-bold text-lg text-center">Certified to Destroy Viruses</h3>
              <p className="text-sm text-muted-foreground mt-2 text-center">
                These machines have been certified to destroy SARS virus, coronavirus and many other contaminants. Working with high temperature and pressure, the Vapore line completes your most difficult cleaning, sanitizing, and disinfecting tasks efficiently and thoroughly — with low dry time since it's dry vapor, not steam.
              </p>
            </div>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { title: "Chemical-Free", desc: "No chemicals needed — just water and heat for a completely ecological clean." },
              { title: "Low Dry Time", desc: "Only 4-6% humidity means surfaces dry almost instantly." },
              { title: "Versatile", desc: "Safe for electronics, upholstery, engines, medical equipment and more." },
            ].map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-5 text-center">
                  <h3 className="font-heading font-bold text-sm">{f.title}</h3>
                  <p className="text-xs text-muted-foreground mt-2">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Get Clean with Vapore" description="Discover Vapore ecological cleaning systems at Enzo's." />
    </>
  );
}
