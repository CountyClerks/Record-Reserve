import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './pages/Home/home.css'
import './components/Navbar.css'
import './pages/New Album/NewAlbum.css'
import './pages/Signup/signup.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './services/routes.tsx'
import { AuthUserProvider } from './services/auth.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthUserProvider>
      <RouterProvider router={router} />
    </AuthUserProvider>
  </React.StrictMode>,
)