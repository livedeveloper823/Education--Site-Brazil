import LogoImg from "../assets/logosimplifica.png";

const Logo = () => {
    return(
        <div className="flex gap-2 justify-center items-center md:w-[100%] pt-10">
            <img src={LogoImg} alt="" className="w-24 max-[1280px]:w-16"/>
            <div className="text-center">
                <p className="uppercase text-white text-3xl max-[1280px]:text-sm font-bold">Simplifica</p>
                <p className="uppercase text-[#C8986B] text-2xl max-[1280px]:text-sm font-bold">EDUCAÇÃO</p>
            </div>
        </div>
    )
}

export default Logo;