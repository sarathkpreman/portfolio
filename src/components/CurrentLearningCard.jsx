import { TbTargetArrow } from "react-icons/tb";


export const CurrentLearningCard = () => {
  const learning = [
  { label: "Node.js & Express", pct: 75 },
  { label: "NestJS", pct: 60 },
  { label: "PostgreSQL", pct: 65 },
  { label: "ML Specialization (Coursera)", pct: 45 },
  { label: "Transformers & LLMs", pct: 40 },
  { label: "GATE CSE 2027", pct: 55 },
];

  return (
    <div className="w-full h-120 overflow-hidden  bg-zinc-900 p-5 font-mono md:p-4 lg:p-5
                  transition-all duration-300 ease-out will-change-transform
                  hover:-translate-y-1 
                  hover:shadow-[8px_8px_0_#111] shadow-primary">
      <div className="flex h-full flex-col gap-5">
        <div className="flex gap-2">
          <TbTargetArrow color="white" size="25px"/>
        <h3 className="text-xl text-zinc-200">Currently Learning</h3>
        </div>
        {learning.map(({ label, pct }) => (
          <div key={label}>
            <div className="flex justify-between text-xs text-zinc-400 mb-1">
              <span>{label}</span>
              <span >{pct}%</span>
            </div>
            <div className="h-1 bg-zinc-800">
              <div
                className="h-full bg-primary"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};