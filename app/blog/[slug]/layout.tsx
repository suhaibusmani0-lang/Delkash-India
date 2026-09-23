import type { Metadata } from 'next';
import { initialBlogs } from '@/lib/blogSeed';
import { connectToDatabase } from '@/lib/mongodb';
import Blog from '@/models/Blog';

interface Props {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  let article = initialBlogs.find((b) => b.slug === slug);

  if (!article) {
    try {
      const conn = await connectToDatabase();
      if (conn) {
        const found = await Blog.findOne({ slug }).lean();
        if (found) {
          article = {
            title: found.title,
            slug: found.slug,
            category: found.category,
            summary: found.summary,
            content: found.content,
            author: found.author || 'Adv. Rahimullah Ansari',
            authorTitle: found.authorTitle || 'Delhi High Court Advocate',
            coverImage: found.coverImage || '/favicon.svg',
            readTime: found.readTime || '5 min read',
            published: true,
          };
        }
      }
    } catch {
      // Fallback
    }
  }

  if (!article) {
    return {
      title: 'Legal Article | Delkash Associates',
      description: 'Intellectual Property legal publication by Delkash Associates, New Delhi.',
    };
  }

  const baseUrl = 'https://delkashindia.co.in';

  return {
    title: `${article.title} | Delkash Associates`,
    description: article.summary,
    authors: [{ name: article.author }],
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `${baseUrl}/blog/${article.slug}`,
      type: 'article',
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
    },
  };
}

export default function SingleBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
