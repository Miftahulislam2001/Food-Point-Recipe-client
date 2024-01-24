import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import AuthProvider from './provider/AuthProvider'
import ApiDataProvider from './provider/ApiDataProvider'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiDataProvider>
      <AuthProvider>
        <RouterProvider router={Routes} />
      </AuthProvider>
    </ApiDataProvider>
  </React.StrictMode>,
)
