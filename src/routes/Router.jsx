import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Main from "../pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        Component: Main,
        loader: () => fetch("/game.json"),
      },
    ],
  },
]);

export default router;
