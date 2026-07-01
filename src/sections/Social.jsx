import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { CgMail } from "react-icons/cg";

export const Social = () => {
  return (
    <section id="social" className="mt-10 flex w-full justify-items-start">
      <div className="flex items-center gap-3">
        <span
          className="
            select-none
            font-mono
            text-[12px]
            tracking-wide
            text-muted-foreground
          "
        >
          SOCIAL.json
        </span>

        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border-2
            border-foreground
            bg-background
            shadow-[3px_3px_0_var(--color-foreground)]
            transition-all
            duration-200
            hover:-translate-y-1
            hover:shadow-[5px_5px_0_var(--color-foreground)]
            sm:h-11
            sm:w-11
          "
        >
          <AiFillLinkedin className="h-6 w-6 text-foreground transition-colors hover:text-indigo-600" />
        </a>

        <a
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border-2
            border-foreground
            bg-background
            shadow-[3px_3px_0_var(--color-foreground)]
            transition-all
            duration-200
            hover:-translate-y-1
            hover:shadow-[5px_5px_0_var(--color-foreground)]
            sm:h-11
            sm:w-11
          "
        >
          <AiFillGithub className="h-6 w-6 text-foreground transition-colors hover:text-indigo-600" />
        </a>

        <a
          href="mailto:your-email@example.com"
          aria-label="Email"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border-2
            border-foreground
            bg-background
            shadow-[3px_3px_0_var(--color-foreground)]
            transition-all
            duration-200
            hover:-translate-y-1
            hover:shadow-[5px_5px_0_var(--color-foreground)]
            sm:h-11
            sm:w-11
          "
        >
          <CgMail className="h-6 w-6 text-foreground transition-colors hover:text-indigo-600" />
        </a>
      </div>
    </section>
  );
};