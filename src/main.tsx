import React from "react";
import ReactDOM from "react-dom/client";
import "virtual:windi.css";
import "./index.less";
import Route from "@/routes/index.tsx";
import { BrowserRouter } from "react-router-dom";
import { api } from "../api";
import { ApiContext } from "./context/ApiContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApiContext.Provider value={api}>
    <React.StrictMode>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </React.StrictMode>
  </ApiContext.Provider>
);
