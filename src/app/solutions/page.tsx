import { Metadata } from 'next';
import { generateMetadata, JSONLD, faqSchema } from '@/components/seo/SEO';
import { SOLUTIONS } from '@/lib/data';
import { Hero } from '@/components/sections/Hero';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = generateMetadata({
  title: 'Industry Solutions',
  description: 'Tailored AI automation solutions for Real Estate, Healthcare, Professional Services, E-commerce, Financial Services, and Home Services industries.',
  canonical: '/solutions',
});

const solutionFAQs = [
  {
    question: 'Do you have experience in my specific industry?',
    answer: 'We have deployed solutions across Real Estate, Healthcare, Professional Services, E-commerce, Financial Services, and Home Services. Each solution is customized to your specific workflows and compliance requirements.',
  },
  {
    question: 'Can you handle industry-specific compliance (HIPAA, GDPR, etc.)?',
    answer: 'Yes, our solutions are built with compliance in mind. We support HIPAA for healthcare, GDPR for EU/UK operations, PCI DSS for payments, and other regulatory frameworks.',
  },
  {
    question: 'How do you customize solutions for each industry?',
    answer: 'We start with a discovery phase to understand your specific workflows, compliance needs, and integration requirements. Then we configure our AI agents, conversation flows, and integrations to match your exact use cases.',
  },
];

export default function SolutionsPage() {
  return (
    <>
      <JSONLD data={faqSchema(solutionFAQs)} />

      <Hero
        badge="6 Industry Solutions"
        title="Solutions Tailored to Your Industry"
        subtitle="We understand the unique challenges of your industry. Our AI automation solutions are pre-configured with industry-specific workflows, compliance requirements, and integration patterns."
        primaryCTA={{ label: 'Book a Demo', href: '/book-demo' }}
        secondaryCTA={{ label: 'View Services', href: '/services' }}
      />

      <section className="section" aria-labelledby="solutions-heading">
        <div className="container-custom">
          <div className="space-y-16 lg:space-y-20">
            {SOLUTIONS.map((solution, index) => (
              <article
                key={solution.id}
                id={solution.id}
                className={cn('flex flex-col lg:flex-row gap-12 lg:gap-16 items-start', index % 2 === 1 && 'lg:flex-row-reverse')}
              >
                <div className="flex-1 lg:w-1/2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 text-accent-700 text-sm font-medium mb-4 dark:bg-accent-950/30 dark:text-accent-300">
                    Industry Solution
                  </div>
                  <h2 className="heading-2 text-slate-900 dark:text-white mb-6">{solution.industry}</h2>
                  <p className="body-lg text-slate-600 dark:text-slate-300 mb-8">{solution.description}</p>
                  
                  <h3 className="heading-4 text-slate-900 dark:text-white mb-4">Common Use Cases</h3>
                  <ul className="space-y-3 mb-8" role="list">
                    {solution.useCases.map((useCase, i) => (
                      <li key={i} className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                        <svg className="w-5 h-5 mt-0.5 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700 dark:text-slate-300">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="heading-4 text-slate-900 dark:text-white mb-4">Relevant Services</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {solution.services.map(serviceId => {
                      const service = SOLUTIONS.flatMap(s => s.services).includes(serviceId) 
                        ? SOLUTIONS.find(s => s.services.includes(serviceId))?.services.find(id => id === serviceId)
                        : null;
                      // Get service name from data
                      const serviceData = SOLUTIONS.flatMap(s => s.services);
                      return (
                        <span key={serviceId} className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                          {serviceId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                        </span>
                      );
                    })}
                  </div>
                  
                  <Button variant="outline" asChild className="w-full sm:w-auto">
                    <a href="/book-demo">Discuss {solution.industry} Solution</a>
                  </Button>
                </div>
                
                <div className="flex-1 lg:w-1/2 relative">
                  <div className="aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <svg className="mx-auto h-16 w-16 text-slate-300 dark:text-slate-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <p className="text-slate-500 dark:text-slate-400 text-lg">{solution.industry} Solution Overview</p>
                        <p className="text-slate-400 dark:text-slate-500 text-sm mt-2">[Industry-specific demo or diagram here]</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gradient-bg-subtle" aria-labelledby="approach-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="approach-heading" className="heading-2 text-slate-900 dark:text-white mb-4">Our Approach to Industry Solutions</h2>
            <p className="body-lg text-slate-600 dark:text-slate-300">Every engagement follows our proven methodology to ensure successful deployment and adoption.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4 dark:bg-blue-900/30 dark:text-blue-400">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="heading-4 text-slate-900 dark:text-white mb-2">Discovery</h3>
              <p className="body text-slate-600 dark:text-slate-300">Deep dive into your workflows, pain points, compliance needs, and success metrics.</p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4 dark:bg-blue-900/30 dark:text-blue-400">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="heading-4 text-slate-900 dark:text-white mb-2">Design</h3>
              <p className="body text-slate-600 dark:text-slate-300">Custom conversation flows, integration architecture, and user experience design.</p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4 dark:bg-blue-900/30 dark:text-blue-400">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="heading-4 text-slate-900 dark:text-white mb-2">Deploy</h3>
              <p className="body text-slate-600 dark:text-slate-300">Phased rollout with testing, training, and gradual traffic shifting.</p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4 dark:bg-blue-900/30 dark:text-blue-400">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="heading-4 text-slate-900 dark:text-white mb-2">Optimize</h3>
              <p className="body text-slate-600 dark:text-slate-300">Continuous monitoring, A/B testing, and model improvements based on real data.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-950 dark:bg-slate-900" aria-labelledby="cta-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="cta-heading" className="heading-2 text-white mb-4">Ready to Transform Your Industry?</h2>
            <p className="body-lg text-slate-300 mb-8">Book a consultation to discuss your specific industry challenges.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="/book-demo">Book a Consultation</a>
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