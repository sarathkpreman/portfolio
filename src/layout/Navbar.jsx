import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 bg-zinc-950 py-5">
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          Sarath K P
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <div className="glass flex items-center gap-1 rounded-full px-2 py-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <Button asChild>
            <a href="#contact">Contact me</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="p-2 text-foreground md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isOpen && (
       <div id="mobile-nav" className="glass-strong absolute top-full left-0 w-full animate-fade-in border-t border-border md:hidden">
          <div className="container mx-auto flex flex-col items-center gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-lg text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}

             <Button asChild>
            <a href="#contact">Contact me</a>
          </Button>
          </div>
        </div>
      )}
    </header>
  );
};