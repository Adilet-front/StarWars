import { configureStore } from "@reduxjs/toolkit";
import getpeopleReducers from "./features/getPeopleSlice";
import paginationReducer from './features/helperQSlice'

export const store = configureStore({
  reducer: {
    getPeople: getpeopleReducers,
    pagination: paginationReducer
  },
});
