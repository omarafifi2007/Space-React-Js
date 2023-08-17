import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Home from './Pages/Home';
import Crew from './Pages/Crew';
import Destination from './Pages/Destination';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
    errorElement: <h1>Sorry............</h1>,
  },
  {
    path: "/Destination",
    element: <Destination />,
    errorElement: <h1>Sorry............</h1>,
  },
  {
    path: "/Crew",
    element: <Crew />,
    errorElement: <h1>Sorry............</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);
