import App from "@/App";
import Dope from "@/pages/Dope";
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
];
