import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Download, Eye, FileText, Mail, X } from "lucide-react";
import { Magnetic, Particles, Typewriter } from "../effects";
import { ROLES, SOCIALS } from "../data";
import { socialIcon } from "../icons";

const RESUME_VIEW_URL = "https://drive.google.com/file/d/1Vo7Fh2BGPf_4XohojDY4v0m2NjZeHoQv/view?usp=sharing";
const RESUME_DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1Vo7Fh2BGPf_4XohojDY4v0m2NjZeHoQv";

function ResumeModal({ onClose }: { onClose: () => void }) {
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
        className="relative w-full max-w-xl max-h-[85vh] sm:max-h-[90vh] flex flex-col overflow-hidden rounded-3xl grad-border glass-strong animate-fade-up shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full glass text-white transition-transform hover:scale-105"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative shrink-0 aspect-[16/7] sm:aspect-[16/8] bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_50%)]" />
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="pointer-events-none absolute inset-0 flex items-end p-5 sm:p-8">
            <div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-white/80">PDF · Updated 2026</div>
              <h3 className="mt-0.5 sm:mt-1 font-display text-2xl sm:text-4xl font-semibold text-white">Resume</h3>
            </div>
          </div>
        </div>

        <div className="bg-[#0b0b12] p-5 sm:p-8 overflow-y-auto flex-1 scroll-shadow-hide">
          <p className="text-white/75 text-sm sm:text-lg leading-relaxed">
            Grab the latest version of my resume. View it online or download a copy to keep offline.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <a
              href={RESUME_VIEW_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              <Eye className="h-4 w-4" /> View Resume
            </a>
            <a
              href={RESUME_DOWNLOAD_URL}
              download
              className="inline-flex items-center gap-2 rounded-full grad-border glass px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {[
              "Full-stack engineering experience",
              "Production-grade projects",
              "Open-source & competitive coding",
              "AWS Cloud Practitioner certified",
            ].map((h) => (
              <div key={h} className="flex items-start gap-2.5 rounded-xl glass px-3.5 py-2.5 text-xs sm:text-sm text-white/80">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
                {h}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumeButton() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full grad-border glass px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
      >
        <FileText className="h-4 w-4" />
        Resume
      </button>
      {open && mounted && createPortal(
        <ResumeModal onClose={() => setOpen(false)} />,
        document.body
      )}
    </>
  );
}


export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-32 pb-24">
      <Particles count={28} />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            Available for opportunities
          </div>

          <p className="animate-fade-up mt-8 font-mono text-sm text-white/60" style={{ animationDelay: "80ms" }}>
            Hi, I'm
          </p>

          <h1
            className="animate-fade-up mt-3 font-display text-[clamp(3rem,9vw,7.5rem)] font-semibold leading-[0.95] tracking-tight text-white"
            style={{ animationDelay: "160ms" }}
          >
            Tejesh <span className="text-gradient animate-gradient bg-[linear-gradient(120deg,#7cc4ff,#a78bfa,#67e8f9,#7cc4ff)] bg-clip-text text-transparent">Chintada</span>
          </h1>

          <p
            className="animate-fade-up mt-6 text-lg md:text-2xl text-white/80"
            style={{ animationDelay: "240ms" }}
          >
            Full-Stack Software Development Engineer &nbsp;·&nbsp; <Typewriter words={ROLES} />
          </p>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-2xl text-base md:text-lg text-white/60"
            style={{ animationDelay: "320ms" }}
          >
            Passionate about building scalable applications, solving challenging engineering problems,
            and crafting exceptional product experiences with modern web technologies.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "400ms" }}
          >
            <Magnetic strength={0.2}>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)] transition-transform hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <ResumeButton />
            </Magnetic>
            <Magnetic strength={0.2}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-white/90 transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </Magnetic>
          </div>

          <div
            className="animate-fade-up mt-10 flex items-center justify-center gap-3"
            style={{ animationDelay: "480ms" }}
          >
            {SOCIALS.map((s) => {
              const Icon = socialIcon[s.icon];
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.name}
                  className="group grid h-11 w-11 place-items-center rounded-xl glass text-white/70 transition-all hover:text-white hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.6)]"
                >
                  <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <span className="relative h-8 w-[2px] overflow-hidden rounded-full bg-white/10">
              <span className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-cyan-400 to-transparent animate-[particle_2s_linear_infinite]" style={{ animation: "shimmer 2s linear infinite", backgroundSize: "100% 300%" }} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
