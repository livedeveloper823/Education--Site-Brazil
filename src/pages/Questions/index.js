import React, { useState, useEffect } from "react";
import Question from "../../components/Student/Questions";
import { useDispatch, useSelector } from "../../store/index";
import { getSubjects } from "../../store/reducers/subjectsdata";
import { getStudentQuery } from "../../store/reducers/questiondata";

const Questions = () => {
  const [open, setOpen] = useState(false);
  const [isSubject, setIsSubject] = useState("");
  const handleClick = (e) => {
    setIsSubject(e.target.value);
  };
  const quesData = useSelector((state) => state.questiondata);
  const subjectsData = useSelector((state) => state.subjectsdata);
  const allSubject = subjectsData.subjects;
  const dispatch = useDispatch();

  const QueryData = quesData.questions;
  useEffect(() => {
    dispatch(getStudentQuery());
    dispatch(getSubjects());
  }, []);
  return (
    <>
      <div className="md:mt-20 my-5 md:mx-20 mx-3 md:text-3xl text-xl font-bold">
        Explorar jogos
      </div>
      <div className="h-[70%] md:flex justify-between md:mx-20 md:my-10 ">
        <div className="md:w-[25%] md:h-full h-0 bg-white md:rounded-3xl md:text-2xl md:px-5 overflow-auto scrollbar-hide md:visible invisible">
          <div className="w-full md:mt-8 md:mb-5 my-4 font-bold text-center">
            Matérias
          </div>
          <hr className="md:mb-10" />
          {allSubject.map((item) => (
            <button
              className="flex flex-cols px-4 py-3 text-gray-700 hover:text-[#000000] text-center"
              onClick={handleClick}
              value={item.subjectName}
            >
              {item.subjectName}
            </button>
          ))}
        </div>
        <div className="md:invisible">
          <div className="mx-4 md:m-0 text-center bg-hoverColor p-2 rounded-lg">
            <button
              className="w-full rounded-lg font-bold"
              onClick={() => setOpen(!open)}
            >
              Matérias
            </button>
          </div>
          {open &&
            allSubject.map((item) => (
              <button
                className="flex flex-cols p-2 mx-5 text-basicColor hover:text-gray-700"
                onClick={handleClick}
                value={item.subjectName}
              >
                {item.subjectName}
              </button>
            ))}
        </div>
        <div className="md:w-[80%] overflow-auto scrollbar-hide">
          {QueryData.filter((item) =>
            item.question.subject.subjectName.toLowerCase().includes(isSubject.toLowerCase())
          ).map((item, index) => {
            return (
              <Question
                id={item.question._id}
                No={index + 1}
                date={item.question.questionDate}
                topic={item.question.topic}
                subject={item.question.subject.subjectName}
                question={item.question.question}
                level={item.question.level}
                answer={item.stuAnswer}
                type={item.question.type}
                list={item.question.list}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Questions;
