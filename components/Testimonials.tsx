'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';
import TiltCard from './ui/TiltCard';

const reviews = [
  {
    quote:
      'Rahimullah Ansari advocate is a highly qualified advocate and expert in trademark and copyright laws. His guidance saved our application from complex objections.',
    author: 'Legally Speaking India',
    role: 'Legal Journal & Reviewer',
    rating: 5,
  },
  {
    quote:
      'Wonderful job delivered by him to get our Logo registered. Very prompt response throughout the examination and publication stages.',
    author: 'Verified Business Client',
    role: 'Brand Owner',
    rating: 5,
  },
  {
    quote:
      'Very efficient team and good service. They handled our trademark opposition with extreme professionalism and secured our trademark certificate.',
    author: 'Mahatab Alam',
    role: 'Entrepreneur',
    rating: 5,
  },
  {
    quote:
      'Rahimullah Ansari Advocate is an expert in the registration of trademark. He has lot of experience and provides very practical and transparent advice.',
    author: 'Nishtha Dawar',
    role: 'Enterprise Founder',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-navy-950 text-white relative border-t border-navy-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 text-gold-400 mb-3 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20 shadow-md">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-400" />
            ))}
            <span className="text-xs text-gold-400 font-semibold ml-1.5">4.7 / 5.0 (107 Reviews)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Client Experiences & Endorsements
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Authentic feedback from real business owners and legal reviewers on Google Reviews.
          </p>
        </div>

        {/* Reviews Grid with 3D TiltCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard className="h-full" glowColor="rgba(212, 175, 55, 0.15)">
                <div className="h-full bg-navy-900/80 border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between relative hover:border-gold-500/40 transition-colors shadow-xl">
                  <Quote className="w-8 h-8 text-gold-500/15 absolute top-6 right-6" />
                  
                  <div className="space-y-4">
                    <div className="flex space-x-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed italic">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-semibold text-sm">{rev.author}</h4>
                      <p className="text-xs text-gold-400/90">{rev.role}</p>
                    </div>
                    <div className="flex items-center space-x-1 text-[11px] text-emerald-400 font-medium">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Google Review</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
