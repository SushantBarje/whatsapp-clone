import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  leftHeaderPicClick: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,

  reducers: {
    setleftHeaderPicClick: (state, action) => {
      state.leftHeaderPicClick = action.payload.leftHeaderPicClick;
    },
  },
});

export const { setleftHeaderPicClick } = appSlice.actions;

export const selectLeftHeaderPicClick = (state) => state.app.leftHeaderPicClick;

export default appSlice.reducer;
