import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/router.jsx'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=' max-w-8xl bg-gray-900'>

      <Toaster position="top-right"></Toaster>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  </StrictMode>,
)
