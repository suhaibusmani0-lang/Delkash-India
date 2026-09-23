import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { ShieldCheck, Search, FileText, Scale, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';

export const metadata: Metadata = {
  title: 'Trademark Registration Delhi | Section 9/11 Objection & Hearing Lawyer',
  description:
    'Express Trademark Registration in New Delhi within 24 hours. Form TM-A filing, Section 9/11 Examination objection replies, and physical/virtual Trade Marks Registry hearing representation by Adv. Rahimullah Ansari (Delhi High Court).',
  keywords: [
    'Trademark Registration Delhi',
    'Trademark Attorney New Delhi',
    'Section 9 Trademark Objection Reply',
    'Section 11 Trademark Objection Reply',
    'Trade Marks Registry Dwarka Advocate',
    'Trademark Hearing Lawyer Delhi',
    'Trademark Opposition Lawyer India',
    'Brand Logo Registration Delhi',
    'Advocate Rahimullah Ansari Trademark',
  ],
  alternates: {
    canonical: '/services/trademark',
  },
  openGraph: {
    title: 'Trademark Registration Delhi | Adv. Rahimullah Ansari (Delhi High Court)',
    description:
      'Fast, rejection-proof Trademark Registration in New Delhi. Defense against registry objections and commercial infringers across India.',
    url: 'https://delkashindia.co.in/services/trademark',
  },
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

      {/* AI Overview & Key Legal Grounding (AIO Snippet) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-8 relative z-20">
        <div className="bg-navy-900/95 border border-gold-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          <div className="flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span>AI Overview & Essential Law Facts: Trademark Filing India</span>
          </div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4">
            Under the <strong>Trade Marks Act, 1999</strong>, trademark registration grants exclusive nationwide commercial ownership of your brand name, logo, or tagline for 10 years (indefinitely renewable). Official filing via <strong>Form TM-A</strong> incurs a government fee of <strong>₹4,500</strong> for individuals/startups (MSME) and <strong>₹9,000</strong> for body corporates. <strong>Delkash Associates</strong>, headed by <strong>Adv. Rahimullah Ansari (Chamber 112, Saket District Court & Delhi High Court)</strong>, provides 24-hour express filing, Section 9 & 11 examination objection defense, and representation before the Trade Marks Registry, Dwarka, New Delhi.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300 border-t border-slate-800/80 pt-4">
            <div><span className="text-gold-400 font-semibold block">Filing Form:</span> Form TM-A (CGPDTM)</div>
            <div><span className="text-gold-400 font-semibold block">Protection:</span> 10 Years (Renewable)</div>
            <div><span className="text-gold-400 font-semibold block">Objection Defense:</span> Sec 9 & Sec 11 Rebuttals</div>
            <div><span className="text-gold-400 font-semibold block">Chambers:</span> Chamber 112 Saket Court</div>
          </div>
        </div>
      </section>

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

