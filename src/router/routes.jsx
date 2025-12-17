import { createBrowserRouter } from 'react-router-dom';

import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Users from '@/pages/Users';

import AppLayout from './layouts/AppLayout';
import RootLayout from './layouts/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true, // это маршрут для path "/" внутри RootLayout
        element: <div>Home page inside RootLayout</div>,
      },
      { path: 'login', element: <Login /> },
      {
        path: 'app',
        element: <AppLayout />,
        children: [
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'users', element: <Users /> },
        ],
      },

      { path: '*', element: <NotFound /> },
    ],
  },
]);
