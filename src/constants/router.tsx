import App from "@/App";
import Dope from "@/pages/Dope";
import Insight from "@/pages/Insight";
import Widgets from "@/pages/Widgets";
import { Page } from "@/types/page.type";
import { RouteObject } from "react-router-dom";

export const ROUTER: Array<RouteObject & Page> = [
  {
    path: "/",
    element: <App />,
    title: "Home",
    description: "is a HomePage",
  },
  {
    path: "dope",
    element: <Dope />,
    title: "dope",
    description: "a dashbord about ",
  },
  {
    path: "insight",
    element: <Insight />,
    title: "insight",
    description: "a mock stock chart about NVDA & APPL",
  },
  {
    path: "wights",
    element: <Widgets />,
    title: "wights",
    description: "wights",
  },
];
