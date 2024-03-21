import { createSlice } from "@reduxjs/toolkit";
import instance from "../../utils/axios";
import { dispatch } from "../index";

const initialState = {
  users: [],
  admin: [],
  isLogin: false,
};

const userdata = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    getAdminData: (state, action) => {
      state.admin = action.payload;
      state.isLogin = true;
    },
    getUserData :(state, action) =>{
      state.users = action.payload;
      state.isLogin = true;
    }
  },
});

export default userdata.reducer;

export const getAdminData = () => {
  return async () => {
    try {
      const response = await instance.get("/user/admin");
      dispatch(userdata.actions.getAdminData(response.data.data.admin));
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeAdminData = (data) => {
  return async () => {
    try {
      const response = await instance.put("/user/updateadmin", data);
      dispatch(userdata.actions.getAdminData(response.data.data.admin));
    } catch (error) {
      console.log(error);
    }
  };
};


export const getUserData = () => {
  return async () => {
    try {
      const response = await instance.get("/user/me");
      dispatch(userdata.actions.getUserData(response.data.data.user));
    } catch (error) {
      console.log(error);
    }
  };
};