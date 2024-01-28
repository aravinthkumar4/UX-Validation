import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Pages/Login';
import Singup from './Pages/Signup';
import Home from './Pages/Home';
import Dashboard from './Pages/Admin/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "signup",
    element: <Singup/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
  {
    path: "admin",
    element: <Dashboard/>,
  },
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
