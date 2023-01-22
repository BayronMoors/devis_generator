import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../views/Dashboard/Dashboard";
import Home from "../views/home/home";
import Login from "../views/Login/Login";


export const router =  createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "login",
                element: <Login/>
            }
        ],
    },

])