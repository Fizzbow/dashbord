import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTER } from "./constants/router";

const router = createBrowserRouter(ROUTER);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
