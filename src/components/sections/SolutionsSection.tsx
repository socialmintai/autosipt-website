'use client';

import { useState } from 'react';
import {
  PhoneCall,
  MessageSquare,
  Target,
  CalendarCheck2,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Bot,
  Zap,
} from '@/components/ui/Icons';

interface AgentSolution {
  id: string;
  name: string;
  headline: string;
  description: string;
  ctaText: string;
  icon: any;
  capabilities: string[];
  metrics: string;
  tag: string;
  demoType: 'voice' | 'whatsapp' | 'followup' | 'calendar' | 'support';
}

export function SolutionsSection() {
  const [selectedAgent, setSelectedAgent] = useState<AgentSolution | null>(null);

  const solutions: AgentSolution[] = [
    {
      id: 'voice-agent',
      name: 'AI Voice Agent',
      headline: 'Human-parity inbound and outbound telephony',
      description: 'Answers inbound calls, handles FAQs, qualifies leads and books appointments.',
      ctaText: 'Explore Voice AI →',
      icon: PhoneCall,
      capabilities: [
        'Sub-600ms conversational response time',
        'Natural speech inflection, pauses & active listening',
        'Direct live call transfers for high-value VIPs',
        'Automatic post-call summaries sent to your CRM',
      ],
      metrics: 'Under 1s pickup • 100% call capture rate',
      tag: 'Voice AI',
      demoType: 'voice',
    },
    {
      id: 'whatsapp-agent',
      name: 'WhatsApp AI Agent',
      headline: 'Official WhatsApp Business automated chat',
      description: 'Responds instantly to customer messages, answers questions and captures lead information.',
      ctaText: 'Explore WhatsApp AI →',
      icon: MessageSquare,
      capabilities: [
        'Official Meta WhatsApp Business Cloud API',
        'Shares interactive menus, videos, PDFs & location maps',
        'Collects lead details via conversational questionnaires',
        '2-way natural language chat in 40+ languages',
      ],
      metrics: 'Instant response • 98% open rates on WhatsApp',
      tag: 'WhatsApp AI',
      demoType: 'whatsapp',
    },
    {
      id: 'lead-follow-up',
      name: 'AI Lead Follow-Up',
      headline: 'Multi-touch nurturing that revives cold pipelines',
      description: 'Automatically follows up with new and old leads through WhatsApp, email or SMS.',
      ctaText: 'Explore Lead Automation →',
      icon: Target,
      capabilities: [
        'Personalized follow-up cadences tailored to customer intent',
        'Re-activates dormant leads from your old database',
        'Cross-channel orchestration (WhatsApp, SMS & Email)',
        'Stops automatically when prospect replies or books',
      ],
      metrics: '3.4x higher pipeline reactivation rate',
      tag: 'Lead Automation',
      demoType: 'followup',
    },
    {
      id: 'appointment-agent',
      name: 'AI Appointment Agent',
      headline: 'Autonomous calendar booking and qualification',
      description: 'Qualifies prospects and schedules appointments automatically.',
      ctaText: 'Explore Appointment AI →',
      icon: CalendarCheck2,
      capabilities: [
        'Live sync with Google Calendar, Calendly & GoHighLevel',
        'Buffers appointment slots and handles time zone math',
        'Collects intake data prior to calendar reservation',
        'Automated SMS & WhatsApp reminder sequences',
      ],
      metrics: 'Reduces appointment no-shows by up to 45%',
      tag: 'Appointment AI',
      demoType: 'calendar',
    },
    {
      id: 'customer-support',
      name: 'AI Customer Support',
      headline: '24/7 intelligent tier-1 customer assistance',
      description: 'Handles repetitive customer questions 24/7 and escalates complex requests to humans.',
      ctaText: 'Explore AI Support →',
      icon: Headphones,
      capabilities: [
        'Trained on your knowledge base, PDFs, and policies',
        'Zero hallucinations: strictly adheres to verified facts',
        'Smart escalation protocols to on-call team members',
        'Multi-lingual support across all global timezones',
      ],
      metrics: 'Resolves 70%+ inquiries without human staff',
      tag: 'AI Support',
      demoType: 'support',
    },
  ];

  return (
    <section id="solutions" className="relative py-24 lg:py-32 bg-[#090d15] scroll-mt-20" aria-labelledby="solutions-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous Business Operations</span>
          </div>
          <h2 id="solutions-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Meet Your AI Workforce
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Deploy specialized AI employees designed to execute high-volume sales, support, and administrative workflows without human fatigue.
          </p>
        </div>

        {/* 5 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = index === 0 || index === 1;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 border ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#0f1422] to-[#0a0e18] border-indigo-500/40 shadow-[0_10px_30px_rgba(99,102,241,0.15)]'
                    : 'bg-[#0b0f19] border-white/10 hover:border-white/20'
                } group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-sky-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-sm font-medium text-slate-300 mb-4">
                    {item.description}
                  </p>

                  <div className="pt-2 pb-4 border-t border-white/5 space-y-2">
                    {item.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedAgent(item)}
                    className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1.5 transition-colors group-hover:underline"
                  >
                    <span>{item.ctaText}</span>
                  </button>

                  <a
                    href="#book-demo"
                    className="text-xs font-medium text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    Book Demo
                  </a>
                </div>
              </div>
            );
          })}

          {/* 6th Card: All-In-One Unified Workforce Callout */}
          <div className="relative flex flex-col justify-between rounded-2xl p-7 bg-gradient-to-br from-indigo-950/60 via-purple-950/40 to-slate-950 border border-indigo-500/40">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 mb-5">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Unified Multi-Agent System
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Connect your voice, WhatsApp, follow-up, and calendar agents into one synchronous pipeline that runs your business end-to-end.
              </p>
              <div className="p-3.5 rounded-xl bg-indigo-950/50 border border-indigo-500/20 text-xs text-indigo-200">
                ⚡ Fully orchestrated with HubSpot, GoHighLevel, Salesforce & Google Workspace.
              </div>
            </div>

            <a
              href="#book-demo"
              className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all"
            >
              <span>Build My AI Workforce →</span>
            </a>
          </div>
        </div>

        {/* Modal / Detailed Drawer for agent exploration */}
        {selectedAgent && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-xl rounded-2xl bg-[#0c1019] border border-white/20 p-6 sm:p-8 shadow-2xl text-left">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <selectedAgent.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">{selectedAgent.name}</h4>
                    <p className="text-xs text-indigo-300 font-medium">{selectedAgent.headline}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedAgent(null)}
                  className="text-slate-400 hover:text-white p-1 text-lg font-bold"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-slate-300 mb-6">{selectedAgent.description}</p>

              <div className="space-y-3 mb-6 bg-slate-900/60 p-4 rounded-xl border border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Core Capabilities</p>
                {selectedAgent.capabilities.map((c, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 mb-6 flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>{selectedAgent.metrics}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#book-demo"
                  onClick={() => setSelectedAgent(null)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
                >
                  <span>Book a Free Demo for {selectedAgent.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedAgent(null)}
                  className="px-5 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
