'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function LuxuryBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle Golden Radial Dot Matrix */}
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* Floating Animated Golden Orb 1 */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-gold-500/10 to-amber-600/5 blur-[120px]"
      />

      {/* Floating Animated Sapphire Orb 2 */}
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 80, -50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-1/3 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-700/10 via-indigo-900/10 to-transparent blur-[140px]"
      />

      {/* Floating Animated Amber Highlight Orb 3 */}
      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute -bottom-20 left-10 w-[450px] h-[450px] rounded-full bg-gold-400/5 blur-[110px]"
      />

      {/* Subtle Vignette Mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-transparent to-navy-950/80" />
    </div>
  );
}

