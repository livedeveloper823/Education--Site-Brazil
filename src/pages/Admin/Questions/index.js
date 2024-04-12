import React, { useEffect, useState } from "react";
import { MenuItem, Modal, Select } from "@mui/material";
import TextEditor from "../../../components/Texteditor";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FormControl from "@mui/material/FormControl";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import QuestionCard from "../../../components/Questions";
import { useDispatch, useSelector } from "../../../store/index";
import { getSubjects } from "../../../store/reducers/subjectsdata";
import {
  getQuestions,
  addQuestions,
} from "../../../store/reducers/questiondata";

const AdminQuestions = () => {
  // import query form database
  const quesdata = useSelector((state) => state.questiondata);
  const QueryData = quesdata.questions;
  console.log(QueryData);
  // Question schema
  const [questionData, setQuestionData] = useState({
    subject: "",
    topic: "",
    level: "",
    question: "",
    list: [],
    type: "multiple",
  });
  const [listItem, setListItem] = useState("");
  // Declare the state variables
  const subjectsData = useSelector((state) => state.subjectsdata);
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);
  // const [isSelected, setIsSelceted] = useState("multiple");
  // Import subjects from databzse
  const allSubjects = subjectsData.subjects;
  // Use Dispatch
  const dispatch = useDispatch();
  // Declare and definition of function
  const handleChage = (e) => {
    // setIsSelceted(e.target.value);
    setQuestionData({ ...questionData, type: e.target.value });
  };
  const handleSave = (e) => {
    e.preventDefault();
    dispatch(addQuestions(questionData));
    setQuestionData({
      type: "multiple",
      subject: "",
      level: "",
      question: "",
      answer: "",
      list: [],
    });
    handleClose();
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getQuestions());
    dispatch(getSubjects());
  }, []);
  const Add = () => {
    const list = questionData.list;
    list.push(listItem);
    setQuestionData({ ...questionData, list: list });
    setListItem("");
  };
  const Delete = (index) => {
    const list = questionData.list;
    list.splice(index, 1);
    setQuestionData({ ...questionData, list: list });
  };
  const Checkbox = () => {
    return questionData.list.map((item, index) => {
      return (
        <div key={index} className="flex justify-between">
          <label className="text-lg">
            <input type="checkbox" />
            {item}
          </label>
          <button onClick={Delete}>
            <DeleteForeverOutlinedIcon />
          </button>
        </div>
      );
    });
  };
  const [subjectKey, setSubjectKey] = useState("");
  const [levelKey, setLevelKey] = useState("");
  return (
    <div>
      <div className="md:my-10 md:mx-20 mx-10 my-5 md:text-3xl font-bold">
        Adicionar/editar Questões
      </div>
      <div className="md:flex justify-between items-center md:mx-20 mx-3 bg-gray-200 md:px-10 px-3 py-6 rounded-xl">
        <div className="md:flex gap-10">
          <FormControl className="w-full md:w-36" color="success">
            <Select
              className="bg-basicColor hover:bg-hoverColor text-center mb-2 md:m-0 outline-none"
              value={subjectKey}
              onChange={(e) => setSubjectKey(e.target.value)}
              sx={{
                color: "white",
                borderRadius: "8px",
              }}
              displayEmpty
              IconComponent={() => (
                <KeyboardArrowDownIcon className="absolute right-2 cursor-pointer" />
              )}
            >
              <MenuItem value="">Assunto</MenuItem>
              {allSubjects.map((item) => (
                <MenuItem value={item.subjectName}>{item.subjectName}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl color="success" className="w-full md:w-36">
            <Select
              className="bg-basicColor hover:bg-hoverColor text-center"
              value={levelKey}
              onChange={(e) => setLevelKey(e.target.value)}
              sx={{
                color: "white",
                borderRadius: "8px",
              }}
              displayEmpty
              IconComponent={() => (
                <KeyboardArrowDownIcon className="absolute right-2 cursor-pointer" />
              )}
            >
              <MenuItem value="">Nível</MenuItem>
              <MenuItem value="Iniciante">Iniciante</MenuItem>
              <MenuItem value="Intermediário">Intermediário</MenuItem>
              <MenuItem value="Avançado">Avançado</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div
          className="md:w-48 bg-basicColor hover:bg-hoverColor text-white text-center rounded-lg md:py-3 py-4 md:m-0 mt-2 cursor-pointer md:text-[20px]"
          onClick={handleOpen}
        >
          Adicionar
        </div>
      </div>
      <div className="mx-10 h-[600px] overflow-y-scroll scrollbar-hide">
        {QueryData.filter((item) =>
          item.subject.subjectName
            .toLowerCase()
            .includes(subjectKey.toLowerCase())
        )
          .filter((item) =>
            item.level.toLowerCase().includes(levelKey.toLowerCase())
          )
          .map((item, index) => (
            <QuestionCard
              id={item._id}
              No={index + 1}
              date={item.questionDate}
              subject={item.subject.subjectName}
              topic={item.topic}
              level={item.level}
              question={item.question}
              answer={item.answers}
              list={item.list}
              subjectNames = {allSubjects.map((item)=>item.subjectName)}
              topics = {allSubjects.map((item)=> item.topic)}
            />
          ))}
      </div>
      {/* </div> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className="absolute md:w-[35%] w-80 bg-white top-[50%] left-[50%] flex flex-col justify-center md:py-10 py-3 md:px-10 outline-none px-5 md:text-md text-xs"
          style={{
            transform: "translate(-50%, -50%)",
            // borderRadius: "20px",
          }}
        >
          <div className="flex justify-between md:my-5">
            <div className="md:text-xl font-bold">Adicionar questão</div>
            <div onClick={handleClose}>
              <HighlightOffIcon className="cursor-pointer" />
            </div>
          </div>
          <hr />
          <div className="md:py-2 py-1 text-lg">Questão</div>
          <div
            className="h-auto text-center"
            onMouseOut={() =>
              setQuestionData({ ...questionData, question: content })
            }
          >
            <TextEditor setContent={setContent} />
          </div>
          {questionData.list.length ? (
            <div>
              <Checkbox />
            </div>
          ) : (
            <div></div>
          )}
          <div className="grid grid-cols-2 md:my-5 my-2">
            <label>
              <input
                type="radio"
                value="multiple"
                checked={questionData.type === "multiple"}
                onChange={handleChage}
              />
              Múltiplas Escola
            </label>
            <label>
              <input
                type="radio"
                value="correct"
                checked={questionData.type === "correct"}
                onChange={handleChage}
              />
              Certo ~ errado
            </label>
          </div>
          <div>
            <div>Alternativas</div>
            <div className="flex justify-between my-1">
              <div className="w-full mr-3">
                <input
                  disabled={questionData.type === "correct" ? true : false}
                  placeholder="Alternativas"
                  type="text"
                  className="w-full border-2 border-gray-300 rounded-lg outline-none md:p-2 p-1"
                  value={listItem}
                  onChange={(e) => setListItem(e.target.value)}
                ></input>
              </div>
              <button
                onClick={Add}
                disabled={questionData.type === "correct" ? true : false}
                className="md:px-5 md:py-3 px-2 bg-basicColor hover:bg-hoverColor text-white font-bold rounded-md cursor-pointer disabled:bg-gray-400"
              >
                Adicionar
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-3 md:mb-3 mb-1">
            <div>
              <label>
                Diciplina
                <select
                  className="w-full outline-none border-gray-300 border-2 md:py-2 rounded"
                  // onChange={selectSubject}
                  onChange={(e) =>
                    setQuestionData({
                      ...questionData,
                      subject: e.target.value,
                    })
                  }
                  // onChange={(e) => setSelectSubject(e.target.value)}
                  defaultValue="Selecione"
                >
                  <option disabled value="Selecione">
                    Selecione
                  </option>
                  {allSubjects.map((item) => (
                    <option key={item._id} value={item.subjectName}>
                      {item.subjectName}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label>
                Assunto
                <select
                  className="w-full outline-none border-2 border-gray-300 md:py-2 rounded"
                  defaultValue="Selecione"
                  key="subject"
                  onChange={(e) =>
                    setQuestionData({ ...questionData, topic: e.target.value })
                  }
                >
                  <option disabled value="Selecione">
                    Selecione
                  </option>
                  {allSubjects
                    .filter((item) => item.subjectName === questionData.subject)
                    .map((item) =>
                      item.topic.map((topic) => (
                        <option value={topic}>{topic}</option>
                      ))
                    )}
                </select>
              </label>
            </div>
            <div>
              <label>
                Nível
                <select
                  className="w-full outline-none border-2 border-gray-300 md:py-2 rounded"
                  onChange={(e) =>
                    setQuestionData({ ...questionData, level: e.target.value })
                  }
                >
                  <option disabled selected>
                    Selecione
                  </option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
              </label>
            </div>
          </div>
          <hr />
          <div className="flex justify-end text-center gap-3 md:mt-5 mt-2 mx-10">
            <div
              className="bg-gray-300 md:w-[25%] md:p-2 p-1 text-gray-700 font-bold rounded cursor-pointer hover:bg-hoverColor hover:text-white"
              onClick={handleClose}
            >
              Fechar
            </div>
            <div
              className="bg-basicColor md:w-[25%] md:p-2 p-1 text-white font-bold rounded cursor-pointer hover:bg-hoverColor"
              onClick={handleSave}
            >
              Salvar
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AdminQuestions;
