import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function Nozzles() {
  return (
    <>
      <PageHero title="Nozzles" subtitle="Properly sized nozzles are critical to proper pressure washer operation." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="mb-10 overflow-hidden rounded-2xl border border-border shadow-lg">
              <img
                src="/uploads/accessories/quick-change-pressure-washer-nozzles.jpg"
                alt="Assortment of color-coded quick-change pressure washer nozzles — red, yellow, green and white spray tips for commercial hot and cold water pressure washers at Enzo's Cleaning Systems in Ohio"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Using the correct nozzle is critical to getting the most out of your pressure washer. The wrong nozzle can damage surfaces, reduce cleaning effectiveness, or even harm your machine. Enzo's carries a wide selection of quick-change nozzles for hot-water and cold-water pressure washers.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { deg: "0°", color: "Red", use: "Pinpoint blasting for tough deposits" },
              { deg: "15°", color: "Yellow", use: "Heavy-duty stripping and cleaning" },
              { deg: "25°", color: "Green", use: "General purpose cleaning" },
              { deg: "40°", color: "White", use: "Gentle rinsing and delicate surfaces" },
            ].map((n, i) => (
              <AnimatedSection key={n.deg} delay={i * 0.08}>
                <div className="bg-card rounded-xl border border-border p-5 text-center">
                  <div className="text-2xl font-bold font-heading text-primary">{n.deg}</div>
                  <div className="text-sm font-semibold mt-1">{n.color}</div>
                  <p className="text-xs text-muted-foreground mt-2">{n.use}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Get the Right Nozzles" description="Contact Enzo's to find the correct nozzles for your equipment." />
    </>
  );
}
