import { createSlice } from "@reduxjs/toolkit";
import instance from "../../utils/axios";
import { dispatch } from "..";

const initialState = {
  user: [],
  isLogin: false,
};

const auth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    userInfo: (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
    },

  },
});

export default auth.reducer;

export function getUserInfo(data) {
  return async () => {
    try {
      const response = await instance.post("/auth/login", data);
      dispatch(auth.actions.userInfo(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
}
