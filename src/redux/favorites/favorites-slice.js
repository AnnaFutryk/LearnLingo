import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      const updatedFavorites = state.favorites.filter(
        (item) => item.avatar_url !== action.payload.avatar_url
      );
      state.favorites = updatedFavorites;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const favoriteReducer = favoritesSlice.reducer;
