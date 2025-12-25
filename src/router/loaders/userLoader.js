import { getUserById } from '@/services/db';

export async function userLoader({ params }) {
  const { id } = params;
  await new Promise(r => setTimeout(r, 300));
  const user = getUserById(id);

  if (!user) {
    // throw new Error('Test crash');
    throw new Response('User not found', { status: 404 });
  }
  return {
    title: 'User details (from loader)',
    user,
  };
}
