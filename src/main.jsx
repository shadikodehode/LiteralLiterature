import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/index.jsx'
import { FavoritesProvider } from './context/FavoritesProvider.jsx'
import { SearchProvider } from './context/SearchProvider.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <QueryClientProvider client={queryClient} >
        <FavoritesProvider>
        <SearchProvider>
          <RouterProvider router={router} />
        </SearchProvider>
        </FavoritesProvider>
      </QueryClientProvider>
  </StrictMode>,
)
