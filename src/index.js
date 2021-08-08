import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Products from "./pages/products";
ReactDOM.render(
  <Provider store={store}>
    <Products />
  </Provider>,
  document.getElementById("root")
);
