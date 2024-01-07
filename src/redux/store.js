import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import authSlice from "./auth/auth-slice";
import teachersSlice from "./teachers/teachers-slice";
import { favoriteReducer } from "./favorites/favorites-slice";

const rootReducer = combineReducers({
  auth: authSlice,
  teachers: teachersSlice,
  favorites: favoriteReducer,
});

const persistConfig = {
  key: "auth",
  storage,
  blacklist: ["teachers"],
  whitelist: ["favorites"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
