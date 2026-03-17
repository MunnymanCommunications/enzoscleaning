import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

interface PlaceholderPageProps {
  title: string;
  subtitle?: string;
}

export default function PlaceholderPage({ title, subtitle }: PlaceholderPageProps) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} />
      <section className="py-16">
        <div className="container text-center">
          <p className="text-muted-foreground">This page content is being built. Check back soon!</p>
        </div>
      </section>
      <CTASection title="Need Help? Contact Enzo's Today" />
    </>
  );
}
