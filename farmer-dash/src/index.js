import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Dash from "./components/pages/dash";
import Register from "./components/pages/Register";


import {
  HashRouter as Router,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import About from "./components/pages/about";
import Login from "../src/components/pages/login";
import Home from "./components/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
 
  {
    path: "/dash",
    element: <Dash />,
  },
  
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
