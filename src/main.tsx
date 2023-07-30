import React from "react";
import ReactDOM from "react-dom/client";
import "virtual:windi.css";
import "./index.css";
import Route from "@/routes/index.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  </React.StrictMode>
);
