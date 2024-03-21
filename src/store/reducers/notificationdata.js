import { createSlice } from "@reduxjs/toolkit";
import instance from "../../utils/axios";
import { dispatch } from "../index";

const initialState = {
  notifications: [],
  loading: false,
};

const notificationdata = createSlice({
  name: "notifications",
  initialState: initialState,
  reducers: {
    getAllNotifications: (state, action) => {
      state.notifications = action.payload;
    },
    addNotification: (state, action) => {
      state.notifications.push(action.payload);
    },
    deleteNotificaion: (state, action) => {
      state.notifications.pop(action.payload);
    },
  },
});

export default notificationdata.reducer;

export function getNotifications() {
  return async () => {
    try {
      const response = await instance.get("/notify/allnotifys");
      dispatch(
        notificationdata.actions.getAllNotifications(
          response.data.data.allNotifys
        )
      );
    } catch (error) {
      console.log(error);
    }
  };
}
export function addNotifications(data) {
  return async () => {
    try {
      const response = await instance.post("/notify/addnotify", data);
      dispatch(
        notificationdata.actions.addNotification(response.data.data.newNotify)
      );
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteNotificaions(id) {
  return async () => {
    try {
      const response = await instance.delete(`/notify/admindeletenotify/${id}`);
      dispatch(
        notificationdata.actions.deleteNotificaion(
          response.data.data.deletedNotify
        )
      );
    } catch (error) {
      console.log(error);
    }
  };
}
