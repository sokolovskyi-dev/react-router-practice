import { NavLink, Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 12 }}>
      <aside style={{ border: '1px solid #ddd', padding: 12 }}>
        <h3 style={{ marginTop: 0 }}>App</h3>
        <nav style={{ display: 'grid', gap: 8 }}>
          <NavLink to="/app/dashboard">Dashboard</NavLink>
          <NavLink to="/app/users">Users</NavLink>
        </nav>
      </aside>

      <section style={{ border: '1px solid #ddd', padding: 12 }}>
        <Outlet />
      </section>
    </div>
  );
}
