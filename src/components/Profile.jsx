import ProfileImg from "../assets/images/SarathKP.png";

export const Profile = () => {
    return (
        <div className="w-full h-120 overflow-hidden  border  bg-[#F6F1E8]
                  transition-all duration-300 ease-out will-change-transform
                  hover:-translate-y-1 hover:bg-[#EFE7D6]
                  hover:shadow-[8px_8px_0_#111]">
            <img src={ProfileImg} 
            alt="Sarath KP" className="w-full h-full object-cover" />
        </div>
    )
}