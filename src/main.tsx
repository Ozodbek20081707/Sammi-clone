import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import MockExam from "./pages/MockExam.js"
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <MockExam />
  </React.StrictMode>
);
