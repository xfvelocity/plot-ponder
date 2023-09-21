import { createBrowserRouter } from "react-router-dom";

// ** Pages **
import Home from "@/views/Home";
import Register from "@/views/auth/register/Register";
import RouteGuard from "@/components/route-guard/RouteGuard";
import Login from "@/views/auth/login/Login";
import FilmSelect from "@/views/review/FilmSelect";
import FilmReview from "@/views/review/FilmReview";

/*
  React router: https://reactrouter.com/en/main/start/tutorial
  Allows you to have multiple pages in your app.
*/
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RouteGuard>
        <Home />
      </RouteGuard>
    ),
  },
  {
    path: "/register",
    element: (
      <RouteGuard>
        <Register />
      </RouteGuard>
    ),
  },
  {
    path: "/login",
    element: (
      <RouteGuard>
        <Login />
      </RouteGuard>
    ),
  },
  {
    path: "/review",
    children: [
      {
        path: "film",
        element: (
          <RouteGuard>
            <FilmSelect />
          </RouteGuard>
        ),
      },
      {
        path: "review",
        element: (
          <RouteGuard>
            <FilmReview />
          </RouteGuard>
        ),
      },
    ],
  },
]);

export default router;
