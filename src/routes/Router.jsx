import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Main from "../pages/Main";
import AllGames from "../pages/AllGames";
import GameDetails from "../pages/GameDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
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
    ],
  },
]);

export default router;
