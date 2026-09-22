'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Search, Clock, ArrowRight, UserCheck, ShieldCheck, Sparkles } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';

interface BlogItem {
  _id?: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  author: string;
  authorTitle: string;
  coverImage: string;
  readTime: string;
  createdAt?: string;
}

export default function BlogListingPage() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch('/api/blogs');
        const data = await res.json();
        if (data.success && Array.isArray(data.blogs)) {
          setBlogs(data.blogs);
        }
      } catch (err) {
        console.error('Failed to load blogs:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const categories = ['All', 'Trademark', 'Copyright', 'Patent', 'Startup Legal Guide'];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      activeCategory === 'All' ||
      blog.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold uppercase tracking-widest">
          <BookOpen className="w-3.5 h-3.5" />
          <span>IPR Knowledge Vault</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          Legal Insights &amp; <span className="text-gradient-gold">Intellectual Property</span> Analysis
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          In-depth jurisprudence, objection defenses, trademark case studies, and compliance blueprints authored by{' '}
          <strong className="text-slate-200">Adv. Rahimullah Ansari</strong>, Delhi High Court.
        </p>

        {/* Search & Category Filter Controls */}
        <div className="pt-6 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search legal articles, Section 9, Patents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-navy-900/80 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gold-500 text-navy-950 font-bold shadow-md shadow-gold-500/20'
                    : 'bg-navy-900/80 text-slate-400 border border-slate-700/60 hover:text-white hover:border-gold-500/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl bg-navy-900/50 border border-slate-800 p-6 h-96 animate-pulse flex flex-col justify-between"
            >
              <div className="w-full h-48 bg-slate-800/60 rounded-xl" />
              <div className="space-y-3 mt-4">
                <div className="w-24 h-4 bg-slate-800/80 rounded" />
                <div className="w-full h-6 bg-slate-800 rounded" />
                <div className="w-3/4 h-4 bg-slate-800/60 rounded" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Blog Cards Grid */}
      {!loading && filteredBlogs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <TiltCard key={blog.slug} className="h-full">
              <article className="h-full bg-navy-900/60 rounded-2xl border border-slate-800/80 overflow-hidden flex flex-col justify-between hover:border-gold-500/40 transition-all duration-300 group">
                <div>
                  {/* Cover Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-navy-950">
                    <img
                      src={blog.coverImage || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80'}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-md bg-navy-950/85 backdrop-blur-md border border-gold-500/30 text-gold-400 text-[11px] font-bold uppercase tracking-wider">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      <span>{blog.readTime || '5 min read'}</span>
                      <span>•</span>
                      <span className="text-slate-400">
                        {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Verified IPR Guide'}
                      </span>
                    </div>

                    <h2 className="font-serif text-lg font-bold text-white group-hover:text-gold-400 transition-colors line-clamp-2 leading-snug">
                      <Link href={`/blog/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h2>

                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                      {blog.summary}
                    </p>
                  </div>
                </div>

                {/* Footer Meta & Action */}
                <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-7 h-7 rounded-full bg-gold-500/20 border border-gold-500/30 flex items-center justify-center text-gold-400">
                      <UserCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-200">
                        {blog.author || 'Rahimullah Ansari'}
                      </p>
                      <p className="text-[9px] text-slate-400">Delhi High Court</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-gold-400 hover:text-gold-300 group/btn"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredBlogs.length === 0 && (
        <div className="text-center py-20 bg-navy-900/40 rounded-2xl border border-slate-800">
          <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white">No articles found</h3>
          <p className="text-slate-400 text-sm mt-1">
            Try adjusting your search query or switching categories.
          </p>
          <button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 rounded-lg bg-gold-500 text-navy-950 font-bold text-xs uppercase"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Bottom Consultation Banner */}
      <div className="mt-20 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold-500/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Have a Specific Legal Question?</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            Need Expert Legal Representation For Your Trademark or Patent?
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
            Book an express preliminary consultation directly with Rahimullah Ansari Advocate at Saket District Court Chambers or Jamia Nagar Office.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href="https://wa.me/919871127869?text=Hello%20Adv.%20Rahimullah%20Ansari,%20I%20read%20your%20legal%20articles%20and%20need%20assistance%20with%20my%20case."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2"
          >
            <span>WhatsApp Adv. Ansari</span>
          </a>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}

