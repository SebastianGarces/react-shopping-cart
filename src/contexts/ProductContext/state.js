import data from "../../data";

export const types = {
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
};

export const initialState = {
  products: data,
  cart: [],
};

export const productReducer = (state, action) => {
  return action.type === types.ADD_PRODUCT
    ? {
        ...state,
        cart: state.cart.includes(action.payload)
          ? [...state.cart]
          : [...state.cart, action.payload],
      }
    : action.type === types.REMOVE_PRODUCT
    ? {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      }
    : state;
};
