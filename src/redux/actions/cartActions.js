import { ADD_PRODUCT_TO_CART } from "../constants";
import { REMOVE_PRODUCT_FROM_CART } from "../constants";

export const addToCart = (data) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: data,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: id,
  };
};
