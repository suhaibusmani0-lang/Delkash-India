'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Phone, ShieldCheck, Scale, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHeader({
  badge,
  title,
  description,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="relative pt-36 sm:pt-40 pb-16 lg:pb-20 bg-[#070C18] overflow-hidden border-b border-navy-800/80">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb path */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-gold-400 transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-gold-400 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gold-400 font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* 2-Column Responsive Grid: Eliminates empty right side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="inline-block text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3.5 py-1.5 rounded-full border border-gold-500/25">
              {badge}
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
              {description}
            </p>

            {/* Trust Highlights Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900/90 border border-slate-800 text-slate-200">
                <Scale className="w-3.5 h-3.5 text-gold-400" />
                <span>Delhi High Court Practice</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900/90 border border-slate-800 text-slate-200">
                <Award className="w-3.5 h-3.5 text-gold-400" />
                <span>15+ Years Bar Standing</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900/90 border border-slate-800 text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Govt. Certified Attorneys</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Direct Attorney Legal Desk Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#091124]/90 backdrop-blur-xl border border-gold-500/30 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden group hover:border-gold-400/60 transition-all duration-300">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 block">
                    Direct Chambers Desk
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Talk Directly to Our Advocates
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-gold-500/15 border border-gold-500/40 flex items-center justify-center text-gold-400">
                  <Phone className="w-4 h-4" />
                </div>
              </div>

              {/* Direct Phone Numbers */}
              <div className="py-3.5 space-y-2.5">
                <a
                  href="tel:+919871127869"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-navy-950/80 border border-slate-800/80 hover:border-gold-500/50 hover:bg-navy-950 transition-all group/item"
                >
                  <div>
                    <div className="text-xs font-semibold text-white group-hover/item:text-gold-400 transition-colors">
                      Adv. Rahimullah Ansari
                    </div>
                    <div className="text-[11px] text-slate-400">Founder & Principal Advocate (Delhi High Court)</div>
                  </div>
                  <span className="text-xs font-bold text-gold-400 px-2 py-1 rounded bg-gold-500/10 shrink-0">
                    +91 98711 27869
                  </span>
                </a>

                <a
                  href="tel:+918076303405"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-navy-950/80 border border-slate-800/80 hover:border-gold-500/50 hover:bg-navy-950 transition-all group/item2"
                >
                  <div>
                    <div className="text-xs font-semibold text-white group-hover/item2:text-gold-400 transition-colors">
                      Dr. Bhawana Chauhan
                    </div>
                    <div className="text-[11px] text-slate-400">Co-Founder & Senior Counsel (Ph.D., LL.M)</div>
                  </div>
                  <span className="text-xs font-bold text-gold-400 px-2 py-1 rounded bg-gold-500/10 shrink-0">
                    +91 80763 03405
                  </span>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href="https://wa.me/919871127869?text=Hello%20Adv.%20Rahimullah%20Ansari,%20I%20would%20like%20to%20consult%20regarding%20Trademark/IPR%20legal%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-all whitespace-nowrap"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-navy-950 rounded-lg text-xs font-bold text-center uppercase tracking-wider shadow-md transition-all whitespace-nowrap"
                >
                  Consult Now
                </Link>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-800/80 text-center text-[10px] text-slate-400 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Strict Attorney-Client Confidentiality Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
