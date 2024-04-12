import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "../../store/index";
import { addStudentAnswer } from "../../store/reducers/questiondata";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

const Question = (props) => {
  const [answerData, setAnswerData] = useState({
    answer: [],
  });
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const quesDate = props.date.split("T")[0];
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudentAnswer(answerData, props.id));
  };

  const handleCheck = (e) => {
    const value = e.target.value;
    const answerList = answerData.answer;
    const index = answerList.indexOf(value);
    if (index === -1) {
      answerList.push(value);
      setAnswerData({ answer: answerList });
    } else {
      answerList.splice(index, 1);
      setAnswerData({ answer: answerList });
    }
  };

  const handleChange = (e) => {
    const answerArray = [e.target.value];
    setAnswerData({ answer: answerArray });
  };

  return (
    <div className="mx-3">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="w-full flex items-center justify-between gap-10 bg-hoverColor text-white my-3 md:px-10 px-4 md:py-4 py-2 md:rounded-xl rounded-lg md:text-lg text-sm"
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
        <div className="w-full gap-2 items-center">
          {/* <div className="md:w-[15%] w-20 truncate">{props.topic}</div> */}
          {/* <div className="w-[45%] truncate">{props.question}</div> */}
          <div
            className="md:w-full truncate"
            dangerouslySetInnerHTML={{ __html: props.question }}
          />
          {props.type === "multiple" ? (
            <div className="flex flex-col w-30">
              {props.list.map((item, index) => (
                <label className="text-lg">
                  <input
                    type="checkbox"
                    value={item}
                    onClick={handleCheck}
                    disabled={props.answer === null ? false : true}
                  />
                  {item}
                </label>
              ))}
            </div>
          ) : (
            <div className="mx-auto w-48 grid grid-cols-2 text-center">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  value="YES"
                  className="cursor-pointer"
                  checked={answerData.answer[0] === "YES"}
                  onChange={handleChange}
                  disabled={props.answer === null ? false : true}
                />
                YES
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  value="NO"
                  className="cursor-pointer"
                  checked={answerData.answer[0] === "NO"}
                  onChange={handleChange}
                  disabled={props.answer === null ? false : true}
                />
                NO
              </label>
            </div>
          )}
        </div>
        <br />
        <hr />
        <br />
        <form onSubmit={handleSubmit}>
          {props.answer === null ? (
            <div>
              <div className="md:none flex gap-2 items-end md:text-lg text-sm">
                <button
                  type="submit"
                  className="bg-basicColor hover:bg-hoverColor rounded-md text-white md:px-4 md:py-2 px-2 py-1 border-2 border-green-800"
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 items-center w-full text-center">
              {/* <div>{props.answer.answer}</div> */}
              <div className="flex flex-col">
                {props.answer.answer.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
              <div>{props.answer.answerDate.split("T")[0]}</div>
              <div>
                {props.answer.isCorrect === true ? (
                  <ThumbUpAltIcon className="text-green-800 scale-150" />
                ) : (
                  <ThumbDownOutlinedIcon className="text-green-800" />
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
