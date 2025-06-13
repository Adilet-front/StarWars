import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_PEOPLE } from "../../constants/api";

export const fetchGetPeople = createAsyncThunk(
  "fetch-get-people",
  async ({ page, limit }) => {
    const res = await axios.get(API_PEOPLE);
    const data = await res.data.splice(page, limit);
    return data;
  }
);

const initialState = {
  people: [],
  loading: false,
  error: null,
};
const getPeopleSlice = createSlice({
  name: "getPeople",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetPeople.fulfilled, (state, action) => {
      state.people = action.payload;

      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchGetPeople.rejected, (state) => {
      state.error = "Error get people";
      state.loading = false;
    });
    builder.addCase(fetchGetPeople.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
  },
});

export default getPeopleSlice.reducer;
