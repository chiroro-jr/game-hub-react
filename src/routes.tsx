import Layout from '@/pages/Layout'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import GameDetailPage from '@/pages/GameDetailPage'
import HomePage from '@/pages/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
        path: '/games/:id',
        element: <GameDetailPage />,
      },
    ],
  },
])

export default router
