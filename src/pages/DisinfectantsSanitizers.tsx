import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function DisinfectantsSanitizers() {
  return (
    <>
      <PageHero
        title="Disinfectants & Sanitizers"
        subtitle="High-powered disinfectant and sanitizing solutions from Enzo's for every application."
      />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection className="mb-10 flex justify-center rounded-2xl border border-border bg-white p-8 shadow-sm">
            <img
              src="/uploads/disinfectants/vital-oxide.jpg"
              alt="Vital Oxide EPA-registered hospital-grade disinfectant and sanitizer bottle available at Enzo's Cleaning Systems in Ohio"
              loading="lazy"
              className="max-h-96 w-auto object-contain"
            />
          </AnimatedSection>
          <AnimatedSection>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Get rid of dirt, grime and bacteria with high-powered disinfectant and sanitizing solutions from Enzo's. We offer a number of different products for use with pressure washers, sprayers, mist bottles and more. Contact our team today and let us help you find the best option for your needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Vital Oxide Section */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-6">Vital Oxide Kills Germs</h2>
            <div className="max-w-3xl mx-auto">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
                <iframe
                  src="https://www.youtube.com/embed/gPDj-PuufHg"
                  title="Vital Oxide Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="text-center text-muted-foreground">
                Vital Oxide is a hospital-grade disinfectant that is safe to use around pets, children and on everyday surfaces. Learn more about this powerful cleaning solution and get yours at Enzo's.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection title="Get Disinfecting Solutions for Your Needs" description="Find the right disinfectants and sanitizers for your operations at Enzo's Cleaning Solutions." />
    </>
  );
}
