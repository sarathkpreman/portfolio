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
        <header className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2 sm:space-y-3">
            <p className="font-display text-primary text-sm sm:text-base">
              02 /
            </p>

            <h2 className="text-4xl font-black leading-none sm:text-5xl lg:text-6xl">
              WORKS.
            </h2>

            <p className="font-mono text-xs text-muted-foreground sm:text-sm">
              I've built and shipped.
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
                className="flex h-80 flex-col border p-6"
              >
                {/* Number + Icon */}
                <div className="mb-6 flex items-start justify-between">
                  <p className="font-display text-primary">
                    {project.number}
                  </p>

                  <Icon className="text-3xl text-primary" />
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
                <p className="font-display text-primary">
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
                className="mt-6 inline-block font-semibold"
              >
                VIEW PROJECT ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};