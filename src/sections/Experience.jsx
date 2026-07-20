import { experienceCards } from "@/data/experience";

const accentMap = {
  purple: {
    panel: "bg-indigo-500",   // softer editorial purple
    text: "text-[#5B3FD6]",   // darker for readability
    border: "border-[#5B3FD6]",
  },

  blue: {
    panel: "bg-primary",   // royal blue
    text: "text-[#3F5FD1]",
    border: "border-[#3F5FD1]",
  },

  teal: {
    panel: "bg-primary",   // greenish teal
    text: "text-[#0F8F84]",
    border: "border-[#0F8F84]",
  },
};

export const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="container mx-auto px-4 pt-8 pb-0 sm:px-6 sm:pt-14 sm:pb-4 lg:pt-12 lg:pb-18">

        {/* Section heading */}
        <header className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2 sm:space-y-3">
            <p className="font-display text-primary text-sm sm:text-base">
              03 /
            </p>

            <h2 className="text-4xl font-black leading-none sm:text-5xl lg:text-6xl">
              EXPERIENCE.
            </h2>

            <p className="font-mono text-xs text-muted-foreground sm:text-sm">
              Personal and Professional experience
            </p>
          </div>
        </header>

        {/* Cards */}
        <div className="space-y-8">
          {experienceCards.map((card) => {
            const accent = accentMap[card.accent];

            return (
              <article
                key={card.id}
                className="border-2 border-black p-4 shadow-[6px_6px_0_#000]"
              >
                <div className="grid gap-6 lg:grid-cols-[280px_1fr]">

                  {/* Left colored panel */}
                  <div
                    className={`${accent.panel} flex min-h-55 flex-col justify-between p-6 text-white`}
                  >
                    {/* Decorative icon */}
                    <div className="grid h-10 w-10 place-items-center border border-white/70 text-white/150">
                      ⋮
                    </div>

                    <div>
                      <p className="text-4xl font-black tracking-tight">
                        {card.period}
                      </p>

                      {card.status === "current" && (
                        <span className="mt-5 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em]">
                          CURRENT
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="flex min-h-55 flex-col ">

                    <div>
                      <p
                        className={`text-sm font-black uppercase tracking-[0.18em] ${accent.text}`}
                      >
                        {card.subtitle}
                      </p>

                      <h3 className="mt-3 text-4xl font-black leading-tight tracking-tight">
                        {card.title}
                      </h3>

                      <p className="mt-6 max-w-3xl text-lg leading-8 text-black/75">
                        {card.description}
                      </p>
                    </div>

                    {/* Tags aligned to bottom-right */}
                    <div className="mt-8 flex flex-wrap gap-3 lg:justify-end">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`border px-4 py-2 text-sm font-black uppercase tracking-[0.14em] ${accent.border} ${accent.text}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-10 border-2 border-black px-6 py-5 shadow-[6px_6px_0_#000]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">

            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center border-2 border-black text-indigo-600">
                ✦
              </div>

              <div>
                <p className="text-xl font-black">
                  Always learning. Always building.
                </p>

                <p className="text-black/70">
                  Exploring systems that combine AI, data, and human-centered design.
                </p>
              </div>
            </div>

            <a
              href="#work"
              className="ml-auto inline-flex items-center gap-3 border-2 border-black px-5 py-3 text-sm font-black uppercase tracking-[0.16em] transition hover:-translate-y-0.5 hover:bg-black hover:text-white"
            >
              VIEW MY WORK
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};