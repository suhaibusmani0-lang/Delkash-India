import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { initialBlogs } from '@/lib/blogSeed';

export async function GET() {
  try {
    await connectToDatabase();
    
    // Auto-seed if database has no blogs
    const count = await Blog.countDocuments();
    if (count === 0) {
      await Blog.insertMany(initialBlogs);
    }

    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, blogs });
  } catch (error: unknown) {
    console.error('[Blogs GET Error]:', error);
    // Return seed fallback in case of temporary network glitch
    return NextResponse.json({ success: true, blogs: initialBlogs });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, slug, category, summary, content, author, authorTitle, coverImage, readTime } = body;

    if (!title || !content || !summary) {
      return NextResponse.json(
        { error: 'Title, summary, and content are required fields.' },
        { status: 400 }
      );
    }

    const finalSlug = (slug || title)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    await connectToDatabase();

    // Check if slug exists
    const existing = await Blog.findOne({ slug: finalSlug });
    if (existing) {
      return NextResponse.json(
        { error: 'A blog with this title/slug already exists. Please choose a different title.' },
        { status: 400 }
      );
    }

    const newBlog = await Blog.create({
      title,
      slug: finalSlug,
      category: category || 'Trademark',
      summary,
      content,
      author: author || 'Rahimullah Ansari Advocate',
      authorTitle: authorTitle || 'Advocate, Delhi High Court',
      coverImage: coverImage || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
      readTime: readTime || '5 min read',
      published: true,
    });

    return NextResponse.json(
      { success: true, message: 'Blog published successfully!', blog: newBlog },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('[Blog Creation Error]:', error);
    const err = error as { message?: string };
    return NextResponse.json(
      { error: err?.message || 'Failed to publish blog post.' },
      { status: 500 }
    );
  }
}

