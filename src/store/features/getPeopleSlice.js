import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_PEOPLE } from "../../constants/api";

export const fetchGetPeople = createAsyncThunk("people/fetch-all", async () => {
  const res = await axios.get(API_PEOPLE);
  return res.data;
});

export const searchPeopleByName = createAsyncThunk(
  "people/search-by-name",
  async (query) => {
    const normalized = query.trim().toLowerCase();
    const res = await axios.get(API_PEOPLE);
    const results = res.data.filter((person) =>
      person.name.toLowerCase().includes(normalized)
    );
    return { query: normalized, results };
  }
);

const initialState = {
  people: [],
  loading: false,
  error: null,
  searchResults: [],
  searchLoading: false,
  searchError: null,
  searchCache: {},
};
const getPeopleSlice = createSlice({
  name: "getPeople",
  initialState,
  reducers: {
    clearSearchResults: (state) => {
      state.searchResults = [];
      state.searchLoading = false;
      state.searchError = null;
    },
    setSearchResultsFromCache: (state, action) => {
      state.searchResults = state.searchCache[action.payload] || [];
      state.searchLoading = false;
      state.searchError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetPeople.fulfilled, (state, action) => {
        state.people = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchGetPeople.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGetPeople.rejected, (state) => {
        state.error = "Error get people";
        state.loading = false;
      })
      .addCase(searchPeopleByName.fulfilled, (state, action) => {
        const { query, results } = action.payload;
        state.searchResults = results;
        state.searchLoading = false;
        state.searchError = null;
        state.searchCache[query] = results;
      })
      .addCase(searchPeopleByName.pending, (state) => {
        state.searchLoading = true;
        state.searchError = null;
      })
      .addCase(searchPeopleByName.rejected, (state) => {
        state.searchLoading = false;
        state.searchError = "Не удалось выполнить поиск";
      });
  },
});

export const { clearSearchResults, setSearchResultsFromCache } =
  getPeopleSlice.actions;
export default getPeopleSlice.reducer;
