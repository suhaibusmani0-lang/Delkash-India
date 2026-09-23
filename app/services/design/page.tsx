import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { Palette, CheckCircle2, Eye, ShieldCheck } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';

export const metadata: Metadata = {
  title: 'Industrial Design Registration India | Aesthetic Asset Protection Attorney',
  description:
    'Protect unique 2D and 3D product shapes, contours, patterns, and packaging aesthetics under the Designs Act, 2000. 10 to 15 years exclusive design monopoly across India with Adv. Rahimullah Ansari & Delkash Associates.',
  keywords: [
    'Industrial Design Registration India',
    'Design Act 2000 Lawyer Delhi',
    'Product Shape Protection India',
    'Packaging Design Registration Lawyer',
    'Design Infringement Advocate Delhi High Court',
  ],
  alternates: {
    canonical: '/services/design',
  },
  openGraph: {
    title: 'Industrial Design Registration India | Delkash Associates',
    description:
      'Safeguard visual product contours, ornamentation, and packaging against commercial counterfeiters.',
    url: 'https://delkashindia.co.in/services/design',
  },
};

export default function DesignPage() {
  return (
    <div className="pb-24">
      <PageHeader
        badge="Aesthetic Asset Rights"
        title="Industrial Design Registration & Enforcement"
        description="Safeguard novel physical contours, ornamental patterns, surface textures, and 3D product configurations against visual imitation and market piracy."
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Design Registration' },
        ]}
      />

      <section className="py-20 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded border border-gold-500/20">
                Visual Monopolies
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                Protecting What Catches the Consumer Eye
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Under the Indian Designs Act, 2000, protection is granted solely to visual features of shape, 
                configuration, pattern, ornamentation or composition of lines or colors applied to any article. 
                Delkash Associates handles representation drafting and rapid examination before the Patent & Design Office in Kolkata.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong>10 + 5 Year Protection:</strong> 15-year statutory monopoly against visual counterfeiters.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong>Locarno Classification Filing:</strong> Accurate goods mapping ensuring rejection-proof classification.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong>Anti-Piracy Action:</strong> Enforcing statutory remedies for fraudulent or obvious imitation.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <TiltCard glowColor="rgba(212, 175, 55, 0.25)">
                <div className="bg-navy-900/90 border border-gold-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-center">
                  <div className="w-14 h-14 rounded-full bg-navy-800 border border-gold-500 mx-auto flex items-center justify-center text-gold-400 mb-4">
                    <Palette className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    Protect Your Product Aesthetics
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    Audit novel industrial products, consumer electronics, jewelry, or packaging shapes.
                  </p>
                  <Link
                    href="/contact"
                    className="w-full inline-block py-3.5 px-6 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold uppercase tracking-wider text-xs rounded-lg transition-all shadow-md"
                  >
                    File Industrial Design
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

