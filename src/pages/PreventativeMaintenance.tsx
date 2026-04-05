import { Link } from "react-router-dom";
import { Shield, Clock, Wrench, AlertTriangle, CheckCircle2, ArrowRight, Gauge, Droplets } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { motion } from "framer-motion";

const equipmentTypes = [
  {
    icon: Gauge,
    title: "Pressure Washers",
    desc: "Regular inspections of pumps, unloaders, hoses, heating coils, and safety controls keep your pressure washer delivering full power every time you pull the trigger.",
    items: ["Pump & unloader inspection", "Heating coil descaling", "Hose & fitting checks", "Safety control testing"],
  },
  {
    icon: Droplets,
    title: "Wash Bay Systems",
    desc: "Your wash bay is an investment. Routine maintenance of water systems, chemical injectors, and mechanical components ensures consistent performance and prevents costly shutdowns.",
    items: ["Water system inspection", "Chemical injector calibration", "Drain & filtration checks", "Undercarriage unit servicing"],
  },
  {
    icon: Shield,
    title: "Drive-Thru Wash Systems",
    desc: "Automated drive-thru systems have many moving parts. Preventative maintenance keeps brushes, sensors, and water delivery working correctly day after day.",
    items: ["Brush & nozzle inspection", "Sensor calibration", "Water pressure verification", "Control system checks"],
  },
  {
    icon: Wrench,
    title: "Floor Scrubbers",
    desc: "Squeegees wear down, brushes need replacing, and batteries need attention. Regular maintenance keeps your floor scrubbers running efficiently across every shift.",
    items: ["Squeegee & brush replacement", "Battery health checks", "Vacuum system inspection", "Water system cleaning"],
  },
  {
    icon: Clock,
    title: "Air Compressors",
    desc: "Air compressors need regular filter changes, oil checks, and drain maintenance. Neglecting these basics leads to moisture contamination and system failure.",
    items: ["Filter replacement", "Oil level & quality checks", "Drain valve maintenance", "Belt & motor inspection"],
  },
];

export default function PreventativeMaintenance() {
  return (
    <>
      <PageHero
        title="Preventative Maintenance"
        subtitle="Downtime kills productivity. Prevent it with scheduled maintenance from Enzo's."
      />

      {/* Impact Statement */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-4">
                <AlertTriangle className="h-4 w-4" />
                <span className="text-sm font-semibold">The Cost of Downtime</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Every Hour of Downtime Costs You Money
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                When your equipment goes down, productivity stops. Jobs get delayed, customers get frustrated, and repair costs pile up. Regular preventative maintenance from Enzo's keeps your equipment running — and your business moving.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Equipment Types */}
      <section className="section-padding bg-muted">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Equipment We Maintain</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Enzo's offers preventative maintenance programs for every piece of cleaning equipment in your operation.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentTypes.map((eq, i) => (
              <AnimatedSection key={eq.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all h-full"
                >
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                    <eq.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">{eq.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{eq.desc}</p>
                  <ul className="space-y-2">
                    {eq.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">How Our PM Program Works</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {[
              { step: "1", title: "Equipment Assessment", desc: "We evaluate your equipment, usage patterns and environment to build a custom maintenance schedule." },
              { step: "2", title: "Scheduled Service Visits", desc: "Our technicians arrive on schedule — working around your staff and peak demand periods so there's zero disruption." },
              { step: "3", title: "25-Point Inspection", desc: "Every visit includes our comprehensive 25-point inspection covering all critical components." },
              { step: "4", title: "Reporting & Recommendations", desc: "You get a clear report after every visit with equipment status, work completed and any recommendations." },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div className="flex items-start gap-6 p-6 rounded-2xl bg-card border border-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-foreground">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Eliminate Downtime Before It Starts"
        description="Contact Enzo's to set up a preventative maintenance program tailored to your equipment and schedule."
        buttonText="Schedule a Consultation"
      />
    </>
  );
}
