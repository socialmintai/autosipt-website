'use client';

import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  badge?: string;
  className?: string;
}

export function Hero({ title, subtitle, primaryCTA, secondaryCTA, badge, className }: HeroProps) {
  return (
    <section className={cn('relative overflow-hidden py-20 sm:py-28 lg:py-36', className)} aria-labelledby="hero-title">
      <div className="absolute inset-0 gradient-bg-subtle" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-accent-500/10" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {badge && (
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 dark:bg-blue-950/30 dark:text-blue-300 animate-fade-in" role="status">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              {badge}
            </span>
          )}
          
          <h1 id="hero-title" className="heading-1 text-slate-900 dark:text-white mb-6 animate-slide-up">
            {title.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h1>
          
          <p className="body-lg text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto animate-slide-up delay-100">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
            <Button size="xl" asChild>
              <a href={primaryCTA.href}>{primaryCTA.label}</a>
            </Button>
            {secondaryCTA && (
              <Button variant="outline" size="xl" asChild>
                <a href={secondaryCTA.href}>{secondaryCTA.label}</a>
              </Button>
            )}
          </div>
        </div>

        <div className="mt-16 relative" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 to-transparent z-10 h-32 bottom-0" />
          <div className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-slate-900 animate-scale-in delay-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="mx-auto h-16 w-16 text-slate-300 dark:text-slate-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-slate-500 dark:text-slate-400 text-lg">Demo placeholder - Replace with product video or interactive demo</p>
                <p className="text-slate-400 dark:text-slate-500 text-sm mt-2">[Video: AI voice agent handling a customer call]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TrustBadgesProps {
  stats?: { label: string; value: string }[];
  logos?: { src: string; alt: string; href?: string }[];
}

export function TrustBadges({ stats, logos }: TrustBadgesProps) {
  const defaultStats = [
    { label: 'Countries Served', value: '4' },
    { label: 'Services Offered', value: '7' },
    { label: 'Industry Solutions', value: '6' },
    { label: 'Integration Partners', value: '100+' },
  ];

  return (
    <section className="py-12 border-y border-slate-200 dark:border-slate-800" aria-label="Trust indicators">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {stats && stats.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`text-center animate-fade-in delay-${i * 100}`}>
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
            {logos?.map((logo, i) => (
              <a
                key={logo.alt}
                href={logo.href || '#'}
                className="grayscale hover:grayscale-0 transition-all duration-300 max-h-8 max-w-32"
                aria-label={logo.alt}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-auto max-w-full"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}