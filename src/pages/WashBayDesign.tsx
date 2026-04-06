import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Droplets, Wifi, ArrowRight, CheckCircle2, Wrench } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import InteractiveSchematic from "@/components/shared/InteractiveSchematic";

const equipment = [
  {
    title: "Push Under Carriage Deluxe — Fleet Preservation",
    desc: "Enzo's Push Under Carriage Deluxe systems fight corrosion from road salt and brine, extending your fleet's lifespan by years.",
    image: "/uploads/2020/10/Untitled-1.jpg",
    link: "/cleaning-equipment/under-carriage-sprayers/the-neutralizer/",
  },
  {
    title: "Portable Undercarriage Units",
    desc: "Flexible, portable undercarriage sprayer units for wash bays of any size.",
    image: "/uploads/2020/10/Untitled-4.jpg",
    link: "/cleaning-equipment/under-carriage-sprayers/",
  },
  {
    title: "Tower Brushes",
    desc: "Tower brush cleaning systems quickly and completely clean buses, trailers, and other tall vehicles.",
    image: "/uploads/2020/10/Untitled-2.jpg",
    link: "/cleaning-equipment/wash-bay-design/tower-brushes/",
  },
];

const washBayFeatures = [
  { icon: Droplets, title: "Undercarriage Washer", desc: "Drive-over undercarriage cleaning to neutralize salt and prevent corrosion damage." },
  { icon: Shield, title: "The Neutralizer", desc: "Enzo's original undercarriage wash system — stop corrosion before it starts.", link: "/cleaning-equipment/under-carriage-sprayers/the-neutralizer/" },
  { icon: Wrench, title: "Tower Brushes", desc: "Tall-vehicle cleaning systems for buses, trailers, and large fleet vehicles." },
  { title: "Reverse Osmosis System", desc: "Spot-free rinse and finish every time with advanced water purification." },
  { title: "Wireless Remotes", desc: "Operate your wash system from anywhere with convenient wireless controls." },
  { title: "Festoon Systems", desc: "Overhead hose management keeps hoses off the floor — safer, cleaner, more efficient operation." },
  { title: "High-Pressure Hoses", desc: "Industrial-grade hoses routed and managed for safety and maximum service life." },
];

const washOptions = [
  { title: "High Touch / Touchless Designs", desc: "Choose the wash configuration that matches your fleet's needs and sensitivity.", image: "/uploads/2022/10/New-Project-2.jpg" },
  { title: "Reverse Osmosis System", desc: "Spot-free rinse and finish every time with advanced water purification.", image: "/uploads/2022/08/New-Project-1.png" },
  { title: "Wireless Remotes", desc: "Operate your wash system from any location with convenient wireless controls.", image: "/uploads/2022/08/New-Project.png" },
  { title: "Undercarriage Wash Unit", desc: "Integrated undercarriage cleaning to fight salt and corrosion damage.", image: "/uploads/2022/10/New-Project.jpg" },
];

export default function WashBayDesign() {
  return (
    <>
      <PageHero
        title="Wash Bay Design"
        subtitle="Efficient, effective and SAFE wash bay solutions for your fleet. Let the experts at Enzo's help."
      />

      {/* Core Goals */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Designed for Performance & Safety</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Every wash bay we design focuses on three priorities: <strong className="text-foreground">efficiency</strong>, <strong className="text-foreground">effectiveness</strong>, and <strong className="text-foreground">safety</strong>. We offer a full range of equipment, accessories and design services to create the perfect wash bay — including our own undercarriage washer, <Link to="/cleaning-equipment/under-carriage-sprayers/the-neutralizer/" className="text-primary hover:underline font-semibold">The Neutralizer</Link>, to protect your investment.
              </p>
            </div>
          </AnimatedSection>

          {/* Three pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Efficiency", desc: "Streamlined layouts and automated systems that clean faster with less labor and water waste." },
              { title: "Effectiveness", desc: "The right equipment combination to handle every vehicle type — from sedans to semis." },
              { title: "Safety", desc: "Non-slip surfaces, managed hose routing, festoon systems, and proper drainage to protect your team." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="p-6 rounded-2xl bg-card border border-border shadow-sm text-center h-full hover:shadow-lg transition-all">
                  <h3 className="font-heading font-bold text-lg mb-2 text-primary">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Features List */}
      <section className="section-padding bg-muted">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-3xl md:text-4xl font-heading font-bold mb-4">Wash Bay Equipment & Features</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Every wash bay is customized with the components your operation needs. Here's what we work with:
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {washBayFeatures.map((feat, i) => (
              <AnimatedSection key={feat.title} delay={i * 0.06}>
                <div className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border h-full">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    {feat.link ? (
                      <Link to={feat.link} className="font-heading font-bold text-sm text-primary hover:underline">{feat.title}</Link>
                    ) : (
                      <h3 className="font-heading font-bold text-sm">{feat.title}</h3>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">{feat.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Wash Bay Demo Video */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted to-background" />
        <div className="relative container max-w-5xl">
          <AnimatedSection variant="scaleIn">
            <div className="rounded-3xl glass p-2 shadow-2xl">
              <div className="rounded-2xl overflow-hidden">
                <div className="aspect-video">
                  <iframe src="https://www.youtube.com/embed/ejZBvIK-Bm8" title="Enzo's Cleaning Solutions | Wash Bay Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="h-full w-full" loading="lazy" />
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2} variant="fadeUp">
            <div className="mt-10 text-center">
              <h3 className="text-2xl font-bold">Custom Wash Bay Solutions</h3>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Enzo's has helped design and install wash bay solutions for clients from Maine to Alabama — and everywhere in between. Our uniquely designed undercarriage cleaning systems help make maintaining your fleet easy and cost-effective.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Fire Station Video */}
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

      {/* Customization Options */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-2">Fully Customized to Meet Your Fleet's Cleaning Needs</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">Every wash bay system is built to your specifications with the features you need.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {washOptions.map((opt, i) => (
              <AnimatedSection key={opt.title} delay={i * 0.08}>
                <div className="glass rounded-xl overflow-hidden h-full hover:shadow-xl hover:scale-[1.03] transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={opt.image} alt={opt.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-bold text-sm">{opt.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{opt.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Product Equipment Cards */}
      <section className="section-padding bg-muted">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center text-2xl font-bold font-heading mb-10">Featured Wash Bay Equipment</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {equipment.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <Link to={item.link} className="group block glass rounded-xl overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-500 h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
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
