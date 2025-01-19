import { configureStore } from "@reduxjs/toolkit";
import classicReducer from "./slices/classicSlice";
import updatedReducer from "./slices/updatedSlice";

const store = configureStore({
  reducer: { classicReducer, updatedReducer },
});

export default store;
