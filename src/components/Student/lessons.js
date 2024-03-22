import React from "react";
import CourseImg from '../../assets/logo.png'

const Courses = (props) => {
  return (
    <div className="bg-white text-center border-2 rounded-lg cursor-pointer p-3 hover:scale-105 border-gray-300 hover:border-hoverColor">
      <div><img src={CourseImg} alt=""/></div>
      <div className="text-3xl">{props.title}</div>
      <div className="text-xl">{props.summary}</div>
    </div>
  );
};

export default Courses;
