import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../constants";

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const { id } = action.payload;
      const existingPost = state.products.find((post) => post.id === id);
      if (existingPost) {
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }

      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_PRODUCT_FROM_CART:
      const identity = action.payload;

      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === identity) {
            if (item.quantity === 1) {
              return state.products.filter((item) => item.id !== identity);
            }
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};
