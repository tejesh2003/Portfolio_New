import { Reveal } from "../effects";
import { EXPERIENCE } from "../data";
import { SectionHeader } from "./About";

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader eyebrow="Experience" title="A track record shipping real things." />
        </Reveal>

        <div className="relative mt-20">
          <div className="pointer-events-none absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          <ol className="space-y-16">
            {EXPERIENCE.map((exp, i) => {
              const rightSide = i % 2 === 1;
              return (
                <li key={exp.company} className="relative md:grid md:grid-cols-2 md:gap-12">
                  <span className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 grid place-items-center">
                    <span className="absolute h-8 w-8 rounded-full bg-indigo-500/30 blur-md animate-pulse-glow" />
                    <span className="relative h-4 w-4 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 ring-4 ring-[#09090b]" />
                  </span>

                  {!rightSide && <Card exp={exp} />}
                  {!rightSide && <div className="hidden md:block" />}
                  {rightSide && <div className="hidden md:block" />}
                  {rightSide && <Card exp={exp} />}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Card({ exp }: { exp: (typeof EXPERIENCE)[number] }) {
  return (
    <Reveal className="pl-14 md:pl-0">
      <div className="grad-border glass-strong rounded-2xl p-6 md:p-8 transition-transform hover:-translate-y-1">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-2xl font-semibold text-white">{exp.company}</h3>
          <span className="font-mono text-xs text-cyan-300">{exp.period}</span>
        </div>
        <p className="mt-1 text-white/70">{exp.role}</p>
        <ul className="mt-5 space-y-2.5">
          {exp.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm text-white/75">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}