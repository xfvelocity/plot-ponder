import { createBrowserRouter } from "react-router-dom";

// ** Pages **
import Home from "@/views/home/Home";
import ContentWrapper from "@/components/content-wrapper/ContentWrapper";
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
