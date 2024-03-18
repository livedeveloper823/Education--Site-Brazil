import React, { useState } from "react";
import LogoImg from "../../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/login", loginData)
      .then((res) => {
        toast.success("LoggedIn Successful");
        if (res.status === 200) {
          const user = res.data.data.user;
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("isLogin", true);
          localStorage.setItem("userrole", user.role)
          user.role === "student" ? navigate("/student") : navigate("/admin");
        }
      })
      .catch((err) => {
        if (err.response == null) {
          toast.error("Servidor não encontrado!");
        } else if (err.response.status === 400) {
          toast.warning("Usuário não encontrado!");
        } else if (err.response.status === 401) {
          const email = { email: loginData.email };
          axios.post("/auth/sendcode", email).then((res) => {
            localStorage.setItem("token", res.data.data.token);
          });
          toast.warning("E-mail não verificado!");
          navigate("/verifyemail");
        } else toast.error("Solicitação ruim!");
      });
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const handleForgot = () => {
    navigate("/forgot");
  };
  return (
    <div className="flex justify-center items-center h-screen text-black text-[14px] md:text-md min-[1300px]:text-lg">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="bg-[#ffffff] p-[20px] md:p-[80px] rounded-lg md:w-[35%] min-[1300px]:w-[25%]">
        <div>
          <img src={LogoImg} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-center text-[32px]">Entre na sua conta</div>
          <label className="flex flex-col w-[100%] mt-2">
            E-mail
            <input
              type="email"
              placeholder="Digite seu E-mail"
              className="mt-2 w-[100%] rounded-lg p-2 border-2 outline-none"
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              required
            />
          </label>
          <label className="flex flex-col mt-2 w-[100%]">
            Senha
            <input
              type="password"
              placeholder="Digite seu senha"
              className="mt-2 w-[100%] rounded-lg p-2 border-2 outline-none"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
          </label>
          <div className="flex justify-end mt-3">
            <input
              className="cursor-pointer ml-5 font-bold"
              type="submit"
              value="Esquei minha senha?"
              onClick={handleForgot}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="items-center px-10 py-2 bg-green-600 cursor-pointer hover:bg-green-500 text-[20px] text-white text-center md:mt-5 mt-2 rounded-md"
            >
              Entrar
            </button>
          </div>
        </form>
        <div className="text-center md:mt-10 mt-3">
          Não tem conta?
          <input
            className="cursor-pointer ml-5 font-bold"
            type="submit"
            value="Cadastre-se"
            onClick={handleRegister}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
