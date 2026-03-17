import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description?: string;
  image?: string;
  link: string;
  index?: number;
}

export default function ProductCard({ title, description, image, link, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={link}
        className="group block overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
      >
        {image && (
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="font-heading text-lg font-bold group-hover:text-primary transition-colors">{title}</h3>
          {description && <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{description}</p>}
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Learn More <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
