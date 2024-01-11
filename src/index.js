import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./Store";
import { Provider } from "react-redux";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//LB Slick

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
