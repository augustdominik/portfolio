import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';
import Projekter from './routes/Projekter';
import Teknologier from './routes/Teknologier';
import Kontakt from './routes/Kontakt';

const router = createHashRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Projekter />
            },
            {
                path:'teknologier',
                element: <Teknologier />
            },
            {
                path:'kontakt',
                element: <Kontakt />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
