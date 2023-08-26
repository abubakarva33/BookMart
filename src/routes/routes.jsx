import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Non-Shared/Homes/Home";
import AllBooks from "../pages/Non-Shared/AllBooks/AllBooks";
import Login from "../pages/Non-Shared/Login/Login";
import Register from "../pages/Non-Shared/Register/Register";

export const routes = createBrowserRouter([
    {
        path: "/",
        element : <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/all-books",
                element: <AllBooks/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
        ]
    }
])