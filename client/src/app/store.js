import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Auth/userSlice";
import playerReducer from "../features/Player/playerSlice";
import searchResultReducer from "../features/SearchForm/searchResultSlice";

const root = {
  user: userReducer,
  playlist: playerReducer,
  searchResult: searchResultReducer,
};

const store = configureStore({
  reducer: root,
});

export default store;
