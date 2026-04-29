import { useInView } from "../hooks/useInView";

const FACTS = [
  { label: "Location", value: "Khulna, Bangladesh" },
  { label: "Education", value: "MSS Mass Communication — Khulna University, 2023" },
  { label: "Background", value: "Journalist → Fullstack Developer" },
  { label: "English", value: "IELTS 6.5 — B2 Competent" },
  { label: "Languages", value: "Bangla (Native) · English · Hindi · Urdu" },
  { label: "Availability", value: "Open for freelance & remote work" },
  { label: "Platforms", value: "Fiverr · Upwork · LinkedIn" },
];

const TIMELINE = [
  { year: "2021", label: "Shipped first data journalism project — The Drowning Village (Sundarbans)" },
  { year: "2023", label: "Completed MSS in Mass Communication & Journalism, Khulna University" },
  { year: "2024", label: "Transitioned to fullstack development — built Skill-Swap and The Gallery" },
  { year: "2025", label: "Shipped Wedding platform with decolonial multilingual architecture" },
  { year: "2026", label: "Launched TripHub with Stripe payments & 3-role dashboards. Open for clients." },
];

export default function About() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="about" ref={ref} className="bg-bg-2 border-t border-border px-6 md:px-10 py-24">
      {/* Header */}
      <div className={`flex items-center gap-3 mb-3 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-txt-3">About</span>
        <span className="flex-1 h-px bg-border" />
      </div>
      <h2
        className={`font-display font-extrabold tracking-[-0.03em] leading-tight mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        style={{ fontSize: "clamp(2rem,4vw,3rem)", transitionDelay: "100ms" }}>
        A developer who<br /><span className="text-accent">thinks like a journalist.</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* LEFT: bio + timeline */}
        <div>
          <p
            className={`text-txt-2 text-sm leading-[1.85] mb-6 transition-all duration-700 prose-width ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: "200ms" }}>
            I started as a journalist — conducting field interviews, synthesizing complex data, and translating it into stories that non-experts could act on. I brought that same discipline into software: every project I build is designed to communicate, not just function.
          </p>
          <p className="text-txt-2 text-sm leading-[1.8] mb-10 prose-width">
            That journalism background changed how I think about UI. A nav menu is information hierarchy. A landing page is an argument. A dashboard is a story about data. I build interfaces the same way I used to write articles — with a clear question, a clear answer, and nothing in between that doesn't earn its place.
          </p>

          {/* Timeline */}
          <div
            className={`flex flex-col gap-0 border-l border-border-2 pl-5 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "300ms" }}>
            {TIMELINE.map((t, i) => (
              <div key={t.year} className="relative pb-6 last:pb-0">
                <div className="absolute -left-[21px] top-[4px] w-[9px] h-[9px] rounded-full border border-accent bg-bg-2" />
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-accent mb-1">{t.year}</div>
                <div className="text-txt-2 text-[0.825rem] leading-[1.65]">{t.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: facts table */}
        <div
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "250ms" }}>
          <div className="border border-border flex flex-col gap-px bg-border">
            {FACTS.map(f => (
              <div key={f.label} className="bg-bg-2 flex gap-4 px-6 py-4">
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-txt-3 w-24 shrink-0 pt-[2px]">{f.label}</span>
                <span className="font-mono text-[11px] text-txt-2 leading-[1.6]">{f.value}</span>
              </div>
            ))}
          </div>

          {/* Photo small repeat */}
          <div className="mt-6 flex items-center gap-4 p-5 border border-border bg-bg rounded-sm">
            <img src="/MehediShawon.jpg" alt="Shawon" className="w-14 h-14 rounded-full object-cover object-top border-2 border-accent/30 shrink-0" />
            <div>
              <div className="font-display font-bold text-sm">Sm. Mehedi Hassan Shawon</div>
              <div className="font-mono text-[10px] tracking-[0.08em] text-txt-2 mt-0.5">Fullstack Developer · Khulna, Bangladesh</div>
              <div className="font-mono text-[10px] tracking-[0.08em] text-teal mt-1">● Available for work</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
