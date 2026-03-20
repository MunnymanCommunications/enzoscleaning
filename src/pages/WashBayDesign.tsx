import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const equipment = [
  {
    title: "The Neutralizer – Fleet Preservation",
    desc: "Made by Enzo's, The Neutralizer undercarriage cleaning system's purpose is to help fight corrosion due to road salt and brine.",
    image: "/uploads/2020/10/Untitled-1.jpg",
    link: "/cleaning-equipment/under-carriage-sprayers/the-neutralizer/",
  },
  {
    title: "Portable Undercarriage Unit",
    desc: "In addition to The Neutralizer, Enzo's offers several models of under carriage sprayers for your wash bay.",
    image: "/uploads/2020/10/Untitled-4.jpg",
    link: "/cleaning-equipment/under-carriage-sprayers/",
  },
  {
    title: "Tower Brushes",
    desc: "Tower brush cleaning systems are an excellent way to quickly and completely clean buses, trailers and other tall vehicles.",
    image: "/uploads/2020/10/Untitled-2.jpg",
    link: "/cleaning-equipment/wash-bay-design/tower-brushes/",
  },
];

export default function WashBayDesign() {
  return (
    <>
      <PageHero
        title="Wash Bay Design"
        subtitle="Efficient, effective and SAFE wash bay solutions for your fleet. Let the experts at Enzo's help."
      />

      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You want your wash bay to be efficient, effective and SAFE when washing your fleet. We offer a full range of equipment, accessories and design services to help you create the perfect wash bay that handles your every need, including our own undercarriage washer – <Link to="/cleaning-equipment/under-carriage-sprayers/the-neutralizer/" className="text-primary hover:underline font-semibold">The Neutralizer</Link> – to tackle fleet preservation and extend the life of your investment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Video */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-6">See Our Wash Bay Solutions in Action</h2>
            <div className="max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/fKTmdAAZicY"
                title="Fire Station Wash Bay"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Equipment */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-10">Wash Bay Equipment & Accessories</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {equipment.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <Link to={item.link} className="group block bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Find the Right Wash Bay Solution" description="Get the cleaning power you need. Contact Enzo's today for help selecting the right wash bay equipment." />
    </>
  );
}
