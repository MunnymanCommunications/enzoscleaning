import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function FreeConsultations() {
  return (
    <>
      <PageHero title="Free Consultations" subtitle="Let us visit your operation and provide insights and solutions to make your work easier." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              <p>At Enzo's, we're experts at wash bay, wash station, and wash system installations. We've set up hundreds of cleaning systems in every industry imaginable.</p>
              <p>We serve customers in Ohio and Michigan, as well as the border states. From small cold water applications to high volume, high pressure, high heat cleaning systems – no matter what you're cleaning we have an efficient, effective, and safe solution for you.</p>
              <p>So if you're setting up a brand new wash bay or cleaning application, or you would just like to improve an existing wash bay or cleaning procedure, give us a call. We'll come out and give you a free consultation.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe src="https://www.youtube.com/embed/EFv5gxKsMSo" title="Enzo's | Westfield Fire & Rescue Installation" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="h-full w-full" loading="lazy" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CTASection title="Schedule Your Consultation" description="Contact Enzo's today and schedule your free on-site consultation." />
    </>
  );
}
