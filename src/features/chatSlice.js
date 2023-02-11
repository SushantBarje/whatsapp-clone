import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomId: null,
};

export const chatSlice = createSlice({
  name: "app",
  initialState,

  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = chatSlice.actions;

export const selectRoomId = (state) => state.chat.roomId;

export default chatSlice.reducer;
