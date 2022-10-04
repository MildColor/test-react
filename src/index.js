import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // * BrowserRouter 불러오기
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// * App 을 BrowserRouter 로 감싸기
ReactDOM.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
  document.getElementById("root")
);

// serviceWorker.unregister();
