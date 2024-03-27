import LogoImg from "../assets/logosimplifica.png";

const AuthLogo = () => {
    return(
        <div className="flex gap-1 justify-center items-center md:w-[100%] mx-auto md:my-5">
            <img src={LogoImg} alt="" className="w-24"/>
            <div className="text-center">
                <p className="uppercase text-gray-700 text-3xl font-bold">Simplifica</p>
                <p className="uppercase text-[#C8986B] text-3xl font-bold">EDUCAÇÃO</p>
            </div>
        </div>
    )
}

export default AuthLogo;