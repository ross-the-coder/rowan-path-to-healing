import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'rlwt7cpv',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for faster reads (set to false for fresh data)
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

// Helper function to fetch data with error handling
export async function sanityFetch<T = any>({
  query,
  params = {},
}: {
  query: string;
  params?: Record<string, any>;
}): Promise<T> {
  try {
    return await sanityClient.fetch<T>(query, params);
  } catch (error) {
    console.error('Sanity fetch error:', error);
    throw error;
  }
}
