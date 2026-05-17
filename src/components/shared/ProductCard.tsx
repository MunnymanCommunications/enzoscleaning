import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description?: string;
  image?: string;
  alt?: string;
  link: string;
  index?: number;
}

export default function ProductCard({ title, description, image, alt, link, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={link}
        className="group relative block overflow-hidden rounded-2xl glass hover:shadow-xl transition-all duration-500"
      >
        {/* Shimmer highlight on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] animate-shimmer" />

        {image && (
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={alt || title}
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>
        )}
        <div className="relative p-6">
          <h3 className="font-heading text-lg font-bold group-hover:text-primary transition-colors duration-300">{title}</h3>
          {description && <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{description}</p>}
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Learn More <ArrowRight className="h-3 w-3 group-hover:translate-x-1.5 transition-transform duration-300" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
