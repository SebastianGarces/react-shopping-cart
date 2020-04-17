import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import "./sass/index.scss";
import App from "./App";
import { ProductProvider } from "./contexts/ProductContext/ProductContext";

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <ProductProvider>
    <Router>
      <AppWithRouter />
    </Router>
  </ProductProvider>,
  document.getElementById("root")
);
