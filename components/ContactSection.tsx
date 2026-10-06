'use client';

import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Building2, Landmark } from 'lucide-react';
import ContactForm from './ContactForm';
import TiltCard from './ui/TiltCard';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-navy-950 text-white relative border-t border-navy-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Address */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-block text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded mb-3 border border-gold-500/20">
                Official Chambers & Office
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                Schedule a Consultation
              </h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                Connect with Rahimullah Ansari Advocate directly for brand clearance, 
                cease & desist drafting, and trademark registry hearing representations.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              {/* Office Address */}
              <div className="flex items-start space-x-4 bg-navy-900/50 p-4 rounded-xl border border-slate-800/70 hover:border-gold-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-navy-900 border border-slate-800 flex items-center justify-center text-gold-400 flex-shrink-0 shadow-md">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xs uppercase tracking-wider text-gold-400">
                    Main Office Address:
                  </h4>
                  <p className="text-slate-200 leading-normal text-xs sm:text-sm mt-1">
                    C-326, Taleem Apt, Near Kotak ATM, Okhla Head, Jamia Nagar, New Delhi 110025
                  </p>
                </div>
              </div>

              {/* Court Chambers Address */}
              <div className="flex items-start space-x-4 bg-navy-900/50 p-4 rounded-xl border border-slate-800/70 hover:border-gold-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-navy-900 border border-slate-800 flex items-center justify-center text-gold-400 flex-shrink-0 shadow-md">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xs uppercase tracking-wider text-gold-400">
                    Court Chambers Address:
                  </h4>
                  <p className="text-slate-200 leading-normal text-xs sm:text-sm mt-1">
                    Chamber No. 112, First Floor, Saket District Court, Saket, New Delhi 110017
                  </p>
                </div>
              </div>

              {/* Telephone & Professional Profiles */}
              <div className="flex items-start space-x-4 bg-navy-900/50 p-3.5 rounded-xl border border-slate-800/70 hover:border-gold-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-navy-900 border border-slate-800 flex items-center justify-center text-gold-400 flex-shrink-0 shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="w-full space-y-2">
                  <h4 className="text-white font-semibold text-xs">Telephone & Chambers Profiles:</h4>
                  
                  {/* Advocate Rahimullah */}
                  <div className="flex items-center justify-between bg-navy-950/70 p-2 rounded-lg border border-slate-800/60">
                    <div>
                      <span className="text-gold-400 text-[11px] font-bold block">Adv. Rahimullah Ansari</span>
                      <a href="tel:+919871127869" className="text-slate-200 hover:text-gold-400 transition-colors font-medium text-xs sm:text-sm">
                        +91 98711 27869
                      </a>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/advocaterahimullahansari?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-2.5 py-1 rounded bg-[#0A66C2]/15 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white border border-[#0A66C2]/30 transition-all text-xs font-semibold"
                      title="Adv. Rahimullah Ansari LinkedIn"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  </div>

                  {/* Advocate Bhawana */}
                  <div className="flex items-center justify-between bg-navy-950/70 p-2 rounded-lg border border-slate-800/60">
                    <div>
                      <span className="text-gold-400 text-[11px] font-bold block">Advocate Bhawana</span>
                      <a href="tel:+918076303405" className="text-slate-200 hover:text-gold-400 transition-colors font-medium text-xs sm:text-sm">
                        +91 80763 03405
                      </a>
                    </div>
                    <a
                      href="https://orcid.org/0009-0001-0656-2683"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-2.5 py-1 rounded bg-[#0A66C2]/15 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white border border-[#0A66C2]/30 transition-all text-xs font-semibold"
                      title="Advocate Bhawana LinkedIn / ORCID"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  </div>

                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-4 bg-navy-900/50 p-3.5 rounded-xl border border-slate-800/70 hover:border-emerald-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-navy-900 border border-slate-800 flex items-center justify-center text-emerald-400 flex-shrink-0 shadow-md">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xs">Instant WhatsApp Desk:</h4>
                  <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                    <a
                      href="https://wa.me/919871127869?text=Hello%20Adv.%20Rahimullah%20Ansari,%20I%20would%20like%20to%20consult%20regarding%20Trademark/IPR%20legal%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline font-medium"
                    >
                      wa.me/919871127869
                    </a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4 bg-navy-900/50 p-3.5 rounded-xl border border-slate-800/70 hover:border-gold-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-navy-900 border border-slate-800 flex items-center justify-center text-gold-400 flex-shrink-0 shadow-md">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xs">Chambers Hours:</h4>
                  <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                    Monday – Saturday: 10:00 AM – 8:00 PM (IST)
                  </p>
                </div>
              </div>
            </div>

            {/* Dual Location Map with Quick Switcher */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] px-1 text-slate-300">
                <span className="font-semibold text-gold-400">Map View:</span>
                <span className="text-slate-400">Saket District Court & Jamia Nagar Head Office</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-800 h-44 w-full shadow-inner relative">
                <iframe
                  title="Trademark Expert India Saket District Court Chambers Location"
                  src="https://maps.google.com/maps?q=Saket%20District%20Court%20New%20Delhi%20110017&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="grayscale opacity-80 contrast-125 hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right: Contact Form Card with 3D Tilt */}
          <div className="lg:col-span-7">
            <TiltCard glowColor="rgba(212, 175, 55, 0.2)">
              <div className="bg-navy-900/90 border border-slate-800 hover:border-gold-500/50 rounded-2xl p-6 sm:p-10 shadow-2xl transition-colors duration-300">
                <h3 className="font-serif text-2xl font-bold text-white mb-1">
                  Direct Lead & Consultation Form
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Enter your brand specifics below. Rahimullah Ansari Advocate will personally assess availability and next steps.
                </p>
                <ContactForm />
              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
}
