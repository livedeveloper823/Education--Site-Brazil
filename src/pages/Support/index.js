const Support = () => {
  return (
    <div className="flex justify-center items-center md:h-[85%] md:text-md text-sm">
      <div className="bg-[#ffffff] md:w-[40%] p-[5%] rounded-lg">
        <div className="text-center md:text-4xl text-lg font-bold">
          Entre em contato conosco
        </div>
        <div className="text-center m-5">
          Tem uma pergunta? Gostaríamos muito de ouvir sua opinião.
          <br /> Envie-nos uma mensagem e Responderemos o mais breve possível.
        </div>
        <form>
          <label className="md:grid gird-cols w-[100%]">
            Mensagem <br/>
            <textarea
              className=" w-[100%] h-36 outline-none p-3 border-2 border-gray-300 rounded-lg mt-5"
              placeholder="Escreva sua mensagem aqui!..."
            />
          </label>
          <button className="w-[100%] bg-basicColor hover:bg-hoverColor text-white md:text-xl rounded-lg md:py-3 py-2 mt-5">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
