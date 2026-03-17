import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

interface EquipmentModelCardProps {
  model: string;
  partNumber?: string;
  discharge: string;
  image: string;
  dimensions: { length: string; width: string; height: string; weight: string };
  description: string;
  specSheet?: string;
  index?: number;
}

export default function EquipmentModelCard({
  model, partNumber, discharge, image, dimensions, description, specSheet, index = 0
}: EquipmentModelCardProps) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="flex items-center justify-center p-8 bg-muted/30">
            <img src={image} alt={model} className="max-h-64 object-contain" loading="lazy" />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <h3 className="text-xl font-heading font-bold text-foreground">{model}</h3>
            {partNumber && <p className="text-sm text-muted-foreground mt-1">{partNumber}</p>}
            <p className="text-primary font-semibold mt-2">{discharge}</p>
            
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <div className="bg-muted/50 rounded-lg p-2 text-center">
                <span className="block text-muted-foreground text-xs">Length</span>
                <span className="font-semibold">{dimensions.length}</span>
              </div>
              <div className="bg-muted/50 rounded-lg p-2 text-center">
                <span className="block text-muted-foreground text-xs">Width</span>
                <span className="font-semibold">{dimensions.width}</span>
              </div>
              <div className="bg-muted/50 rounded-lg p-2 text-center">
                <span className="block text-muted-foreground text-xs">Height</span>
                <span className="font-semibold">{dimensions.height}</span>
              </div>
              <div className="bg-muted/50 rounded-lg p-2 text-center">
                <span className="block text-muted-foreground text-xs">Weight</span>
                <span className="font-semibold">{dimensions.weight}</span>
              </div>
            </div>
            
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{description}</p>
            
            <div className="mt-4 flex gap-3">
              <Link to="/contact-us/" className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                Get a Quote
              </Link>
              {specSheet && (
                <a href={specSheet} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors">
                  Spec Sheet
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
