import React from "react";

// Components
import Product from "./Product";
import { useProductContext } from "../contexts/ProductContext/ProductContext";

const Products = () => {
  const { products } = useProductContext();

  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
