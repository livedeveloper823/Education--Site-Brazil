import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import QuizIcon from "@mui/icons-material/Quiz";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import LogoutIcon from "@mui/icons-material/Logout";
// constant
const menuItem = [
  { title: "Questões", path: "/admin/admin-questions" },
  { title: "Notificações", path: "/admin/notifications" },
  { title: "Configurações", path: "/admin/settings" },
  // { title: "Sair", path: "/" },
];

const CommonStyle =
  "max-[1280px]:mx-3 mx-5 rounded-lg flex justify-between hover:text-[#ffffff] hover:bg-basicColor py-1 hover:font-bold cursor-pointer";
const ItemSelectStyle1 =
  "flex items-center max-[1280px]:py-2 py-3 text-[#ffffff] bg-basicColor w-[100%] font-bold rounded-lg px-3";
const ItemNormalStyle1 = "flex items-center max-[1280px]:py-1 py-2 px-3";
const ItemSelectStyle2 = "ml-3 text-[#ffffff]";
const ItemNormalStyle2 = "ml-3";

const AdminMenu = () => {
  const location = useLocation().pathname;
  const [state, setState] = useState(
    location === "/admin" ? "/admin/admin-questions" : location
  );

  const navigate = useNavigate();

  const handlesignout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="md:mt-[100px] text-[#ffffff] max-[1280px]:text-sm flex flex-col justify-between">
      <div>
        {menuItem.map((item, index) => (
          <a href={item.path} key={index}>
            <div className={CommonStyle} style={{ marginBottom: "15px" }}>
              <div
                className={
                  state === item.path ? ItemSelectStyle1 : ItemNormalStyle1
                }
              >
                {
                  item.title === "Questões" ? (
                    <QuizIcon style={{ fontSize: "24px" }} />
                  ) : item.title === "Notificações" ? (
                    <ForwardToInboxIcon style={{ fontSize: "24px" }} />
                  ) : (
                    <SettingsIcon style={{ fontSize: "24px" }} />
                  )
                  // <LogoutIcon style={{  fontSize: "24px" }} />
                }
                <div
                  className={
                    state === item.path ? ItemSelectStyle2 : ItemNormalStyle2
                  }
                >
                  {item.title}
                </div>
              </div>
            </div>
          </a>
        ))}
        <div
          className={CommonStyle}
          style={{ marginBottom: "15px" }}
          onClick={handlesignout}
        >
          <div className={state === "/" ? ItemSelectStyle1 : ItemNormalStyle1}>
            <LogoutIcon style={{ fontSize: "24px" }} />
            <div
              className={state === "/" ? ItemSelectStyle2 : ItemNormalStyle2}
            >
              Sair
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr className="md:visible invisible md:mt-10" />
        <div className="mt-5 text-sm text-center text-[#999999] md:visible invisible">
          Simplifica Educação @2024
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
