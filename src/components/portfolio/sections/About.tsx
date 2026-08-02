import { GraduationCap, MapPin, Briefcase, Sparkles } from "lucide-react";
import { Reveal } from "../effects";

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader eyebrow="About" title="Engineer by craft, builder by heart." />
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="grad-border glass-strong rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-3 text-white/60 font-mono text-xs uppercase tracking-[0.25em]">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/40" />
              Profile
            </div>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              I'm a Full-Stack Software Development Engineer experienced in building scalable
              applications, optimizing backend systems, and delivering clean user experiences.
              I care about the craft — from the shape of an API to the last pixel of a transition.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Currently shipping resilient microservices and product features at Finstack,
              with a background in high-performance frontends and pragmatic system design.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <InfoRow icon={<MapPin className="h-4 w-4" />} label="Location" value="Visakhapatnam, India" />
              <InfoRow icon={<Briefcase className="h-4 w-4" />} label="Role" value="Full-Stack SDE" />
              <InfoRow icon={<Sparkles className="h-4 w-4" />} label="Focus" value="Scalable systems" />
              <InfoRow icon={<GraduationCap className="h-4 w-4" />} label="CGPA" value="8.0 / 10" />
            </div>
          </Reveal>

          <Reveal delay={120} className="grad-border glass rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-3 text-white/60 font-mono text-xs uppercase tracking-[0.25em]">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/40" />
              Education
            </div>
            <div className="mt-6">
              <div className="text-xs font-mono text-cyan-300">2021 — 2025</div>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                Indian Institute of Information Technology, Nagpur
              </h3>
              <p className="mt-2 text-white/70">Bachelor of Technology · Computer Science and Engineering</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="grid place-items-center h-16 w-16 rounded-2xl grad-border glass-strong">
                  <span className="font-display text-xl font-semibold text-gradient">8.0</span>
                </div>
                <div>
                  <div className="text-sm text-white/60">Cumulative GPA</div>
                  <div className="text-white font-medium">out of 10</div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {["DSA", "Systems", "OS", "DBMS", "Networks", "OOP"].map((k) => (
                <span key={k} className="rounded-full glass px-3 py-1 text-center text-xs text-white/70">{k}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl glass px-4 py-3">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-cyan-300">{icon}</span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">{label}</div>
        <div className="text-sm text-white font-medium">{value}</div>
      </div>
    </div>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-white/50">
        <span className="h-px w-8 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight text-white">
        {title.split(" ").map((w, i) => (
          <span key={i} className={i % 3 === 1 ? "text-gradient" : ""}>{w}{" "}</span>
        ))}
      </h2>
      {subtitle && <p className="mt-5 text-lg text-white/60">{subtitle}</p>}
    </div>
  );
}