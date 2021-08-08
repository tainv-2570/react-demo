import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { ProductProvider } from "./contexts/productContext";
import Products from "./pages/products";
ReactDOM.render(
  <ProductProvider>
    <Products />
  </ProductProvider>,
  document.getElementById("root")
);
