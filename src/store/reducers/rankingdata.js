import { createSlice } from "@reduxjs/toolkit";
import instance from "../../utils/axios";
import { dispatch } from "../index";

const initialState = {
  schoolRankings: [],
  studentRankings: [],
  loading: false,
};

const rankingdata = createSlice({
  name: "rankings",
  initialState: initialState,
  reducers: {
    getSchoolRankings: (state, action) => {
      state.schoolRankings = action.payload;
    },
    getStudentRankings: (state, action) => {
      state.studentRankings = action.payload;
    },
  },
});

export default rankingdata.reducer;

export function getSchoolRank() {
  return async () => {
    try {
      const response = await instance.get("/rank/schoolrank");
      dispatch(rankingdata.actions.getSchoolRankings(response.data.data));
    } catch (error) {
      console.error(error);
    }
  };
}

export function getStudentRank() {
  return async () => {
    try {
      const response = await instance.get("/rank/studentrank");
      dispatch(rankingdata.actions.getStudentRankings(response.data.data));
    } catch (error) {
      console.error(error);
    }
  };
}
