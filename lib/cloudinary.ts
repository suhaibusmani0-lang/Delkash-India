/**
 * Cloudinary client & server URL generator
 * Pure utility function safe for both Client and Server Components
 */
export function getOptimizedImageUrl(publicId: string, width = 800, height = 800): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'delkash-associates';
  return `https://res.cloudinary.com/${cloudName}/image/upload/c_fill,g_face,w_${width},h_${height},q_auto,f_auto/${publicId}`;
}

