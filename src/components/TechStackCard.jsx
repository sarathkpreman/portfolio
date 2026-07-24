import {
  SiTypescript,
  SiReact,
  SiNestjs,
  SiPostgresql,
  SiPython,
  SiNodedotjs,
  SiGit,
} from "react-icons/si";
import { IoLayersSharp } from "react-icons/io5";
import { FaJs } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoGoLang } from "react-icons/bi";
import { FaAws } from "react-icons/fa";



export const TechStackCard = () => {
  const stack = [
    SiTypescript,
    FaJs,
    SiPython,
    BiLogoGoLang,
    SiReact,
    RiNextjsFill,
    RiTailwindCssFill,
    SiNodedotjs,
    SiNestjs,
    SiPostgresql,
    SiGit,
    FaAws,
  ];

  return (
    <div className="w-full h-120 overflow-hidden border bg-[#F6F1E8] p-5 md:p-4 lg:p-5
                  transition-all duration-300 ease-out will-change-transform
                  hover:-translate-y-1 hover:bg-[#EFE7D6]
                  hover:shadow-[8px_8px_0_#111]">
      <div className="flex gap-2">
        <IoLayersSharp size={28}/>
        <p className="text-xl uppercase tracking-wide text-foreground font-display mb-6">Tech stack</p>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {stack.map((Icon, i) => (
          <div
            key={i}
            className="border text-foreground aspect-square flex items-center justify-center bg-primary"
          >
            <Icon className="text-4xl text-foreground "/>
          </div>
        ))}
      </div>
    </div>
  );
};