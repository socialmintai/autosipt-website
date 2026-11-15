import { Metadata } from 'next';
import { generateMetadata, JSONLD } from '@/components/seo/SEO';
import { CASE_STUDIES } from '@/lib/data';
import { Hero } from '@/components/sections/Hero';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = generateMetadata({
  title: 'Case Studies',
  description: 'See how businesses across industries are transforming their operations with AI automation. Placeholder case studies - real results coming soon.',
  canonical: '/case-studies',
});

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        badge="Real Results, Real Impact"
        title="Case Studies"
        subtitle="Explore how organizations like yours have deployed AI automation to reduce costs, improve response times, and scale operations. Note: These are placeholder examples — real case studies coming soon."
        primaryCTA={{ label: 'Book a Demo', href: '/book-demo' }}
        secondaryCTA={{ label: 'View Services', href: '/services' }}
      />

      <section className="section" aria-labelledby="case-studies-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="case-studies-heading" className="heading-2 text-slate-900 dark:text-white mb-4">Our Work</h2>
            <p className="body-lg text-slate-600 dark:text-slate-300">Each engagement is unique. These placeholder examples illustrate the types of transformations we deliver.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study, index) => (
              <article
                key={study.id}
                className="card-hover p-6 sm:p-8 h-full flex flex-col"
              >
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-sm font-medium mb-4 dark:bg-amber-950/30 dark:text-amber-300">
                  {study.isPlaceholder ? 'Placeholder' : 'Case Study'}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    {study.industry}
                  </span>
                </div>
                <h3 className="heading-3 text-slate-900 dark:text-white mb-4">{study.title}</h3>
                
                <div className="space-y-6 mb-6 flex-1">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Challenge</h4>
                    <p className="body text-slate-600 dark:text-slate-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Solution</h4>
                    <p className="body text-slate-600 dark:text-slate-300">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Services Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.servicesUsed.map(serviceId => (
                        <span key={serviceId} className="px-2 py-1 rounded text-xs bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                          {serviceId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Outcomes</h4>
                    <ul className="space-y-2" role="list">
                      {study.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                          <svg className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {study.isPlaceholder && (
                  <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 dark:bg-amber-950/30 dark:border-amber-800 mb-4">
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                      <strong>Note:</strong> This is a placeholder case study. Real case studies with verified metrics will be published upon client approval.
                    </p>
                  </div>
                )}
                
                <Button variant="outline" asChild className="w-full mt-auto">
                  <a href="/contact">Inquire About Similar Project</a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gradient-bg-subtle" aria-labelledby="process-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="process-heading" className="heading-2 text-slate-900 dark:text-white mb-4">How We Measure Success</h2>
            <p className="body-lg text-slate-600 dark:text-slate-300">We define clear KPIs at the start of every engagement and track them transparently.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">40-60%</div>
              <h3 className="heading-4 text-slate-900 dark:text-white mb-2">Cost Reduction</h3>
              <p className="body text-slate-600 dark:text-slate-300">Typical operational cost savings from automation</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">90%+</div>
              <h3 className="heading-4 text-slate-900 dark:text-white mb-2">Automation Rate</h3>
              <p className="body text-slate-600 dark:text-slate-300">Routine conversations handled without human intervention</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <h3 className="heading-4 text-slate-900 dark:text-white mb-2">Availability</h3>
              <p className="body text-slate-600 dark:text-slate-300">Round-the-clock coverage without night shifts</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-950 dark:bg-slate-900" aria-labelledby="cta-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="cta-heading" className="heading-2 text-white mb-4">Want to Be Our Next Case Study?</h2>
            <p className="body-lg text-slate-300 mb-8">Let's discuss how AI automation can transform your business.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="/book-demo">Start Your Project</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}