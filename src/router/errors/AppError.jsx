import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import RouteErrorView from './RouteErrorView';

/**
 * AppError — error boundary ТОЛЬКО для /app/*.
 *
 * Если ошибка произошла внутри dashboard/users,
 * RootLayout НЕ падает — только контент AppLayout.
 */
export default function AppError() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return <RouteErrorView title={`App error ${error.status}`} message={error.statusText} />;
  }

  return <RouteErrorView title="App crashed" message={error?.message || 'Unknown app error'} />;
}
