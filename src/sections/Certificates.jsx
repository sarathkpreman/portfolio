import { certificates } from "@/data/certificates";
import { PiBooksFill } from "react-icons/pi";

export const Certificates = () => {
  const moreCertificates = {
    year: "•••",
    title: "More Certificates",
    issuer: "CONTINUOUS LEARNING",
    description:
      "Currently pursuing certifications in AI Engineering, Backend Development, Cloud Computing, and Computer Science.",
    link: "#",
  };

  return (
    <section id="certificates" className="relative overflow-hidden">
      <div className="container mx-auto px-4 pt-8 pb-0 sm:px-6 sm:pt-14 sm:pb-4 lg:pt-12 lg:pb-18">

        {/* Header */}
        <header className="mb-12">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <span className="w-fit border border-black px-3 py-1 text-xs font-black tracking-[0.18em]">
                03 / CERTIFICATES
              </span>

              <span className="hidden font-mono text-xs text-black/60 sm:inline">
                Learning • Achievements • Growth
              </span>
            </div>

            <h2 className="text-4xl font-black leading-none sm:text-5xl lg:text-6xl">
              CONTINUOUS LEARNING
            </h2>

            <p className="font-mono text-sm leading-7 text-black/70">
              Certifications that showcase my commitment to continuous learning
              across software engineering, AI, backend development, and cloud
              technologies.
            </p>
          </div>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {certificates.map((cert) => {
            const Icon = cert.icon;

            return (
              <article
                key={cert.id}
                className="group flex min-h-85 flex-col border border-black bg-[#F7F3EE] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0_#000]"
              >
                {/* Header */}
                <div className="flex items-start justify-between p-6">
                  <div className="grid h-14 w-14 place-items-center border border-black bg-indigo-600 text-white shadow-[4px_4px_0_#000]">
                    <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <p className="text-lg font-black text-[#7C5CFF]">
                    {cert.year}
                  </p>
                </div>

                {/* Body */}
                <div className="flex-1 px-6">
                  <h3 className="text-2xl font-black leading-tight">
                    {cert.title}
                  </h3>

                  <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-[#7C5CFF]">
                    {cert.issuer}
                    <span className="mx-2 text-black/30">|</span>
                    {cert.platform}
                  </p>

                  <p className="mt-5 text-[15px] leading-7 text-black/75">
                    {cert.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-auto border-t border-black px-6 py-5">
                  <a
                    href={cert.verifyUrl}
                    className="font-mono text-sm font-bold uppercase tracking-wider transition-all hover:translate-x-1 inline-flex"
                  >
                    View Certificate ↗
                  </a>
                </div>
              </article>
            );
          })}

          {/* More Card */}
          <article className="group flex min-h-85 flex-col border-2 border-dashed border-black bg-[#F7F3EE] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0_#000]">

            <div className="flex items-start justify-between p-6">
              <div className="grid h-14 w-14 place-items-center border-2 border-black bg-black text-white shadow-[4px_4px_0_#000]">
                <PiBooksFill className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
              </div>

              <p className="text-lg font-black text-black/40">
                {moreCertificates.year}
              </p>
            </div>

            <div className="flex-1 px-6">
              <h3 className="text-2xl font-black">
                {moreCertificates.title}
              </h3>

              <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-[#7C5CFF]">
                {moreCertificates.issuer}
              </p>

              <p className="mt-5 text-[15px] leading-7 text-black/75">
                {moreCertificates.description}
              </p>
            </div>

            <div className="mt-auto border-t-2 border-black px-6 py-5">
              <a
                href={moreCertificates.link}
                className="inline-flex font-mono text-sm font-bold uppercase tracking-wider transition-all hover:translate-x-1"
              >
                View All ↗
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};