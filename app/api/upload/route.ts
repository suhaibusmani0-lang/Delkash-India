import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 't1nsxike',
  api_key: process.env.CLOUDINARY_API_KEY || '717375213458155',
  api_secret: process.env.CLOUDINARY_API_SECRET || '8CIra8T2JbWGfl8nh-kxo4aojfw',
  secure: true,
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No image file provided.' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload directly to Cloudinary
    const uploadResult = await new Promise<{ secure_url: string }>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'delkash_associates/blogs',
          resource_type: 'image',
        },
        (error, result) => {
          if (error || !result) {
            reject(error || new Error('Image upload failed'));
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(buffer);
    });

    return NextResponse.json({
      success: true,
      url: uploadResult.secure_url,
      message: 'Image uploaded to Cloudinary successfully!',
    });
  } catch (error: unknown) {
    console.error('[Cloudinary Upload Error]:', error);
    const err = error as { message?: string };
    return NextResponse.json(
      { error: err?.message || 'Failed to upload image to cloud storage.' },
      { status: 500 }
    );
  }
}

