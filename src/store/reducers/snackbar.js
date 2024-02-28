import { createSlice } from "@reduxjs/toolkit";



// ==============================|| SLICE - SNACKBAR ||============================== //

const snackbar = createSlice({
    name:"select",
    initialState: {
      value:'student'
    },
    reducers:{
      admin: (state) => {
        state.value = "admin"
      },
      student: (state) => {
        state.value = "student"
      }
    }

});

export default snackbar.reducer;

export const {student, admin} = snackbar.actions;
