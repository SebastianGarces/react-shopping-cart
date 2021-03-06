import React from "react";
import { NavLink } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext/ProductContext";

const Navigation = () => {
  const { cart } = useProductContext();

  return (
    <div className="navigation">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart <span>{cart.length}</span>
      </NavLink>
    </div>
  );
};

export default Navigation;
