import LogoImg from "../assets/logosimplifica.png";

const Logo = () => {
    return(
        <div className="flex gap-1 items-center w-[100%] pt-10">
            <img src={LogoImg} alt="" className="w-24"/>
            <div className="text-center">
                <p className="uppercase text-white text-3xl font-bold">Simplifica</p>
                <p className="uppercase text-basicColor text-2xl font-bold">Concursos</p>
            </div>
        </div>
    )
}

export default Logo;