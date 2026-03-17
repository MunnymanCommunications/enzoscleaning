import { Link } from "react-router-dom";
import { ReactNode } from "react";
import PageHero from "./PageHero";
import CTASection from "./CTASection";

interface ContentPageProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  children: ReactNode;
  ctaTitle?: string;
  ctaDescription?: string;
}

export default function ContentPage({ title, subtitle, bgImage, children, ctaTitle, ctaDescription }: ContentPageProps) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} bgImage={bgImage} />
      <div className="section-padding">
        <div className="container">
          {children}
        </div>
      </div>
      {ctaTitle && ctaDescription && (
        <CTASection title={ctaTitle} description={ctaDescription} />
      )}
    </>
  );
}
