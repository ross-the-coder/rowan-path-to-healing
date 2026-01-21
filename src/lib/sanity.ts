import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'rlwt7cpv',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Disable CDN to get fresh data immediately (can re-enable after testing)
  perspective: 'published', // Only fetch published documents
});

// Image URL builder
const builder = createImageUrlBuilder(sanityClient);

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
    console.log('🔍 Sanity Query:', query);
    console.log('📊 Params:', params);
    const result = await sanityClient.fetch<T>(query, params);
    console.log('✅ Sanity Result:', result);
    return result;
  } catch (error) {
    console.error('❌ Sanity fetch error:', error);
    throw error;
  }
}
