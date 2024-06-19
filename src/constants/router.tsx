import App from "@/App";
import Dope from "@/pages/Dope";
import Insight from "@/pages/Insight";
import { RouteObject } from "react-router-dom";

export const ROUTER: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "dope",
    element: <Dope />,
  },
  { path: "insight", element: <Insight /> },
];
