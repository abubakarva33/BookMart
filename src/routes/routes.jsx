import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Non-Shared/Homes/Home";
import AllBooks from "../pages/Non-Shared/AllBooks/AllBooks";
import Login from "../pages/Non-Shared/Login/Login";
import Register from "../pages/Non-Shared/Register/Register";
import AllBooksLayout from "../layouts/AllBooksLayout";
import BookDetails from "../pages/components/BookDetails/BookDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <AllBooksLayout />,
        children: [
          {
            path: "/books",
            element: <AllBooks />,
          },
          {
            path: "/books",
            element: <AllBooks />,
          },
          {
            path: "/books/:bookId",
            element: <BookDetails />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
