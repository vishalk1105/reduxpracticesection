import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: false };
const uiSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    onShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});
export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
