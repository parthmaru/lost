import { cartReducer } from "./reducers/cartReducer";
import { createStore, combineReducers } from "redux";

function saveToLocalStorage(state) {
  try {
    const productState = JSON.stringify(state);
    localStorage.setItem("products", productState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const productState = localStorage.getItem("products");
    if (productState === null) return undefined;
    return JSON.parse(productState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const rootReducer = combineReducers({
  cartReducer,
});

const store = createStore(rootReducer, loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));

export { store };
