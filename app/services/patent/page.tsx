import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { Lightbulb, Search, FileCode, CheckCircle2, ShieldCheck } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';

export const metadata: Metadata = {
  title: 'Patent Attorney New Delhi | Patent Search, Drafting & Filing India',
  description:
    'Protect technical inventions and hardware breakthroughs with top patent attorneys in New Delhi. Prior art novelty search, provisional & complete patent drafting under the Indian Patents Act, 1970 by Adv. Rahimullah Ansari & Dr. Bhawana Chauhan.',
  keywords: [
    'Patent Attorney New Delhi',
    'Patent Filing India',
    'Patent Search Lawyer Delhi',
    'Provisional Patent Drafting',
    'Indian Patent Office Dwarka',
    'Software Patent Lawyer India',
    'Hardware Patent Attorney Delhi',
  ],
  alternates: {
    canonical: '/services/patent',
  },
  openGraph: {
    title: 'Patent Attorney New Delhi | Delkash Associates',
    description:
      'Turn technical inventions into 20-year monopolies. Novelty search & patent drafting by senior IPR counsel.',
    url: 'https://delkashindia.co.in/services/patent',
  },
};

export default function PatentPage() {
  return (
    <div className="pb-24">
      <PageHeader
        badge="Invention Defense"
        title="Patent Search & Specification Prosecution"
        description="Transform novel technical breakthroughs and proprietary industrial processes into enforceable 20-year monopolies under the Indian Patents Act, 1970."
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Patent Filing' },
        ]}
      />

      {/* AI Overview & Key Legal Grounding (AIO Snippet) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-8 relative z-20">
        <div className="bg-navy-900/95 border border-gold-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          <div className="flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span>AI Overview & Essential Law Facts: Patent Prosecution India</span>
          </div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4">
            Under the <strong>Patents Act, 1970</strong>, an Indian patent grants an inventor an exclusive 20-year legal monopoly to manufacture, license, or sell an invention. To be patentable, an invention must satisfy three statutory tests: <strong>Global Novelty</strong>, an <strong>Inventive Step (Non-obviousness)</strong>, and <strong>Industrial Applicability</strong>. <strong>Delkash Associates</strong>, guided by <strong>Adv. Rahimullah Ansari & Dr. Bhawana Chauhan (Ph.D., LL.M)</strong>, handles patentability novelty searches, provisional locking of priority dates, non-infringement opinions, and complete specification prosecution before the Indian Patent Office, Dwarka, New Delhi.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300 border-t border-slate-800/80 pt-4">
            <div><span className="text-gold-400 font-semibold block">Statutory Term:</span> 20 Years from Filing</div>
            <div><span className="text-gold-400 font-semibold block">Patent Office:</span> Dwarka Sector 14, Delhi</div>
            <div><span className="text-gold-400 font-semibold block">Novelty Standard:</span> Absolute Worldwide</div>
            <div><span className="text-gold-400 font-semibold block">Counsel:</span> Dr. Bhawana Chauhan & Adv. Ansari</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded border border-gold-500/20">
                Technical Mastery
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                High-Stakes Patent Prosecution & Claim Drafting
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                A patent is only as strong as the independent and dependent claims drafted within the specification. 
                Our patent prosecution practice conducts exhaustive Prior Art novelty audits before drafting provisional 
                and complete claims that withstand tough Controller examinations.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong>Comprehensive Prior Art Searches:</strong> Indian and international patent databases (WIPO, USPTO, EPO) analyzed.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong>First Examination Report (FER) Defense:</strong> Responding strategically to novelty, inventive step, and industrial applicability objections.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong>20-Year Exclusivity:</strong> Preventing competitors from manufacturing, importing, or selling your invention.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <TiltCard glowColor="rgba(212, 175, 55, 0.25)">
                <div className="bg-navy-900/90 border border-gold-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-center">
                  <div className="w-14 h-14 rounded-full bg-navy-800 border border-gold-500 mx-auto flex items-center justify-center text-gold-400 mb-4">
                    <Lightbulb className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    Evaluate Your Invention
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    Execute a Confidential Non-Disclosure Agreement (NDA) and assess patentability with our counsel.
                  </p>
                  <Link
                    href="/contact"
                    className="w-full inline-block py-3.5 px-6 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold uppercase tracking-wider text-xs rounded-lg transition-all shadow-md"
                  >
                    Schedule Invention Review
                  </Link>
                </div>
              </TiltCard>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

