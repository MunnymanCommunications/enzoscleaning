import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

export default function ClaudeTest() {
  return (
    <>
      <PageHero
        title="Claude Test Page"
        subtitle="This page was created by Claude to verify that prerendered HTML and new pages deploy correctly through Lovable."
      />

      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold">Deployment Verification</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                If you can see this page, it means that new files added to the
                repository are successfully being picked up and deployed by
                Lovable.
              </p>
              <p>
                This page also includes prerendered HTML for SEO purposes. Search
                engine bots will be able to crawl the content of this page even
                before JavaScript loads.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-center mb-8">What Was Done</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-foreground">Prerendered HTML</strong> — Every
                  page now includes server-rendered HTML inside the root div, so search
                  engine crawlers see full page content immediately.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-foreground">Hydration</strong> — React
                  smoothly takes over the prerendered content when JavaScript loads,
                  so users see no flash or content shift.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-foreground">Canonical URLs</strong> — Each
                  prerendered page includes a canonical link tag for proper SEO
                  indexing.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-foreground">83 Routes</strong> — All existing
                  pages are covered by the prerendering system.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection title="Get Started" description="Contact us today." />
    </>
  );
}
