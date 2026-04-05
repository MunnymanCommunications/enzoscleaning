import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wrench, AlertTriangle, Phone, CheckCircle2, MapPin, Truck, Shield, Droplets, Gauge } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const commonIssues = [
  {
    icon: Gauge,
    title: "Loss of Pressure",
    desc: "Pressure loss is one of the most common issues we see. Often caused by scale buildup in the unloader or heating coil — especially in Ohio's hard water. Unloaders are inexpensive wear items that can often be restored without a full pump rebuild.",
    warning: "Don't ignore gradual pressure loss — it gets worse over time and can lead to pump damage.",
  },
  {
    icon: AlertTriangle,
    title: "No Heat",
    desc: "Loss of heat is more frequent with diesel burners than natural gas or propane. Usually caused by safety control failures — thermostats, flow switches, or pressure switches. These are relatively inexpensive to diagnose and replace.",
    warning: "Running without proper heat means poor cleaning results and wasted detergent.",
  },
  {
    icon: Wrench,
    title: "Diesel Fuel Pump Issues",
    desc: "Diesel burners need periodic tune-ups. The fuel nozzle wears, affecting the spray pattern and causing soot buildup. If you run out of fuel while operating, the diesel pump can spin dry and seize. Always turn the burner off before running dry.",
    warning: "A seized fuel pump is a much more expensive repair than a routine tune-up.",
  },
  {
    icon: Droplets,
    title: "Hard Water Buildup",
    desc: "In Ohio, hard water scale is a constant problem. Left unchecked, mineral deposits accumulate in heating coils, unloaders, and internal passages — reducing pressure, temperature, and overall performance.",
    warning: "Regular descaling is far cheaper than replacing a clogged heating coil.",
  },
];

export default function ServiceRepair() {
  return (
    <>
      <PageHero
        title="Service & Repair"
        subtitle="Get your equipment back to peak performance with Enzo's trained service technicians."
        bgImage="/uploads/2021/01/pressure-washer-service-and-repair.jpg"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Expert Pressure Washer Repair</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Enzo's technicians offer convenient <strong className="text-foreground">on-site and in-house</strong> pressure washer service and repair. We're an authorized repair center for Hotsy & Mi-T-M, and our team also services all brands and types of pressure washers.
              </p>
            </div>
          </AnimatedSection>

          {/* Service Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <AnimatedSection delay={0.1}>
              <div className="p-6 rounded-2xl bg-card border border-border shadow-sm h-full text-center">
                <div className="mx-auto mb-4 p-4 rounded-xl bg-primary/10 w-fit">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">On-Site Service</h3>
                <p className="text-sm text-muted-foreground">Our technicians come to you. Minimize downtime with repairs and maintenance performed right at your location.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="p-6 rounded-2xl bg-card border border-border shadow-sm h-full text-center">
                <div className="mx-auto mb-4 p-4 rounded-xl bg-primary/10 w-fit">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">In-House Repair</h3>
                <p className="text-sm text-muted-foreground">Bring your equipment to our shop for comprehensive diagnostics and repair with full parts access.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-muted">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Common Issues We Fix</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Recognize any of these symptoms? Don't wait — small issues become expensive problems fast. Let Enzo's diagnose and fix it before it costs you downtime.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {commonIssues.map((issue, i) => (
              <AnimatedSection key={issue.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                      <issue.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">{issue.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{issue.desc}</p>
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/5 border border-destructive/10">
                        <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-destructive font-medium">{issue.warning}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Authorized Dealer */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold mb-3">Authorized Repair Center</h3>
              <p className="text-muted-foreground max-w-xl mx-auto mb-4">
                Enzo's is an authorized service and repair center for Hotsy and Mi-T-M pressure washers. We also service all other brands and equipment types.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Hotsy", "Mi-T-M", "All Other Brands"].map((brand) => (
                  <span key={brand} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">{brand}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Need Pressure Washer Repair?"
        description="Don't let equipment issues slow you down. Contact Enzo's for fast, reliable service — on-site or in our shop."
      />
    </>
  );
}
