import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pagination: {
    page: +localStorage.getItem("page") || 0,
    limit: 10,
  },
  count: +localStorage.getItem("count") || 1,
};
const helperQSlice = createSlice({
  name: "helperQSlice",
  initialState,
  reducers: {
    nextPagination: (state, action) => {
      state.pagination.page = action.payload + 10;
      localStorage.setItem("page", action.payload + 10);
      const str = String(action.payload + 10)
        .split("")
        .shift();
      state.count = +str + 1;
      localStorage.setItem("count", +str + 1);
    },
    prevPagination: (state, action) => {
      state.pagination.page = action.payload - 10;
      localStorage.setItem("page", action.payload - 10);
      const str = String(action.payload - 10)
        .split("")
        .shift();
      state.count = +str + 1;
      localStorage.setItem("count", +str + 1);
    },
  },
});

export default helperQSlice.reducer;
export const { nextPagination, prevPagination } = helperQSlice.actions;
