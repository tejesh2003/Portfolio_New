import { useEffect, useRef, useState, type ReactNode } from "react";

/* Cursor spotlight — follows mouse via CSS vars */
export function CursorSpotlight() {
  useEffect(() => {
    const el = document.getElementById("cursor-spotlight");
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return <div id="cursor-spotlight" className="spotlight" aria-hidden />;
}

/* Cursor follower dot (hidden on touch) */
export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = 0, y = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx - 16}px, ${ry - 16}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); };
  }, []);
  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block h-2 w-2 rounded-full bg-white mix-blend-difference" aria-hidden />
      <div ref={ringRef} className="pointer-events-none fixed top-0 left-0 z-[99] hidden md:block h-8 w-8 rounded-full border border-white/40 mix-blend-difference" aria-hidden />
    </>
  );
}

/* Aurora background */
export function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden [transform:translateZ(0)] [backface-visibility:hidden]" aria-hidden>
      <div className="absolute inset-0 bg-[#09090b]" />
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_60%)] blur-3xl animate-aurora [transform:translateZ(0)]" />
      <div className="absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.28),transparent_60%)] blur-3xl animate-aurora [transform:translateZ(0)]" style={{ animationDelay: "-6s" }} />
      <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(103,232,249,0.22),transparent_60%)] blur-3xl animate-aurora [transform:translateZ(0)]" style={{ animationDelay: "-12s" }} />
      <div className="absolute inset-0 bg-noise opacity-[0.35] mix-blend-overlay" />
    </div>
  );
}

/* Floating particles */
export function Particles({ count = 24 }: { count?: number }) {
  const items = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((_, i) => {
        const left = (i * 37) % 100;
        const size = 2 + ((i * 13) % 4);
        const delay = (i * 0.9) % 12;
        const dur = 18 + ((i * 7) % 20);
        return (
          <span
            key={i}
            className="absolute rounded-full bg-white/50"
            style={{
              left: `${left}%`,
              bottom: `-10px`,
              width: size,
              height: size,
              filter: "blur(0.5px)",
              animation: `particle ${dur}s linear ${delay}s infinite`,
              boxShadow: "0 0 8px rgba(167,139,250,0.6)",
            }}
          />
        );
      })}
    </div>
  );
}

/* Scroll progress bar */
export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 shadow-[0_0_12px_rgba(99,102,241,0.7)] transition-[width] duration-100"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}

/* Scroll reveal */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("in-view");
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

/* Loading screen */
export function LoadingScreen() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-[#09090b] transition-opacity duration-700 ${gone ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      aria-hidden={gone}
    >
      <div className="relative">
        <div className="absolute inset-0 -m-8 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.35),transparent_70%)] blur-2xl animate-pulse-glow" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl grad-border glass-strong">
          <span className="font-display text-2xl font-semibold text-gradient">TC</span>
        </div>
        <div className="mt-6 h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/3 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 animate-[shimmer_1s_linear_infinite]" style={{ backgroundSize: "200% 100%" }} />
        </div>
      </div>
    </div>
  );
}

/* Scroll to top */
export function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full grad-border glass-strong text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)] transition-transform hover:-translate-y-1"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5"><path d="M12 19V5m0 0-6 6m6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </button>
  );
}

/* Magnetic wrapper */
export function Magnetic({ children, strength = 0.25, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const onLeave = () => { el.style.transform = "translate(0,0)"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [strength]);
  return <div ref={ref} className={`inline-block transition-transform duration-200 ease-out ${className}`}>{children}</div>;
}

/* Tilt card */
export function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1000px) rotateX(${-py * 6}deg) rotateY(${px * 8}deg) translateZ(0)`;
      el.style.setProperty("--gx", `${(px + 0.5) * 100}%`);
      el.style.setProperty("--gy", `${(py + 0.5) * 100}%`);
    };
    const onLeave = () => { el.style.transform = "perspective(1000px) rotateX(0) rotateY(0)"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);
  return <div ref={ref} className={`tilt-card ${className}`}>{children}</div>;
}

/* Animated counter */
export function Counter({ to, suffix = "", duration = 1500 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(to * eased));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      io.disconnect();
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* Typewriter */
export function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[i % words.length];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDeleting(false); setI((v) => v + 1); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);
  return (
    <span className="inline-flex items-baseline">
      <span className="text-gradient font-medium">{text}</span>
      <span className="ml-1 inline-block h-[1em] w-[2px] translate-y-[2px] bg-indigo-400 animate-blink" />
    </span>
  );
}