import React, { useState } from "react";
import LogoImg from "../../assets/logo1.png";
// import { admin, student } from "../../store/reducers/snackbar";
import { useNavigate } from "react-router-dom";
import useNotification from "../../hooks/useNotification";
import axios from "../../utils/axios";

const VerifyEmail = () => {
  const showNotification = useNotification();
  const [verifyCode, setVerifyCode] = useState({ active: "" });
  const token = localStorage.getItem("token");
  console.log(token);
  console.log(verifyCode);
  const headers = {
    Authorization: token,
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/verifycode", verifyCode, { headers })
      .then((res) => {
        if (res.status === 200) navigate("/registersuccess");
        showNotification("Verify Successful", "success");
      })
      .catch((err) => {
        const error = err.response
        console.log(error);
        showNotification(error.data.msg, "error");
      });
  };
  return (
    <div className="flex justify-center items-center h-screen text-black md:text-lg text-sm">
      <div className="bg-[#ffffff] w-[500px] md:p-[80px] p-5  rounded-lg">
        <div>
          <img src={LogoImg} alt="" />
        </div>
        <div className="text-center text-2xl font-bold md:my-10 my-5">
          Enviamos um código de verificação para seu e-mail.
          <br /> Confira e digite abaixo
        </div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setVerifyCode({ active: e.target.value })}
            placeholder="Código de verificação"
            type="text"
            className="w-[100%] border-2 outline-none rounded-lg p-2"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="items-center px-10 py-2 bg-green-600 cursor-pointer hover:bg-green-500 text-[20px] text-white text-center mt-5 rounded-md"
            >
              Verificar e-mail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
