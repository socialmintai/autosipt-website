import { Sparkles, ArrowRight, ShieldCheck, Building, Stethoscope, Wrench } from '@/components/ui/Icons';

export function CaseStudiesSection() {
  const caseStudies = [
    {
      id: 'dental-reception',
      badge: 'CASE STUDY • HEALTHCARE',
      icon: Stethoscope,
      title: 'Private Dental Practice (UK / London)',
      quote:
        '“See how an AI receptionist can handle customer calls, qualify leads and automate appointment booking.”',
      implementation: 'AI Voice Receptionist + WhatsApp 24/7 Calendar Sync',
      projectedMetric: 'Target: 100% of missed evening inquiries answered & booked',
      cta: 'View Case Study Details →',
    },
    {
      id: 'real-estate-scheduler',
      badge: 'CASE STUDY • REAL ESTATE',
      icon: Building,
      title: 'Boutique Real Estate Agency (UAE / Dubai)',
      quote:
        '“See how autonomous WhatsApp agents qualify buyer inquiries, verify budget, and schedule property viewings.”',
      implementation: 'WhatsApp Cloud AI Agent + CRM Pipeline Stage Update',
      projectedMetric: 'Target: Instant 3-second response to international buyers',
      cta: 'View Case Study Details →',
    },
    {
      id: 'home-services-dispatch',
      badge: 'CASE STUDY • FIELD SERVICES',
      icon: Wrench,
      title: 'Commercial HVAC & Plumbing (USA / Texas)',
      quote:
        '“See how emergency dispatch AI answers midnight repair calls and books technician visits automatically.”',
      implementation: 'Telephony Voice Agent + SMS Dispatch Notification',
      projectedMetric: 'Target: Zero unanswered emergency contractor calls',
      cta: 'View Case Study Details →',
    },
  ];

  return (
    <section id="case-studies" className="relative py-24 lg:py-32 bg-[#07090e] border-t border-white/[0.08]" aria-labelledby="cases-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Implementation Frameworks</span>
          </div>
          <h2 id="cases-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Real Automation in Action
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Explore implementation blueprints demonstrating how autonomous AI agents solve operational bottlenecks in real business workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs) => {
            const Icon = cs.icon;
            return (
              <div
                key={cs.id}
                className="relative rounded-3xl bg-[#0c1017] border border-white/10 p-8 flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300 group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono tracking-wider font-semibold text-indigo-400">
                      {cs.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {cs.title}
                  </h3>

                  <blockquote className="text-sm text-slate-300 italic mb-6 leading-relaxed border-l-2 border-indigo-500 pl-4">
                    {cs.quote}
                  </blockquote>

                  <div className="space-y-2 pt-4 border-t border-white/5 text-xs text-slate-400">
                    <p>
                      <span className="font-semibold text-slate-300">Stack:</span> {cs.implementation}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-300">Objective:</span> {cs.projectedMetric}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <a
                    href="#book-demo"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group-hover:underline"
                  >
                    <span>{cs.cta}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs text-slate-500">
          <p>
            * Case studies represent architecture blueprints and pilot implementations. Full partner data sanitized for confidentiality.
          </p>
        </div>
      </div>
    </section>
  );
}
