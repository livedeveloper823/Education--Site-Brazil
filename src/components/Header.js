import React, { useEffect, useState, useRef } from "react";
import AvatarImg from "../assets/avatar.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import QuizIcon from "@mui/icons-material/Quiz";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import HouseIcon from "@mui/icons-material/House";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Groups3Icon from "@mui/icons-material/Groups3";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "../store";
import { getAdminData, getUserData } from "../store/reducers/userdata";
import { useNavigate } from "react-router-dom";

const DropDownMenu = () => {
  const [open, setOpen] = useState(false);
  const userRole = localStorage.getItem("userrole");
  const userdata = useSelector((state) => state.userdata);
  const student = userdata.users;
  const admin = userdata.admin;
  const container = useRef(null);
  
  return (
    <div ref={container}>
      <button onClick={() => setOpen(!open)}>
        {userRole === "admin" ? (
          <img
            src={admin.avatar}
            alt=""
            className="rounded-[50%] max-[1280px]:w-[30px] w-[40px]"
          ></img>
        ) : (
          <img
            className="rounded-[50%] max-[1280px]:w-[30px] w-[40px]"
            src={AvatarImg}
            alt=""
          />
        )}
      </button>
      {open && (
        <div className="absolute w-80 border-2 bg-white right-0 p-5 hover:border-green-500 rounded-lg">
          <div className="text-xl text-center font-bold">
            Nome: {userRole === "admin" ? admin.name : student.name}
          </div>
          <div>
            {" "}
            Email: {userRole === "admin" ? admin.email : student.email}
          </div>
        </div>
      )}
    </div>
  );
};
const DropDownNotify = () => {
  const [newNotify, setNewNotify] = useState(false);
  const [open, setOpen] = useState(false);
  const userRole = localStorage.getItem("userrole");
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.userdata);
  const student = userdata.users;
  const notifys = student.notify;
  const container = useRef(null);
  useEffect(() => {
    userRole === "admin" ? dispatch(getAdminData()) : dispatch(getUserData());
  }, []);
  useEffect(() => {
    setNewNotify(!newNotify);
  }, [notifys]);
  return (
    <div ref={container}>
      <button onClick={() => setOpen(!open)}>
        {userRole === "admin" ? (
          ''
        ) : (
          <div className="flex cursor-pointer">
          <div onClick={() => setNewNotify(!newNotify)}>
            <NotificationsIcon />
          </div>
          {newNotify === true ? (
            <div className="relative flex h-3 w-3">
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hoverColor opacity-75"></div>
              <div className="relative inline-flex rounded-full h-3 w-3 bg-basicColor"></div>
            </div>
          ) : (
            ""
          )}
        </div>
        )}
        
      </button>
      {open && (
        <div
          className="absolute w-64 border-2 bg-white right-20 text-center p-5 hover:border-hoverColor rounded-lg"
        >
          {notifys.map((item) => (
            <div className="m-2">
              <div>{item.content}</div>
              <div>{item.date.split("T")[0]}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const userRole = localStorage.getItem("userrole");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  
  const handlesignout = () => {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="bg-white flex md:justify-end justify-between items-center md:gap-[20px] px-10 max-[1280px]:pr-10 py-4 max-[1280px]:py-2">
      <div className="md:invisible">
        <button onClick={() => setOpen(!open)}>
          <div className="w-7 h-1 bg-gray-700 m-1"></div>
          <div className="w-7 h-1 bg-gray-700 m-1"></div>
          <div className="w-7 h-1 bg-gray-700 m-1"></div>
        </button>
        {userRole === "admin" ? (
          <div>
            {open && (
              <div className="px-3 py-5 w-full left-0 absolute border-2 bg-[#232323] text-white z-[1] rounded-lg">
                <a
                  className="block hover:bg-hoverColor px-5 my-1 rounded-md"
                  href="/admin/admin-questions"
                  onClick={() => setOpen(!open)}
                >
                  <QuizIcon className="text-2xl mr-2 my-1" /> Questões
                </a>
                <a
                  className="block hover:bg-hoverColor px-5 my-1 rounded-md"
                  href="/admin/notifications"
                  onClick={() => setOpen(!open)}
                >
                  <ForwardToInboxIcon className="text-2xl mr-2 my-1" />
                  Notificações
                </a>
                <a
                  className="block hover:bg-hoverColor px-5 my-1 rounded-md"
                  href="/admin/settings"
                  onClick={() => setOpen(!open)}
                >
                  <SettingsIcon className="text-2xl mr-2 my-1" />
                  Configurações
                </a>
                <div
                  className="block hover:bg-hoverColor px-5 my-1 rounded-md"
                  onClick={handlesignout}
                >
                  <LogoutIcon className="text-2xl mr-2 my-1" />
                  Sair
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            {open && (
              <div className="px-3 py-5 w-full left-0 absolute border-2 bg-[#232323] text-white z-[1] rounded-lg">
                <a
                  className="block hover:bg-hoverColor px-5 my-1 rounded-md"
                  href="/student/dashboard"
                  onClick={() => setOpen(!open)}
                >
                  <HouseIcon className="text-2xl mr-2 my-1" /> Painel
                </a>
                <a
                  className="block hover:bg-hoverColor px-5 my-1 rounded-md"
                  href="/student/lessons"
                  onClick={() => setOpen(!open)}
                >
                  <AutoStoriesIcon className="text-2xl mr-2 my-1" />
                  Missões da Escola
                </a>
                <a
                  className="block hover:bg-hoverColor px-5 my-1 rounded-md"
                  href="/student/questions"
                  onClick={() => setOpen(!open)}
                >
                  <QuestionAnswerIcon className="text-2xl mr-2 my-1" />
                  Explorar jogos
                </a>
                <a
                  className="block hover:bg-hoverColor px-5 my-1 rounded-md"
                  href="/student/ranking"
                  onClick={() => setOpen(!open)}
                >
                  <Groups3Icon className="text-2xl mr-2 my-1" />
                  Classificação
                </a>
                <a
                  className="block hover:bg-hoverColor px-5 my-1 rounded-md"
                  href="/student/support"
                  onClick={() => setOpen(!open)}
                >
                  <ShoppingCartIcon className="text-2xl mr-2 my-1" />
                  Suporte
                </a>
                <div
                  className="block hover:bg-hoverColor px-5 my-1 rounded-md"
                  onClick={handlesignout}
                >
                  <LogoutIcon className="text-2xl mr-2 my-1" />
                  Sair
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <DropDownNotify />
        <div className="relative inline-block">
          <div className="cursor-pointer"></div>
          <DropDownMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
