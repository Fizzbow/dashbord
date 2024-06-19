import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dope from "./pages/Dope";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "dope",
    element: <Dope />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
