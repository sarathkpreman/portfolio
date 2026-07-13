export const JourenyCard = () => {
  const milestones = [
    { year: "2021", label: "Improved coding skills, started exploring web development" },
    { year: "2022", label: "Building coding projects" },
    { year: "2023", label: "Started backend dev" },
    { year: "2024", label: "Full-stack transition" },
    { year: "2025", label: "AI/ML focus" },
    { year: "2026 — Present", label: "Learning deep learning models" },
  ];

  return (
    <div className="w-full h-120 overflow-hidden border p-5 font-mono flex flex-col bg-zinc-900">
      <div className="flex items-center gap-2 mb-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
          />
        </svg>
        <p className="text-lg uppercase tracking-wide text-white font-bold">My Journey</p>
      </div>

      <div className="flex flex-col overflow-y-auto">
        {milestones.map((m, i) => (
          <div key={m.year}>
            <div className="flex gap-3 items-start">
              <div className="w-1.5 h-1.5 mt-1.5 bg-primary shrink-0 rounded-full" />
              <div className="pb-1">
                <p className="text-xs font-bold text-white">{m.year}</p>
                <p className="text-xs text-zinc-400 leading-snug">{m.label}</p>
              </div>
            </div>
            {i < milestones.length - 1 && (
              <div className="w-px h-3 bg-white ml-0.75" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};