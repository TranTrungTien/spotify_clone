import { createSlice } from "@reduxjs/toolkit";
const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: [],
  reducers: {
    saveSearchResult: (state, action) => {
      let newState = [];
      for (let key in action.payload) {
        if (!action.payload[key].items.length) continue;
        else {
          newState.push({
            id: key === "shows" ? "podcasts" : key,
            category:
              key === "shows"
                ? "Podcasts"
                : key.charAt(0).toUpperCase() + key.slice(1),
            list: [...action.payload[key].items],
          });
        }
      }
      return [...newState];
    },
  },
});

export const { saveSearchResult } = searchResultSlice.actions;
export default searchResultSlice.reducer;
