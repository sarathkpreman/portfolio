import { LuMusic, LuBookOpen, LuBrainCircuit } from "react-icons/lu";
import { IoSparklesSharp } from "react-icons/io5";


export const OutsideCard = () => {
  const items = [
    { icon: LuMusic, label: "Built a music player (pattu)" },
    { icon: LuBookOpen, label: "Reading Turing's 1950 paper" },
    { icon: LuBrainCircuit, label: "CS theory and math" },
    // { icon: , label: "Reading Books"}
  ];

  return (
    <div className="w-full h-120 overflow-hidden border p-5 font-mono">
      <div className="flex gap-2">
        <IoSparklesSharp />
        <p className="text-sm uppercase tracking-wide text-foreground font-bold mb-4">Outside of code</p>
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