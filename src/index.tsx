import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./UI/theme.css";
import "./UI/resize.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18next/i18next";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
