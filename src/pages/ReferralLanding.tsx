import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

interface ReferralLandingProps {
  partner: string;
}

export default function ReferralLanding({ partner }: ReferralLandingProps) {
  return (
    <>
      <PageHero
        title="Welcome from Our Partner!"
        subtitle="Enzo's Cleaning Solutions – Industrial & Commercial Cleaning Equipment, Detergents, and Service"
      />
      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-bold font-heading">We're glad you're here.</h2>
          <p className="mt-4 text-muted-foreground">
            You've been referred to us by one of our trusted partners. We offer a full range of industrial and commercial cleaning equipment, detergents, service, and repair solutions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/hulabowl-${partner}/${partner}form`}
              className="rounded-md bg-primary px-8 py-3 font-bold text-primary-foreground hover:bg-secondary transition-colors"
            >
              Fill Out Our Contact Form
            </Link>
            <a
              href="tel:4195020007"
              className="rounded-md border border-primary px-8 py-3 font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Call Us: 419-502-0007
            </a>
          </div>
        </div>
      </section>
      <CTASection title="Ready to Get Started?" description="Let us help you find the right cleaning solution for your operation." />
    </>
  );
}
