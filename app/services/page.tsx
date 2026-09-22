import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Services from '@/components/Services';
import ProcessProtocol from '@/components/ProcessProtocol';
import Link from 'next/link';
import { ShieldCheck, Copyright, Lightbulb, Palette, ArrowRight, CheckCircle2 } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';

export const metadata: Metadata = {
  title: 'IPR Legal Practice Areas & Services | Delkash Associates',
  description:
    'Explore specialized IPR services: Trademark, Copyright, Patent and Industrial Design Registration in India. Full PAN India legal representation by Rahimullah Ansari Advocate.',
};

const detailedServices = [
  {
    title: 'Trademark Registration & Opposition',
    slug: '/services/trademark',
    icon: ShieldCheck,
    tag: 'Flagship Practice',
    summary:
      'Complete trademark protection lifecycle from public clearance search to certificate grant and contested opposition hearings before the Trade Marks Registry.',
    keyPoints: [
      'Identical & phonetic search clearance report',
      'Drafting precise Class 1–45 goods/services claims',
      'Reply to Examination Reports (Section 9 & 11 objections)',
      'Opposition defense and show-cause hearing attendance',
    ],
  },
  {
    title: 'Copyright Registration & Enforcement',
    slug: '/services/copyright',
    icon: Copyright,
    tag: 'Creative Defense',
    summary:
      'Safeguarding literary, artistic, musical, dramatic works, software source code, UI designs, and commercial business assets against piracy.',
    keyPoints: [
      'Software source code & algorithms copyright filing',
      'Artistic logos, digital illustrations, and branding works',
      'Cease & Desist notices & injunction suits against infringers',
      'Assignment & licensing legal agreement drafting',
    ],
  },
  {
    title: 'Patent Search & Specification Filing',
    slug: '/services/patent',
    icon: Lightbulb,
    tag: 'Invention Protection',
    summary:
      'Technical novelty assessments, patentability opinions, and watertight provisional & complete specification drafting for technological inventions.',
    keyPoints: [
      'Worldwide Prior Art and patentability searches (India & PCT)',
      'Drafting provisional & complete patent claims',
      'First Examination Report (FER) legal responses',
      'Representation before Controller of Patents',
    ],
  },
  {
    title: 'Industrial Design Registration',
    slug: '/services/design',
    icon: Palette,
    tag: 'Aesthetic Rights',
    summary:
      'Monopolizing the unique visual shapes, configurations, patterns, and ornamentation of industrial products against counterfeiting.',
    keyPoints: [
      'Classification audit under Locarno Classification',
      'Formal multi-perspective representation drafting',
      'Design objections & registry examination rebuttals',
      'Design piracy and passing-off civil enforcement',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pb-24">
      <PageHeader
        badge="Legal Practice Portfolio"
        title="Comprehensive Intellectual Property Services"
        description="Watertight legal strategies, rapid digital registry filings, and relentless courtroom representation to transform creative innovations into enforceable commercial assets."
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* Main Services Grid */}
      <section className="py-20 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <TiltCard key={index} className="h-full">
                  <div className="h-full bg-navy-900/90 border border-slate-800 hover:border-gold-500/60 rounded-xl p-8 flex flex-col justify-between group shadow-xl transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-lg bg-navy-800 border border-slate-700 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shadow-md">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-gold-400 bg-gold-500/10 border border-gold-500/20 px-3 py-1 rounded-full">
                          {service.tag}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold-400 transition-colors mb-3">
                        {service.title}
                      </h3>

                      <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        {service.summary}
                      </p>

                      <ul className="space-y-2.5 text-xs text-slate-300 mb-8">
                        {service.keyPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-gold-400 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                      <Link
                        href={service.slug}
                        className="inline-flex items-center text-sm font-bold text-gold-400 hover:text-gold-300 transition-colors group-hover:translate-x-1 duration-200"
                      >
                        <span>View Practice Specifics & Process</span>
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Protocol Section */}
      <ProcessProtocol />

      {/* Bottom CTA */}
      <section className="py-16 bg-navy-950 text-white border-t border-navy-800/80">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Unsure Which Class or Protection Your Asset Requires?
          </h2>
          <p className="text-slate-300 text-sm mt-3 max-w-xl mx-auto">
            Book a direct advisory session with Adv. Rahimullah Ansari to evaluate your brand clearance, patentability, or copyright scope.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold uppercase tracking-wider text-xs rounded-lg transition-all shadow-lg hover:shadow-gold-500/25"
            >
              Consult with Head Attorney
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

