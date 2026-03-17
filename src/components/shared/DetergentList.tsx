import AnimatedSection from "./AnimatedSection";

interface Detergent {
  name: string;
  bullets: string[];
  specLink?: string;
}

interface DetergentListProps {
  items: Detergent[];
}

export default function DetergentList({ items }: DetergentListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <AnimatedSection key={item.name} delay={i * 0.05}>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 h-full">
            <h3 className="font-heading text-lg font-bold text-primary">{item.name}</h3>
            <ul className="mt-3 space-y-1.5">
              {item.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            {item.specLink && (
              <a href={item.specLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
                View Spec Sheet →
              </a>
            )}
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
