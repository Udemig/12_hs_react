import { combineReducers, configureStore } from "@reduxjs/toolkit";
import notesReducer from "./slices/notesSlice";
import tagsReducer from "./slices/tagsSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// persist ayarlarını yap
const persistConfig = {
  key: "root",
  storage,
};

// reducer'ları birleştir
const rootReducer = combineReducers({
  notes: notesReducer,
  tags: tagsReducer,
});

// reducer'ları persist işleminden geçir
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  // store'daki reducer'ları tanımla
  reducer: persistedReducer,
  // persist işleminden geçirilen reducer'ların serializable olmadığını belirt
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// useSelector kullanrıken store'un tipini belirtmek için
export type RootState = ReturnType<typeof store.getState>;

// useDispatch kullanırken dispatch'in tipini belirtmek için
export type AppDispatch = typeof store.dispatch;

// persist store'u export et
export const persistor = persistStore(store);

// store'u export et
export default store;
