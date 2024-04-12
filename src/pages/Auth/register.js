import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "../../utils/axios";
import instance from "../../utils/axios";
import useNotification from "../../hooks/useNotification";
import { useDispatch, useSelector } from "../../store/index";
import { getSchools } from "../../store/reducers/schooldata";
import AuthLogo from "../../components/AuthLogo";

const Register = () => {
  const { showNotification } = useNotification();
  const data = useSelector((state) => state.schooldata);
  const dispatch = useDispatch();
  const [isSelected, setIsSelceted] = useState("student");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: isSelected,
    ...(isSelected === "student" && { school: "", level: "" }),
  });

  useEffect(() => {
    if (userData.role !== "student") {
      setUserData((prevUserData) => {
        const { school, level, ...updatedUserData } = prevUserData;
        return updatedUserData;
      });
    } else
      setUserData((prevUserData) => {
        const { ...updatedUserData } = prevUserData;
        return updatedUserData;
      });
  }, [userData.role]);

  const handleChage = (e) => {
    setUserData({ ...userData, role: e.target.value });
  };
  const navigate = useNavigate();
  const allSchool = data.schools;
  const handleSubmit = (e) => {
    e.preventDefault();
    instance
      .post("/auth/register", userData)
      .then((res) => {
        if (res.status === 200) {
          const email = { email: res.data.data.user.email };
          instance.post("/auth/sendcode", email).then((res) => {
            localStorage.setItem("token", res.data.data.token);
          });
					showNotification("Cadastro realizado com sucesso!", "success");
          navigate("/verifyemail");
        }
      })
      .catch((err) => {
        const error = err.response;
        if (error == null) {
          // toast.error("Servidor não encontrado!");
          showNotification("Servidor não encontrado!", "error");
        }
        // else if (err.response.status === 400) {
        // }
        else {
          // toast.warning("Erro do usuário!");
          showNotification("Tente novamente!", "warning");
        }
      });
  };
  const handleClick = () => {
    navigate("/");
  };
  useEffect(() => {
    dispatch(getSchools());
  }, []);
  return (
    <div className="flex justify-center items-center h-screen text-black text-xs md:text-sm min-[1300px]:text-lg">
      <div className="bg-[#ffffff] p-[20px] md:p-[80px] mx-10 md:m-0 rounded-lg md:w-[40%] md:py-[50px] min-[1300px]:w-[27%]">
        <div>
          <AuthLogo />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-center text-lg md:text-[32px] font-bold">
            Cadastre-se
          </div>
          <label className="flex flex-col w-[100%] md:mt-2">
            Nome
            <input
              type="text"
              placeholder="Digite seu Nome"
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              className="mt-2 w-[100%] rounded-lg p-2 border-2 outline-none"
              required
            />
          </label>
          <label className="flex flex-col w-[100%] mt-2">
            E-mail
            <input
              type="email"
              placeholder="Digite seu E-mail"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="mt-2 w-[100%] rounded-lg p-2 border-2 outline-none"
              required
            />
          </label>
          <label className="flex flex-col mt-2 w-[100%]">
            Senha
            <input
              type="password"
              placeholder="Digite seu senha"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              className="mt-2 w-[100%] rounded-lg p-2 border-2 outline-none"
              required
            />
          </label>
          {userData.role === "student" ? (
            <div className="flex justify-between gap-2 md:gap-3 mt-2 md:mt-5">
              <select
                className="outline-none border-2 p-2 rounded-lg"
                onChange={(e) =>
                  setUserData({ ...userData, school: e.target.value })
                }
              >
                <option value="select" disabled selected>
                  Selecionar escola
                </option>
                {allSchool.map((item) => (
                  <option>{item.schoolName}</option>
                ))}
              </select>
              <select
                className="outline-none border-2 p-2 rounded-lg"
                onChange={(e) =>
                  setUserData({ ...userData, level: e.target.value })
                }
              >
                <option value="select" disabled selected>
                  Selecionar nível
                </option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>
          ) : (
            <div className="flex justify-between gap-2 md:gap-3 mt-2 md:mt-5"></div>
          )}
          <div className="flex gap-10 mt-2 md:mt-5">
            <label className="flex items-center">
              <input
                className="mr-3"
                type="radio"
                value="student"
                checked={userData.role === "student"}
                onChange={handleChage}
              />
              Estudante
            </label>
            <label className="flex items-center">
              <input
                className="mr-3"
                type="radio"
                value="admin"
                checked={userData.role === "admin"}
                onChange={handleChage}
              />
              Administrador
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="items-center px-10 py-2 bg-basicColor cursor-pointer hover:bg-hoverColor text-md md:text-[20px] text-white text-center mt-3 md:mt-5 rounded-md"
            >
              Entrar
            </button>
          </div>
        </form>
        <div className="flex justify-center gap-3 text-center md:mt-10 mt-3 ">
          Já possui uma conta.
          <div className="cursor-pointer font-bold" onClick={handleClick}>
            Entre na sua conta
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
