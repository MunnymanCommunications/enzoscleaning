import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import citymasterProduct from "@/assets/citymaster-product.png";

export default function Citymaster() {
  return (
    <>
      <PageHero title="Citymaster" subtitle="Professional-grade multifunction sweeping solutions for municipalities and commercial properties." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-10">
              The Hako Citymaster lineup provides municipalities and commercial property managers with year-round outdoor cleaning solutions. From summer sweeping to winter snow management, these multifunction machines keep your community clean and safe.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={citymasterProduct} alt="Hako Citymaster sweeper" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="font-heading font-bold text-2xl mb-2">Citymaster 1650 / 650</h2>
                <p className="text-muted-foreground mb-4">
                  A versatile implement carrier and professional sweeper all in one — with interchangeable attachments for surface cleaning, lawn care, and winter service.
                </p>
                <Link
                  to="/citymaster-1650-650multifunction-sweeper/"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  View Full Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CTASection title="Explore Citymaster" description="Contact Enzo's for Citymaster information and pricing." />
    </>
  );
}
