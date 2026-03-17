import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

interface PlaceholderPageProps {
  title: string;
  subtitle?: string;
}

export default function PlaceholderPage({ title, subtitle }: PlaceholderPageProps) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} />
      <section className="section-padding">
        <div className="container max-w-4xl text-center">
          <AnimatedSection>
            <p className="text-muted-foreground text-lg">
              {subtitle || `Learn more about ${title} from Enzo's Cleaning Solutions. Contact us today for more information.`}
            </p>
          </AnimatedSection>
        </div>
      </section>
      <CTASection title={`Learn More About ${title}`} description="Contact Enzo's today and let our team help you find the right solution." />
    </>
  );
}
