import { TopscrollIndicator } from "@/components/TopscrollIndicator";
import { FaRegCopyright } from "react-icons/fa6";


export const Footer = ({ nextSectionId }) => {

    const handleScrollClick = () => {
            document.getElementById(nextSectionId)?.scrollIntoView({ behavior: "smooth" })
    }

  return (
    <div className="w-full">

      <div className="flex items-center justify-between py-4 md:py-6">
        <div className="flex items-center gap-3">
          <span className=" text-sm md:text-4xl lg:text-xl">
            <FaRegCopyright />
          </span>
           <h4 className="text-sm md:text-base lg:text-xs uppercase">2026 SARATH K P</h4>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <TopscrollIndicator onClick={handleScrollClick} />
        </div>
      </div>
    </div>
  )
}