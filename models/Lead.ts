import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ILead extends Document {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  status: 'new' | 'contacted' | 'converted' | 'archived';
  source: string;
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema: Schema = new Schema<ILead>(
  {
    name: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    service: {
      type: String,
      required: [true, 'Service required is mandatory'],
      default: 'Trademark Registration & Opposition',
      trim: true,
    },
    message: {
      type: String,
      trim: true,
      maxlength: [1500, 'Message cannot exceed 1500 characters'],
    },
    status: {
      type: String,
      default: 'new',
      enum: ['new', 'contacted', 'converted', 'archived'],
    },
    source: {
      type: String,
      default: 'Landing Page Form',
    },
  },
  { timestamps: true }
);

export default (mongoose.models.Lead as Model<ILead>) || mongoose.model<ILead>('Lead', LeadSchema);

