import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import user from "../../api/user";

export const fetchCurrentUser = createAsyncThunk(
  "get/currentUser",
  async () => {
    const currentUser = await user.GetCurrentUserProfile();
    return currentUser.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    profile: null,
  },
  extraReducers: {
    [fetchCurrentUser.pending]: (state) => {
      state.loading = true;
    },
    [fetchCurrentUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },
    [fetchCurrentUser.pending]: (state, action) => {
      state.error = action.error;
    },
  },
});

export default userSlice.reducer;
