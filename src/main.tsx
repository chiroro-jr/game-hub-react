import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import router from '@/routes.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="game-hub-color-theme">
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
