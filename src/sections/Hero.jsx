import { Button } from "@/components/ui/button";
import {
  BrainCircuit,
  Code2,
  Database,
} from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* LEFT SIDE: Content */}
          <div>
            {/* Open to Work */}
            <Button
              asChild
              className="rounded-none border-2 border-foreground bg-indigo-600 font-mono text-xs text-background hover:bg-blue-700"
            >
              <a href="#contact">OPEN TO WORK</a>
            </Button>

            {/* Title + Description */}
            <div className="mt-8">
              <h1 className="text-4xl font-bold leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                I BUILD <br />
                <span className="text-background [-webkit-text-stroke:1px_var(--color-foreground)] sm:[-webkit-text-stroke:1.5px_var(--color-foreground)] md:[-webkit-text-stroke:2px_var(--color-foreground)] lg:[-webkit-text-stroke:3px_var(--color-foreground)]">
                  SOFTWARE
                </span>
              </h1>

              <p className="mt-6 max-w-sm font-mono text-sm leading-7 text-muted-foreground">
                Full-stack developer based in Kerala, India — shipping
                React/NestJS products while training, step by step, into AI/ML
                engineering.
              </p>
            </div>

            {/* Contact and Work Buttons */}
            <div className="mt-10 flex items-center gap-4">
              <Button
                asChild
                className="h-15 rounded-none border-2 border-foreground bg-foreground px-10 font-mono text-s font-extrabold uppercase text-background shadow-[4px_4px_0_var(--color-foreground)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-foreground)]"
              >
                <a
                  href="#projects"
                  className="flex items-center justify-center"
                >
                  VIEW WORK ↗
                </a>
              </Button>

              <Button
                asChild
                className="h-15 rounded-none border-2 border-foreground bg-transparent px-10 font-mono text-s font-extrabold uppercase text-foreground shadow-[4px_4px_0_var(--color-foreground)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-foreground/5 hover:shadow-[2px_2px_0_var(--color-foreground)]"
              >
                <a
                  href="#contact"
                  className="flex items-center justify-center"
                >
                  CONTACT
                </a>
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE: Tech Stack */}
          <div className="relative flex items-center justify-center">
            {/* Tech Grid Backdrop */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[32px_32px] opacity-10 mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            <div className="relative w-full max-w-md font-mono">
              {/* Header */}
              <div className="mb-5 flex items-center justify-between border-b-2 border-foreground pb-3 text-[11px] text-muted-foreground">
                <span>STACK.json</span>

                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-600 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600" />
                  </span>

                  IN USE
                </span>
              </div>

              {/* Stack Cards */}
              <div className="flex flex-col gap-4">
                {[
                  {
                    label: "Frontend",
                    items: "React, Next.js, TypeScript, Tailwind",
                    icon: Code2,
                    accent: false,
                    rotate: "-rotate-[0.5deg]",
                  },
                  {
                    label: "Backend",
                    items: "NestJS, Node.js, PostgreSQL",
                    icon: Database,
                    accent: true,
                    rotate: "rotate-[0.5deg]",
                  },
                  {
                    label: "AI / ML",
                    items: "Python, NumPy, MLflow, Hugging Face",
                    icon: BrainCircuit,
                    accent: false,
                    rotate: "-rotate-[0.3deg]",
                  },
                ].map((row, i) => {
                  const Icon = row.icon;

                  return (
                    <div
                      key={row.label}
                      className={`group border-2 p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--color-foreground)] ${row.rotate} ${
                        row.accent
                          ? "border-indigo-600 bg-indigo-600/5 shadow-[6px_6px_0_var(--color-indigo-600,var(--color-indigo-600))]"
                          : "border-foreground bg-background shadow-[6px_6px_0_var(--color-foreground)]"
                      }`}
                      style={{ marginLeft: `${i * 20}px` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon
                            className={`h-4 w-4 ${
                              row.accent
                                ? "text-indigo-600"
                                : "text-highlight"
                            }`}
                          />

                          <span
                            className={`text-[10px] uppercase tracking-wide ${
                              row.accent
                                ? "text-indigo-600"
                                : "text-highlight"
                            }`}
                          >
                            {String(i + 1).padStart(2, "0")} / {row.label}
                          </span>
                        </div>

                        <span className="text-[10px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                          →
                        </span>
                      </div>

                      <div className="mt-2 text-sm text-foreground">
                        {row.items}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};