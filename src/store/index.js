import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import repeatReducer from "./repeatSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    repeat: repeatReducer,
  },
});
