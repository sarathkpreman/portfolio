import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  MdAccessTime,
  MdEmail,
  MdLocationOn,
  MdOutlineChat,
  MdWork,
} from "react-icons/md";

const INFO_ITEMS = [
  {
    icon: MdLocationOn,
    label: "Location",
    value: "Changaramkulam, Kerala, India",
  },
  {
    icon: MdAccessTime,
    label: "Availability",
    value: "Open to opportunities",
  },
  {
    icon: MdWork,
    label: "Preferences",
    value: "Full-time roles, Remote",
  },
  {
    icon: MdOutlineChat,
    label: "Response time",
    value: "Usually within 24 hours",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="container mx-auto px-4 pt-8 pb-0 sm:px-6 sm:pt-14 sm:pb-4 lg:pt-12 lg:pb-18">
        {/* Header Section */}
       <header className="mb-12 flex flex-col gap-8 lg:flex-row lg:justify-between ">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <span className="w-fit border px-3 py-1 text-xs font-black tracking-[0.18em]">
                05 / CONTACT
              </span>

              <span className="hidden font-mono text-xs text-black/60 sm:inline">
                  Collaboration • Opportunities • Let's Connect
              </span>
            </div>

            <h2 className="text-4xl font-black leading-none sm:text-5xl lg:text-6xl">
              LET'S BUILD TOGETHER
            </h2>

            <p className="font-mono text-sm leading-7 text-black/70">
             Open to software engineering, full-stack, and AI opportunities. Feel free
              to reach out for collaborations, projects, or just to say hello.
            </p>
          </div>

          {/* Right Side - Quick Links */}
          <div className="flex flex-col gap-5 text-sm sm:flex-row sm:flex-wrap sm:items-start lg:flex-nowrap">
            {/* Email */}
            <div className="flex items-start gap-3">
              <MdEmail className="mt-0.5 h-7 w-7 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">sarathkpreman@gmail.com</p>
              </div>
            </div>

            <div className="hidden h-14 w-px bg-border lg:block" />

            {/* GitHub */}
            <div className="flex items-start gap-3">
              <FaGithub className="mt-0.5 h-7 w-7 text-black" />
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-muted-foreground">
                  github.com/sarathkpreman
                </p>
              </div>
            </div>

            <div className="hidden h-14 w-px bg-border lg:block" />

            {/* LinkedIn */}
            <div className="flex items-start gap-3">
              <FaLinkedin className="mt-0.5 h-7 w-7 text-indigo-700" />
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-muted-foreground">
                  linkedin.com/in/sarath-kp
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[500px_minmax(0,1000px)] lg:justify-center">
          {/* Left Side Panel */}
          <div className="relative overflow-hidden border border-white/10 bg-[#0b0b0f] p-4 text-white ">
            {/* Orange glow background effect */}
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

            {/* Subtle radial texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] opacity-[0.06] bg-size-[18px_18px]" />

            {/* Orange dotted pattern */}
            <div className="pointer-events-none absolute top-24 right-4 hidden h-32 w-24 bg-[radial-gradient(circle,
            rgba(249,115,22,0.9)_1.2px,transparent_1.2px)] opacity-80 lg:block bg-size-[14px_14px]" />

            <div className="relative z-10">
              {/* Status Header */}
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                Let’s connect
              </div>

              <h3 className="max-w-xs text-2xl font-black leading-tight">
                I’m open to exciting opportunities and meaningful conversations.
              </h3>

              <div className="my-6 h-px bg-linear-to-r from-white/40 via-white/10 to-transparent" />

              {/* Info Rows */}
              <div className="space-y-3">
                {INFO_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/3 p-3 transition-all duration-300 hover:border-orange-400/40 hover:bg-white/6"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/30 bg-orange-500/10 text-orange-400 
                      shadow-[0_0_24px_rgba(249,115,22,0.16)] transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-white/90">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Decorative Illustration */}
              <div className="relative mt-4 rounded-2xl border border-white/10 bg-linear-to-br from-white/4 to-transparent p-3">
                <div className="flex items-end gap-3">
                  {/* Coffee Cup */}
                  <div className="h-8 w-6 rounded-md border border-white/40" />

                  {/* Laptop */}
                  <div className="relative h-20 flex-1 rounded-xl border border-white/40 bg-black/20">
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.9)]" />
                    </div>
                  </div>

                  {/* Plant */}
                  <div className="h-12 w-10 rounded-lg border border-white/40" />
                </div>

                <div className="mt-2 h-2 rounded-full border border-white/25" />
              </div>
            </div>
          </div>

          {/* Right Side Panel - Contact Form */}
          <div className="border p-5 shadow-sm">
            <div className="mb-5">
              <h3 className="text-2xl font-bold uppercase">Send a message</h3>
              <p className="mt-1 text-muted-foreground">
                Tell me about your project, role, or collaboration idea.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your name"
                  className="h-11 border bg-background px-4 outline-none transition"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="h-11 border bg-background px-4 outline-none transition"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="h-11 w-full border bg-background px-4 outline-none transition"
              />

              <textarea
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="w-full border bg-background px-4 py-3 outline-none transition"
              />

              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="">
                  <Button
                    asChild
                    className="w-full lg:w-auto rounded-none border-2 border-foreground px-5 py-4 text-xs font-mono font-extrabold uppercase
                            shadow-[4px_4px_0_var(--color-foreground)]!
                            transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-foreground)]! 
                            sm:px-6 sm:py-5 sm:text-sm lg:px-7 lg:py-7 lg:text-base">
                  <a href="#contact">Send Message ↗</a>
                  </Button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};