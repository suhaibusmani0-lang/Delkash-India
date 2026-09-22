import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string;
  author: string;
  authorTitle: string;
  coverImage?: string;
  readTime: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema: Schema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: [
        'Trademark',
        'Copyright',
        'Patent',
        'Industrial Design',
        'Litigation & Court Practice',
        'Startup Legal Guide',
      ],
      default: 'Trademark',
    },
    summary: {
      type: String,
      required: [true, 'Summary is required'],
      trim: true,
      maxlength: [500, 'Summary cannot exceed 500 characters'],
    },
    content: {
      type: String,
      required: [true, 'Blog content is required'],
    },
    author: {
      type: String,
      default: 'Rahimullah Ansari Advocate',
    },
    authorTitle: {
      type: String,
      default: 'Advocate, Delhi High Court',
    },
    coverImage: {
      type: String,
      default: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    },
    readTime: {
      type: String,
      default: '5 min read',
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default (mongoose.models.Blog as Model<IBlog>) || mongoose.model<IBlog>('Blog', BlogSchema);

