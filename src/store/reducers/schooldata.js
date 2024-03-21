import { createSlice } from "@reduxjs/toolkit";
import instance from "../../utils/axios";
import { dispatch } from "../index";

const initialState = {
  schools: [],
  loading: false,
};

const schooldata = createSlice({
  name: "schools",
  initialState: initialState,
  reducers: {
    getAllSchools: (state, action) => {
      state.schools = action.payload;
    },
    addSchool: (state, action) => {
      state.schools.push(action.payload);
    },
  },
});

export default schooldata.reducer;

export function getSchools() {
  return async () => {
    try {
      const response = await instance.get("/school/all");
      dispatch(schooldata.actions.getAllSchools(response.data.data.schools));
    } catch (error) {
      console.log(error);
    }
  };
}

export function addNewSchool(data) {
  return async () => {
    try {
      const response = await instance.post("/school/add", data);
      dispatch(schooldata.actions.addSchool(response.data.data.newSchool));
    } catch (error) {
      console.log(error);
    }
  };
}
