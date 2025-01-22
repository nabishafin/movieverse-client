import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <Toaster position='top-right' reverseOrder={false} />
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
