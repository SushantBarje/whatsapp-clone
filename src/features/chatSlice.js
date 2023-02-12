import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatId: null,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,

  reducers: {
    enterChat: (state, action) => {
      state.chatId = action.payload.chatId;
    },
  },
});

export const { enterChat } = chatSlice.actions;

export const selectChatId = (state) => state.chat.chatId;

export default chatSlice.reducer;
