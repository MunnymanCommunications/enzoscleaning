import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

interface CTASectionProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  showPhone?: boolean;
}

export default function CTASection({
  title,
  description,
  buttonText = "Connect with Enzo's",
  buttonLink = "/contact-us/",
  showPhone = true,
}: CTASectionProps) {
  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
        {description && <p className="mx-auto mt-3 max-w-2xl opacity-90">{description}</p>}
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to={buttonLink}
            className="rounded-md bg-accent px-8 py-3 font-bold text-accent-foreground hover:opacity-90 transition-opacity"
          >
            {buttonText}
          </Link>
          {showPhone && (
            <a
              href="tel:4195020007"
              className="flex items-center gap-2 rounded-md border border-primary-foreground/30 px-8 py-3 font-bold hover:bg-primary-foreground/10 transition-colors"
            >
              <Phone className="h-4 w-4" /> 419-502-0007
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
