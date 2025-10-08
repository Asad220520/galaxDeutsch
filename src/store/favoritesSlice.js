import { createSlice } from "@reduxjs/toolkit";

// Загрузка из localStorage
const initialState = {
  items: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.items.some((item) => item.german === action.payload.german)) {
        state.items.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.items));
      }
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter(
        (item) => item.german !== action.payload.german
      );
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
    toggleFavorite: (state, action) => {
      const exists = state.items.find(
        (item) => item.german === action.payload.german
      );
      if (exists) {
        state.items = state.items.filter(
          (item) => item.german !== action.payload.german
        );
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
    clearFavorites: (state) => {
      state.items = [];
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite, clearFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
