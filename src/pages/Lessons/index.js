import React from "react";
import Courses from "../../components/Student/lessons";
import CourseData from "../../data/Student/CourseData";

const Lessons = () => {
  return (
    <div className="m-20 grid grid-cols-4 gap-10 bg-white p-10 rounded-xl">
      {CourseData.map((item)=>{
        return <Courses title={item.title} summary={item.summary}/>
      })}
    </div>
  );
};

export default Lessons;
