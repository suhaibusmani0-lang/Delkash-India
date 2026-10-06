'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Scale, ShieldCheck, GraduationCap, Phone, MessageSquare, CheckCircle2, Landmark } from 'lucide-react';
import TiltCard from './ui/TiltCard';
import Link from 'next/link';

export default function About() {
  const teamMembers = [
    {
      name: 'Advocate Rahimullah Ansari',
      role: 'Founder & Principal Attorney',
      court: 'Advocate, Delhi High Court',
      chamber: 'Chamber No. 112, First Floor, Saket District Court, New Delhi',
      degrees: 'LL.M, LL.B, MBA, MA, B.P.Ed, M.P.E.S, M.Com',
      phone: '+91 98711 27869',
      phoneRaw: '+919871127869',
      linkedin: 'https://www.linkedin.com/in/advocaterahimullahansari?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      image: '/team/advocate-rahimullah-ansari.jpg',
      bio: 'Seasoned intellectual property advocate and lead counsel at Trademark Expert India. With over 15+ years of litigation practice before the Delhi High Court and Trade Marks Registry, Adv. Ansari combines formidable statutory mastery with multidisciplinary commercial and corporate strategies to defend high-value brands across India.',
      focus: ['Trademark Opposition Hearings', 'Section 9 & 11 Refusal Defense', 'High Court IPR Injunctions', 'Patent & Design Prosecution'],
      whatsappNumber: '919871127869',
      whatsappText: 'Hello Adv. Rahimullah Ansari, I would like to consult regarding Trademark/IPR legal services.',
    },
    {
      name: 'Advocate Bhawana (Dr. Bhawana Chauhan)',
      role: 'Senior Associate Counsel & IPR Strategist',
      court: 'Advocate & Legal Scholar',
      chamber: 'Trademark Expert India Chambers, Okhla Head Jamia Nagar, New Delhi',
      degrees: 'Ph.D., LL.M, LL.B',
      phone: '+91 80763 03405',
      phoneRaw: '+918076303405',
      linkedin: 'https://orcid.org/0009-0001-0656-2683',
      image: '/team/dr-bhawana-chauhan.jpg',
      bio: 'Distinguished legal academic and corporate intellectual property consultant at Trademark Expert India. Specializes in copyright enforcement, statutory Examination Report rebuttals, corporate brand risk mitigation, and commercial software licensing agreements for technology startups and enterprise enterprises.',
      focus: ['Copyright Registration & Code IP', 'Brand Clearance & Risk Audits', 'Notice & Opposition Rebuttals', 'Corporate Compliance & Licensing'],
      whatsappNumber: '918076303405',
      whatsappText: 'Hello Adv. Bhawana, I would like to consult regarding Copyright/Trademark legal services.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-navy-950 text-white relative border-t border-navy-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <Scale className="w-3.5 h-3.5" />
            <span>Chambers Leadership &amp; Legal Counsel</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Advocates Dedicated to <span className="text-gradient-gold">Absolute Brand Protection</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Trademark Expert India is anchored by seasoned advocates possessing formidable academic credentials, 
            High Court standing, and deep specialization in Indian Intellectual Property jurisprudence.
          </p>
        </div>

        {/* Dual Attorney Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <TiltCard glowColor="rgba(212, 175, 55, 0.2)" className="h-full">
                <div className="h-full rounded-2xl bg-[#091024] border border-gold-500/30 p-6 sm:p-7 shadow-2xl flex flex-col justify-between group hover:border-gold-400/80 transition-all duration-300">
                  
                  <div className="space-y-6">
                    {/* Top Role Badge & Law Firm Seal */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider">
                        {member.role}
                      </span>
                      <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                        <Landmark className="w-3.5 h-3.5 text-gold-400" />
                        <span>{member.court}</span>
                      </div>
                    </div>

                    {/* Exact Full Portrait Photo Container (100% Full Photo Visible, Zero Cropping) */}
                    <div className="relative rounded-2xl overflow-hidden border-2 border-gold-500/35 bg-gradient-to-b from-navy-950 via-[#0a1128] to-navy-950 shadow-2xl p-2.5 sm:p-3 group/img">
                      <div className="w-full aspect-[4/4.2] sm:aspect-square max-h-[440px] relative rounded-xl overflow-hidden flex items-center justify-center bg-navy-950/90 shadow-inner">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-contain object-center transition-transform duration-500 group-hover/img:scale-[1.02]"
                          loading="eager"
                        />
                      </div>
                      
                      {/* Luxury Advocate Corner Accents */}
                      <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-gold-400 pointer-events-none" />
                      <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-gold-400 pointer-events-none" />
                      <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-gold-400 pointer-events-none" />
                      <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-gold-400 pointer-events-none" />
                    </div>

                    {/* Attorney Name & Core Titles */}
                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-gold-300 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gold-400 font-semibold flex items-center space-x-1.5">
                        <Scale className="w-3.5 h-3.5 shrink-0" />
                        <span>{member.court}</span>
                      </p>
                    </div>

                    {/* Degrees & Qualifications Structured Box */}
                    <div className="p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/25 space-y-1">
                      <div className="flex items-center space-x-1.5 text-gold-400 text-[10px] font-bold uppercase tracking-wider">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>Academic &amp; Judicial Qualifications</span>
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-amber-200 tracking-wide">
                        {member.degrees}
                      </p>
                    </div>

                    {/* Chamber Location */}
                    <div className="text-xs text-slate-400 flex items-start space-x-2">
                      <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{member.chamber}</span>
                    </div>

                    {/* Bio Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Key Practice Areas */}
                    <div className="pt-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                        Core Legal Practice Areas:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {member.focus.map((item, fIdx) => (
                          <div key={fIdx} className="flex items-center space-x-1.5 text-xs text-slate-300">
                            <CheckCircle2 className="w-3 h-3 text-gold-400 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Contact Number & LinkedIn Profile Bar */}
                  <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between gap-2">
                    <a
                      href={`tel:${member.phoneRaw}`}
                      className="flex items-center space-x-1.5 text-xs font-semibold text-slate-200 hover:text-gold-400 transition-colors"
                      title="Call Advocate Directly"
                    >
                      <Phone className="w-3.5 h-3.5 text-gold-400" />
                      <span>{member.phone}</span>
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#0A66C2]/15 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white border border-[#0A66C2]/30 transition-all font-semibold text-xs shadow-sm"
                      title="LinkedIn / Professional Profile"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  </div>

                  {/* Actions & Direct WhatsApp Consultation Trigger */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={`https://wa.me/${member.whatsappNumber}?text=${encodeURIComponent(member.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2 transition-all hover:scale-[1.02]"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>WhatsApp Consult</span>
                    </a>

                    <Link
                      href="/contact"
                      className="w-full sm:w-auto py-3 px-5 rounded-xl bg-navy-900 hover:bg-gold-500 hover:text-navy-950 border border-slate-700 hover:border-gold-500 text-slate-200 text-xs font-bold uppercase tracking-wider transition-all text-center"
                    >
                      Book Chamber Slot
                    </Link>
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Firm Dual Address Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-300 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400">Head Office</span>
            <p className="text-white font-semibold text-xs sm:text-sm">
              C-326, Taleem Apt, Near Kotak ATM, Okhla Head Jamia Nagar New Delhi 110025
            </p>
          </div>
          <div className="h-10 w-[1px] bg-slate-700 hidden md:block" />
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400">Court Chambers</span>
            <p className="text-white font-semibold text-xs sm:text-sm">
              Chamber No 112, First Floor, Saket District Court, Saket, New Delhi 110017
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full md:w-auto">
            <a
              href="tel:+919871127869"
              className="text-center px-4 py-2.5 rounded-xl bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-gold-400 transition-all"
            >
              Rahimullah: +91 98711 27869
            </a>
            <a
              href="tel:+918076303405"
              className="text-center px-4 py-2.5 rounded-xl bg-gold-500/20 border border-gold-500/40 text-gold-300 font-bold text-xs uppercase tracking-wider hover:bg-gold-500 hover:text-navy-950 transition-all"
            >
              Bhawana: +91 80763 03405
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
