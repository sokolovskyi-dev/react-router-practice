import { Link, useLoaderData } from 'react-router-dom';

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

      <ul>
        {data.users.map(u => (
          <li key={u.id}>
            {/* Link = меняет URL → Router решает, что грузить */}
            <Link to={`/app/users/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
