import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function ServiceRepair() {
  return (
    <>
      <PageHero title="Service & Repair" subtitle="Get your equipment back working correctly with our trained service and repair technicians." bgImage="/uploads/2021/01/pressure-washer-service-and-repair.jpg" />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              <p>Enzo's technicians offer convenient options for on-site and in-house pressure washer service and repair. We're an authorized pressure washer repair center for Hotsy & Mi-T-M, and our team also offers service on all brands and types of pressure washers.</p>
              <p>Loss of pressure and/or heat are the most common repairs. In Ohio, scale build-up from hard water is often a problem. Left unchecked, this will affect the performance of your pressure washer.</p>
            </div>
          </AnimatedSection>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-8 h-full">
                <h3 className="font-heading text-xl font-bold text-primary">Loss of Pressure</h3>
                <p className="mt-3 text-muted-foreground">Pressure can often be restored without rebuilding the pump. In our area, pressure loss is frequently the result of scale build-up in the unloader or heating coil. Unloaders are inexpensive wear items – scale builds up on the bypass seat and check valve, causing more flow to be bypassed.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-border bg-card p-8 h-full">
                <h3 className="font-heading text-xl font-bold text-primary">No Heat</h3>
                <p className="mt-3 text-muted-foreground">Loss of heat repairs are far more frequent with diesel heat burners than natural gas or propane. Most loss of heat situations are caused by failure of safety controls – thermostats, flow switches, and pressure switches. These are relatively inexpensive to replace.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="rounded-2xl border border-border bg-card p-8 h-full md:col-span-2">
                <h3 className="font-heading text-xl font-bold text-primary">Diesel Heat</h3>
                <p className="mt-3 text-muted-foreground">Diesel burners periodically require tune-ups. The fuel nozzle wears out affecting the spray pattern, resulting in poor burns and soot-filled coils. Another common failure is the diesel fuel pump – if you run out of fuel while pressure washing, the pump spins dry and can seize. ALWAYS turn the burner switch off if you run out of fuel.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <CTASection title="Request Pressure Washer Service" description="Enzo's offers custom tailored Preventative Maintenance packages to suit your unique needs. Call us at 419-502-0007." />
    </>
  );
}
