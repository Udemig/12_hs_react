import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./slices/flightSlice";
import detailReducer from "./slices/detailSlice";

export default configureStore({
  reducer: {
    flight: flightReducer,
    detail: detailReducer,
  },
});
