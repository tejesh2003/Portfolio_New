import { Reveal, Tilt } from "../effects";
import { SOCIALS } from "../data";
import { socialIcon } from "../icons";
import { SectionHeader } from "./About";
import { ArrowUpRight } from "lucide-react";

const ACCENT: Record<string, string> = {
  LinkedIn: "from-sky-500 to-blue-600",
  GitHub: "from-zinc-500 to-zinc-800",
  LeetCode: "from-amber-500 to-orange-600",
  CodeChef: "from-amber-700 to-red-700",
  HackerRank: "from-emerald-500 to-teal-600",
};

export function Profiles() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader eyebrow="Coding Profiles" title="Find me across the platforms." />
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOCIALS.map((s, i) => {
            const Icon = socialIcon[s.icon];
            return (
              <Reveal key={s.name} delay={i * 60}>
                <Tilt>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group relative block overflow-hidden rounded-2xl grad-border glass-strong p-6 transition-transform"
                  >
                    <div className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${ACCENT[s.name]} opacity-30 blur-2xl transition-opacity group-hover:opacity-60`} />
                    <div className="relative flex items-center justify-between">
                      <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${ACCENT[s.name]} text-white shadow-lg`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-white/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                    </div>
                    <div className="relative mt-6">
                      <div className="font-display text-xl font-semibold text-white">{s.name}</div>
                      <div className="mt-1 text-sm text-white/50 truncate">{s.href.replace(/^https?:\/\//, "")}</div>
                    </div>
                  </a>
                </Tilt>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}