import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Main from "../pages/Main";
import AllGames from "../pages/AllGames";
import GameDetails from "../pages/GameDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import ForgetPassword from "../pages/ForgetPassword";
import PrivateRouter from "../Provider/PrivateRouter";
// const Login = React.lazy(() => import("../pages/Login"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: (
      <div className="h-screen flex justify-center items-center">
        Oops! The page you're looking for doesn't exist.
      </div>
    ),
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
        element: (
          <PrivateRouter>
            <GameDetails />
          </PrivateRouter>
        ),
        loader: () => fetch("/game.json"),
        hydrateFallbackElement: "Loading game details...",
        errorElement: (
          <div className="h-screen flex justify-center items-center">
            Something went wrong loading the game details.
          </div>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/forgetPassword",
        Component: ForgetPassword,
      },
    ],
  },
]);

export default router;
