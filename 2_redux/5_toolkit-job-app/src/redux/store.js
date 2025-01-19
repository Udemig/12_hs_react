import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/jobSlice";

const store = configureStore({ reducer: { jobReducer } });

export default store;
