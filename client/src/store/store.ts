import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { emailSlice } from "./emailSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    email: emailSlice.reducer,
  },
  middleware: [thunk],
});
