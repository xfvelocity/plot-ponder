import React from "react";
import ReactDOM from "react-dom/client";
import PPFilm from "./components/basic/film/PPFilm";

// ** Router **
import router from "./router/index";
import { RouterProvider } from "react-router-dom";

// ** Styles **
import "@/assets/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <PPFilm />
  </React.StrictMode>
);
