import React, { createContext, useContext, useReducer } from "react";
import { productReducer, types, initialState } from "./state";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const value = useProductProvider();
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

const useProductProvider = () => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: types.ADD_PRODUCT, payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: types.REMOVE_PRODUCT, payload: id });
  };

  return { ...state, addItem, removeItem };
};
