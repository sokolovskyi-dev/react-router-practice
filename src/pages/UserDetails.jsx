import { useLoaderData } from 'react-router-dom';

export default function UserDetails() {
  const data = useLoaderData();

  return (
    <div>
      <h1>User details</h1>

      <p style={{ fontSize: 12, opacity: 0.7 }}>Loaded BEFORE render via userLoader.</p>

      <h3>{data.title}</h3>

      <ul>
        <li>ID: {data.user.id}</li>
        <li>Name: {data.user.name}</li>
      </ul>
    </div>
  );
}
