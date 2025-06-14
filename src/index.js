import React from "react";
// import ReactDOM from "react-dom";
import './index.css'; // must match file path and be at the top level
// import App from "./App";
import App from './App.js';
// import reportWebVitals from "./reportWebVitals";
import reportWebVitals from './reportWebVitals.js';
import ReactDOM from "react-dom/client"; // ✅ new API for React 18+

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
