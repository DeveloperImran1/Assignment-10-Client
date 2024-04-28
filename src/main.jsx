import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Route.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import { ScaleLoader } from 'react-spinners';







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}
        fallbackElement={<div className="flex justify-center items-center flex-col min-h-[calc(100vh-116px)]">
          {/* aikhne loader er namta dita hobe. jeita website theke pawa jabe. ar upore impont korte hobe. */}
          <ScaleLoader size={100} color='#F92FD3' ></ScaleLoader>
        </div>}
      />
      <Toaster></Toaster>
    </AuthProvider>
  </React.StrictMode>,
)
