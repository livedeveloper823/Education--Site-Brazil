import React, { useEffect, useState } from "react";
import NotificationCard from "../../../components/Notification";
import { Modal, stepButtonClasses } from "@mui/material";
import { useDispatch, useSelector } from "../../../store/index";
import {
  getNotifications,
  addNotifications,
} from "../../../store/reducers/notificationdata";

const Notifications = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const [notificationData, setNotificationData] = useState({
    content: "",
  });
  const notificationsData = useSelector((state) => state.notificationdata);
  const notifys = notificationsData.notifications;

  useEffect(() => {
    dispatch(getNotifications());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNotifications(notificationData));
    handleClose();
  };

  return (
    <div className="md:px-0 px-5">
      <div className="mt-[50px] md:ml-[100px] md:text-3xl text-xl font-bold">
        Notificações
      </div>
      <div className="md:flex justify-end md:mr-[200px] md:mt-4 my-2">
        <div
          className="bg-basicColor text-white text-center rounded md:py-2 md:px-5 xp-2 py-1 cursor-pointer"
          onClick={handleOpen}
        >
          Adicionar
        </div>
      </div>
      {notifys.length ? (
        <div>
          {notifys.map((item) => (
            <NotificationCard
              id={item._id}
              avatar={item.createdBy.avatar}
              title={item.content}
              date={item.date.split("T")[0]}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center md:text-4xl text-2xl md:p-20 p-10 text-gray-500">Não Notificação</div>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className="absolute md:w-[30%] w-64 md:px-[2%] md:p-5 p-10 md:h-[60%] bg-white top-[50%] left-[50%] outline-none flex flex-col justify-center"
          style={{
            transform: "translate(-50%, -50%)",
            // borderRadius: "20px",
          }}
        >
          <div className="md:text-4xl text-xl font-bold md:mb-12 mb-5 text-center">
            Adicionar notificação
          </div>
          <label htmlFor="textarea" className="md:mx-10 md:text-xl">
            Notificação
          </label>
          <textarea
            name="textarea"
            className="border-2 md:mx-10 outline-none md:h-36 md:p-5 p-2 rounded-lg border-gray-300"
            onChange={(e) => setNotificationData({ content: e.target.value })}
          ></textarea>
          <div className="flex justify-end md:mx-10 text-center gap-3 md:text-lg text-sm md:mt-10 mt-5">
            <div
              className="bg-basicColor md:p-3 py-1 px-2 text-white font-bold rounded cursor-pointer hover:bg-hoverColor"
              onClick={handleClose}
            >
              Fechar
              ""
            </div>
            <div
              className="bg-basicColor md:p-3 py-1 px-2 text-white font-bold rounded cursor-pointer hover:bg-hoverColor"
              onClick={handleSubmit}
            >
              Adicionar
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Notifications;
