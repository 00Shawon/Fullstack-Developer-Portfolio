import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Selected Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between transition-all duration-400 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-xl border-b border-border"
          : ""
      }`}
    >
      {/* Brand */}
    <a
  href="#hero"
  className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent font-semibold"
>
  STORYLINE<span className="text-txt-3 tracking-[0.12em]">BD</span>
</a>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="font-mono text-[11px] tracking-[0.1em] uppercase text-txt-2 hover:text-accent transition-colors duration-200"
          >
            {l.label}
          </a>
        ))}
      </div>

      <a
        href="mailto:mehedishawon121@gmail.com"
        className="hidden md:block font-mono text-[11px] tracking-[0.1em] uppercase bg-accent text-black px-4 py-[9px] rounded-sm font-semibold hover:bg-accent-2 transition-colors duration-200"
      >
        Start a Project
      </a>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-[5px]"
        aria-label="menu"
      >
        <span
          className={`block w-5 h-px bg-txt transition-all duration-300 ${
            open ? "rotate-45 translate-y-[6px]" : ""
          }`}
        />
        <span
          className={`block w-5 h-px bg-txt transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-5 h-px bg-txt transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-bg-2 border-b border-border flex flex-col md:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-[11px] tracking-[0.12em] uppercase text-txt-2 hover:text-accent px-6 py-4 border-b border-border transition-colors"
            >
              {l.label}
            </a>
          ))}

          <a
            href="mailto:mehedishawon121@gmail.com"
            className="font-mono text-[11px] tracking-[0.1em] uppercase bg-accent text-black px-6 py-4 font-semibold"
          >
            Start a Project
          </a>
        </div>
      )}
    </nav>
  );
}