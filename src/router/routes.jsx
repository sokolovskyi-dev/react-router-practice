import { createBrowserRouter } from 'react-router-dom';

import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import UserDetails from '@/pages/UserDetails';
import Users from '@/pages/Users';

import { loginAction } from './actions/loginAction';
import AppError from './errors/AppError';
import RootError from './errors/RootError';
import AppLayout from './layouts/AppLayout';
import RootLayout from './layouts/RootLayout';
import { authGuardLoader } from './loaders/authGuardLoader';
import { dashboardLoader } from './loaders/dashboardLoader';
import { userLoader } from './loaders/userLoader';
import { usersLoader } from './loaders/usersLoader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RootError />,
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
        errorElement: <AppError />,
        children: [
          { path: 'dashboard', element: <Dashboard />, loader: dashboardLoader },
          { path: 'users', element: <Users />, loader: usersLoader },
          { path: 'users/:id', element: <UserDetails />, loader: userLoader },
        ],
      },

      { path: '*', element: <NotFound /> },
    ],
  },
]);
