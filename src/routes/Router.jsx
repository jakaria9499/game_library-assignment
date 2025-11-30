import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Main from "../pages/Main";
import AllGames from "../pages/AllGames";
import GameDetails from "../pages/GameDetails";
import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
// const Login = React.lazy(() => import("../pages/Login"));


const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <div className="h-screen flex justify-center items-center">
      Oops! The page you're looking for doesn't exist.
    </div>,
    children: [
      {
        path: "/",
        Component: Main,
        loader: () => fetch("/game.json"),
        HydrateFallback: "",
      },
      {
        path: "/all-games",
        Component: AllGames,
        loader: () => fetch("/game.json"),
      },
      {
        path: "/game-details/:id",
        Component: GameDetails,
        loader: () => fetch("/game.json"),
        hydrateFallbackElement: "Loading game details...",
        errorElement: (
          <div className="h-screen flex justify-center items-center">
            Something went wrong loading the game details.
          </div>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      }
    ],
  },
]);

export default router;
