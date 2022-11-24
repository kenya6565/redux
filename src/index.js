import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";

// // actions -> increment, decrement
// // typeはアクション名
// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// // reducer -> アクションと前の状態を組み合わせて新しい状態を作る
// const counterReducer = (state = 0, action) => {
//   // dispatchから発せられたactionに応じてstateを変える
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// };

// // store
// let store = createStore(counterReducer);

// // subscribeで新しい状態を感知してログとして出力する
// store.subscribe(() => console.log(store.getState()))

// // dispatch
// // incrementというアクションをstoreに通知
// store.dispatch(increment())



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
