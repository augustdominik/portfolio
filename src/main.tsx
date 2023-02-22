import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';
import Projekter from './routes/Erfaring';
import Teknologier from './routes/Teknologier';

const router = createBrowserRouter([
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
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
