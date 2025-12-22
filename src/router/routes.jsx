import { createBrowserRouter } from 'react-router-dom';

import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Users from '@/pages/Users';

import { loginAction } from './actions/loginAction';
import AppLayout from './layouts/AppLayout';
import RootLayout from './layouts/RootLayout';
import { authGuardLoader } from './loaders/authGuardLoader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <div>Home page inside RootLayout</div>,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'app',
        element: <AppLayout />,
        loader: authGuardLoader,
        children: [
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'users', element: <Users /> },
        ],
      },

      { path: '*', element: <NotFound /> },
    ],
  },
]);
