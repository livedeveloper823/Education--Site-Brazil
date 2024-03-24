import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLogo from "../../components/AuthLogo";

const Registersuccess = () => {

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/")
  };
  return (
    <div className="flex justify-center items-center h-screen text-black">
      <div className="bg-[#ffffff] w-[500px] md:p-[80px] p-5 rounded-lg md:text-lg text-sm">
        <div>
          <AuthLogo />
        </div>
        <div className="text-center text-4xl font-bold mb-5">Seja bem-vindo!</div>
        <div className="text-center text-xl">Seu registro foi efetuado com sucesso!</div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <button
              type="submit"
              className="items-center px-10 py-2 bg-basicColor cursor-pointer hover:bg-hoverColor text-[20px] text-white text-center mt-5 rounded-md"
            >
              Entre na sua conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registersuccess;
