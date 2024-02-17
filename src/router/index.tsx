import { createBrowserRouter } from "react-router-dom";

// ** Pages **
import Home from "@/views/home/Home";
import Register from "@/views/auth/register/Register";
import ContentWrapper from "@/components/content-wrapper/ContentWrapper";
import Login from "@/views/auth/login/Login";
import Profile from "@/views/user/Profile";

// ** Routes **
import Review from "./routes/review";
import Content from "@/views/content/Content";

/*
  React router: https://reactrouter.com/en/main/start/tutorial
  Allows you to have multiple pages in your app.
*/
const router = createBrowserRouter([
  Review,
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
  {
    path: "/content/:type/:id",
    element: (
      <ContentWrapper>
        <Content />
      </ContentWrapper>
    ),
  },
]);

export default router;
