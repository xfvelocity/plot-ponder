import { createBrowserRouter } from "react-router-dom";

// ** Pages **
import Home from "@/views/Home";
import Register from "@/views/auth/register/Register";
import ContentWrapper from "@/components/content-wrapper/ContentWrapper";
import Login from "@/views/auth/login/Login";

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
]);

export default router;
