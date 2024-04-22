import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './router/PublicRouter.jsx';
import {
  RouterProvider
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import PendingUserProvider from './Provider/PendingUserProvider.jsx';

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <PendingUserProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </PendingUserProvider>


    </AuthProvider>


  </React.StrictMode>
);