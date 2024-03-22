import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Tabs from "./Tabs";
import "./Tab.css";
import School from "../../../components/School";
import { useDispatch, useSelector } from "../../../store/index";

import { getSchools, addNewSchool } from "../../../store/reducers/schooldata";
import { addSubjects, getSubjects } from "../../../store/reducers/subjectsdata";
import DropTopic from "../../../components/Student/DropTopic";
import AdminProfile from "../../../components/AdminProfile";
const Settings = () => {
  //This is part to declare the schools
  const data = useSelector((state) => state.schooldata);
  const [schoolData, setSchoolData] = useState({
    schoolName: "",
    description: "",
  });
  const allSchool = data.schools;
  //Get subjects data in here
  const subjectsData = useSelector((state) => state.subjectsdata);
  const [subjectData, setSubjectData] = useState({
    subjectName: "",
  });
  const allSubject = subjectsData.subjects;

  const dispatch = useDispatch();
  const addSchool = (e) => {
    e.preventDefault();
    dispatch(addNewSchool(schoolData));
    handleClose();
  };
  const addSubject = (e) => {
    e.preventDefault();
    dispatch(addSubjects(subjectData));
    handleClose();
  };
  useEffect(() => {
    dispatch(getSchools());
    dispatch(getSubjects());
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div className="md:my-10 md:mx-20 mx-5 my-3 md:text-3xl font-bold">
        Configurações
      </div>
      <div className="md:mx-20 mx-3 md:p-10 p-4 bg-white rounded-2xl">
        <Tabs>
          <div label="Perfil">
            <div className="flex justify-center m-10">
              {/* <img className="h-48" src={file} alt=""/> */}
              <AdminProfile />
            </div>
          </div>
          <div label="Escolas">
            <div className="flex justify-end md:mt-20 my-2">
              <div
                className="w-full md:w-36 md:mx-20 bg-basicColor px-6 py-3 md:rounded-2xl rounded-lg text-white text-center font-bold cursor-pointer"
                onClick={handleOpen}
              >
                Adicionar
              </div>
            </div>
            <div className="md:px-20 h-96 overflow-y-scroll scrollbar-hide text-white">
              <div className="flex gap-1 md:rounded-2xl rounded-lg bg-basicColor px-5 py-3 my-2 md:text-[22px] text-sm font-bold">
                <div className="md:w-[10%]">No</div>
                <div className="md:w-[30%] w-16 truncate">Nome da escola</div>
                <div className="md:w-[60%] truncate">Descrição</div>
              </div>
              {allSchool.map((item, index) => {
                return (
                  <School
                    no={index + 1}
                    name={item.schoolName}
                    description={item.description}
                  />
                );
              })}
            </div>
          </div>
          <div label="Assuntos">
            <div className="md:text-lg text-sm">
              <div className="md:flex items-center justify-around md:mt-10">
                {/* <label className="md:text-xl md:flex items-center">
                Assuntos:
                  <input
                    type="text"
                    className="w-full outline-none border-2 md:ml-3 md:p-3 p-2 md:rounded-2xl rounded-lg"
                    onChange={(e) =>
                      setSubjectData({
                        ...subjectData,
                        subjectName: e.target.value,
                      })
                    }
                  />
                </label> */}
                {/* <div
                  className="md:mx-20 my-2 bg-green-600 h-auto md:rounded-2xl rounded-lg md:px-10 py-3 items-center text-white text-center font-bold cursor-pointer"
                  onClick={addSubject}
                >
                  Adicionar
                </div> */}
              </div>
              <div className="flex md:gap-10 gap-3 text-white font-bold bg-basicColor md:px-10 px-4 md:py-4 py-3 md:m-5 my-2 md:rounded-xl rounded-lg">
                <div>No</div>
                <div>Assuntos</div>
                <div>Tópicos...</div>
              </div>
              <div className="h-96 overflow-y-scroll scrollbar-hide md:px-5">
                {allSubject.map((item, index) => (
                  <DropTopic id={item._id} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </Tabs>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div
            className="absolute md:w-[40%] w-64 md:py-10 py-5 md:mx-10 mx-0 bg-white text-sm md:text-lg outline-none top-[50%] left-[50%] flex flex-col justify-center"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="flex justify-between my-5 md:px-10 px-5">
              <div className="md:text-xl text-lg">Adicionar Escola</div>
              <div onClick={handleClose}>
                <HighlightOffIcon className="cursor-pointer" />
              </div>
            </div>
            <hr />
            <div className="md:px-10 px-5 py-2">Escola</div>
            <div className="md:px-10 px-5">
              <label>
                Escola Nome
                <br />
                <input
                  className="w-full p-2 rounded-lg outline-none border-2"
                  placeholder="Escola Nome"
                  onChange={(e) => {
                    setSchoolData({
                      ...schoolData,
                      schoolName: e.target.value,
                    });
                  }}
                />
              </label>
            </div>
            <div className="md:px-10 px-5 mt-3">
              <label>
                Descrição
                <br />
                <textarea
                  className="w-[100%] md:h-48 outline-none p-3 border-2 rounded-lg"
                  placeholder="Escreva a Descrição aqui..."
                  onChange={(e) => {
                    setSchoolData({
                      ...schoolData,
                      description: e.target.value,
                    });
                  }}
                />
              </label>
            </div>
            <hr />
            <div className="flex md:justify-end justify-center text-center gap-3 md:mt-10 mt-3 md:mx-20">
              <div
                className="bg-gray-300 md:p-2 p-1 text-gray-700 font-bold rounded cursor-pointer hover:bg-hoverColor hover:text-white"
                onClick={handleClose}
              >
                Fechar
              </div>
              <div
                className="bg-basicColor md:p-2 p-1 text-white font-bold rounded cursor-pointer hover:bg-hoverColor"
                onClick={addSchool}
              >
                Adicionar
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default Settings;
