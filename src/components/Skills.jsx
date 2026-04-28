import { useInView } from "../hooks/useInView";

const GROUPS = [
  {
    label: "Expertise", color: "text-accent",
    tags: ["JavaScript ES6+", "React.js", "Firebase", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    label: "Backend", color: "text-teal",
    tags: ["Node.js", "Express.js", "MongoDB", "REST API", "JWT", "Stripe API"],
  },
  {
    label: "Frontend+", color: "text-coral",
    tags: ["Next.js", "Framer Motion", "React Query", "TanStack Query", "Axios", "Leaflet.js"],
  },
  {
    label: "Data & Viz", color: "text-accent",
    tags: ["Chart.js", "Geospatial Data", "Scrollytelling", "Multimedia UX"],
  },
  {
    label: "Tools", color: "text-teal",
    tags: ["Git & GitHub", "VS Code", "Vercel", "Netlify", "npm", "Chrome DevTools"],
  },
  {
    label: "Soft Skills", color: "text-txt-2",
    tags: ["Journalism Background", "User-First Thinking", "Team Lead", "Communication", "Adaptability"],
  },
];

export default function Skills() {
  const [ref, inView] = useInView(0.1);
  return (
    <section id="skills" className="bg-bg-2 border-b border-border px-6 md:px-10 py-24">
      <div ref={ref}>
        {/* Header */}
        <div className={`flex items-center gap-3 mb-3 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-txt-3">Technical stack</span>
          <span className="flex-1 h-px bg-border" />
        </div>
        <h2
          className={`font-display font-extrabold tracking-[-0.03em] leading-tight mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ fontSize: "clamp(2rem,4vw,3rem)", transitionDelay: "100ms" }}>
          What I build with
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {GROUPS.map((g, i) => (
            <div key={g.label}
              className={`bg-bg-2 p-7 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${150 + i * 70}ms` }}>
              <div className={`font-mono text-[10px] tracking-[0.15em] uppercase mb-4 ${g.color}`}>{g.label}</div>
              <div className="flex flex-wrap gap-2">
                {g.tags.map(t => (
                  <span key={t}
                    className="font-mono text-[11px] px-3 py-1 border border-border-2 text-txt-2 rounded-sm hover:border-accent hover:text-accent transition-all duration-200 cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
