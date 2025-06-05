import { configureStore } from "@reduxjs/toolkit";
import getpeopleReducers from "./features/getPeopleSlice";
export const store = configureStore({
  reducer: {
    getPeople: getpeopleReducers,
  },
});
