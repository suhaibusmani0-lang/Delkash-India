import type { MetadataRoute } from 'next';
import { initialBlogs } from '@/lib/blogSeed';
import { connectToDatabase } from '@/lib/mongodb';
import Blog from '@/models/Blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://delkashindia.co.in';
  const currentDate = new Date();

  // Static Core Landing & Service Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services/trademark`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/patent`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/copyright`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/design`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.85,
    },
  ];

  // Dynamic Blog Articles
  let blogSlugs = initialBlogs.map((b) => b.slug);

  try {
    const conn = await connectToDatabase();
    if (conn) {
      const dbBlogs = await Blog.find({ isPublished: { $ne: false } }).select('slug updatedAt').lean();
      if (dbBlogs && dbBlogs.length > 0) {
        blogSlugs = Array.from(new Set([...blogSlugs, ...dbBlogs.map((b: { slug: string }) => b.slug)]));
      }
    }
  } catch (error) {
    console.warn('[Sitemap DB Read Error, fallback to seeds]:', error);
  }

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticRoutes, ...blogRoutes];
}
