import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import AuthProvider from './provider/AuthProvider'
import ApiDataProvider from './provider/ApiDataProvider'
import { Toaster } from 'react-hot-toast';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiDataProvider>
      <AuthProvider>
      <Toaster/>
        <RouterProvider router={Routes} />
      </AuthProvider>
    </ApiDataProvider>
  </React.StrictMode>,
)
