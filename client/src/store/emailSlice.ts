import { createSlice } from "@reduxjs/toolkit";

export const emailSlice = createSlice({
  name: "email",
  initialState: "",
  reducers: {
    saveEmail: (state, action) => {
      return action.payload;
    },
  },
});

export const { saveEmail } = emailSlice.actions;
