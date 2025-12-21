import { createClient } from '@sanity/client';

// Create a write-enabled client for migrations
// You'll need to set SANITY_API_TOKEN environment variable
export const writeClient = createClient({
  projectId: 'rlwt7cpv',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Don't use CDN for writes
  token: process.env.SANITY_API_TOKEN, // You'll need to create this token in Sanity dashboard
});

// Helper to check if we have a valid token
export function hasValidToken() {
  return !!process.env.SANITY_API_TOKEN;
}
