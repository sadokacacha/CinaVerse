import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Filter from "./Components/Filter/Filter.jsx";
import "./Main.css";
import ErrorPage from "./Error/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./Components/Filter/Search/Search.jsx";
import Item_detail from "./Components/Filter/Item_detail/Item_detail.jsx";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient({});

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
    path: "/Search",
    element: <Search />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/ItemDetail",
    element: <Item_detail />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
