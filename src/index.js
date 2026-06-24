import React from "react";
import ReactDOM from "react-dom/client"; 
import "./index.css"; 

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Create the core application mounting node for the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance tracking initialization loop
reportWebVitals();