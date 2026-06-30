import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "ABOUT" },
  { href: "#certificates", label: "CERT" },
  { href: "#contact", label: "CONTACT" },
  { href: "#works", label: "WORKS" },
  { href: "#experience", label: "EXP" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky z-50 top-0 border-b-2 border-foreground bg-background right-0 left-0 py-5">
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a
          href="#"
          className="font-display text-lg uppercase tracking-tight font-bold"
        >
          SARATH <span className="text-primary">K.P</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <div className="flex items-center border-2 border-foreground">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`border-r border-foreground px-4 py-2.5 text-xs uppercase tracking-wide font-mono last:border-0 hover:bg-foreground hover:text-background  text-muted-foreground }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <Button asChild className=" rounded-none border-2 border-foreground font-mono text-xs uppercase shadow-[4px_4px_0_var(--color-foreground)]! hover:shadow-[2px_2px_0_var(--color-foreground)]! hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
            <a href="#contact">HIRE ME ↗</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="border-2 border-foreground p-2 text-foreground md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isOpen && (
       <div id="mobile-nav" className="absolute top-full left-0 w-full animate-fade-in border-t-2 border-foreground bg-highlight md:hidden">
          <div className="container mx-auto flex flex-col items-center gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 font-display text-2xl uppercase text-foreground hover:text-background"
                onClick={()=> setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

             <Button asChild>
            <a href="`#contact`" onClick={() => setIsOpen(false)} className="rounded-none border-2 border-foreground font-mono text-xs uppercase shadow-[4px_4px_0_var(--color-foreground)]! hover:shadow-[2px_2px_0_var(--color-foreground)]! hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
              CONTACT ME
            </a>
          </Button>
          </div>
        </div>
      )}
    </header>
  );
};