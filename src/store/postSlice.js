import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    loading: true,
    articles: {
      items: [],
    },
  },
  reducers: {},
});

export default postSlice.reducer;

export const {} = postSlice.actions;
