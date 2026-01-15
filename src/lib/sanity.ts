import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'rlwt7cpv',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for better performance. Cached data fallback in UI handles potential staleness.
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
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8641a571-b5c8-43df-beb2-34bce3e2f3ef',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'seo-scan',hypothesisId:'H7',location:'sanity.ts:sanityFetch',message:'Sanity fetch start',data:{queryLength:query.length,paramsKeys:Object.keys(params || {})},timestamp:Date.now()})}).catch(()=>{});
    // #endregion agent log

    return await sanityClient.fetch<T>(query, params);
  } catch (error) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8641a571-b5c8-43df-beb2-34bce3e2f3ef',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'seo-scan',hypothesisId:'H7',location:'sanity.ts:sanityFetch',message:'Sanity fetch error',data:{errorType:typeof error,errorMessage:error instanceof Error ? error.message : String(error)},timestamp:Date.now()})}).catch(()=>{});
    // #endregion agent log
    console.error('Sanity fetch error:', error);
    throw error;
  }
}
