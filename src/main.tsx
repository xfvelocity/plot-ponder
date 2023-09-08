import React from "react";
import ReactDOM from "react-dom/client";

// ** Router **
import router from "./router/index";
import { RouterProvider } from "react-router-dom";

// ** Styles **
import "@/assets/styles/index.scss";

// ** Components **
import Navbar from "@/components/navbar/Navbar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />

    <RouterProvider router={router} />
  </React.StrictMode>
);
