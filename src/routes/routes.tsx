import { pageRoutes } from 'constants/pageRoutes'
import { CocktailPage } from 'pages/CocktailPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { createBrowserRouter, Navigate } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: pageRoutes.MAIN,
    element: <Navigate to={pageRoutes.MARGARITA} replace />,
  },
  {
    path: '/:cocktailCode',
    element: <CocktailPage />,
  },
  {
    path: pageRoutes.NOTFOUND,
    element: <NotFoundPage />,
  },
  {
    path: '*',
    element: <Navigate to={pageRoutes.NOTFOUND} replace />,
  },
])

export default routes
