import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "../features/chatSlice";
import userReducer from "../features/userSlice";
import searchReducer from "../features/searchSlice";
import errorReducer from "../features/errorSlice";
import appReducer from "../features/appSlice";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    user: userReducer,
    search: searchReducer,
    error: errorReducer,
    app: appReducer,
  },
});
