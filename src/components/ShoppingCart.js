import React from "react";

// Components
import Item from "./ShoppingCartItem";
import { useProductContext } from "../contexts/ProductContext/ProductContext";

const ShoppingCart = () => {
  const { cart } = useProductContext();

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="shopping-cart">
      {cart.map((item) => (
        <Item key={item.id} {...item} />
      ))}

      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
