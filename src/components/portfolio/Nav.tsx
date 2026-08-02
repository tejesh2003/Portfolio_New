import { useEffect, useState } from "react";
import { NAV } from "./data";

export function Nav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    NAV.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="group flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full grad-border glass shadow-[0_0_14px_rgba(99,102,241,0.5)]">
            <span className="text-xs font-bold tracking-wider text-cyan-300">TC</span>
          </span>
          <span className="hidden sm:inline text-white/90">Tejesh<span className="text-cyan-400">.</span></span>
        </a>

        <nav className={`hidden md:block rounded-full glass-strong px-2 py-1.5 transition-all ${scrolled ? "shadow-[0_10px_40px_-20px_rgba(99,102,241,0.6)]" : ""}`}>
          <ul className="flex items-center gap-1">
            {NAV.map((n) => {
              const isActive = active === n.id;
              return (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                      isActive ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/30 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]" />
                    )}
                    {n.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full grad-border glass px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          Let's talk
          <span className="text-gradient">→</span>
        </a>

        <button
          className="md:hidden grid h-10 w-10 place-items-center rounded-lg glass text-white"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute inset-x-0 top-0 h-[2px] bg-white transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`absolute inset-x-0 bottom-0 h-[2px] bg-white transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-6 mt-3 rounded-2xl glass-strong p-3 animate-fade-in">
          <ul className="grid gap-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-4 py-2 text-sm ${active === n.id ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}