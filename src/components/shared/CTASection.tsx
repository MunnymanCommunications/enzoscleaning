import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

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
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-accent/80" />
      <div className="absolute inset-0">
        <div className="absolute -top-1/2 -right-1/4 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl" />
      </div>
      <div className="relative container section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-primary-foreground md:text-4xl">{title}</h2>
          {description && <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">{description}</p>}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to={buttonLink}
              className="inline-flex items-center gap-2 rounded-full bg-card px-8 py-4 font-bold text-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {buttonText} <ArrowRight className="h-4 w-4" />
            </Link>
            {showPhone && (
              <a
                href="tel:4195020007"
                className="flex items-center gap-2 rounded-full border-2 border-primary-foreground/30 px-8 py-4 font-bold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                <Phone className="h-4 w-4" /> 419-502-0007
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
