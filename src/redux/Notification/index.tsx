import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NotificationType = "success" | "error" | "warning" | "info";
export interface notificationState {
  open: boolean;
  title: string;
  description: string;
  type: NotificationType;
  accountNotificationShown: boolean;
}

export const initialState: notificationState = {
  open: false,
  title: "",
  description: "",
  type: "info",
  accountNotificationShown: false,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    openNotificationWithMessage: (
      state,
      action: PayloadAction<{
        title: string;
        description: string;
        type?: NotificationType;
      }>
    ) => {
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.type = action.payload.type || "info";
      state.open = true;
    },
    closeNotificationWithMessage: (state) => {
      state.open = false;
      state.description = "";
      state.title = "";
    },
    showAccountNotification: (
      state,
      action: PayloadAction<{ shown: boolean }>
    ) => {
      state.accountNotificationShown = action.payload.shown;
    },
  },
});

export const {
  openNotificationWithMessage,
  closeNotificationWithMessage,
  showAccountNotification,
} = notificationSlice.actions;

export default notificationSlice.reducer;
