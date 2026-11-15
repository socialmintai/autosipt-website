import { Radio, Brain, UserCheck, CalendarCheck, ArrowRight, Sparkles } from '@/components/ui/Icons';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Capture',
      description: 'AI receives the lead from phone, WhatsApp, website or social media.',
      details: 'Instant multi-channel webhook captures inbound calls, WhatsApp messages, form fills, and direct Instagram/Facebook inquiries 24/7.',
      icon: Radio,
      glow: 'from-sky-500/20 to-blue-600/20 text-sky-400 border-sky-500/30',
    },
    {
      number: '02',
      title: 'Understand',
      description: "AI understands the customer's intent and answers questions.",
      details: 'Powered by contextual semantic intelligence trained exclusively on your business FAQs, protocols, price books, and service guidelines.',
      icon: Brain,
      glow: 'from-indigo-500/20 to-purple-600/20 text-indigo-400 border-indigo-500/30',
    },
    {
      number: '03',
      title: 'Qualify',
      description: 'AI asks the right questions and identifies high-intent prospects.',
      details: 'Screens for budget, location, service eligibility, and timeline to separate ready-to-buy customers from casual browsers.',
      icon: UserCheck,
      glow: 'from-purple-500/20 to-pink-600/20 text-purple-400 border-purple-500/30',
    },
    {
      number: '04',
      title: 'Convert',
      description: 'AI follows up, books appointments and updates your CRM.',
      details: 'Schedules the prospect directly onto your calendar, sends calendar invitations, triggers reminder sequences, and synchronizes your CRM records.',
      icon: CalendarCheck,
      glow: 'from-emerald-500/20 to-teal-600/20 text-emerald-400 border-emerald-500/30',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-[#07090e] scroll-mt-20" aria-labelledby="how-it-works-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Four-Step Autonomous Pipeline</span>
          </div>
          <h2 id="how-it-works-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            From Lead to Customer — Automatically.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            A frictionless, intelligent workflow that transforms anonymous visitors into booked, paying clients.
          </p>
        </div>

        {/* 4-Step Visual Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-gradient-to-b from-[#0c1018] to-[#07090e] border border-white/10 p-7 flex flex-col justify-between group hover:border-indigo-500/40 transition-all duration-300 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600 group-hover:from-indigo-400 group-hover:to-sky-400 transition-colors">
                      {step.number}
                    </span>
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${step.glow} border flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-300 mb-3">
                    {step.description}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.details}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-1.5 text-xs text-slate-500 group-hover:text-indigo-400 transition-colors">
                  <span>Phase {step.number}</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA */}
        <div className="mt-14 text-center">
          <a
            href="#book-demo"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all"
          >
            <span>See Live Implementation in a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
