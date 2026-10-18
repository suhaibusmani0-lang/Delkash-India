'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, ShieldCheck, Scale, Sparkles, Phone, MessageCircle } from 'lucide-react';
import HeroSpecialistForm from './HeroSpecialistForm';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 bg-navy-950 overflow-hidden flex items-center">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:28px_28px]"></div>
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Hero Copy - Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Trust Badge with GMB ID */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-xs font-semibold text-gold-400 shadow-lg">
              <span className="flex items-center text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
              </span>
              <span>4.7 ⭐ (107+ Google Reviews)</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-300 font-normal">GMB: 1097941121254250819</span>
              <Sparkles className="w-3 h-3 text-gold-300" />
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-white leading-[1.18] tracking-tight">
              Protect Your Brand Identity &amp; Creative Work with{' '}
              <span className="gold-gradient-text block mt-1 sm:inline sm:mt-0">
                Expert Legal Assistance.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Premier Trademark, Copyright, Patent &amp; Design registration across India led by{' '}
              <strong className="text-white font-semibold">Adv. Rahimullah Ansari</strong> (Founder) &amp;{' '}
              <strong className="text-white font-semibold">Dr. Bhawana Chauhan</strong> (Co-Founder). Fast, 
              transparent, and 100% online PAN-India service.
            </p>

            {/* Key Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Same-Day TM Application Filing</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Zero Hidden Government Fee Surprises</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Handling Trademark Objections &amp; Hearings</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>100% Online &amp; Hassle-Free PAN India</span>
              </div>
            </div>

            {/* Direct Helpline CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="tel:+919871127869"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-gold-500/25"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call: +91 98711 27869</span>
              </a>
              <a
                href="tel:+918076303405"
                className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-slate-200 border border-slate-700 hover:border-gold-500/50 font-semibold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>+91 8076 303 405</span>
              </a>
              <a
                href="https://wa.me/919871127869?text=Hello%20Adv.%20Rahimullah%20Ansari,%20I%20would%20like%20to%20consult%20regarding%20Trademark/IPR%20legal%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366] text-emerald-300 hover:text-white border border-[#25D366]/40 font-semibold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Chambers Standing Credential */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800/70 max-w-xl">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Chamber 112, Saket District Court</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <div className="flex items-center space-x-1.5">
                <Scale className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Delhi High Court Bar Standing</span>
              </div>
            </div>
          </motion.div>

          {/* Right Specialist Lead Form - Exactly from the User's Screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <HeroSpecialistForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
