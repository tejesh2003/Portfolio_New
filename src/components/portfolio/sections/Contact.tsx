import { useState } from "react";
import { Copy, Check, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "../effects";
import { SOCIALS } from "../data";
import { socialIcon } from "../icons";
import { SectionHeader } from "./About";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "tejeshchintada22@gmail.com";

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeader eyebrow="Contact" title="Let's build something great." />
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-16 overflow-hidden rounded-3xl grad-border glass-strong p-8 md:p-12">
            <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />

            <div className="relative grid gap-10 md:grid-cols-[1.1fr_1fr]">
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold text-white">Tejesh Chintada</h3>
                <p className="mt-2 text-white/60">Open to Full-Stack, Backend, and SDE roles.</p>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 rounded-xl glass px-4 py-3">
                    <MapPin className="h-4 w-4 text-cyan-300" />
                    <span className="text-white/80 text-sm">Visakhapatnam, India</span>
                  </div>
                  <a href="tel:+918019889691" className="flex items-center gap-3 rounded-xl glass px-4 py-3 hover:bg-white/10 transition-colors">
                    <Phone className="h-4 w-4 text-cyan-300" />
                    <span className="text-white/80 text-sm">+91 80198 89691</span>
                  </a>
                  <div className="flex items-center justify-between gap-3 rounded-xl glass px-4 py-3">
                    <a href={`mailto:${email}`} className="flex items-center gap-3 min-w-0">
                      <Mail className="h-4 w-4 text-cyan-300 flex-none" />
                      <span className="text-white/80 text-sm truncate">{email}</span>
                    </a>
                    <button
                      onClick={onCopy}
                      className="grid h-8 w-8 place-items-center rounded-md bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
                      aria-label="Copy email"
                    >
                      {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2">
                  {SOCIALS.map((s) => {
                    const Icon = socialIcon[s.icon];
                    return (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={s.name}
                        className="grid h-10 w-10 place-items-center rounded-lg glass text-white/70 transition-all hover:text-white hover:-translate-y-0.5"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/30 p-[1px]">
                  <div className="overflow-hidden rounded-2xl bg-[#0b0b12]">
                    <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                      <span className="ml-2 font-mono text-[11px] tracking-wide text-white/50">preferred_contact.ts</span>
                    </div>
                    <div className="p-6">
                    <pre className="overflow-x-auto font-mono text-[12.5px] leading-[1.9] text-white/80">
<code>
<span className="text-fuchsia-300">const</span> <span className="text-cyan-300">reach</span> <span className="text-white/50">=</span> {"{"}{"\n"}
{"  "}<span className="text-indigo-300">email</span><span className="text-white/50">:</span> <span className="text-emerald-300">"{email}"</span><span className="text-white/50">,</span>{"\n"}
{"  "}<span className="text-indigo-300">phone</span><span className="text-white/50">:</span> <span className="text-emerald-300">"+91-80198-89691"</span><span className="text-white/50">,</span>{"\n"}
{"  "}<span className="text-indigo-300">city</span><span className="text-white/50">:</span> <span className="text-emerald-300">"Visakhapatnam, IN"</span><span className="text-white/50">,</span>{"\n"}
{"  "}<span className="text-indigo-300">reply</span><span className="text-white/50">:</span> <span className="text-emerald-300">"within 24 hours"</span><span className="text-white/50">,</span>{"\n"}
{"}"}<span className="text-white/50">;</span>{"\n"}{"\n"}
<span className="text-fuchsia-300">export default</span> <span className="text-cyan-300">reach</span><span className="text-white/50">;</span>
</code>
                    </pre>
                    <a
                      href={`mailto:${email}`}
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(99,102,241,0.6)] transition-transform hover:-translate-y-0.5"
                    >
                      <Mail className="h-4 w-4" /> Send an email
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}