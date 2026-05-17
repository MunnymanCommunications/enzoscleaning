import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function ScheduledMaintenance() {
  return (
    <>
      <PageHero title="Scheduled Maintenance" subtitle="Downtime is a killer of productivity. Prevent it with regular maintenance." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="mb-10 overflow-hidden rounded-2xl border border-border shadow-sm">
              <img
                src="/uploads/service/scheduled-maintenance.jpg"
                alt="Enzo's technician performing scheduled maintenance on a pressure washer"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="prose prose-lg max-w-none">
              <p>Downtime is a killer of productivity. But what if you could reduce or even eliminate your downtime? You can – with preventative maintenance.</p>
              <p>Keeping up on the upkeep of your pressure washer helps to ensure that every time you pick up the wand and squeeze the trigger you're ready to go with proper pressure, the right temperature and the cleaning power you expect.</p>
              <p>No need to fuss when joining our 25-point inspection – our team will manage it for you. We work to create a routine schedule that services your equipment on a regular basis, working around your staff and peak demand periods.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center">
              <h3 className="font-heading text-2xl font-bold">Our 25-Point Inspection</h3>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Our comprehensive inspection covers every critical component of your pressure washer system, ensuring peak performance and catching issues before they result in downtime.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CTASection title="Learn More About Preventative Maintenance" description="Discover how you can reduce – or even eliminate – downtime with Enzo's." />
    </>
  );
}
