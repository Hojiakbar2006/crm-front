import { configureStore } from "@reduxjs/toolkit";
import expandReducer from "./feature/slice/expandSlice";

export const store = configureStore({
  reducer: {
    expand: expandReducer,
  },
});
