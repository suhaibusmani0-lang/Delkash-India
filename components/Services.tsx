'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Copyright, Lightbulb, Palette, ArrowUpRight, Scale } from 'lucide-react';
import TiltCard from './ui/TiltCard';

const services = [
  {
    title: 'Trademark Registration & Opposition',
    icon: ShieldCheck,
    tagline: 'Brand & Logo Safeguard',
    pricing: 'Transparent Govt & Legal Fees',
    features: [
      'Comprehensive TM Public Search & clearance',
      'Filing under Class 1 to 45 with registry',
      'Drafting Reply to Examination Reports (Objections)',
      'Opposition hearings before the Trademark Registry',
    ],
  },
  {
    title: 'Copyright Registration & Infringement',
    icon: Copyright,
    tagline: 'Literary, Artistic & Software Works',
    pricing: 'Fixed Retainer per Work',
    features: [
      'Software source code & UI copyrighting',
      'Artistic logos, music, video & creative scripts',
      'Cease & Desist notices against digital infringement',
      'Commercial copyright assignment agreements',
    ],
  },
  {
    title: 'Patent Filing Process',
    icon: Lightbulb,
    tagline: 'Invention & Technical Defense',
    pricing: 'Consultation & Milestone Based',
    features: [
      'Prior Art and Patentability search in India & PCT',
      'Provisional and Complete Patent Specification drafting',
      'Response to First Examination Report (FER)',
      'Representation in Controller patent hearings',
    ],
  },
  {
    title: 'Industrial Design Registration',
    icon: Palette,
    tagline: 'Shape, Pattern & Aesthetics',
    pricing: 'All-Inclusive Transparent Package',
    features: [
      'Novel 2D & 3D aesthetic product protection',
      'Official design classification audit',
      'Drafting formal design representations',
      'Design Piracy and Passing-off legal actions',
    ],
  },
];

export default function Services() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-navy-950 text-white relative border-t border-navy-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded mb-3 border border-gold-500/20">
            <Scale className="w-3.5 h-3.5" />
            <span>Comprehensive Legal Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Our Intellectual Property Specializations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Prevent infringement, eliminate counterfeiters, and monetize your intellectual creations with 
            court-tested legal strategies.
          </p>
        </div>

        {/* Services Grid with 3D TiltCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard className="h-full" glowColor="rgba(212, 175, 55, 0.18)">
                  <div className="h-full bg-navy-900/90 border border-slate-800 hover:border-gold-500/60 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-lg bg-navy-800 border border-slate-700 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shadow-md">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-gold-400 bg-gold-500/10 border border-gold-500/20 px-3 py-1 rounded-full">
                          {item.pricing}
                        </span>
                      </div>

                      <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                        {item.tagline}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-400 transition-colors mt-1 mb-4">
                        {item.title}
                      </h3>

                      <ul className="space-y-2.5 text-sm text-slate-300">
                        {item.features.map((feat, fIndex) => (
                          <li key={fIndex} className="flex items-start">
                            <span className="text-gold-400 font-bold mr-2.5">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-8 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                      <button
                        onClick={scrollToContact}
                        className="inline-flex items-center text-sm font-semibold text-gold-400 group-hover:text-gold-300 transition-colors cursor-pointer"
                      >
                        <span>Consult Advocate on this Service</span>
                        <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
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
