/**
 * RouteErrorView — чистый UI-компонент.
 * НЕ знает про Router.
 * Получает данные и просто отображает.
 */
export default function RouteErrorView({ title, message }) {
  return (
    <div style={{ padding: 16, border: '1px solid crimson' }}>
      <h2 style={{ color: 'crimson' }}>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
