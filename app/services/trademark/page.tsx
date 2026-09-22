import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { ShieldCheck, Search, FileText, Scale, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';

export const metadata: Metadata = {
  title: 'Trademark Registration & Opposition Services | Delkash Associates',
  description:
    'Protect your brand name, logo and tagline across India. Same-day TM application filing, Examination reply (Section 9/11) and registry hearing advocacy by Rahimullah Ansari Advocate.',
};

const stages = [
  {
    icon: Search,
    title: '1. Phonetic & Visual TM Search',
    desc: 'Deep clearance check against over 45 classes on the official Trade Marks Registry database to eliminate collision risks.',
  },
  {
    icon: FileText,
    title: '2. Express Filing (Within 24 Hrs)',
    desc: 'Drafting exact description of goods/services. Filing Form TM-A with immediate generation of official application number and ™ right.',
  },
  {
    icon: Scale,
    title: '3. Examination Report & Rebuttal',
    desc: 'If objections are raised under Section 9 (lack of distinctiveness) or Section 11 (similar existing marks), we draft comprehensive legal rebuttals citing High Court precedents.',
  },
  {
    icon: ShieldCheck,
    title: '4. Publication & Certificate Grant',
    desc: 'Advertisement in the Trade Marks Journal for 4 months. In absence of opposition, your official ® Certificate is issued with 10-year nationwide protection.',
  },
];

export default function TrademarkPage() {
  return (
    <div className="pb-24">
      <PageHeader
        badge="Flagship Practice Area"
        title="Trademark Registration & Opposition"
        description="Comprehensive brand security for wordmarks, logos, slogans, and trade dress. Expert defense against registry objections, show-cause hearings, and commercial trademark infringers."
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Trademark Registration' },
        ]}
      />

      {/* Overview & Key Highlights */}
      <section className="py-20 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded border border-gold-500/20">
                Strategic Brand Protection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                Why Experienced Legal Counsel Matters in Trademark Filing
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                More than 40% of DIY or generic portal trademark applications face severe registry 
                objections or abandonment due to wrong classification, overly broad claims, or descriptive names. 
                At <strong>Delkash Associates</strong>, Adv. Rahimullah Ansari handles your application with 
                strategic litigation foresight.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong>Zero Registry Surprises:</strong> Complete pre-filing conflict assessment so you do not waste statutory government fees.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong>High Court Precedent Grounding:</strong> Counter-statements drafted to overcome tough Section 9 & 11 rejections.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong>Virtual & In-Person Hearing Appearance:</strong> Personal representation before Senior Trademark Hearing Officers.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <TiltCard glowColor="rgba(212, 175, 55, 0.25)">
                <div className="bg-navy-900/90 border border-gold-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    Trademark Consultation Snapshot
                  </h3>
                  <p className="text-xs text-slate-400 mb-6">
                    Statutory Government & Professional Fee Overview
                  </p>

                  <div className="space-y-4 text-xs">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-navy-950 border border-slate-800">
                      <span className="text-slate-300">Individual / Startup / MSME</span>
                      <span className="text-gold-400 font-bold">₹4,500 Govt Fee / Class</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-navy-950 border border-slate-800">
                      <span className="text-slate-300">Other Entities (Pvt Ltd / LLP / Non-MSME)</span>
                      <span className="text-gold-400 font-bold">₹9,000 Govt Fee / Class</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-navy-950 border border-slate-800">
                      <span className="text-slate-300">Application Filing Speed</span>
                      <span className="text-emerald-400 font-bold">Within 24 Hours</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-navy-950 border border-slate-800">
                      <span className="text-slate-300">Validity Period</span>
                      <span className="text-white font-bold">10 Years (Renewable)</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-800 text-center">
                    <Link
                      href="/contact"
                      className="w-full inline-block py-3 px-6 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold uppercase tracking-wider text-xs rounded-lg transition-all shadow-md"
                    >
                      Book Free TM Clearance Check
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </div>

          </div>
        </div>
      </section>

      {/* 4-Stage Breakdown */}
      <section className="py-20 bg-navy-950 text-white border-t border-navy-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded border border-gold-500/20">
              Registration Roadmap
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mt-3">
              The 4 Stages to Your Registered ® Mark
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <TiltCard key={idx} className="h-full">
                  <div className="h-full bg-navy-900/80 border border-slate-800 hover:border-gold-500/50 rounded-xl p-6 flex flex-col justify-between group shadow-xl">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-navy-800 border border-slate-700 flex items-center justify-center text-gold-400 mb-4 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-base font-bold text-white group-hover:text-gold-300 transition-colors mb-2">
                        {stage.title}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

