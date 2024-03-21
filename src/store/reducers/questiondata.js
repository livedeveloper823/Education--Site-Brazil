import { createSlice } from "@reduxjs/toolkit";
// import axios from "../../utils/axios";
import instance from "../../utils/axios";
import { dispatch } from "../index";

const initialState = {
  questions: [],
  loading: false,
};

const questiondata = createSlice({
  name: "question",
  initialState: initialState,
  reducers: {
    getAllQuestions: (state, action) => {
      state.questions = action.payload;
    },
    addQuestion: (state, action) => {
      state.questions.unshift(action.payload);
    },
    // deleteQustion:(state, action) =>{
    //   state.questions.pop(action.payload);
    // },
    // getStudentQuery: (state, action) => {
    //   state.questions = action.payload;
    // },
  },
});

export default questiondata.reducer;

// export const { getAllQuestions } = questiondata.actions;

export function getQuestions() {
  return async () => {
    try {
      const response = await instance.get("/qa/allquesans");
      dispatch(
        questiondata.actions.getAllQuestions(response.data.data.questions)
      );
    } catch (error) {
      console.log(error);
    }
  };
}

export function addQuestions(data) {
  return async () => {
    try {
      const response = await instance.post("/qa/addques", data);
      dispatch(
        questiondata.actions.addQuestion(response.data.data.newQuestion)
      );
    } catch (err) {
      const error = err.response;
      console.log(error);
    }
  };
}

export function deleteQuestions(id) {
  return async () => {
    try {
      const response = await instance.delete(`/qa/deleteques/${id}`);
      dispatch(
        questiondata.actions.getAllQuestions(response.data.data.questions)
      );
    } catch (error) {
      console.log(error);
    }
  };
}

export function getStudentQuery() {
  return async () => {
    try {
      const response = await instance.get("/qa/stuques");
      dispatch(
        questiondata.actions.getAllQuestions(response.data.data.stuQuestion)
      );
    } catch (error) {
      console.log(error);
    }
  };
}
export function addStudentAnswer(data, id) {
  return async () => {
    try {
      const response = await instance.post(`/qa/addans/${id}`, data);
    } catch (error) {
      console.log(error);
    }
  };
}

export function trueAnswer(quesId, ansId) {
  return async () => {
    try {
      const response = await instance.post(`/qa/trueans/${quesId}/${ansId}`);
    } catch (error) {
      console.log(error);
    }
  };
}
