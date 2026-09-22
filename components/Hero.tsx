'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, MessageCircle, Award, CheckCircle2, ShieldCheck, Scale, Sparkles } from 'lucide-react';
import TiltCard from './ui/TiltCard';

export default function Hero() {
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
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 bg-navy-950 overflow-hidden flex items-center">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:28px_28px]"></div>
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 space-y-6"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-xs font-semibold text-gold-400 shadow-lg">
              <span className="flex items-center text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
              </span>
              <span>4.7 ⭐ (107+ Google Reviews)</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-normal">New Delhi HQ</span>
              <Sparkles className="w-3 h-3 text-gold-300 ml-1" />
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Protect Your Creative Work & Brand Identity with{' '}
              <span className="gold-gradient-text">Expert Legal Assistance.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Expert Trademark & Copyright Registration Services in India by{' '}
              <strong className="text-white font-semibold">Rahimullah Ansari Advocate</strong>. Fast, 
              Hassle-Free, and PAN India Service.
            </p>

            {/* Key Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Zero Hidden Government Fee Surprises</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Same-Day TM Application Filing & Receipt</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Handling Trademark Objections & Show Cause</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>100% Online & Hassle-Free PAN India Service</span>
              </div>
            </div>

            {/* Dual CTAs (Clean URL scrolling without # in browser address) */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm tracking-wide uppercase transition-all shadow-xl hover:shadow-gold-500/30 group cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <a
                href="https://wa.me/919871127869?text=Hello%20Adv.%20Rahimullah%20Ansari,%20I%20would%20like%20to%20consult%20regarding%20Trademark/IPR%20legal%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366] text-emerald-300 hover:text-white border border-[#25D366]/40 font-semibold text-sm transition-all duration-300 shadow-md"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right Floating 3D Trust Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <TiltCard glowColor="rgba(212, 175, 55, 0.3)">
              <div className="bg-navy-900/90 border border-gold-500/40 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative">
                <div className="absolute -top-3.5 right-6 bg-gold-500 text-navy-950 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-lg">
                  Trusted IPR Authority
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full bg-navy-800 border border-gold-500/50 flex items-center justify-center text-gold-400 font-serif text-2xl font-bold shadow-inner">
                      RA
                    </div>
                    <div>
                      <h3 className="text-white font-serif text-lg font-bold">Rahimullah Ansari</h3>
                      <p className="text-xs text-gold-400 font-semibold">Advocate, Delhi High Court</p>
                      <p className="text-[10px] text-slate-300 font-medium tracking-wide mt-0.5">
                        LL.M, LL.B, MBA, MA, B.P.Ed, M.P.E.S, M.Com
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-navy-800 pt-4 space-y-3 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Trademark Clearance</span>
                      <span className="text-emerald-400 font-semibold">Instant Search Report</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Application Filing</span>
                      <span className="text-white font-medium">Within 24 Hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Client Rating</span>
                      <span className="text-amber-400 font-semibold">4.7 / 5.0 ⭐ (107+ Reviews)</span>
                    </div>
                  </div>

                  <div className="bg-navy-950/80 rounded-lg p-3.5 border border-white/5 flex items-start space-x-3">
                    <Award className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-300 leading-normal">
                      Delkash Associates provides end-to-end brand protection, IPR defense, commercial agreements, and dispute advisory.
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
