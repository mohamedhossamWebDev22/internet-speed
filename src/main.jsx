import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from "./pages/home";
import Info from "./pages/info";
import Speed from "./pages/speed";

import ErrorF from './pages/error';

import "./style/style.css";

// react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorF/>
  },
  {
    path: "/speed",
    element: <Speed />,
  },
  {
    path: "/info",
    element: <Info />,
  },
]);

//website see if the network is here or not!!
window.onoffline = () =>{
  alert("You'r Offline, Please Check You'r Connection.")
  window.location.reload()
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
