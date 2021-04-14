import { cartReducer } from "./reducers/cartReducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  cartReducer,
});

export const store = createStore(rootReducer);
