import { Reveal, Tilt } from "../effects";
import { SKILL_GROUPS } from "../data";
import { SectionHeader } from "./About";

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader eyebrow="Skills" title="A toolbox tuned for scale." />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <Tilt>
                <div className="group relative grad-border glass-strong rounded-2xl p-6 overflow-hidden">
                  <div
                    className={`pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${g.tint} blur-xl`}
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        "radial-gradient(300px circle at var(--gx,50%) var(--gy,50%), rgba(167,139,250,0.18), transparent 60%)",
                    }}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${g.tint} text-white/90 font-mono text-sm`}>
                        {g.title.slice(0, 2).toUpperCase()}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-white">{g.title}</h3>
                    </div>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {g.skills.map((s) => (
                        <li
                          key={s}
                          className="rounded-full glass px-3 py-1 text-xs text-white/80 transition-colors hover:text-white hover:bg-white/10"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}