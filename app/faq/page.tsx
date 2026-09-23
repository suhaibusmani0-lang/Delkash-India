import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import FaqSection from '@/components/FaqSection';
import Link from 'next/link';
import { ArrowRight, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Trademark & IPR FAQ India | Filing Fees, Objections, Hearings & Timelines',
  description:
    'Answers to all frequent questions regarding Trademark Registration in India, Section 9/11 objection replies, government fees, TM-A filing, and High Court IPR litigation by Adv. Rahimullah Ansari.',
  keywords: [
    'Trademark Registration FAQ India',
    'How to reply to trademark objection',
    'Trademark government fee India',
    'Difference between TM and R symbol',
    'Trademark hearing process Dwarka',
  ],
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'Trademark & IPR FAQ India | Delkash Associates',
    description:
      'Clear, authoritative answers on brand protection, copyright registration, patent prosecution, and legal fees.',
    url: 'https://delkashindia.co.in/faq',
  },
};

export default function FaqPage() {
  return (
    <div className="pb-24">
      <PageHeader
        badge="Legal Knowledge Center"
        title="Frequently Asked Questions & Legal Guidance"
        description="Clear, authoritative answers from Delkash Associates on trademark filing, objection rebuttals, copyright protection, and statutory fees."
        breadcrumbs={[{ label: 'FAQ' }]}
      />

      {/* Main Interactive FAQ Accordion */}
      <FaqSection />

      {/* Contact Prompt */}
      <section className="py-16 bg-navy-950 text-white border-t border-navy-800/80">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-12 h-12 rounded-full bg-navy-800 border border-gold-500/40 flex items-center justify-center text-gold-400 mx-auto mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Have a Specific Question About Your Mark or Matter?
          </h2>
          <p className="text-slate-300 text-sm mt-3 max-w-xl mx-auto">
            Every trademark and copyright matter possesses distinct legal characteristics. Send your inquiry directly to Rahimullah Ansari Advocate.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold uppercase tracking-wider text-xs rounded-lg transition-all shadow-lg hover:shadow-gold-500/25 inline-flex items-center"
            >
              <span>Ask Our Counsel Directly</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

