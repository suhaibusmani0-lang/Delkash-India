import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { Copyright, Code, FileCheck, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';

export const metadata: Metadata = {
  title: 'Copyright Registration Delhi | Software Code & Creative Works Lawyer',
  description:
    'Secure lifetime + 60 years statutory copyright protection for software source code, websites, literary works, sound recordings, and artistic assets with Adv. Rahimullah Ansari (Delhi High Court). Complete filing before Copyright Office, New Delhi.',
  keywords: [
    'Copyright Registration Delhi',
    'Software Copyright Lawyer India',
    'Source Code Protection Lawyer',
    'Copyright Infringement Notice Delhi High Court',
    'Copyright Office New Delhi Advocate',
    'Artistic Work Copyright India',
  ],
  alternates: {
    canonical: '/services/copyright',
  },
  openGraph: {
    title: 'Copyright Registration Delhi | Adv. Rahimullah Ansari',
    description:
      'Lifetime + 60 years copyright defense for code, music, literature, and films. Rapid filing with Copyright Office New Delhi.',
    url: 'https://delkashindia.co.in/services/copyright',
  },
};

const copyrightWorks = [
  {
    icon: Code,
    title: 'Software & Source Code',
    desc: 'Proprietary frontend code, backend algorithms, database architectures, and UI/UX flows protected under literary software copyright.',
  },
  {
    icon: FileCheck,
    title: 'Literary & Academic Works',
    desc: 'Manuscripts, books, articles, training modules, and technical manuals safeguarded against uncredited commercial exploitation.',
  },
  {
    icon: Copyright,
    title: 'Artistic & Brand Logos',
    desc: 'Protecting artistic visual branding, character illustrations, digital designs, and packaging graphics from counterfeiting.',
  },
  {
    icon: ShieldAlert,
    title: 'Infringement Notices & Suits',
    desc: 'Immediate Cease & Desist notices, digital takedown notices under the IT Act, and damages litigation before civil courts.',
  },
];

export default function CopyrightPage() {
  return (
    <div className="pb-24">
      <PageHeader
        badge="Creative Property Rights"
        title="Copyright Registration & Anti-Piracy Defense"
        description="Statutory legal defense for authors, software engineers, creators, and corporate brands. Ensuring that original expressions remain protected against unauthorized replication."
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Copyright Registration' },
        ]}
      />

      <section className="py-20 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded border border-gold-500/20">
                Statutory Protection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                Securing Commercial Exclusivity for Your Creative Assets
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                While copyright exists automatically upon creation, securing an official <strong>Government 
                Copyright Registration Certificate</strong> is indispensable in court for claiming statutory 
                damages, filing police complaints, or obtaining temporary and permanent injunctions against pirates.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong>Lifetime + 60 Years Protection:</strong> Long-term commercial licensing security for creators and corporate heirs.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong>Courtroom Primacy:</strong> Certificate of Registration acts as prima facie proof of originality in all Indian courts.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong>Watertight Assignments:</strong> Comprehensive employee and contractor copyright assignment agreements.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <TiltCard glowColor="rgba(212, 175, 55, 0.25)">
                <div className="bg-navy-900/90 border border-gold-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-center">
                  <div className="w-14 h-14 rounded-full bg-navy-800 border border-gold-500 mx-auto flex items-center justify-center text-gold-400 mb-4">
                    <Copyright className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    Consult Copyright Counsel
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    Protect your source code, literature, or corporate media before publicly shipping.
                  </p>
                  <Link
                    href="/contact"
                    className="w-full inline-block py-3.5 px-6 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold uppercase tracking-wider text-xs rounded-lg transition-all shadow-md"
                  >
                    File Copyright Application
                  </Link>
                </div>
              </TiltCard>
            </div>

          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-navy-950 text-white border-t border-navy-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold tracking-tight">
              Copyright Practice Disciplines
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {copyrightWorks.map((work, idx) => {
              const Icon = work.icon;
              return (
                <TiltCard key={idx} className="h-full">
                  <div className="h-full bg-navy-900/80 border border-slate-800 rounded-xl p-6 flex flex-col justify-between group shadow-xl">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-navy-800 border border-slate-700 flex items-center justify-center text-gold-400 mb-4 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-base font-bold text-white group-hover:text-gold-300 transition-colors mb-2">
                        {work.title}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {work.desc}
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

