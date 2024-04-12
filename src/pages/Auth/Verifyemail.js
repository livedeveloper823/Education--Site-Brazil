import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useNotification from "../../hooks/useNotification";
import { instance } from "../../utils/axios";
import AuthLogo from "../../components/AuthLogo";

const VerifyEmail = () => {
  const {showNotification} = useNotification();
  const [verifyCode, setVerifyCode] = useState({ active: "" });
  console.log("verifyCode", verifyCode);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await instance
      .post("/auth/verifycode", verifyCode)
      .then((res) => {
        console.log("res", res);
        navigate("/registersuccess");
        showNotification("Verifique com sucesso!", "success");
      })
      .catch((err) => {
        const error = err.response;
        console.log("err",err);
        showNotification("Tente novamente!", "error");
      });
  };
  return (
    <div className="flex justify-center items-center h-screen text-black md:text-lg text-sm">
      <div className="bg-[#ffffff] w-[500px] md:p-[80px] p-5  rounded-lg">
        <div>
          <AuthLogo />
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
              className="items-center px-10 py-2 bg-basicColor cursor-pointer hover:bg-hoverColor text-[20px] text-white text-center mt-5 rounded-md"
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
