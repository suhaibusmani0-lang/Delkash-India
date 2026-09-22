'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
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
    <section className="relative pt-36 pb-16 bg-navy-950 overflow-hidden border-b border-navy-800/80">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
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

        {/* Header content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-block text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded mb-3 border border-gold-500/20">
            {badge}
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

