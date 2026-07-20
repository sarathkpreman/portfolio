import { certificates } from "@/data/certificates";
import {
  GraduationCap,
  Cloud,
  Layers,
  Code,
  Atom,
  GitBranch,
} from "lucide-react";

export const Certificates = () => {
  const iconMap = {
    "graduation-cap": GraduationCap,
    layers: Layers,
    cloud: Cloud,
    code: Code,
    atom: Atom,
    "git-branch": GitBranch,
  };

  return (
    <section id="certificates" className="relative overflow-hidden">
      <div className="container mx-auto px-4 pt-8 pb-0 sm:px-6 sm:pt14 sm:pb-4 lg:pt-12 lg:pb-18">
        
        {/* Header section */}
        <header className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2 sm:space-y-3">
            <p className="font-display text-primary text-sm sm:text-base">04 /</p>
            <h2 className="text-4xl font-black leading-none sm:text-5xl lg:text-6xl">
              CERTIFICATES.
              <span className="ml-1 font-mono text-2xl font-normal lowercase sm:text-3xl lg:text-4xl"></span>
            </h2>
            <p className="font-mono text-xs text-muted-foreground sm:text-sm">Certificates i earned.</p>
          </div>
        </header>

        {/* Certificate grids */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => {
            const Icon = iconMap[cert.icon];

            return (
              <article
                key={cert.id}
                className="flex min-h-[320px] flex-col border-2 border-black bg-[#F7F3EE] shadow-[8px_8px_0_#000]"
              >
                {/* Header */}
                <div className="flex items-start justify-between p-6">
                  <div className="grid h-14 w-14 place-items-center border-2 border-black bg-[#7C5CFF] text-white shadow-[4px_4px_0_#000]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <p className="text-lg font-black text-[#5B3FD6]">{cert.year}</p>
                </div>

                {/* Body */}
                <div className="flex-1 px-6 pb-6">
                  <h3 className="text-2xl font-black leading-tight">{cert.title}</h3>

                  <p className="mt-3 text-sm font-black uppercase tracking-[0.14em] text-[#5B3FD6]">
                    {cert.issuer} <span className="text-black/40">|</span> {cert.platform}
                  </p>

                  <p className="mt-5 text-[15px] leading-7 text-black/75">
                    {cert.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between border-t-2 border-black px-6 py-4">
                  <a
                    href={cert.verifyUrl}
                    className="text-sm font-black uppercase tracking-[0.14em] text-[#5B3FD6] hover:underline"
                  >
                    View Certificate ↗
                  </a>

                  <button
                    type="button"
                    className="grid h-10 w-10 place-items-center border-l-2 border-black text-lg font-black"
                    aria-label={`Open ${cert.title} certificate`}
                  >
                    ↗
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};