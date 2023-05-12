import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct"
const router = createBrowserRouter([{
    path: "/",
    element: < App / > ,
    children: [{
            path: "home",
            element: < Home / > ,
        },
        {
            path: "about",
            element: < About / > ,
        },
        {
            path: "login",
            element: < Login / > ,
        },
        {
            path: "register",
            element: < Register / > ,
        },
        {
            path: "add-prodcuts",
            element: < AddProduct / > ,
        },
        {
           path: "update-product/:productId",
           element: <UpdateProduct/> 
        }

    ],
}]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( < StrictMode >
        <RouterProvider router={router}/>
        </StrictMode>);

        // If you want to start measuring performance in your app, pass a function
        // to log results (for example: reportWebVitals(console.log))
        // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
        reportWebVitals();