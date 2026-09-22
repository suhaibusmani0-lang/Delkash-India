'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  UserCheck, 
  ShieldCheck, 
  Share2, 
  CheckCircle2, 
  Sparkles,
  Phone,
  MessageCircle
} from 'lucide-react';

interface BlogArticle {
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string;
  author: string;
  authorTitle: string;
  coverImage: string;
  readTime: string;
  createdAt?: string;
}

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [blog, setBlog] = useState<BlogArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!slug) return;
    async function loadArticle() {
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        const data = await res.json();
        if (data.success && data.blog) {
          setBlog(data.blog);
        }
      } catch (err) {
        console.error('Error fetching article:', err);
      } finally {
        setLoading(false);
      }
    }
    loadArticle();
  }, [slug]);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Simple clean markdown parser to styled elements
  const renderFormattedContent = (raw: string) => {
    const lines = raw.trim().split('\n');
    const elements: React.ReactNode[] = [];
    let inTable = false;
    let tableRows: string[][] = [];

    const flushTable = (key: number) => {
      if (tableRows.length > 0) {
        const headers = tableRows[0];
        const bodyRows = tableRows.slice(2); // Skip separator row
        elements.push(
          <div key={`table-${key}`} className="my-8 overflow-x-auto rounded-xl border border-slate-800 bg-navy-900/60 shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-navy-950/80 border-b border-gold-500/20 text-gold-400 font-serif">
                <tr>
                  {headers.map((h, i) => (
                    <th key={i} className="p-3.5 font-bold tracking-wider">
                      {h.trim().replace(/\*\*/g, '')}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-3.5">
                        {cell.trim().replace(/\*\*/g, '')}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Table row detection
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        inTable = true;
        const cols = trimmed.slice(1, -1).split('|');
        tableRows.push(cols);
        return;
      } else if (inTable) {
        flushTable(index);
      }

      if (!trimmed) {
        return;
      }

      if (trimmed.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="font-serif text-xl sm:text-2xl font-bold text-white mt-8 mb-4 border-l-4 border-gold-500 pl-3">
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('#### ')) {
        elements.push(
          <h4 key={index} className="font-serif text-lg font-bold text-gold-400 mt-6 mb-3">
            {trimmed.replace('#### ', '')}
          </h4>
        );
      } else if (trimmed.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="font-serif text-2xl sm:text-3xl font-bold text-white mt-10 mb-4 border-b border-slate-800 pb-2">
            {trimmed.replace('## ', '')}
          </h2>
        );
      } else if (trimmed.startsWith('- ')) {
        elements.push(
          <li key={index} className="text-slate-300 text-sm sm:text-base leading-relaxed ml-6 list-disc mb-2 marker:text-gold-500">
            <span dangerouslySetInnerHTML={{
              __html: trimmed.replace('- ', '')
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                .replace(/\*(.*?)\*/g, '<em class="text-gold-300">$1</em>')
            }} />
          </li>
        );
      } else if (/^\d+\.\s/.test(trimmed)) {
        elements.push(
          <div key={index} className="flex items-start space-x-3 my-2.5">
            <span className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              {trimmed.match(/^\d+/)?.[0]}
            </span>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <span dangerouslySetInnerHTML={{
                __html: trimmed.replace(/^\d+\.\s/, '')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em class="text-gold-300">$1</em>')
              }} />
            </p>
          </div>
        );
      } else if (trimmed === '---') {
        elements.push(
          <hr key={index} className="my-8 border-slate-800/80" />
        );
      } else {
        elements.push(
          <p key={index} className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
            <span dangerouslySetInnerHTML={{
              __html: trimmed
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                .replace(/\*(.*?)\*/g, '<em class="text-gold-300">$1</em>')
            }} />
          </p>
        );
      }
    });

    if (inTable) {
      flushTable(lines.length);
    }

    return elements;
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-36 pb-20 max-w-4xl mx-auto px-4 animate-pulse space-y-6">
        <div className="h-6 w-32 bg-slate-800 rounded" />
        <div className="h-12 w-3/4 bg-slate-800 rounded" />
        <div className="h-96 w-full bg-slate-800 rounded-2xl" />
        <div className="space-y-3">
          <div className="h-4 w-full bg-slate-800 rounded" />
          <div className="h-4 w-5/6 bg-slate-800 rounded" />
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen pt-36 pb-20 max-w-2xl mx-auto px-4 text-center">
        <h1 className="font-serif text-3xl font-bold text-white mb-4">Article Not Found</h1>
        <p className="text-slate-400 mb-6">
          The requested legal analysis may have been moved or updated.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-gold-500 text-navy-950 font-bold uppercase text-xs tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Articles</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-gold-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>

        <button
          onClick={handleShare}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-navy-900 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-gold-500/40 transition-colors"
        >
          <Share2 className="w-3.5 h-3.5 text-gold-400" />
          <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
        </button>
      </div>

      {/* Header Area */}
      <header className="space-y-4 mb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-md bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider">
            {blog.category}
          </span>
          <div className="flex items-center space-x-1.5 text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            <span>{blog.readTime || '5 min read'}</span>
          </div>
          <span className="text-slate-600">•</span>
          <div className="flex items-center space-x-1.5 text-xs text-slate-400">
            <Calendar className="w-3.5 h-3.5 text-gold-400" />
            <span>
              {blog.createdAt
                ? new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                : 'Delkash IPR Publications'}
            </span>
          </div>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
          {blog.title}
        </h1>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light border-l-2 border-gold-500/40 pl-4 py-1 italic">
          {blog.summary}
        </p>

        {/* Author Bio Bar */}
        <div className="pt-4 flex items-center justify-between flex-wrap gap-4 border-t border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-gold-600 to-gold-400 p-[2px] shadow-lg">
              <div className="w-full h-full rounded-full bg-navy-950 flex items-center justify-center text-gold-400">
                <UserCheck className="w-5 h-5" />
              </div>
            </div>
            <div>
              <p className="font-serif font-bold text-white text-sm">
                {blog.author || 'Rahimullah Ansari Advocate'}
              </p>
              <p className="text-xs text-gold-400 font-medium">
                {blog.authorTitle || 'Delhi High Court | LL.M, LL.B, MBA, M.Com'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center space-x-1 text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
              <CheckCircle2 className="w-3 h-3" />
              <span>Peer-Reviewed Legal Commentary</span>
            </span>
          </div>
        </div>
      </header>

      {/* Featured Cover Image */}
      {blog.coverImage && (
        <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-12 border border-slate-800 shadow-2xl">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Rendered Body */}
      <article className="prose prose-invert max-w-none mb-16">
        {renderFormattedContent(blog.content)}
      </article>

      {/* Author Bio Box */}
      <div className="rounded-2xl bg-navy-900/80 border border-gold-500/20 p-6 sm:p-8 mb-14 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-16 h-16 rounded-full bg-gold-500/20 border-2 border-gold-400 flex items-center justify-center text-gold-400 shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">About The Author</span>
            <h4 className="font-serif text-lg font-bold text-white">
              Rahimullah Ansari Advocate
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Practicing Advocate at the <strong>Delhi High Court</strong> and Founder of <strong>Delkash Associates</strong>. 
              Holds advanced academic and professional qualifications including LL.M, LL.B, MBA, MA, B.P.Ed, M.P.E.S, and M.Com. 
              Specializes in contentious Trademark oppositions, Section 9/11 examination hearings, Copyright litigation, and Patent prosecution.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
              <span className="text-[10px] px-2 py-0.5 rounded bg-navy-950 text-slate-300 border border-slate-800">
                Saket District Court Chamber No. 112
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-navy-950 text-slate-300 border border-slate-800">
                Okhla Head Jamia Nagar Head Office
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Engagement CTA Box */}
      <div className="rounded-2xl bg-gradient-to-br from-navy-900 via-navy-850 to-navy-950 border border-gold-500/40 p-8 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Immediate Legal Representation</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Facing a Trademark Objection or Copyright Dispute?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Get your case files, Examination Reports, or cease-and-desist notices evaluated directly by 
            Adv. Rahimullah Ansari within 24 hours.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={`https://wa.me/919871127869?text=${encodeURIComponent(
              `Hello Adv. Rahimullah Ansari, I read your article "${blog.title}" and would like to consult regarding my case.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2 transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consult via WhatsApp</span>
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-gold-500/25 transition-all"
          >
            Schedule Chamber Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}

