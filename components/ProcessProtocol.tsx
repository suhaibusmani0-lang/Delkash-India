'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SearchCheck, FileSignature, ShieldAlert, Award, ArrowRight } from 'lucide-react';
import TiltCard from './ui/TiltCard';

const steps = [
  {
    step: '01',
    title: 'Comprehensive Conflict Search',
    tag: 'Pre-Filing Defense',
    icon: SearchCheck,
    description:
      'We run exhaustive phonetic, visual, and semantic searches across the Indian Trademark Registry database to ensure your mark is 100% distinct before spending government fees.',
  },
  {
    step: '02',
    title: 'Strategic Classification & Filing',
    tag: 'Within 24 Hours',
    icon: FileSignature,
    description:
      'Adv. Rahimullah Ansari crafts precise goods/services specifications across Classes 1–45. Applications are filed electronically with immediate government receipt and TM allocation.',
  },
  {
    step: '03',
    title: 'Objection & Hearing Advocacy',
    tag: 'Legal Representation',
    icon: ShieldAlert,
    description:
      'If the Examiner raises Section 9 (distinctiveness) or Section 11 (similarity) objections, we draft evidence-backed counter statements and attend virtual registry hearings.',
  },
  {
    step: '04',
    title: 'Certificate Issuance & Brand Shield',
    tag: '10-Year Monopolistic Protection',
    icon: Award,
    description:
      'Upon journal publication with no opposition, your official Trademark Registration Certificate is issued with the ® symbol, cementing PAN-India legal exclusivity.',
  },
];

export default function ProcessProtocol() {
  return (
    <section className="py-24 bg-navy-950 text-white relative border-t border-navy-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded mb-3 border border-gold-500/20">
            <span>Rigorous Legal Architecture</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            The 4-Step Watertight Protection Protocol
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            How Delkash Associates secures your trademarks with precision to guarantee rejection-proof filings.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <TiltCard className="h-full">
                  <div className="h-full bg-navy-900/90 border border-slate-800/90 hover:border-gold-500/60 rounded-xl p-6 flex flex-col justify-between group shadow-xl transition-all duration-300">
                    <div>
                      {/* Top Step Number & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-serif text-3xl font-extrabold text-gold-400/40 group-hover:text-gold-400 transition-colors">
                          {item.step}
                        </span>
                        <div className="w-11 h-11 rounded-lg bg-navy-800 border border-slate-700 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded">
                        {item.tag}
                      </span>

                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-300 transition-colors mt-3 mb-2">
                        {item.title}
                      </h3>

                      <p className="text-slate-400 text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-800 flex items-center text-xs font-semibold text-slate-500 group-hover:text-gold-400 transition-colors">
                      <span>Phase Complete</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

