import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languageSlice";
import translateReducer from "./slices/translateSlice";

export default configureStore({
  reducer: {
    language: languageReducer,
    translate: translateReducer,
  },
});
