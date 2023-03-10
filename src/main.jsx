import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from "./pages/home";
import Info from "./pages/info";
import Speed from "./pages/speed";


import "./style/style.css";

// pwa
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

serviceWorkerRegistration.register();