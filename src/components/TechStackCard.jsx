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
    <div className="w-full h-120 overflow-hidden border p-5">
      <div className="flex gap-2">
        <IoLayersSharp size="20px"/>
        <p className="text-sm font-mono uppercase tracking-wide text-foreground font-bold mb-4">Tech stack</p>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {stack.map((Icon, i) => (
          <div
            key={i}
            className="border text-foreground aspect-square flex items-center justify-center"
          >
            <Icon className="text-4xl text-foreground "/>
          </div>
        ))}
      </div>
    </div>
  );
};