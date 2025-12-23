import { getUserStats } from '@/services/db';

export async function dashboardLoader() {
  await new Promise(r => setTimeout(r, 300));

  return {
    title: 'Dashboard data (from loader)',
    stats: getUserStats(),
  };
}
