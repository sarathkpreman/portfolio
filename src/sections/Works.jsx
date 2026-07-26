import { projects } from "@/data/projects";

export const Works = () => {
  const onGoingProjects = [
    {
      id: 6,
      number: "06",
      title: "More Soon",
      description:
        "Currently shipping new work — check back, or reach out directly.",
      icon: "⏳",
      tags: ["IN PROGRESS"],
      live: "#",
    },
  ];

  return (
    <section id="works" className="relative overflow-hidden">
      <div className="container mx-auto px-4 pt-8 pb-0 sm:px-6 sm:pt-14 sm:pb-4 lg:pt-12 lg:pb-18">

        {/* Header */}
        <header className="mb-12">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <span className="w-fit border border-black px-3 py-1 text-xs font-black tracking-[0.18em]">
                02 / WORKS
              </span>

              <span className="hidden font-mono text-xs text-black/60 sm:inline">
                Projects • Experiments • Learning
              </span>
            </div>

          <h2 className="text-4xl font-black leading-none sm:text-5xl lg:text-6xl">
            BUILT TO LEARN
          </h2>

          <p className="font-mono text-sm leading-7 text-black/70">
            A collection of projects exploring full-stack development, AI, and modern web technologies.
          </p>
        </div>
      </header>

        {/* Content */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Projects */}
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.id}
                className="flex min-h-80 flex-col border p-6 font-mono md:p-4 lg:p-5
                  transition-all duration-300 ease-out will-change-transform
                  hover:-translate-y-1 
                  hover:shadow-[8px_8px_0_#111] shadow-primary"
              >
                {/* Number + Icon */}
                <div className="mb-6 flex items-start justify-between">
                  <p className="font-display text-3xl text-primary">
                    {project.number}
                  </p>

                  <Icon className="text-4xl text-primary" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-2xl font-bold">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground font-mono text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.live || "#"}
                  className="mt-6 inline-block font-semibold"
                >
                  VIEW PROJECT ↗
                </a>
              </div>
            );
          })}

          {/* Coming Soon Card */}
          {onGoingProjects.map((project) => (
            <div
              key={project.id}
              className="flex h-80 flex-col border border-dashed p-6"
            >
              {/* Number + Icon */}
              <div className="mb-6 flex items-start justify-between">
                <p className="font-display text-primary text-3xl">
                  {project.number}
                </p>

                <span className="text-3xl">{project.icon}</span>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-2xl font-bold">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border px-3 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.live}
                className="mt-6 self-start inline-block border bg-indigo-600 text-white border-foreground font-mono text-xs px-4 py-1 lg:text-base font-extrabold
          uppercase shadow-[4px_4px_0_var(--color-foreground)]! hover:shadow-[2px_2px_0_var(--color-foreground)]! 
          hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                VIEW MORE ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};