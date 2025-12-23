import { useLoaderData } from 'react-router-dom';

/**
 * Пока заглушка.
 * Позже добавим:
 * - loader() для списка
 * - action() для добавления
 * - <Form> вместо onSubmit
 */
export default function Users() {
  const data = useLoaderData();
  return (
    <div>
      <h1>Users</h1>

      <p style={{ fontSize: 12, opacity: 0.7 }}>
        Users list is loaded BEFORE render by Router loader.
      </p>
      <h3>{data.title}</h3>

      <ul>
        {data.users.map(u => (
          <li key={u.id}>
            {u.name} <span style={{ opacity: 0.6 }}>({u.id})</span>
          </li>
        ))}
      </ul>

      <p style={{ fontSize: 12, opacity: 0.7 }}>Next: add user details route /app/users/:id</p>
    </div>
  );
}
