'use client';

import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Bot,
  Zap,
  Calendar,
  Database,
  Volume2,
} from '@/components/ui/Icons';

export function HeroSection() {
  const [activeStep, setActiveStep] = useState(2);

  // Auto-cycle simulation steps subtly
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= 4 ? 0 : prev + 1));
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const flowSteps = [
    {
      id: 0,
      title: 'LEAD RECEIVED',
      desc: 'Inbound message from WhatsApp at 11:42 PM',
      badge: 'New Inquiry',
      badgeColor: 'text-sky-400 border-sky-500/30 bg-sky-500/10',
    },
    {
      id: 1,
      title: 'AI AGENT RESPONDING',
      desc: '“Hi Sarah, thanks for contacting us. How can I help?”',
      badge: 'Active Dialogue',
      badgeColor: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
    },
    {
      id: 2,
      title: 'LEAD QUALIFIED ✓',
      desc: 'High intent confirmed: Dental implant consultation',
      badge: 'Score 96%',
      badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    },
    {
      id: 3,
      title: 'APPOINTMENT BOOKED ✓',
      desc: 'Locked into Dr. Reynolds’ calendar for Wed 3:00 PM',
      badge: 'Calendar Synced',
      badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
    },
    {
      id: 4,
      title: 'CRM UPDATED ✓',
      desc: 'HubSpot contact created + WhatsApp confirmation dispatched',
      badge: 'Pipeline Ready',
      badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#07090e]">
      {/* Subtle radial ambient glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-600/15 via-sky-600/10 to-purple-600/15 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-10 w-[350px] h-[350px] bg-sky-500/10 blur-[100px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* Subtle background tech grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & High-converting CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/[0.04] border border-white/10 text-slate-300 backdrop-blur-md shadow-inner">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>AI AUTOMATION FOR MODERN BUSINESSES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Automate the Work.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">
                Grow the Business.
              </span>
            </h1>

            {/* Alternative Supporting Headline */}
            <p className="text-xl sm:text-2xl font-medium text-slate-200 tracking-tight">
              Your AI workforce for sales, support, follow-ups and appointments.
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal">
              AutoSipt builds intelligent AI agents that work 24/7 — answering calls, responding to
              WhatsApp messages, qualifying leads, following up with prospects and booking
              appointments automatically.
            </p>

            {/* CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#book-demo"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 hover:from-indigo-500 hover:to-sky-400 shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transition-all duration-300 active:scale-[0.98]"
              >
                <span>Book a Free AI Demo</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-medium text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all duration-200"
              >
                <span>See How It Works</span>
              </a>
            </div>

            {/* Below CTA Trust Markers */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                No long-term commitment
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-sky-400" />
                Fast setup
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-purple-400" />
                Works 24/7
              </span>
            </div>
          </div>

          {/* Right Column: Hero Product Visual (Interactive AI Workforce Interface) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl bg-gradient-to-b from-slate-900/90 via-[#0a0e17]/95 to-[#05070a] border border-white/15 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              {/* Top status bar with live indicators */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                  <span className="text-xs font-semibold text-white tracking-wide">
                    AutoSipt Pipeline Engine
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    AI Agent Online
                  </span>
                </div>
              </div>

              {/* Status pills row */}
              <div className="grid grid-cols-3 gap-2 my-4">
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-center">
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Mode</p>
                  <p className="text-xs font-medium text-slate-200 mt-0.5 flex items-center justify-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    24/7 Active
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-center">
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Speed</p>
                  <p className="text-xs font-medium text-slate-200 mt-0.5 flex items-center justify-center gap-1">
                    <Zap className="w-3 h-3 text-amber-400" />
                    &lt; 500ms
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-center">
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Workforce</p>
                  <p className="text-xs font-medium text-emerald-300 mt-0.5 flex items-center justify-center gap-1">
                    <Bot className="w-3 h-3 text-emerald-400" />
                    Autonomous
                  </p>
                </div>
              </div>

              {/* Interactive pipeline step tracker */}
              <div className="space-y-2.5 my-4">
                {flowSteps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  const isDone = activeStep > idx;

                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={`w-full text-left p-3 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? 'bg-indigo-950/40 border-indigo-500/60 shadow-[0_0_15px_rgba(99,102,241,0.25)]'
                          : isDone
                          ? 'bg-slate-900/40 border-emerald-500/30 opacity-90'
                          : 'bg-white/[0.02] border-white/5 opacity-60 hover:opacity-80'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-bold ${
                              isDone
                                ? 'bg-emerald-500 text-slate-950'
                                : isActive
                                ? 'bg-indigo-500 text-white animate-pulse'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {isDone ? '✓' : idx + 1}
                          </span>
                          <span
                            className={`text-xs font-bold tracking-wide ${
                              isActive ? 'text-indigo-300' : isDone ? 'text-slate-200' : 'text-slate-400'
                            }`}
                          >
                            {step.title}
                          </span>
                        </div>
                        <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${step.badgeColor}`}>
                          {step.badge}
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 mt-1.5 pl-7 font-normal">
                        {step.desc}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Live Status Pipeline indicators requested in Section 4 */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Lead Processing Live
                </span>
                <span className="text-slate-500 font-mono">100% Autonomous</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
