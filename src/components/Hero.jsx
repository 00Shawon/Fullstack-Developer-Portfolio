import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { useCounter } from "../hooks/useCounter";

function Stat({ num, suffix, decimals, label, trigger }) {
  const v = useCounter(num, 1400, decimals, trigger);

  return (
    <div className="text-right">
      <div
        className="font-display font-extrabold text-accent leading-none tabular-nums"
        style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)" }}
      >
        {decimals > 0 ? v.toFixed(decimals) : Math.round(v)}
        {suffix}
      </div>

      <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-txt-3 mt-1">
        {label}
      </div>
    </div>
  );
}

const heroLinks = [
  { label: "Explore Our Work →", href: "#projects", primary: true },
  { label: "Start a Project", href: "mailto:mehedishawon121@gmail.com" },
];

export default function Hero() {
  const [ref, inView] = useInView(0.05);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-end px-6 md:px-10 pt-28 pb-14 overflow-hidden"
    >
      {/* Grid */}
      <div className="grid-bg absolute inset-0 opacity-[0.25] pointer-events-none" />

      {/* Glow top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-15%",
          right: "-8%",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(232,255,90,0.045) 0%, transparent 68%)",
        }}
      />

      {/* Glow bottom-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "5%",
          left: "-10%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(0,200,150,0.03) 0%, transparent 70%)",
        }}
      />

      {/* Main layout */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">

        {/* LEFT */}
        <div className="flex-1">

          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-[800ms] ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-7"
            }`}
            style={{ transitionDelay: "80ms" }}
          >
            <span className="w-7 h-px bg-teal block" />

            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-teal">
              Independent Digital Storytelling Practice
            </span>

            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          </div>

          {/* Main headline */}
          <h1
            className="font-display font-extrabold leading-[0.92] tracking-[-0.035em] mb-5"
            style={{ fontSize: "clamp(3.2rem,9.5vw,8.5rem)" }}
          >
            {["Stories", "that", "matter."].map((word, i) => (
              <motion.span
                key={word}
                className="block overflow-hidden"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.15 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {i === 2 ? (
                  <span className="text-accent">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          {/* Positioning tags */}
          <div
            className={`flex flex-wrap gap-2 mb-6 transition-all duration-[800ms] ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "280ms" }}
          >
            {[
              "Digital Storytelling",
              "Interactive Web",
              "Visual Communication",
              "Web Development",
            ].map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] tracking-[0.1em] uppercase border border-border-2 text-txt-2 px-3 py-1 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            className={`text-txt-2 leading-[1.75] mb-10 transition-all duration-[800ms] ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{
              fontSize: "clamp(0.9rem,1.6vw,1.1rem)",
              maxWidth: 560,
              transitionDelay: "360ms",
            }}
          > We combine storytelling, visual communication, and web technology
            to turn ideas, identities, and stories into interactive digital
            experiences.
          </p>

          {/* Links */}
          <div
            className={`flex flex-wrap gap-2 mb-12 transition-all duration-[800ms] ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "440ms" }}
          >
            {heroLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-mono text-[11px] tracking-[0.08em] uppercase px-4 py-[9px] rounded-sm border transition-all duration-200 ${
                  link.primary
                    ? "bg-accent text-black border-accent font-semibold hover:bg-accent-2 hover:border-accent-2"
                    : "text-txt-2 border-border-2 hover:text-accent hover:border-accent"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Stats */}
          <div
            className={`flex gap-10 transition-all duration-[800ms] ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "540ms" }}
          >
            <Stat
              num={6}
              suffix="+"
              decimals={0}
              label="Digital Projects"
              trigger={inView}
            />

            <Stat
              num={4}
              suffix=""
              decimals={0}
              label="Client Countries"
              trigger={inView}
            />

            <Stat
              num={3}
              suffix="+"
              decimals={0}
              label="Years Coding"
              trigger={inView}
            />
          </div>
        </div>

        {/* RIGHT — Profile photo */}
        <div
          className={`lg:w-[340px] xl:w-[380px] shrink-0 transition-all duration-[1000ms] ${
            inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="relative">

            {/* Accent border frame */}
            <div className="absolute -top-3 -right-3 w-full h-full border border-accent/30 rounded-sm pointer-events-none" />

            <div className="absolute -top-1.5 -right-1.5 w-full h-full border border-accent/15 rounded-sm pointer-events-none" />

            {/* Photo */}
            <div className="img-zoom rounded-sm border border-border-2 bg-bg-3">
              <img
                src="/MehediShawon.jpg"
                alt="Sm. Mehedi Hassan Shawon — Founder of Storyline"
                loading="eager"
                className="w-full object-cover object-top rounded-sm"
                style={{
                  aspectRatio: "3/4",
                  filter: "contrast(1.05) brightness(0.97)",
                }}
              />
            </div>

            {/* Founder badge */}
            <div className="absolute -bottom-4 -left-4 bg-accent text-black px-4 py-2 rounded-sm shadow-lg">
              <div className="font-mono text-[10px] tracking-[0.1em] uppercase font-semibold">
                Storyline
              </div>

              <div className="font-display text-[11px] font-bold">
                Founder · Digital Storytelling
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1000ms" }}
      >
        <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-txt-3">
          scroll
        </span>

        <div className="w-px h-8 bg-gradient-to-b from-txt-3 to-transparent animate-float" />
      </div>
    </section>
  );
}