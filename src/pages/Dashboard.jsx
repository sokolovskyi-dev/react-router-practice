import { useLoaderData } from 'react-router-dom';

export default function Dashboard() {
  const data = useLoaderData();
  return (
    <div>
      <h1>Dashboard</h1>

      <p style={{ fontSize: 12, opacity: 0.7 }}>Data is loaded BEFORE render by Router loader.</p>
      <h3>{data.title}</h3>

      <ul>
        <li>Total users: {data.stats.totalUsers}</li>
        <li>Last user: {data.stats.lastUser ?? '-'}</li>
      </ul>
    </div>
  );
}
