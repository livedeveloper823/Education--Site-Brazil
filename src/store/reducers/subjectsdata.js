import { createSlice } from "@reduxjs/toolkit";
import instance from "../../utils/axios";
import { dispatch } from "../index";

const initialState = {
  subjects: [],
  loading: false,
};

const subjectdata = createSlice({
  name: "subject",
  initialState: initialState,
  reducers: {
    getAllSubjects: (state, action) => {
      state.subjects = action.payload;
    },
    addSubject: (state, action) => {
      state.subjects.push(action.payload);
    },
  },
});

export default subjectdata.reducer;

export function   getSubjects() {
  return async () => {
    try {
      const response = await instance.get("/subject/all");
      dispatch(subjectdata.actions.getAllSubjects(response.data.data.subjects));
    } catch (error) {
      console.log(error);
    }
  };
}

export function addSubjects(data) {
  return async () => {
    try {
      const response = await instance.post("/subject/add", data);
      dispatch(subjectdata.actions.addSubject(response.data.data.newSubject));
    } catch (error) {
      console.log(error);
    }
  };
}

export function addTopic(id, data) {
  return async () => {
    try {
      const response = await instance.post(`/subject/addtopic/${id}`, data);
      dispatch(subjectdata.actions.getAllSubjects(response.data.data.subjects));
    } catch (error) {
      console.log(error);

    }
  };
}

