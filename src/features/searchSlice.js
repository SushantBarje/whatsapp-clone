import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,

  reducers: {
    onSearchTextUp: (state, action) => {
      state.searchText = action.payload.searchText;
    },
    onSearchTextDown: (state) => {
      state.searchText = null;
    },
  },
});

export const { onSearchTextUp, onSearchTextDown } = searchSlice.actions;

export const selectsearchText = (state) => state.search.searchText;

export default searchSlice.reducer;
