import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'rlwt7cpv',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function check() {
  try {
    console.log('Fetching board members from Sanity...');
    const result = await client.fetch('*[_type == "boardMember"][0...5]');
    console.log('Successfully fetched board members:', result.length);
    if (result.length > 0) {
      console.log('First member name:', result[0].name);
    } else {
      console.log('No board members found in Sanity.');
    }
  } catch (error) {
    console.error('Error fetching from Sanity:', error.message);
  }
}

check();
