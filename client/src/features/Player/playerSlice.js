import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "playlist",
  initialState: {
    type: null,
    imageUrl: null,
    currentIndex: 0,
    list: [],
  },
  reducers: {
    savePlaylist: (state, action) => {
      console.log("playload ", action.payload);
      return {
        ...state,
        type: action.payload.type,
        imageUrl: action.payload.imageUrl,
        currentIndex: action.payload.currentIndex,
        list: [...action.payload.list],
      };
    },
  },
});

export const { savePlaylist, saveAlbum } = playerSlice.actions;

export default playerSlice.reducer;
