import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { initialBlogs } from '@/lib/blogSeed';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    await connectToDatabase();

    const blog = await Blog.findOne({ slug });
    if (!blog) {
      // Check fallback seed
      const seedMatch = initialBlogs.find((b) => b.slug === slug);
      if (seedMatch) {
        return NextResponse.json({ success: true, blog: seedMatch });
      }
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, blog });
  } catch (error: unknown) {
    console.error('[Blog Slug GET Error]:', error);
    return NextResponse.json({ error: 'Failed to retrieve blog' }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    await connectToDatabase();

    const deleted = await Blog.findOneAndDelete({ slug });
    if (!deleted) {
      return NextResponse.json({ error: 'Blog not found to delete' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Blog deleted successfully.' });
  } catch (error: unknown) {
    console.error('[Blog Delete Error]:', error);
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}

