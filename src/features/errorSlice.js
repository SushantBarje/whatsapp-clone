import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setErrorDetails: (state, action) => {
      state.error = action.payload;
    },
    resetErrorDetails: (state) => {
      state.error = null;
    },
  },
});

export const { setErrorDetails, resetErrorDetails } = errorSlice.actions;

export const getErrorDetails = (state) => state.error.error;

export default errorSlice.reducer;
