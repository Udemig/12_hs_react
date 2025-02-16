import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, { payload }) => {},

    deleteFromCart: (state, { payload }) => {},

    creteOrder: (state, { payload }) => {},
  },
});

export const { addToCart, deleteFromCart, createOrder } = cartSlice.actions;

export default cartSlice.reducer;
