import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';

export const metadata: Metadata = {
  title: 'Client Reviews & Endorsements | Delkash Associates',
  description:
    'Read verified client testimonials and Google reviews for Adv. Rahimullah Ansari. 4.7 ⭐ rating across 107+ reviews for trademark and IPR services.',
};

export default function ReviewsPage() {
  return (
    <div className="pb-24">
      <PageHeader
        badge="Verified Reputation"
        title="What Our Clients Say About Delkash Associates"
        description="Rated 4.7 Stars across 107+ Google Reviews by business founders, startup creators, and corporate journals nationwide."
        breadcrumbs={[{ label: 'Client Reviews' }]}
      />

      {/* Trust Rating Highlight Card */}
      <section className="py-12 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TiltCard glowColor="rgba(212, 175, 55, 0.25)">
            <div className="bg-navy-900/90 border border-gold-500/40 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
              <div className="space-y-3 text-center md:text-left">
                <div className="inline-flex items-center space-x-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
                  4.7 out of 5.0 Star Rating
                </h2>
                <p className="text-slate-300 text-sm max-w-lg leading-relaxed">
                  Based on 107+ verified Google reviews from business leaders across Delhi NCR, Mumbai, Bengaluru, and across India.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold uppercase tracking-wider text-xs rounded-lg transition-all shadow-lg hover:shadow-gold-500/25 text-center"
                >
                  Consult Adv. Ansari
                </Link>
                <a
                  href="https://wa.me/919871127869"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 font-semibold text-xs rounded-lg transition-all text-center"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* Client Endorsement Grid */}
      <Testimonials />
    </div>
  );
}

