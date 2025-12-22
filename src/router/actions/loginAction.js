import { redirect } from 'react-router-dom';

import { setToken } from '@/services/auth';

export async function loginAction({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  if (email !== 'admin@test.com' || password !== '1234') {
    return { error: 'Invalid email or password' };
  }

  setToken('demo-token');

  throw redirect('/app/dashboard');
}
