import { createBrowserRouter } from "react-router-dom";

// ** Pages **
import Home from "@/views/Home";
import Register from "@/views/auth/register/Register";

/*
  React router: https://reactrouter.com/en/main/start/tutorial
  Allows you to have multiple pages in your app.
*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
