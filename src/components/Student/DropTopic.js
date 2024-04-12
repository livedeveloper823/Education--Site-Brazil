import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "../../store/index";
import { addTopic, getSubjects } from "../../store/reducers/subjectsdata";

const DropTopic = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const [topic, setTopic] = useState({ topic: "" });
  const handleTopic = (e) => {
    e.preventDefault();
    dispatch(addTopic(id, topic));
    setTopic("");
  };
  const item = props.item;
  const no = props.index;
  const id = props.id;
  useEffect(() => {
    dispatch(getSubjects());
  }, []);

  return (
    <div>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="w-full flex items-center justify-between gap-10 bg-hoverColor my-3 md:px-10 px-4 md:py-4 py-2 rounded-xl md:text-lg"
        type="button"
        onClick={() => setState(!state)}
      >
        <div className="flex md:gap-10 gap-3">
          <div>{no + 1}</div>
          <div className="md:w-24 font-bold">{item.subjectName}</div>
        </div>
        <div className="text-white">{state ? <RemoveIcon /> : <AddIcon />}</div>
      </button>

      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdown"
        className="text-black mx-5 justify-between items-center"
        style={{ display: `${state ? "flex" : "none"}` }}
        aria-labelledby="dropdownDefaultButton"
      >
        <div className="w-full">
          <div className="flex justify-end mb-4">
            <input
              type="text"
              className="w-36 outline-none text-center border-2 border-gray-300 px-3 py-1 rounded-l-full"
              onChange={(e) => setTopic({ topic: e.target.value })}
            />
            <button
              className="w-18 bg-basicColor hover:bg-hoverColor text-white px-3 py-1 border-2 border-basicColor rounded-r-full"
              onClick={handleTopic}
            >
              Adicionar
            </button>
          </div>
          <div className="xl:flex grid grid-cols-6 gap-10">
            {item.topic.map((item) => (
              <span>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropTopic;
