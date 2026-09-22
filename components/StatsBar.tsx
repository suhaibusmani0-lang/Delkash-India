'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Award, Star } from 'lucide-react';

const stats = [
  {
    icon: Star,
    value: '4.7 / 5.0',
    label: '107+ Google Reviews',
    sub: 'Verified Business Endorsements',
  },
  {
    icon: Clock,
    value: '24 Hours',
    label: 'Priority Filing',
    sub: 'Same-day TM Registry Receipt',
  },
  {
    icon: ShieldCheck,
    value: 'PAN India',
    label: 'Centralized IPR Desk',
    sub: 'Serving all 28 States & UTs',
  },
  {
    icon: Award,
    value: '15+ Years',
    label: 'Advocacy Practice',
    sub: 'High Court & IPAB Precedents',
  },
];

export default function StatsBar() {
  return (
    <div className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-navy-900/95 border border-gold-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1.5"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-800 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-1 shadow-inner">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {item.value}
                </span>
                <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="text-[11px] text-slate-400">
                  {item.sub}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

