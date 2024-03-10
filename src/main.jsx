import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Filter from "./Components/Filter/Filter.jsx";
import "./Main.css";
import ErrorPage from "./Error/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PopularMovies from "./API/PopularMovies.jsx";
import Search from "./Components/Filter/Search/Search.jsx";
import Item_detail from "./Components/Filter/Item_detail/Item_detail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Filter",
    element: <Filter />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/PopularMovies",
    element: <PopularMovies />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/Search",
    element: <Search />,
    errorElement: <ErrorPage />,
  },


  {
    path: "/ItemDetail",
    element: <Item_detail/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
