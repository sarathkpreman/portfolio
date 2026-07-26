import { experienceCards } from '@/data/experience';

const accentMap = {
  purple: {
    panel: 'bg-[#6D4CFF]',
    text: 'text-[#6D4CFF]',
    border: 'border-[#6D4CFF]',
    soft: 'bg-[#EEE9FF]',
    icon: '#F4F1FF',
  },

  orange: {
    panel: 'bg-[#FF5A1F]',
    text: 'text-[#FF5A1F]',
    border: 'border-[#FF5A1F]',
    soft: 'bg-[#FFF0E8]',
    icon: '#FFF4EE',
  },

  teal: {
    panel: 'bg-[#0F9D8A]',
    text: 'text-[#0F9D8A]',
    border: 'border-[#0F9D8A]',
    soft: 'bg-[#E6F6F3]',
    icon: '#F2FFFC',
  },
};

export const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:py-20">

        {/* Section heading */}
        <header className="mb-12">
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <span className="w-fit border border-black px-3 py-1 text-xs font-black tracking-[0.18em]">
                03 / EXPERIENCE
              </span>

              <span className="font-mono text-xs text-black/60 hidden sm:inline">
                Self-directed engineering journey
              </span>
            </div>

            <h2 className="text-4xl font-black leading-none sm:text-5xl lg:text-6xl">
              EXPERIENCE & ROADMAP
            </h2>

            <p className="font-mono text-sm leading-7 text-black/70">
              A focused transition from frontend engineering to full-stack product
              development and AI/ML systems through independent projects,
              structured study, and public learning.
            </p>
          </div>
        </header>

        {/* Timeline */}
        <div className="relative space-y-6">

          {/* Vertical connector */}
          <div className="absolute left-28 top-6 bottom-6 hidden lg:block w-0.5 bg-black/70" />

          {experienceCards.map((card) => {
            const accent = accentMap[card.accent];
            const Icon = card.icon;

            return (
              <article
                key={card.id}
                className="
                  relative border bg-[#F6F1E8] p-5 md:p-4 lg:p-5
                  transition-all duration-300 ease-out will-change-transform
                  hover:-translate-y-1 hover:bg-[#EFE7D6]
                  hover:shadow-[8px_8px_0_#111]
                "
              >

                <div className="grid gap-6 lg:grid-cols-[250px_1fr]">

                  {/* Left panel */}
                  <div
                      className={`flex h-28 items-center justify-center md:h-24 lg:h-auto p-4 ${accent.panel}`}
                  >
                    <div className="
                      grid place-items-center
                    ">
                      <Icon
                        size={72}
                        strokeWidth={2.2}
                        color={accent.icon}
                      />
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="flex min-h-55 flex-col">

                    {/* Top row */}
                    <div className="flex items-center gap-4">
                      <p
                        className={`text-[11px] font-black uppercase tracking-[0.22em] ${accent.text}`}
                      >
                        {card.subtitle}
                      </p>

                      <div className="ml-auto">
                        <div className="w-fit border border-black bg-[#F6F1E8] px-4 py-2 sm:px-3 sm:py-1.5">
                          <p className="text-sm sm:text-xs font-black tracking-[0.08em] whitespace-nowrap">
                            {card.period}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mt-2 text-3xl font-black leading-tight tracking-tight lg:text-4xl">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 max-w-3xl font-mono text-sm leading-7 text-black/75">
                      {card.description}
                    </p>

                    {/* Highlights */}
                    {card.highlights && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {card.highlights.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-black/20 bg-black/5 px-3 py-1 text-[11px] font-bold tracking-wide"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tech tags */}
                    <div className="mt-5 flex flex-wrap gap-3">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-sm border px-3 py-1 text-xs font-black uppercase tracking-[0.14em]
                                      ${accent.text} ${accent.border} bg-white/60`}
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

        {/* Bottom CTA */}
        <div className="mt-8 border p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

            <div className="flex items-center gap-4">
              <div aria-hidden="true" className="hidden lg:grid size-12 place-items-center rounded-full bg-[#FF5A1F] text-black text-xl font-black">
                ↗
              </div>

              <div>
                <h4 className="text-xl font-black">
                  Want the full story?
                </h4>

                <p className="font-mono text-sm text-black/70">
                  Explore the detailed timeline, projects, certifications,
                  and the roadmap I’m following.
                </p>
              </div>
            </div>

           <span
              aria-disabled="true"
              className="w-full sm:w-fit lg:ml-auto inline-flex cursor-not-allowed items-center gap-2 border-2 border-black
                          bg-[#FF5A1F] px-5 py-3 md:px-4 md:py-2.5 lg:px-6 lg:py-3 text-xs md:text-sm font-black uppercase tracking-[0.16em] opacity-60">
              FULL STORY — COMING SOON
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};