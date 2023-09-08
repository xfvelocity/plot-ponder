import { createBrowserRouter } from "react-router-dom";

// ** Pages **
import Home from "@/views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
