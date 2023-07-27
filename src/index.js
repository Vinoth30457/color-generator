import React from "react";
import ReactDom from "react-dom/client";

import App from "./App";

import "./styles/index.css";

const root = ReactDom.createRoot(document.getElementById("root"));

// const rootEl = document.getElementById("root");

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
