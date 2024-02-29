import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Filter from './Components/Filter/Filter.jsx'
import './Main.css'
import ErrorPage from './Error/ErrorPage.jsx'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/> ,
      errorElement:<ErrorPage/>,

    },
    {
        path: "/Filter",
        element: <Filter/> ,
        errorElement:<ErrorPage/>,

    }


    
  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
