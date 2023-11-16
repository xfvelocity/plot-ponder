import { createBrowserRouter } from "react-router-dom";

// ** Pages **
import Home from "@/views/home/Home";
import Register from "@/views/auth/register/Register";
import ContentWrapper from "@/components/content-wrapper/ContentWrapper";
import Login from "@/views/auth/login/Login";
import Profile from "@/views/user/Profile";
import FilmSelect from "@/views/review/film-select/FilmSelect";
import FilmReview from "@/views/review/film-review/FilmReview";

/*
  React router: https://reactrouter.com/en/main/start/tutorial
  Allows you to have multiple pages in your app.
*/
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ContentWrapper>
        <Home />
      </ContentWrapper>
    ),
  },
  {
    path: "/register",
    element: (
      <ContentWrapper>
        <Register />
      </ContentWrapper>
    ),
  },
  {
    path: "/login",
    element: (
      <ContentWrapper>
        <Login />
      </ContentWrapper>
    ),
  },
  {
    path: "/review",
    children: [
      {
        path: "film",
        element: (
          <ContentWrapper>
            <FilmSelect />
          </ContentWrapper>
        ),
      },
      {
        path: "review",
        element: (
          <ContentWrapper>
            <FilmReview />
          </ContentWrapper>
        ),
      },
    ],
  },
  {
    path: "/profile",
    element: (
      <ContentWrapper>
        <Profile />
      </ContentWrapper>
    ),
  },
  {
    path: "/user/:username",
    element: (
      <ContentWrapper>
        <Profile />
      </ContentWrapper>
    ),
  },
]);

export default router;
