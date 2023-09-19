import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=''>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer></ToastContainer>
      </AuthProvider>
    </React.StrictMode>
  </div>
)
