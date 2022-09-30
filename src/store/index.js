import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    post: postsReducer,
    user: userReducer,
  },
});
