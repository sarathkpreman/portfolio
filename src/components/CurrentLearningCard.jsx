import { TbTargetArrow } from "react-icons/tb";


export const CurrentLearningCard = () => {
  const learning = [
    { label: "Transformers", pct: 60 },
    { label: "RAG pipelines", pct: 30 },
    { label: "LangGraph", pct: 10 },
  ];

  return (
    <div className="w-full h-120 overflow-hidden border">
      <div className="flex h-full flex-col gap-5 bg-zinc-900 p-5 font-mono">
        <div className="flex gap-2">
          <TbTargetArrow color="white" size="25px"/>
        <h3 className="text-lg font-bold text-zinc-200">Currently Learning</h3>
        </div>
        {learning.map(({ label, pct }) => (
          <div key={label}>
            <div className="flex justify-between text-xs text-zinc-400 mb-1">
              <span>{label}</span>
              <span>{pct}%</span>
            </div>
            <div className="h-1 bg-zinc-800">
              <div
                className="h-full bg-zinc-200"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};