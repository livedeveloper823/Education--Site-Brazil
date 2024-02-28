import React, { useState } from "react";
import LogoImg from "../../assets/logo1.png";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate()
    const [newpass, setNewpass] = useState("")
    const [confirmpass, setConfirmpass] = useState("")
    console.log(newpass, confirmpass);
    const handleSubmit = (e) => {
        e.preventDefault()
        if(newpass === confirmpass){
            navigate("/")
        } else alert("Passwords not match!");
    }
  return (
    <div className="flex justify-center items-center h-screen text-black">
      <div className="bg-[#ffffff] w-[500px] md:p-[80px] p-5 rounded-lg md:text-lg text-sm">
        <div>
          <img src={LogoImg} alt="" />
        </div>
        <div className="text-center text-2xl font-bold md:my-10 my-5">
          Esqueci minha senha.
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              E-mail
              <input
                placeholder="E-mail"
                type="text"
                className="w-[100%] border-2 outline-none rounded-lg p-2"
              />
            </label>
            <label>
              Nova senha
              <input
                placeholder="Nova senha"
                type="text"
                className="w-[100%] border-2 outline-none rounded-lg p-2"
                onChange={(e)=> setNewpass(e.target.value)}
              />
            </label>
            <label>
            Confirmar senha
              <input
                placeholder="Confirmar senha"
                type="text"
                className="w-[100%] border-2 outline-none rounded-lg p-2"
                onChange={(e)=> setConfirmpass(e.target.value)}
              />
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="items-center px-10 py-2 bg-green-600 cursor-pointer hover:bg-green-500 text-[20px] text-white text-center mt-5 rounded-md"
            >
              Alterar senha
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
