import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import RouteErrorView from './RouteErrorView';

/**
 * RootError — error boundary для корня приложения.
 *
 * Ловит:
 * - ошибки loader/action
 * - throw new Response(...)
 * - ошибки рендера
 */
export default function RootError() {
  const error = useRouteError();
  //useRouteError() - Это хук, который позволяет получить **ошибку, возникшую внутри loader/action или при рендере маршрута**.
  //Используется **только внутри `errorElement`**.

  //isRouteErrorResponse -  Это вспомогательная функция, которая позволяет понять:
  // "Ошибка пришла из router (Response), а не обычная JS-ошибка?"

  // Ошибка, выброшенная как Response (например 404, 500)
  if (isRouteErrorResponse(error)) {
    return (
      <RouteErrorView title={`Error ${error.status}`} message={error.statusText || 'Route error'} />
    );
  }

  // Любая другая ошибка (JS exception)
  return <RouteErrorView title="Unexpected error" message={error?.message || 'Unknown error'} />;
}
