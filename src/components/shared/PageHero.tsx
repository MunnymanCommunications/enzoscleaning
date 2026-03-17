interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

export default function PageHero({ title, subtitle, bgImage }: PageHeroProps) {
  return (
    <section
      className="relative flex min-h-[300px] items-center justify-center bg-primary text-primary-foreground"
      style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}
    >
      {bgImage && <div className="absolute inset-0 bg-primary/70" />}
      <div className="relative z-10 container text-center py-16">
        <h1 className="text-3xl font-bold md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
