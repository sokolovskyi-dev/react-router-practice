import { redirect } from 'react-router-dom';

import { isAuthed } from '@/services/auth';

export async function authGuardLoader() {
  if (!isAuthed()) {
    throw redirect('/login');
  }
  return null;
}
