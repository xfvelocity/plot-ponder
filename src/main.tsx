import React from "react";
import ReactDOM from "react-dom/client";

// ** Styles **
import "./assets/styles/index.scss";

// ** Components **
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
