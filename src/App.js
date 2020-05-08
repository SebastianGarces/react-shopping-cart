import React from "react";
import { Route } from "react-router-dom";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Navigation />

      {/* Routes */}
      <Route exact path="/">
        <Products />
      </Route>

      <Route path="/cart">
        <ShoppingCart />
      </Route>
    </div>
  );
}

export default App;
