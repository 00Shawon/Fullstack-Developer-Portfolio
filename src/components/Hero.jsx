import { useInView } from "../hooks/useInView";
import { useCounter } from "../hooks/useCounter";

function Stat({ num, suffix, decimals, label, trigger }) {
  const v = useCounter(num, 1400, decimals, trigger);
  return (
    <div className="text-right">
      <div className="font-display font-extrabold text-accent leading-none tabular-nums" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)" }}>
        {decimals > 0 ? v.toFixed(decimals) : Math.round(v)}{suffix}
      </div>
      <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-txt-3 mt-1">{label}</div>
    </div>
  );
}

const heroLinks = [
  { label: "View Live Work ↗", href:"#projects", primary: true },
  { label: "GitHub", href: "https://github.com/00Shawon" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mehedishawon1/" },
  { label: "Email", href: "mailto:mehedishawon121@gmail.com" },
];

export default function Hero() {
  const [ref, inView] = useInView(0.05);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex flex-col justify-end px-6 md:px-10 pt-28 pb-14 overflow-hidden">
      {/* Grid */}
      <div className="grid-bg absolute inset-0 opacity-[0.25] pointer-events-none" />
      {/* Glow top-right */}
      <div className="absolute pointer-events-none" style={{ top: "-15%", right: "-8%", width: 700, height: 700, background: "radial-gradient(circle, rgba(232,255,90,0.045) 0%, transparent 68%)" }} />
      {/* Glow bottom-left */}
      <div className="absolute pointer-events-none" style={{ bottom: "5%", left: "-10%", width: 400, height: 400, background: "radial-gradient(circle, rgba(0,200,150,0.03) 0%, transparent 70%)" }} />

      {/* Main layout: left text, right photo */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">

        {/* LEFT */}
        <div className="flex-1">
          {/* Eyebrow */}
          <div className={`flex items-center gap-3 mb-6 transition-all duration-[800ms] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`} style={{ transitionDelay: "80ms" }}>
            <span className="w-7 h-px bg-teal block" />
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-teal">Available for freelance</span>
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          </div>

          {/* Name */}
          <h1
            className={`font-display font-extrabold leading-[0.92] tracking-[-0.035em] mb-5 transition-all duration-[800ms] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
            style={{ fontSize: "clamp(3.2rem,9.5vw,8.5rem)", transitionDelay: "180ms" }}>
            Mehedi<br />Hassan<br /><span className="text-accent">Shawon</span>
          </h1>

          {/* Role tags */}
          <div
            className={`flex flex-wrap gap-2 mb-6 transition-all duration-[800ms] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "280ms" }}>
            {["Fullstack Developer", "React Specialist", "MERN Stack", "Data Journalist"].map(t => (
              <span key={t} className="font-mono text-[10px] tracking-[0.1em] uppercase border border-border-2 text-txt-2 px-3 py-1 rounded-sm">{t}</span>
            ))}
          </div>

          {/* Subtitle */}
          <p
            className={`text-txt-2 leading-[1.75] mb-10 transition-all duration-[800ms] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ fontSize: "clamp(0.9rem,1.6vw,1.1rem)", maxWidth: 500, transitionDelay: "360ms" }}>
            Fullstack developer with a journalist's eye for user experience. I build fast, accessible web products — from multi-role booking platforms to geospatial data stories. 6 live projects shipped.
          </p>

          {/* Links */}
          <div
            className={`flex flex-wrap gap-2 mb-12 transition-all duration-[800ms] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: "440ms" }}>
            {heroLinks.map(l => (
              <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className={`font-mono text-[11px] tracking-[0.08em] uppercase px-4 py-[9px] rounded-sm border transition-all duration-200 ${l.primary ? "bg-accent text-black border-accent font-semibold hover:bg-accent-2 hover:border-accent-2" : "text-txt-2 border-border-2 hover:text-accent hover:border-accent"}`}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Stats */}
          <div
            className={`flex gap-10 transition-all duration-[800ms] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "540ms" }}>
            <Stat num={6} suffix="+" decimals={0} label="Projects Shipped" trigger={inView} />
            <Stat num={6.5} suffix="" decimals={1} label="IELTS Band" trigger={inView} />
            <Stat num={3} suffix="+" decimals={0} label="Years Coding" trigger={inView} />
          </div>
        </div>

        {/* RIGHT — Profile photo */}
        <div
          className={`lg:w-[340px] xl:w-[380px] shrink-0 transition-all duration-[1000ms] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "300ms" }}
        >
          {/* Photo card */}
          <div className="relative">
            {/* Accent border frame */}
            <div className="absolute -top-3 -right-3 w-full h-full border border-accent/30 rounded-sm pointer-events-none" />
            <div className="absolute -top-1.5 -right-1.5 w-full h-full border border-accent/15 rounded-sm pointer-events-none" />

            {/* Photo */}
            <div className="img-zoom rounded-sm border border-border-2 bg-bg-3">
              <img
                src="/MehediShawon.jpg"
                alt="Sm. Mehedi Hassan Shawon"
                loading="eager"
                className="w-full object-cover object-top rounded-sm"
                style={{ aspectRatio: "3/4", filter: "contrast(1.05) brightness(0.97)" }}
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-accent text-black px-4 py-2 rounded-sm shadow-lg">
              <div className="font-mono text-[10px] tracking-[0.1em] uppercase font-semibold">Open to work</div>
              <div className="font-display text-[11px] font-bold">Fiverr · Upwork · LinkedIn</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "1000ms" }}>
        <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-txt-3">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-txt-3 to-transparent animate-float" />
      </div>
    </section>
  );
}
