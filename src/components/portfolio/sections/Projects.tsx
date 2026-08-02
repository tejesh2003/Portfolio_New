import { useEffect, useState } from "react";
import { ArrowUpRight, Github, X } from "lucide-react";
import { Reveal, Tilt } from "../effects";
import { PROJECTS } from "../data";
import { SectionHeader } from "./About";

type Project = (typeof PROJECTS)[number];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader eyebrow="Selected Work" title="Projects with real engineering behind them." />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <Tilt>
                <button
                  onClick={() => setActive(p)}
                  className="group text-left w-full grad-border glass-strong rounded-2xl overflow-hidden transition-transform"
                >
                  <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.accent}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_50%)]" />
                    <div className="absolute inset-0 bg-grid opacity-40" />
                    <div className="absolute inset-0 flex items-end p-5">
                      <div className="font-display text-3xl font-semibold text-white drop-shadow-lg">
                        {p.name}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-medium">{p.tagline}</h3>
                      <ArrowUpRight className="h-4 w-4 text-white/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                    </div>
                    <p className="mt-2 text-sm text-white/60 line-clamp-3">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span key={s} className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[11px] text-white/70">{s}</span>
                      ))}
                    </div>
                  </div>
                </button>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 animate-fade-in touch-none"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[82vh] sm:max-h-[88vh] flex flex-col overflow-hidden rounded-3xl grad-border glass-strong animate-fade-up shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full glass text-white transition-transform hover:scale-105"
        >
          <X className="h-5 w-5" />
        </button>

        <div className={`relative shrink-0 aspect-[16/7] sm:aspect-[16/8] bg-gradient-to-br ${project.accent}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_50%)]" />
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="pointer-events-none absolute inset-0 flex items-end p-5 sm:p-8">
            <div className="pr-10">
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-white/80 truncate">{project.tagline}</div>
              <h3 className="mt-0.5 sm:mt-1 font-display text-2xl sm:text-4xl font-semibold text-white">{project.name}</h3>
            </div>
          </div>
        </div>

        <div className="bg-[#0b0b12] p-5 sm:p-8 overflow-y-auto flex-1 scroll-shadow-hide">
          <p className="text-white/75 text-sm sm:text-lg leading-relaxed">{project.description}</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <div key={h} className="flex items-start gap-2.5 rounded-xl glass px-3.5 py-2.5 text-xs sm:text-sm text-white/80">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
                {h}
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.name === "DevTinder" && (
              <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[11px] sm:text-xs text-white/80">Express</span>
            )}
            {project.stack.map((s) => (
              <span key={s} className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[11px] sm:text-xs text-white/80">{s}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full grad-border glass px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-white transition-transform hover:-translate-y-0.5">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}