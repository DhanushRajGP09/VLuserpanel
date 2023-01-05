import { configureStore } from "@reduxjs/toolkit";
import Courseslice from "./features/Courseslice";

export const store = configureStore({
  reducer: {
    Course: Courseslice,
  },
});
