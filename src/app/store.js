import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "../features/chatSlice";
import userReducer from "../features/userSlice";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    user: userReducer,
    search: searchReducer,
  },
});
