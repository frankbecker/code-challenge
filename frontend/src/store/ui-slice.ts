import { createSlice } from "@reduxjs/toolkit";

type uiState = {
  notifications: {};
};
const initialState: uiState = { notifications: {} };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    showNotificaion(state, action) {
      state.notifications = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice;
