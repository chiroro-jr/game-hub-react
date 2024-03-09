import Layout from '@/pages/Layout'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import GameDetailPage from '@/pages/GameDetailPage'
import HomePage from '@/pages/HomePage'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'games',
        element: <Navigate to="/" />,
      },
      {
        path: '/games/:slug',
        element: <GameDetailPage />,
      },
    ],
  },
])

export default router
