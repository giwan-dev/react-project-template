import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RootRouter } from "./router";

const rootEl = document.getElementById("root");

if (rootEl === null) {
  throw new Error("root를 ID로 가진 엘리먼트가 없습니다.");
}

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <RootRouter />
  </React.StrictMode>
);
