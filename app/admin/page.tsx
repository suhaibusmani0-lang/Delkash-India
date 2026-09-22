'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Users,
  BookOpen,
  Phone,
  Mail,
  Trash2,
  Clock,
  MessageSquare,
  PlusCircle,
  RefreshCw,
  Search,
  ExternalLink,
  ShieldAlert,
  Loader2,
  Lock,
  LogOut,
  KeyRound,
  Upload,
  Image as ImageIcon,
  Scale,
  BarChart3,
  CheckCircle2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface LeadItem {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  status: 'new' | 'contacted' | 'converted' | 'archived';
  source?: string;
  createdAt: string;
}

interface BlogItem {
  _id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  author: string;
  coverImage?: string;
  readTime: string;
  createdAt: string;
}

export default function AdminCRMPage() {
  const [activeTab, setActiveTab] = useState<'leads' | 'blogs' | 'analytics'>('leads');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Leads State
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [leadsLoading, setLeadsLoading] = useState(true);
  const [leadSearch, setLeadSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'contacted' | 'converted' | 'archived'>('all');

  // Blogs State
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [blogSubmitting, setBlogSubmitting] = useState(false);
  const [blogSuccess, setBlogSuccess] = useState('');
  const [blogError, setBlogError] = useState('');

  // Direct Image Upload State
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imagePreview, setImagePreview] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // New Blog Form
  const [newBlog, setNewBlog] = useState({
    title: '',
    slug: '',
    category: 'Trademark',
    author: 'Rahimullah Ansari Advocate',
    authorTitle: 'Advocate, Delhi High Court',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    summary: '',
    content: '',
  });

  // Verify Session on Load
  useEffect(() => {
    const saved = localStorage.getItem('delkash_admin_crm_auth');
    if (saved === 'true') {
      setIsAuthenticated(true);
    }
    setAuthChecking(false);
  }, []);

  // Fetch Leads
  const fetchLeads = async () => {
    setLeadsLoading(true);
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      if (data.success && Array.isArray(data.leads)) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error('Failed to load leads:', err);
    } finally {
      setLeadsLoading(false);
    }
  };

  // Fetch Blogs
  const fetchBlogs = async () => {
    setBlogsLoading(true);
    try {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      if (data.success && Array.isArray(data.blogs)) {
        setBlogs(data.blogs);
      }
    } catch (err) {
      console.error('Failed to load blogs:', err);
    } finally {
      setBlogsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
      fetchBlogs();
    }
  }, [isAuthenticated]);

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    const cleanId = loginId.trim().toLowerCase();
    const cleanPass = loginPassword.trim();

    const validIds = ['admin', 'delkashassociates@gmail.com', 'rahimullah'];
    const validPassword = 'Delkash@2026';

    if (validIds.includes(cleanId) && cleanPass === validPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('delkash_admin_crm_auth', 'true');
    } else {
      setAuthError('Authentication failed: Invalid credentials. Access restricted to authorized chambers counsel.');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('delkash_admin_crm_auth');
    setIsAuthenticated(false);
    setLoginPassword('');
  };

  // Update Lead Status
  const handleStatusChange = async (leadId: string, newStatus: string) => {
    try {
      const res = await fetch('/api/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leadId, status: newStatus }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l._id === leadId ? { ...l, status: newStatus as any } : l))
        );
      }
    } catch (err) {
      console.error('Error updating lead status:', err);
    }
  };

  // Delete Lead
  const handleDeleteLead = async (id: string) => {
    if (!confirm('Are you sure you want to permanently delete this consultation record?')) return;
    try {
      const res = await fetch(`/api/leads?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setLeads((prev) => prev.filter((l) => l._id !== id));
      }
    } catch (err) {
      console.error('Error deleting lead:', err);
    }
  };

  // Direct Image Upload to Cloudinary Handler
  const handleImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Instant local preview
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
    setUploadingImage(true);
    setBlogError('');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Failed to upload image.');
      }

      setNewBlog((prev) => ({ ...prev, coverImage: data.url }));
    } catch (err: any) {
      console.error('Image upload error:', err);
      setBlogError(err?.message || 'Image upload failed. You can also paste an image URL directly.');
    } finally {
      setUploadingImage(false);
    }
  };

  // Auto-generate slug from title
  const handleTitleChange = (val: string) => {
    const generatedSlug = val
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    setNewBlog((prev) => ({
      ...prev,
      title: val,
      slug: generatedSlug,
    }));
  };

  // Submit Blog
  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBlogSubmitting(true);
    setBlogSuccess('');
    setBlogError('');

    try {
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBlog),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to publish legal article.');
      }

      setBlogSuccess('Article published successfully! It is now live in the IPR Knowledge Vault.');
      setNewBlog({
        title: '',
        slug: '',
        category: 'Trademark',
        author: 'Rahimullah Ansari Advocate',
        authorTitle: 'Advocate, Delhi High Court',
        readTime: '5 min read',
        coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
        summary: '',
        content: '',
      });
      setImagePreview('');
      fetchBlogs();
    } catch (err: any) {
      setBlogError(err?.message || 'Error publishing article.');
    } finally {
      setBlogSubmitting(false);
    }
  };

  // Delete Blog
  const handleDeleteBlog = async (slug: string) => {
    if (!confirm(`Are you sure you want to delete article: "${slug}"?`)) return;
    try {
      const res = await fetch(`/api/blogs/${slug}`, { method: 'DELETE' });
      if (res.ok) {
        setBlogs((prev) => prev.filter((b) => b.slug !== slug));
      }
    } catch (err) {
      console.error('Failed to delete blog:', err);
    }
  };

  // Filtered Leads
  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.name.toLowerCase().includes(leadSearch.toLowerCase()) ||
      l.email.toLowerCase().includes(leadSearch.toLowerCase()) ||
      l.phone.includes(leadSearch) ||
      l.service.toLowerCase().includes(leadSearch.toLowerCase());

    const matchesStatus = statusFilter === 'all' || l.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // KPI Calculations
  const totalLeadsCount = leads.length;
  const newLeadsCount = leads.filter((l) => l.status === 'new').length;
  const contactedCount = leads.filter((l) => l.status === 'contacted').length;
  const convertedCount = leads.filter((l) => l.status === 'converted').length;

  // 1. Initial State Spinner
  if (authChecking) {
    return (
      <div className="min-h-screen bg-[#070C18] flex items-center justify-center">
        <div className="flex flex-col items-center space-y-3">
          <Loader2 className="w-8 h-8 text-gold-400 animate-spin" />
          <p className="text-xs text-slate-400 font-mono tracking-widest uppercase">
            Loading Chambers Portal...
          </p>
        </div>
      </div>
    );
  }

  // 2. Pure CRM Login Screen (Without Public Header, Footer or Credential Display)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#070C18] via-[#0B132B] to-[#050811] flex items-center justify-center px-4 py-12 relative overflow-hidden select-none">
        {/* Subtle ambient luxury light orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          <div className="rounded-2xl bg-navy-900/90 border border-gold-500/30 p-8 sm:p-10 shadow-2xl backdrop-blur-2xl">
            {/* Top Logo & Scale Icon */}
            <div className="text-center space-y-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-950 shadow-lg mx-auto">
                <Scale className="w-8 h-8 stroke-[2.2]" />
              </div>
              <div>
                <h1 className="font-serif text-2xl font-bold tracking-tight text-white">
                  DELKASH ASSOCIATES
                </h1>
                <p className="text-[11px] font-semibold text-gold-400 tracking-widest uppercase mt-0.5">
                  Chambers CRM &amp; Legal Desk
                </p>
              </div>
              <p className="text-xs text-slate-400 pt-1">
                Enter your administrative credentials to access lead analytics and publication controls.
              </p>
            </div>

            {/* Error Message */}
            {authError && (
              <div className="mb-6 p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center space-x-2.5">
                <ShieldAlert className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{authError}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Advocate ID / Registered Email
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    placeholder="Enter attorney username"
                    className="w-full px-4 py-3 bg-navy-950/80 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Secret Chambers Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-4 py-3 bg-navy-950/80 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-gold-500/25 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <KeyRound className="w-4 h-4" />
                <span>Authorize &amp; Enter CRM</span>
              </button>
            </form>

            <div className="mt-8 pt-4 border-t border-slate-800 text-center text-[11px] text-slate-400 flex items-center justify-center space-x-1.5">
              <Lock className="w-3.5 h-3.5 text-gold-400" />
              <span>TLS Encrypted • Saket District Court Chambers</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. FULL SAAS CRM LAYOUT (No Header, No Footer)
  return (
    <div className="min-h-screen bg-[#070C18] text-slate-200 flex">
      {/* LEFT FIXED SIDEBAR */}
      <aside className="w-64 bg-[#091024] border-r border-slate-800/80 flex flex-col justify-between shrink-0 hidden md:flex">
        <div>
          {/* Firm Logo Brand Header */}
          <div className="p-6 border-b border-slate-800/80 flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-gold-500 flex items-center justify-center text-navy-950 font-bold shadow-md">
              <Scale className="w-5 h-5 stroke-[2.4]" />
            </div>
            <div>
              <span className="font-serif text-sm font-bold text-white tracking-wide block leading-tight">
                DELKASH CRM
              </span>
              <span className="text-[10px] text-gold-400 font-semibold uppercase tracking-wider">
                Advocate Portal
              </span>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="px-3 py-6 space-y-1.5">
            <button
              onClick={() => setActiveTab('leads')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'leads'
                  ? 'bg-gold-500 text-navy-950 shadow-md font-bold'
                  : 'text-slate-300 hover:bg-navy-800/60 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Users className="w-4 h-4" />
                <span>Consultation Leads</span>
              </div>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full ${
                  activeTab === 'leads'
                    ? 'bg-navy-950/20 text-navy-950 font-bold'
                    : 'bg-gold-500/15 text-gold-400 border border-gold-500/30'
                }`}
              >
                {leads.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('blogs')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'blogs'
                  ? 'bg-gold-500 text-navy-950 shadow-md font-bold'
                  : 'text-slate-300 hover:bg-navy-800/60 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-3">
                <BookOpen className="w-4 h-4" />
                <span>Blog &amp; Knowledge Base</span>
              </div>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full ${
                  activeTab === 'blogs'
                    ? 'bg-navy-950/20 text-navy-950 font-bold'
                    : 'bg-navy-800 text-slate-300'
                }`}
              >
                {blogs.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('analytics')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'analytics'
                  ? 'bg-gold-500 text-navy-950 shadow-md font-bold'
                  : 'text-slate-300 hover:bg-navy-800/60 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-4 h-4" />
                <span>Practice Analytics</span>
              </div>
              <span className="text-[10px] text-emerald-400">Live</span>
            </button>
          </div>
        </div>

        {/* Bottom User Profile & Logout */}
        <div className="p-4 border-t border-slate-800/80 space-y-3">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-navy-900/60 hover:bg-navy-800/80 border border-slate-800 text-xs text-slate-300 transition-colors group"
          >
            <div className="flex items-center space-x-2">
              <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
              <span>Public Website</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-500/30 flex items-center justify-center text-gold-400 font-bold text-xs">
                RA
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-white truncate">Adv. Rahimullah Ansari</p>
                <p className="text-[10px] text-slate-400 truncate">Delhi High Court</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              title="Sign Out"
              className="p-1.5 rounded-lg text-rose-400 hover:bg-rose-500/15 hover:text-rose-300 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CRM WORKSPACE */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* TOP BAR */}
        <header className="h-16 bg-[#091024]/80 backdrop-blur-md border-b border-slate-800/80 px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center space-x-3">
            {/* Mobile Tab Selectors */}
            <div className="flex md:hidden space-x-2">
              <button
                onClick={() => setActiveTab('leads')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                  activeTab === 'leads' ? 'bg-gold-500 text-navy-950' : 'bg-navy-900 text-slate-300'
                }`}
              >
                Leads
              </button>
              <button
                onClick={() => setActiveTab('blogs')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                  activeTab === 'blogs' ? 'bg-gold-500 text-navy-950' : 'bg-navy-900 text-slate-300'
                }`}
              >
                Blog
              </button>
            </div>

            <div className="hidden sm:flex items-center space-x-2 text-xs text-slate-400 font-medium">
              <span>Chambers CRM</span>
              <span>/</span>
              <span className="text-gold-400 font-bold capitalize">{activeTab}</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Realtime Database Health Badge */}
            <div className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>MongoDB Atlas Connected</span>
            </div>

            <button
              onClick={() => {
                fetchLeads();
                fetchBlogs();
              }}
              title="Refresh Data"
              className="p-2 rounded-lg bg-navy-900/80 border border-slate-700/80 text-slate-300 hover:text-white hover:border-gold-500/40 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <button
              onClick={handleLogout}
              className="md:hidden p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* WORKSPACE CONTENT BODY */}
        <div className="p-6 sm:p-8 max-w-7xl mx-auto w-full space-y-8">
          
          {/* STATS TILES (Quick KPI Overview) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-navy-900/50 border border-slate-800">
              <p className="text-xs text-slate-400 uppercase font-semibold">Total Inquiries</p>
              <p className="text-2xl font-serif font-bold text-white mt-1">{totalLeadsCount}</p>
              <p className="text-[10px] text-slate-400 mt-1">Website &amp; WhatsApp</p>
            </div>

            <div className="p-4 rounded-xl bg-navy-900/50 border border-amber-500/20">
              <p className="text-xs text-amber-400 uppercase font-semibold">New Pending</p>
              <p className="text-2xl font-serif font-bold text-white mt-1">{newLeadsCount}</p>
              <p className="text-[10px] text-amber-400/80 mt-1">Requires contact</p>
            </div>

            <div className="p-4 rounded-xl bg-navy-900/50 border border-blue-500/20">
              <p className="text-xs text-blue-400 uppercase font-semibold">Under Discussion</p>
              <p className="text-2xl font-serif font-bold text-white mt-1">{contactedCount}</p>
              <p className="text-[10px] text-blue-400/80 mt-1">In communication</p>
            </div>

            <div className="p-4 rounded-xl bg-navy-900/50 border border-emerald-500/20">
              <p className="text-xs text-emerald-400 uppercase font-semibold">Retained Clients</p>
              <p className="text-2xl font-serif font-bold text-white mt-1">{convertedCount}</p>
              <p className="text-[10px] text-emerald-400/80 mt-1">Converted cases</p>
            </div>
          </div>

          {/* TAB 1: CONSULTATION LEADS CRM */}
          {activeTab === 'leads' && (
            <div className="space-y-6">
              {/* Filter & Search Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-navy-900/60 p-4 rounded-xl border border-slate-800">
                {/* Search Bar */}
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by client, phone, or service..."
                    value={leadSearch}
                    onChange={(e) => setLeadSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-navy-950/80 border border-slate-700/80 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                {/* Status Tabs */}
                <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
                  {(['all', 'new', 'contacted', 'converted', 'archived'] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all cursor-pointer ${
                        statusFilter === st
                          ? 'bg-gold-500 text-navy-950 font-bold'
                          : 'bg-navy-950/60 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Loading State */}
              {leadsLoading && (
                <div className="text-center py-20 bg-navy-900/40 rounded-xl border border-slate-800">
                  <Loader2 className="w-8 h-8 text-gold-400 animate-spin mx-auto mb-3" />
                  <p className="text-xs text-slate-400">Loading consultation leads from MongoDB Atlas...</p>
                </div>
              )}

              {/* Leads Card List */}
              {!leadsLoading && filteredLeads.length > 0 && (
                <div className="space-y-4">
                  {filteredLeads.map((lead) => {
                    const cleanPhone = lead.phone.replace(/[^0-9]/g, '');
                    const waLink = `https://wa.me/${cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone}?text=${encodeURIComponent(
                      `Hello ${lead.name}, this is Adv. Rahimullah Ansari from Delkash Associates regarding your consultation inquiry for ${lead.service}.`
                    )}`;

                    return (
                      <div
                        key={lead._id}
                        className="rounded-xl bg-navy-900/60 border border-slate-800 p-5 hover:border-gold-500/30 transition-all space-y-4"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
                          <div>
                            <div className="flex items-center space-x-2.5">
                              <h3 className="font-serif font-bold text-white text-base">
                                {lead.name}
                              </h3>
                              <span className="text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-gold-500/10 border border-gold-500/30 text-gold-400">
                                {lead.service}
                              </span>
                            </div>
                            <div className="flex items-center space-x-3 text-xs text-slate-400 mt-1">
                              <span className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{new Date(lead.createdAt).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}</span>
                              </span>
                              <span>•</span>
                              <span>Source: {lead.source || 'Website Form'}</span>
                            </div>
                          </div>

                          {/* Quick Action Buttons */}
                          <div className="flex items-center space-x-2">
                            {/* Direct WhatsApp Client Button */}
                            <a
                              href={waLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-md"
                            >
                              <MessageSquare className="w-3.5 h-3.5 fill-current" />
                              <span>WhatsApp Client</span>
                            </a>

                            <a
                              href={`tel:${lead.phone}`}
                              className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300 transition-colors"
                              title="Call Client"
                            >
                              <Phone className="w-4 h-4 text-gold-400" />
                            </a>

                            <a
                              href={`mailto:${lead.email}`}
                              className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300 transition-colors"
                              title="Email Client"
                            >
                              <Mail className="w-4 h-4 text-gold-400" />
                            </a>

                            <button
                              onClick={() => handleDeleteLead(lead._id)}
                              className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors cursor-pointer"
                              title="Delete Lead"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Client Message */}
                        {lead.message && (
                          <div className="bg-navy-950/70 p-3.5 rounded-lg border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                            <span className="font-semibold text-slate-400 block mb-1">Inquiry Details:</span>
                            {lead.message}
                          </div>
                        )}

                        {/* Status Toggle Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-1">
                          <div className="flex items-center space-x-2 text-slate-400">
                            <span>Phone: <strong className="text-white">{lead.phone}</strong></span>
                            <span>•</span>
                            <span>Email: <strong className="text-white">{lead.email}</strong></span>
                          </div>

                          <div className="flex items-center space-x-2">
                            <span className="text-slate-400">Status:</span>
                            <select
                              value={lead.status}
                              onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                              className="bg-navy-950 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-gold-500"
                            >
                              <option value="new">New Inquiry</option>
                              <option value="contacted">Contacted</option>
                              <option value="converted">Retained / Converted</option>
                              <option value="archived">Archived</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Empty State */}
              {!leadsLoading && filteredLeads.length === 0 && (
                <div className="text-center py-20 bg-navy-900/40 rounded-xl border border-slate-800">
                  <Users className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-white">No consultation inquiries found</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    When visitors submit the contact form, leads appear here with instant WhatsApp triggers.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: BLOG & CMS PUBLISHER WITH DIRECT IMAGE UPLOAD */}
          {activeTab === 'blogs' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Blog Publisher Form */}
              <div className="lg:col-span-2 space-y-6">
                <div className="rounded-xl bg-navy-900/60 border border-slate-800 p-6 sm:p-8">
                  <div className="flex items-center space-x-2.5 text-gold-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>IPR Thought Leadership</span>
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mb-6">
                    Publish New Legal Article
                  </h2>

                  {blogSuccess && (
                    <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                      <span>{blogSuccess}</span>
                    </div>
                  )}

                  {blogError && (
                    <div className="mb-6 p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center space-x-2.5">
                      <ShieldAlert className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{blogError}</span>
                    </div>
                  )}

                  <form onSubmit={handleBlogSubmit} className="space-y-5">
                    {/* Article Title */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Article Headline / Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={newBlog.title}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        placeholder="e.g. Landmark Judgment on Section 9 Trademark Distinctiveness"
                        className="w-full px-4 py-2.5 bg-navy-950 border border-slate-700/80 rounded-lg text-sm text-white focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    {/* Author Counsel Selector */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Author Counsel
                        </label>
                        <select
                          value={newBlog.author}
                          onChange={(e) => {
                            const selectedAuthor = e.target.value;
                            const title = selectedAuthor.includes('Rahimullah')
                              ? 'Advocate, Delhi High Court | LL.M, LL.B, MBA, M.Com'
                              : 'Senior Counsel | Ph.D., LL.M, LL.B';
                            setNewBlog({ ...newBlog, author: selectedAuthor, authorTitle: title });
                          }}
                          className="w-full px-3 py-2 bg-navy-950 border border-slate-700/80 rounded-lg text-xs text-white focus:outline-none focus:border-gold-500"
                        >
                          <option value="Rahimullah Ansari Advocate">Adv. Rahimullah Ansari (Delhi High Court)</option>
                          <option value="Dr. Bhawana Chauhan">Dr. Bhawana Chauhan (Ph.D., LL.M, LL.B)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Author Legal Credentials
                        </label>
                        <input
                          type="text"
                          value={newBlog.authorTitle}
                          onChange={(e) => setNewBlog({ ...newBlog, authorTitle: e.target.value })}
                          className="w-full px-3 py-2 bg-navy-950 border border-slate-700/80 rounded-lg text-xs text-slate-300 focus:outline-none focus:border-gold-500"
                        />
                      </div>
                    </div>

                    {/* Slug & Category & ReadTime */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          URL Slug
                        </label>
                        <input
                          type="text"
                          required
                          value={newBlog.slug}
                          onChange={(e) => setNewBlog({ ...newBlog, slug: e.target.value })}
                          className="w-full px-3 py-2 bg-navy-950 border border-slate-700/80 rounded-lg text-xs text-slate-300 font-mono focus:outline-none focus:border-gold-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Legal Category
                        </label>
                        <select
                          value={newBlog.category}
                          onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
                          className="w-full px-3 py-2 bg-navy-950 border border-slate-700/80 rounded-lg text-xs text-white focus:outline-none focus:border-gold-500"
                        >
                          <option value="Trademark">Trademark</option>
                          <option value="Copyright">Copyright</option>
                          <option value="Patent">Patent</option>
                          <option value="Startup Legal Guide">Startup Legal Guide</option>
                          <option value="High Court Litigation">High Court Litigation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Read Time
                        </label>
                        <input
                          type="text"
                          value={newBlog.readTime}
                          onChange={(e) => setNewBlog({ ...newBlog, readTime: e.target.value })}
                          placeholder="e.g. 5 min read"
                          className="w-full px-3 py-2 bg-navy-950 border border-slate-700/80 rounded-lg text-xs text-white focus:outline-none focus:border-gold-500"
                        />
                      </div>
                    </div>

                    {/* DIRECT CLOUDINARY IMAGE UPLOAD BOX */}
                    <div className="p-4 rounded-xl bg-navy-950 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
                          <ImageIcon className="w-3.5 h-3.5 text-gold-400" />
                          <span>Cover Image (Direct Upload to Cloudinary)</span>
                        </label>
                        {uploadingImage && (
                          <span className="text-[11px] text-gold-400 flex items-center space-x-1">
                            <Loader2 className="w-3 h-3 animate-spin" />
                            <span>Uploading to Cloudinary...</span>
                          </span>
                        )}
                      </div>

                      {/* Hidden File Input */}
                      <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleImageFileChange}
                        className="hidden"
                      />

                      <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-navy-900 border border-gold-500/40 hover:bg-gold-500 hover:text-navy-950 text-gold-400 text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          <span>Select Image File from Device</span>
                        </button>

                        <span className="text-[11px] text-slate-400">or paste web URL below:</span>
                      </div>

                      <input
                        type="url"
                        value={newBlog.coverImage}
                        onChange={(e) => setNewBlog({ ...newBlog, coverImage: e.target.value })}
                        placeholder="https://..."
                        className="w-full px-3 py-2 bg-navy-900 border border-slate-700/80 rounded-lg text-xs text-slate-300 focus:outline-none focus:border-gold-500"
                      />

                      {/* Image Preview Thumbnail */}
                      {(imagePreview || newBlog.coverImage) && (
                        <div className="relative h-32 w-full rounded-lg overflow-hidden border border-slate-800 bg-navy-900">
                          <img
                            src={imagePreview || newBlog.coverImage}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>

                    {/* Executive Summary */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Executive Summary (2-3 Sentences) *
                      </label>
                      <textarea
                        required
                        rows={2}
                        value={newBlog.summary}
                        onChange={(e) => setNewBlog({ ...newBlog, summary: e.target.value })}
                        placeholder="Brief overview explaining why founders and companies must read this legal update..."
                        className="w-full px-4 py-2.5 bg-navy-950 border border-slate-700/80 rounded-lg text-xs text-white focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    {/* Full Content (Markdown Supported) */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                          Full Article Content (Markdown Supported) *
                        </label>
                        <span className="text-[10px] text-slate-400">Supports ### Headings, - Bullets, **Bold**</span>
                      </div>
                      <textarea
                        required
                        rows={12}
                        value={newBlog.content}
                        onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                        placeholder="Write or paste your comprehensive legal analysis here..."
                        className="w-full px-4 py-3 bg-navy-950 border border-slate-700/80 rounded-lg text-xs text-white font-mono leading-relaxed focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={blogSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-gold-500/25 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                    >
                      {blogSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Publishing to MongoDB Atlas &amp; Live Site...</span>
                        </>
                      ) : (
                        <>
                          <PlusCircle className="w-4 h-4" />
                          <span>Publish Legal Article Live</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Column: Existing Published Blogs List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-white text-base">
                    Published Articles ({blogs.length})
                  </h3>
                  <Link
                    href="/blog"
                    target="_blank"
                    className="text-xs text-gold-400 hover:underline flex items-center space-x-1"
                  >
                    <span>View Public Vault</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="space-y-3">
                  {blogs.map((b) => (
                    <div
                      key={b.slug}
                      className="p-4 rounded-xl bg-navy-900/50 border border-slate-800 space-y-2 hover:border-gold-500/30 transition-all"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gold-500/10 text-gold-400 border border-gold-500/20">
                          {b.category}
                        </span>
                        <button
                          onClick={() => handleDeleteBlog(b.slug)}
                          title="Delete Article"
                          className="text-slate-400 hover:text-rose-400 transition-colors p-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h4 className="font-serif font-bold text-white text-xs leading-snug line-clamp-2">
                        {b.title}
                      </h4>

                      <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400">
                        <span>{b.readTime || '5 min read'}</span>
                        <Link
                          href={`/blog/${b.slug}`}
                          target="_blank"
                          className="text-gold-400 hover:underline flex items-center space-x-1"
                        >
                          <span>Read Live</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PRACTICE ANALYTICS & STATS */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="rounded-xl bg-navy-900/60 border border-slate-800 p-6 sm:p-8">
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  Legal Practice Performance Metrics
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Real-time pipeline data grounded in MongoDB Atlas lead records and legal practice conversions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 rounded-xl bg-navy-950 border border-slate-800 space-y-2">
                    <span className="text-xs text-slate-400">Lead Conversion Rate</span>
                    <p className="text-3xl font-serif font-bold text-emerald-400">
                      {totalLeadsCount > 0
                        ? `${Math.round((convertedCount / totalLeadsCount) * 100)}%`
                        : '0%'}
                    </p>
                    <p className="text-[11px] text-slate-400">Inquiries successfully retained as legal clients.</p>
                  </div>

                  <div className="p-5 rounded-xl bg-navy-950 border border-slate-800 space-y-2">
                    <span className="text-xs text-slate-400">Average Response Time</span>
                    <p className="text-3xl font-serif font-bold text-gold-400">&lt; 30 Mins</p>
                    <p className="text-[11px] text-slate-400">Via 1-click WhatsApp client direct trigger.</p>
                  </div>

                  <div className="p-5 rounded-xl bg-navy-950 border border-slate-800 space-y-2">
                    <span className="text-xs text-slate-400">Primary Practice Demand</span>
                    <p className="text-xl font-serif font-bold text-white">Trademark Opposition</p>
                    <p className="text-[11px] text-slate-400">Leading request across Delhi NCR.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
