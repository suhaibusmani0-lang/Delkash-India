import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import About from '@/components/About';
import StatsBar from '@/components/StatsBar';
import Link from 'next/link';
import { Scale, Award, ShieldCheck, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';

export const metadata: Metadata = {
  title: 'Adv. Rahimullah Ansari & Dr. Bhawana Chauhan | Delkash Associates',
  description:
    'Meet lead counsel Adv. Rahimullah Ansari (Delhi High Court) and Dr. Bhawana Chauhan (Ph.D., LL.M, LL.B) at Delkash Associates. Dedicated to Trademark, Copyright, and Patent protection in India.',
};

const milestones = [
  {
    year: '2010',
    title: 'Chambers Established',
    desc: 'Founded legal practice focusing on commercial disputes, corporate intellectual assets, and civil counsel in New Delhi.',
  },
  {
    year: '2014',
    title: 'IPR Specialization',
    desc: 'Dedicated intellectual property prosecution and registry representation before the Trade Marks Registry & Copyright Office.',
  },
  {
    year: '2019',
    title: 'PAN-India Digital Practice',
    desc: 'Transitioned to 100% paperless, rapid online filings serving enterprise clients and startups across all Indian states.',
  },
  {
    year: 'Present',
    title: '107+ 5-Star Reviews & Landmark Defense',
    desc: 'Hundreds of successfully registered marks, complex objection removals, and high-stakes infringement dispute resolutions.',
  },
];

export default function AboutPage() {
  return (
    <div className="pb-24">
      <PageHeader
        badge="Chambers Leadership & Legal Counsel"
        title="Adv. Rahimullah Ansari & Dr. Bhawana Chauhan"
        description="Senior Counsel at Delkash Associates, New Delhi. Featuring Adv. Rahimullah Ansari (Delhi High Court — LL.M, LL.B, MBA, M.Com) and Dr. Bhawana Chauhan (Ph.D., LL.M, LL.B), dedicated to defending intellectual property rights and corporate brand identities across India."
        breadcrumbs={[{ label: 'About Counsel' }]}
      />

      <div className="-mt-8 mb-16">
        <StatsBar />
      </div>

      {/* Main Profile Component */}
      <About />

      {/* Career Milestones & Experience Timeline */}
      <section className="py-20 bg-navy-950 text-white border-t border-navy-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded border border-gold-500/20">
              Chambers Trajectory
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mt-3">
              15+ Years of Dedicated Advocacy
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              From individual commercial cases to representing nationwide manufacturing and digital enterprise brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <TiltCard key={idx} className="h-full">
                <div className="h-full bg-navy-900/80 border border-slate-800 hover:border-gold-500/50 rounded-xl p-6 flex flex-col justify-between group shadow-xl">
                  <div>
                    <span className="font-serif text-3xl font-extrabold text-gold-400 block mb-2">
                      {m.year}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-300 transition-colors mb-2">
                      {m.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-800 text-[11px] text-slate-500 flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 mr-1.5" />
                    <span>Verified Chambers Record</span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Call to action card */}
          <div className="mt-16 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold-500/30 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Need Direct Legal Guidance for Your Brand?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto mt-3">
              Consult personally with Adv. Rahimullah Ansari to evaluate your trademark clearance or legal dispute.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold uppercase tracking-wider text-xs rounded-lg transition-all shadow-lg hover:shadow-gold-500/25 inline-flex items-center"
              >
                <span>Book Legal Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="https://wa.me/919871127869"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 font-semibold text-xs rounded-lg transition-all"
              >
                Direct WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

