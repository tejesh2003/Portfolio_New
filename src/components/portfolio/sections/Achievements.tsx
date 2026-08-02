import { Counter, Reveal, Tilt } from "../effects";
import { ACHIEVEMENTS, CERTIFICATIONS } from "../data";
import { SectionHeader } from "./About";
import { Award } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader eyebrow="Achievements" title="Numbers that speak for the work." />
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.label} delay={i * 60}>
              <Tilt>
                <div className="grad-border glass-strong rounded-2xl p-8 relative overflow-hidden">
                  <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500/40 to-fuchsia-500/40 blur-2xl" />
                  <div className="relative">
                    <div className="font-display text-5xl md:text-6xl font-semibold text-gradient">
                      <Counter to={a.value} suffix={a.suffix} />
                    </div>
                    <div className="mt-3 text-sm text-white/70">{a.label}</div>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <Reveal>
            <SectionHeader eyebrow="Certifications" title="Continuously learning." />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {CERTIFICATIONS.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="group grad-border glass-strong rounded-2xl p-6 flex items-center gap-5 transition-transform hover:-translate-y-1">
                  <div className={`grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br ${c.accent} text-white shadow-lg`}>
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{c.title}</h3>
                    <p className="text-sm text-white/60">{c.org}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}