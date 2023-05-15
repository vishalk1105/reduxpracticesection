import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice1";
import cartReducer from "./cartSlice";

const store = configureStore({ reducer: { ui: uiReducer, cart: cartReducer } });

export default store;
