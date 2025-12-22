import { NavLink, Outlet } from 'react-router-dom';

// import { clearToken, isAuthed, setToken } from '@/services/auth';

export default function RootLayout() {
  // const authed = isAuthed();
  return (
    <div style={{ padding: 16 }}>
      <header style={{ marginBottom: 12 }}>
        <nav style={{ display: 'flex', gap: 12 }}>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/app/dashboard">App</NavLink>

          {/* --- временный блок для теста --- */}
          {/* <span style={{ marginLeft: 'auto', fontSize: 12, opacity: 0.8 }}>
            {' '}
            authed: {String(authed)}
          </span> */}

          {/* --- конец временного блока --- */}
        </nav>
      </header>
      <main style={{ border: '1px solid #ddd', padding: 12 }}>
        <Outlet />
      </main>
      <footer style={{ marginTop: 12, fontSize: 12, opacity: 0.7 }}>RootLayout footer</footer>
    </div>
  );
}
