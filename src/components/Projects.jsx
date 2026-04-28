import { useState } from "react";
import { useInView } from "../hooks/useInView";
import PROJECTS from "../data/projects";

function ImageCarousel({ imgs, name }) {
  const [active, setActive] = useState(0);
  return (
    <div className="relative bg-bg-3 rounded-sm overflow-hidden" style={{ aspectRatio: "16/10" }}>
      {/* Images */}
      {imgs.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${name} screenshot ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 ${i === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"}`}
        />
      ))}

      {/* Dots */}
      {imgs.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {imgs.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-[6px] h-[6px] rounded-full transition-all duration-200 ${i === active ? "bg-accent w-4" : "bg-white/40"}`}
              aria-label={`Screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Prev/Next arrows */}
      {imgs.length > 1 && (
        <>
          <button
            onClick={() => setActive((active - 1 + imgs.length) % imgs.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center text-xs hover:bg-black/90 transition-colors z-10"
            aria-label="Previous">‹</button>
          <button
            onClick={() => setActive((active + 1) % imgs.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center text-xs hover:bg-black/90 transition-colors z-10"
            aria-label="Next">›</button>
        </>
      )}

      {/* Screenshot label */}
      <div className="absolute top-3 right-3 font-mono text-[9px] tracking-[0.12em] uppercase bg-black/70 text-white/70 px-2 py-1 rounded-sm z-10">
        {active + 1} / {imgs.length}
      </div>
    </div>
  );
}

function ProjectCard({ p, index }) {
  const [ref, inView] = useInView(0.08);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`proj-card border-b border-border transition-all duration-[800ms] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="bg-bg hover:bg-bg-3 transition-colors duration-300 px-6 md:px-10 py-10 lg:py-12">
        {/* Top meta row */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.1em] text-txt-3">{p.num}</span>
            <span className="w-8 h-px bg-border-2" />
            <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-txt-3">{p.date}</span>
          </div>
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase border border-border-2 text-txt-3 px-3 py-1 rounded-sm">{p.category}</span>
        </div>

        {/* Main two-col layout: alternates image side */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}>

          {/* TEXT side */}
          <div>
            <h3 className="font-display font-extrabold tracking-[-0.03em] mb-1" style={{ fontSize: "clamp(1.7rem,3vw,2.4rem)" }}>
              {p.name}
            </h3>
            <p className="font-mono text-[11px] tracking-[0.08em] uppercase mb-5" style={{ color: p.accent }}>{p.tagline}</p>

            <p className="text-txt-2 text-[0.875rem] leading-[1.8] mb-6">{p.desc}</p>

            {/* Bullets */}
            <ul className="flex flex-col gap-3 mb-7">
              {p.bullets.map((b, i) => {
                const [bold, ...rest] = b.split(" — ");
                return (
                  <li key={b} className="flex gap-3 text-[0.8rem]">
                    <span className="text-accent mt-[3px] shrink-0">→</span>
                    <span className="text-txt-2 leading-[1.7]">
                      <span className="text-txt font-semibold">{bold}</span>
                      {rest.length > 0 && ` — ${rest.join(" — ")}`}
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* Stack chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {p.stack.map(t => (
                <span key={t} className="font-mono text-[10px] px-2 py-1 bg-bg-3 border border-border-2 text-txt-3 rounded-sm">{t}</span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-2">
              {p.links.map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                  className={`font-mono text-[11px] tracking-[0.08em] uppercase px-4 py-[9px] rounded-sm border transition-all duration-200 ${l.primary ? "bg-accent text-black border-accent font-semibold hover:bg-accent-2" : "text-txt-2 border-border-2 hover:text-accent hover:border-accent"}`}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* IMAGE side */}
          <div>
            <ImageCarousel imgs={p.imgs} name={p.name} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView(0.1);
  return (
    <section id="projects" className="px-0 py-0">
      {/* Section header */}
      <div ref={ref} className="px-6 md:px-10 pt-24 pb-10">
        <div className={`flex items-center gap-3 mb-3 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-txt-3">Selected work</span>
          <span className="flex-1 h-px bg-border" />
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-txt-3">{PROJECTS.length} projects</span>
        </div>
        <h2
          className={`font-display font-extrabold tracking-[-0.03em] leading-tight transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ fontSize: "clamp(2rem,4vw,3rem)", transitionDelay: "100ms" }}>
          Projects
        </h2>
      </div>

      {/* Project list */}
      <div className="border-t border-border">
        {PROJECTS.map((p, i) => <ProjectCard key={p.num} p={p} index={i} />)}
      </div>
    </section>
  );
}
