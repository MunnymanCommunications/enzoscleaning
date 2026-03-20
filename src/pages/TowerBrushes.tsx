import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const applications = [
  { title: "Truck & Trailer", pdf: "/uploads/2020/09/awash_Truck-and-Trailer.pdf", videoId: "whZxkkDVXQg" },
  { title: "School Bus", pdf: "/uploads/2020/09/awash_School-Bus.pdf", videoId: null },
  { title: "Transit Bus", pdf: "/uploads/2020/09/awash_Transit.pdf", videoId: null },
  { title: "Motorcoach", pdf: "/uploads/2020/09/awash_Motorcoach.pdf", videoId: null },
];

export default function TowerBrushes() {
  return (
    <>
      <PageHero
        title="Tower Brushes"
        subtitle="Full height cleaning for buses, tractor trailers and motorcoaches."
        bgImage="/uploads/2020/09/static1.squarespace.jpg"
      />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Tower Wash systems from Awash are purpose built for cleaning your fleet vehicles in a wash bay. Delivering full height to clean buses, tractor trailers and motorcoaches with a single pass, you can remove dirt and grime with ease — five minutes or less per vehicle in some cases.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Video */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-6">See Tower Brushes in Action</h2>
            <div className="max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe src="https://www.youtube.com/embed/whZxkkDVXQg" title="Truck Wash Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-8">Applications</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {applications.map((app, i) => (
              <AnimatedSection key={app.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-6 text-center">
                  <h3 className="font-heading font-bold">{app.title}</h3>
                  <a href={app.pdf} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-primary hover:underline">
                    Download Product Info →
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Add Tower Brushes to Your Wash Bay" description="Learn how you can clean more efficiently and effectively. Contact Enzo's today." />
    </>
  );
}
