import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { combineReducers, createStore } from "redux";

const store = createStore(combineReducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
