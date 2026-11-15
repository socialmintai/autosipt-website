import { Metadata } from 'next';
import { generateMetadata, JSONLD, serviceSchema, faqSchema } from '@/components/seo/SEO';
import { siteConfig } from '@/lib/config';
import { SERVICES } from '@/lib/data';
import { Hero } from '@/components/sections/Hero';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = generateMetadata({
  title: 'AI Automation Services',
  description: 'Explore our 7 AI automation services: voice agents, receptionists, WhatsApp chatbots, lead qualification, appointment booking, CRM integrations, and custom workflow automation.',
  canonical: '/services',
});

const serviceFAQs = [
  {
    question: 'How long does it take to deploy an AI voice agent?',
    answer: 'Typical deployment takes 2-4 weeks depending on complexity, integrations, and custom requirements. We handle discovery, development, testing, and deployment.',
  },
  {
    question: 'Can the AI agents integrate with our existing phone system?',
    answer: 'Yes, we integrate with Twilio, Vonage, Plivo, and custom SIP trunks. We can work with your existing telephony infrastructure.',
  },
  {
    question: 'What languages do your AI agents support?',
    answer: 'Our AI agents support 20+ languages including English, Spanish, French, German, Portuguese, Italian, Dutch, and more. Multi-language support is configurable per deployment.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we provide agreed support levels including monitoring, updates, and optimization. Support terms are defined in each project agreement.',
  },
  {
    question: 'Can you integrate with our CRM?',
    answer: 'We integrate with Salesforce, HubSpot, Pipedrive, Close, Zoho, Attio, and support custom APIs/webhooks for other platforms.',
  },
];

export default function ServicesPage() {
  const serviceSchemas = SERVICES.map(service => serviceSchema({
    name: service.name,
    description: service.description,
    url: `${siteConfig.url}/services#${service.id}`,
    provider: siteConfig.company.legalName,
  }));

  return (
    <>
      <JSONLD data={faqSchema(serviceFAQs)} />
      {serviceSchemas.map((schema, i) => (
        <JSONLD key={i} data={schema} />
      ))}

      <Hero
        badge="7 AI Automation Services"
        title="Services Built for Scale"
        subtitle="From intelligent voice agents to complete workflow automation — each service is designed to integrate seamlessly and deliver measurable results."
        primaryCTA={{ label: 'Book a Demo', href: '/book-demo' }}
        secondaryCTA={{ label: 'Contact Sales', href: '/contact' }}
      />

      <section className="section" aria-labelledby="services-detail-heading">
        <div className="container-custom">
          <div className="space-y-20 lg:space-y-24">
            {SERVICES.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className={cn('flex flex-col lg:flex-row gap-12 lg:gap-16 items-start', index % 2 === 1 && 'lg:flex-row-reverse')}
              >
                <div className="flex-1 lg:w-1/2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4 dark:bg-blue-950/30 dark:text-blue-300">
                    {index + 1}. {service.name}
                  </div>
                  <h2 className="heading-2 text-slate-900 dark:text-white mb-6">{service.name}</h2>
                  <p className="body-lg text-slate-600 dark:text-slate-300 mb-8">{service.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                        <svg className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" asChild className="w-full sm:w-auto">
                    <a href="/book-demo">See {service.name} in Action</a>
                  </Button>
                </div>
                
                <div className="flex-1 lg:w-1/2 relative">
                  <div className="aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <svg className="mx-auto h-16 w-16 text-slate-300 dark:text-slate-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p className="text-slate-500 dark:text-slate-400 text-lg">{service.name} Demo Placeholder</p>
                        <p className="text-slate-400 dark:text-slate-500 text-sm mt-2">[Interactive demo or video here]</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gradient-bg-subtle" aria-labelledby="benefits-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="benefits-heading" className="heading-2 text-slate-900 dark:text-white mb-4">Key Benefits Across All Services</h2>
            <p className="body-lg text-slate-600 dark:text-slate-300">Every service we deliver shares these core advantages.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4 dark:bg-blue-900/30 dark:text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="heading-4 text-slate-900 dark:text-white mb-2">Rapid Deployment</h3>
              <p className="body text-slate-600 dark:text-slate-300">Go live in weeks, not months. Our pre-built components and proven processes accelerate time-to-value.</p>
            </div>
            <div className="card p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4 dark:bg-blue-900/30 dark:text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="heading-4 text-slate-900 dark:text-white mb-2">Enterprise Security</h3>
              <p className="body text-slate-600 dark:text-slate-300">SOC 2 ready, GDPR compliant, with encryption at rest and in transit. Your data stays protected.</p>
            </div>
            <div className="card p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4 dark:bg-blue-900/30 dark:text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="heading-4 text-slate-900 dark:text-white mb-2">Infinite Scalability</h3>
              <p className="body text-slate-600 dark:text-slate-300">Handle 10 or 10,000 concurrent conversations. Our infrastructure scales automatically with demand.</p>
            </div>
            <div className="card p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4 dark:bg-blue-900/30 dark:text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-4 text-slate-900 dark:text-white mb-2">Continuous Improvement</h3>
              <p className="body text-slate-600 dark:text-slate-300">AI models that learn from every interaction. Regular updates and optimization included.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-950 dark:bg-slate-900" aria-labelledby="cta-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="cta-heading" className="heading-2 text-white mb-4">Ready to Get Started?</h2>
            <p className="body-lg text-slate-300 mb-8">Book a personalized demo to see how our AI solutions fit your specific use case.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="/book-demo">Book a Demo</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                <a href="/contact">Contact Sales</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}