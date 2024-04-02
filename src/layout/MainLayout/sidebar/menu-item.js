import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HouseIcon from "@mui/icons-material/House";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Groups3Icon from "@mui/icons-material/Groups3";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import instance from "../../../utils/axios";
import { useSelector } from "../../../store";

// constant
const menuItem = [
  { title: "Painel", path: "/student/dashboard" },
  { title: "Missões da Escola", path: "/student/lessons" },
  { title: "Explorar jogos", path: "/student/questions" },
  { title: "Classificação", path: "/student/ranking" },
  { title: "Suporte", path: "/student/support" },
  // { title: "Sair", path: "/" },
];

const CommonStyle =
  "max-[1280px]:mx-3 mx-5 rounded-lg flex justify-between hover:text-[#ffffff] hover:bg-basicColor py-1 hover:font-bold cursor-pointer";
const ItemSelectStyle1 =
  "flex items-center max-[1280px]:py-2 py-3 text-[#ffffff] bg-basicColor w-[100%] font-bold rounded-lg px-3";
const ItemNormalStyle1 = "flex items-center max-[1280px]:py-1 py-2 px-3";
const ItemSelectStyle2 = "ml-3 text-[#ffffff]";
const ItemNormalStyle2 = "ml-3";

const Menu = () => {
  const location = useLocation().pathname;
  const [state, setState] = useState(
    location === "/student" ? "/student/dashboard" : location
  );
  const userData = useSelector((state) => state.userdata);
  const userEmail = userData.users.email;
  const navigate = useNavigate();

  const handlesignout = () => {
    instance
      .post("/auth/logout", { email: userEmail })
      .then((res) => {
        localStorage.clear();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="md:mt-[100px] text-[#ffffff] max-[1280px]:text-sm">
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
                  item.title === "Painel" ? (
                    <HouseIcon style={{ fontSize: "24px" }} />
                  ) : item.title === "Missões da Escola" ? (
                    <AutoStoriesIcon style={{ fontSize: "24px" }} />
                  ) : item.title === "Explorar jogos" ? (
                    <QuestionAnswerIcon style={{ fontSize: "24px" }} />
                  ) : item.title === "Suporte" ? (
                    <ShoppingCartIcon style={{ fontSize: "24px" }} />
                  ) : (
                    <Groups3Icon style={{ fontSize: "24px" }} />
                  )
                  // <LogoutIcon style={{ fontSize: "24px" }} />
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

export default Menu;
