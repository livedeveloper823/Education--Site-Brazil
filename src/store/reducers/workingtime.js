// import { createSlice } from "@reduxjs/toolkit";
// import { number } from "react-admin";

// const initialState = {
//   isLogin: false,
//   startTime: Date,
//   exitTime: Date,
//   workTime: number,
// };

// const userWorkingTime = createSlice({
//   name: "Working Time",
//   initialState: initialState,
//   reducers: {
//     getStartDate: (state, action) => {
//       state.admin = action.payload;
//       state.isLogin = true;
//       state.startTime = new Date();
//     },
//     getEndDate: (state, action) => {
//       state.users = action.payload;
//       state.exitTime = new Date();
//       state.workTime = state.exitTime - state.startTime;
//       state.isLogin = false;
//     },
//   },
// });

// export default userWorkingTime.reducer;