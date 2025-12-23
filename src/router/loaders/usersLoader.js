import { getUsers } from '@/services/db';

export async function usersLoader() {
  await new Promise(r => {
    setTimeout(r, 300);
  });
  return {
    title: 'Users data (from loader)',
    users: getUsers(),
  };
}
