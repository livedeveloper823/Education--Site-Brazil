import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "../../store/index";
import { addStudentAnswer } from "../../store/reducers/questiondata";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const Question = (props) => {
  const [answerData, setAnswerData] = useState({
    answer: "",
  });
  console.log(props.answer);
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const quesDate = props.date.split("T")[0];
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudentAnswer(answerData, props.id));
  };
  return (
    <div className="mx-3">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="w-full flex items-center justify-between gap-10 bg-green-400 my-3 md:px-10 px-4 md:py-4 py-2 md:rounded-xl rounded-lg md:text-lg text-sm"
        type="button"
        onClick={() => setState(!state)}
      >
        <div className="flex md:gap-10 gap-3">
          <div className="text-center">{props.No}</div>
          <div className="md:w-24 font-bold">{props.topic}</div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="text-gray-500">{quesDate}</div>
          <div className="text-white">
            {state ? <RemoveIcon /> : <AddIcon />}
          </div>
        </div>
      </button>
      <div
        id="dropdown"
        className="text-black mx-5 justify-between items-center"
        style={{ display: `${state ? "block" : "none"}` }}
        aria-labelledby="dropdownDefaultButton"
      >
        <div className="w-full gap-2 flex items-center">
          {/* <div className="md:w-[15%] w-20 truncate">{props.topic}</div> */}
          {/* <div className="w-[45%] truncate">{props.question}</div> */}
          <div
            className="md:w-[45%] truncate"
            dangerouslySetInnerHTML={{ __html: props.question }}
          />
        </div>
        <form onSubmit={handleSubmit}>
          {props.answer === null ? (
            <div>
              <div className="md:none flex gap-2 items-end md:text-lg text-sm">
                <label htmlFor="answer">
                  Por favor, responda:
                  <input
                    name="answer"
                    type="text"
                    className="border-2 outline-none md:p-2 p-1 md:mx-2 rounded-md"
                    onChange={(e) => {
                      setAnswerData({ answer: e.target.value });
                    }}
                  ></input>
                </label>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-500 rounded-md text-white md:px-4 md:py-2 px-2 py-1 border-2 border-green-600"
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 items-center w-full">
              <div>{props.answer.answer}</div>
              <div>{props.answer.answerDate.split("T")[0]}</div>
              <div>
                {props.answer.isCorrect === true ? (
                  <ThumbUpAltIcon className="text-green-800 scale-150" />
                ) : (
                  ""
                )}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
export default Question;
