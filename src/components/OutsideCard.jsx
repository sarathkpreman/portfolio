import { IoSparklesSharp } from "react-icons/io5";
import {
  LuMusic,
  LuBookOpen,
  LuBrainCircuit,
  LuNotebookPen,
  LuCodeXml,
  LuMicroscope,
} from "react-icons/lu";

export const OutsideCard = () => {
const items = [
  { icon: LuMusic, label: "Built a music player (Pattu)" },
  { icon: LuBookOpen, label: "Reading Turing's 1950 paper" },
  { icon: LuBrainCircuit, label: "Exploring CS theory & mathematics" },
  { icon: LuMicroscope, label: "Studying AI & ML research papers" },
  { icon: LuCodeXml, label: "Building side projects to learn" },
  { icon: LuNotebookPen, label: "Keeping notes and learning logs" },
];
  return (
    <div className="w-full h-120 overflow-hidden border font-mono bg-primary p-5 md:p-4 lg:p-5
                  transition-all duration-300 ease-out will-change-transform
                  hover:-translate-y-1 
                  hover:shadow-[8px_8px_0_#111] shadow-black">
      <div className="flex gap-2">
        <IoSparklesSharp size={28}/>
        <p className="text-2xl uppercase text-foreground font-display mb-4">Outside of code</p>
      </div>
      <div className="flex flex-col gap-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
            <Icon className="text-base shrink-0" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};