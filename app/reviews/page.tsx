import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight, ExternalLink } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';

export const metadata: Metadata = {
  title: 'Client Reviews & Google Ratings | Trademark Expert India (4.7 ⭐ 107+ Reviews)',
  description:
    'Read verified client feedback and Google reviews for Adv. Rahimullah Ansari & Trademark Expert India. Rated 4.7 ⭐ over 107+ reviews for trademark registration, objection replies, and high court advocacy.',
  keywords: [
    'Trademark Expert India Reviews',
    'Advocate Rahimullah Ansari Ratings',
    'Trademark Lawyer Reviews Delhi',
    'Best IPR Lawyer Google Reviews',
  ],
  alternates: {
    canonical: '/reviews',
  },
  openGraph: {
    title: 'Client Reviews & Ratings (4.7 ⭐) | Trademark Expert India',
    description:
      '107+ verified 5-star reviews for Trademark, Patent, and Copyright legal counsel across India.',
    url: 'https://www.trademarkexpertindia.com/reviews',
  },
};

export default function ReviewsPage() {
  return (
    <div className="pb-24">
      <PageHeader
        badge="Verified Reputation"
        title="What Our Clients Say About Trademark Expert India"
        description="Rated 4.7 Stars across 107+ Google Reviews by business founders, startup creators, and corporate journals nationwide."
        breadcrumbs={[{ label: 'Client Reviews' }]}
      />

      {/* Trust Rating Highlight Card */}
      <section className="py-12 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <TiltCard glowColor="rgba(212, 175, 55, 0.25)">
            <div className="bg-navy-900/90 border border-gold-500/40 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
              <div className="space-y-3 text-center md:text-left">
                <div className="inline-flex items-center space-x-2 flex-wrap">
                  <div className="inline-flex items-center space-x-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    ✓ Google Verified Profile
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
                  5.0 Star Law Firm Rating
                </h2>
                <p className="text-slate-300 text-sm max-w-lg leading-relaxed">
                  Google Business Profile ID: <code className="text-gold-400 font-mono">1097941121254250819</code> &bull; Shop Code: <code className="text-gold-400 font-mono">04977272213376957575</code>. Verified Intellectual Property &amp; Trademark legal counsel based in New Delhi.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Trademark+Expert+India+Okhla+Head+Rd+Jamia+Nagar+New+Delhi+110025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider text-xs rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 text-center flex items-center justify-center space-x-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Verify on Google (GMB)</span>
                </a>
                <a
                  href="https://www.google.com/search?q=Trademark+Expert+India+New+Delhi+Reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold uppercase tracking-wider text-xs rounded-xl transition-all shadow-lg hover:shadow-gold-500/25 text-center"
                >
                  Write Google Review
                </a>
                <a
                  href="https://wa.me/919871127869"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 font-semibold text-xs rounded-xl transition-all text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </TiltCard>

          {/* Live Google Maps & Business Profile Interactive Embed */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-navy-900/50 shadow-2xl p-4 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center space-x-2 text-white font-semibold text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Google Maps &amp; Reviews Embed (GMB ID: 1097941121254250819)</span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Trademark+Expert+India+Okhla+Head+Rd+Jamia+Nagar+New+Delhi+110025"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gold-400 hover:text-white transition-colors underline font-medium"
              >
                Open Full Screen on Google Maps &rarr;
              </a>
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-700/60 h-80 sm:h-96 w-full shadow-inner relative">
              <iframe
                title="TRADEMARK EXPERT INDIA Live Google Business Profile and Reviews"
                src="https://maps.google.com/maps?q=Trademark+Expert+India,+C-326,+Okhla+Head+Rd,+near+UBI,+Jamia+Nagar,+New+Delhi+110025&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Client Endorsement Grid */}
      <Testimonials />
    </div>
  );
}

