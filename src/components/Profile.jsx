import ProfileImg from "../assets/images/SarathKP.png";

export const Profile = () => {
    return (
        <div className="w-full h-120 overflow-hidden  border">
            <img src={ProfileImg} 
            alt="Sarath KP" className="w-full h-full object-cover" />
        </div>
    )
}