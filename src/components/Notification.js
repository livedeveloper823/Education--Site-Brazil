import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
// import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Modal } from "@mui/material";
import TextEditor from "./Texteditor";
import { useDispatch } from "../store";
import { deleteNotificaions } from "../store/reducers/notificationdata";

const NotificationCard = (props) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteNotificaions(props.id));
  };
  return (
    <div>
      <div className="flex justify-center md:text-md text-sm mb-5">
        <div className="flex items-center md:gap-5 gap-2 bg-white p-5 rounded-lg border-2 border-green-200">
          <div className=" p-1 bg-green-300 rounded-full">
            {/* <NotificationsActiveRoundedIcon /> */}
            <img className="w-10 rounded-full" src={props.avatar} alt="" />
          </div>
          <div className="text-center md:w-60">
            <div className="text-xl">{props.title}</div>
            <div>{props.date}</div>
          </div>
          <div className="cursor-pointer">
            {/* <EditIcon /> */}
          </div>
          <div className="cursor-pointer" onClick={handleDelete}>
            <DeleteForeverOutlinedIcon />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className="absolute md:w-[31%] w-80 p-5 md:p-10 bg-white top-[50%] left-[50%] flex flex-col justify-center outline-none"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="flex justify-between font-bold md:mb-5 mb-3">
            <div>Editar notificações</div>
            <div onClick={handleClose}>
              <HighlightOffIcon className="cursor-pointer" />
            </div>
          </div>
          <hr />
          <div className="flex justify-start my-3 md:my-5">
            Conteúdo da notificação
          </div>
          <div>
            <TextEditor />
          </div>
          <hr className="md:my-5 my-3" />
          <div className="flex justify-end gap-3 md:mt-10">
            <div
              className="bg-gray-300 md:p-2 p-1 text-gray-700 font-bold rounded cursor-pointer hover:bg-green-400 hover:text-white"
              onClick={handleClose}
            >
              Fechar
            </div>
            <div
              className="bg-green-500 md:p-2 p-1 text-white font-bold rounded cursor-pointer hover:bg-green-400"
              onClick={handleClose}
            >
              Salvar
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NotificationCard;
