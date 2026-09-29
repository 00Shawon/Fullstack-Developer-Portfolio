import { useInView } from "../hooks/useInView";

const FACTS = [
  { label: "Practice", value: "Independent Digital Storytelling" },
  { label: "Background", value: "Mass Communication & Journalism → Digital Storytelling" },
  { label: "Focus", value: "Storytelling · Visual Communication · Interactive Web" },
  { label: "Languages", value: "Bangla (Native) · English · Hindi · Urdu" },
  { label: "Client Reach", value: "USA · Canada · Germany · Bangladesh" },
  { label: "Availability", value: "Projects · Collaborations · Remote Work" },
];

const TIMELINE = [
  {
    year: "2024",
    label: "Began combining journalism, data, and interactive web storytelling through The Drowning Village.",
  },
  {
    year: "2024",
    label: "Expanded into interactive digital experiences, multilingual interfaces, and visual storytelling.",
  },
  {
    year: "2025",
    label: "Built digital platforms and creator-focused experiences for different audiences and use cases.",
  },
  {
    year: "2026",
    label: "Bringing storytelling, visual communication, and web technology together through Storyline.",
  },
];

export default function About() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-bg-2 border-t border-border px-6 md:px-10 py-24"
    >
      {/* Header */}
      <div
        className={`flex items-center gap-3 mb-3 transition-all duration-700 ${
          inView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-txt-3">
          About Storyline
        </span>

        <span className="flex-1 h-px bg-border" />
      </div>

      <h2
        className={`font-display font-extrabold tracking-[-0.03em] leading-tight mb-14 transition-all duration-700 ${
          inView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
        style={{
          fontSize: "clamp(2rem,4vw,3rem)",
          transitionDelay: "100ms",
        }}
      >
        Stories, ideas, and identities
        <br />
        <span className="text-accent">built for the digital world.</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* LEFT */}
        <div>
          <p
            className={`text-txt-2 text-sm leading-[1.85] mb-6 transition-all duration-700 prose-width ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Storyline grew from a background in journalism and communication
            into an independent digital storytelling practice. We combine
            narrative thinking, visual communication, design, and web
            technology to create digital experiences that are clear,
            engaging, and purposeful.
          </p>

          <p className="text-txt-2 text-sm leading-[1.8] mb-10 prose-width">
            From interactive stories and multilingual websites to digital
            platforms and visual experiences, each project starts with what
            needs to be communicated — then finds the right digital form for
            it.
          </p>

          {/* Timeline */}
          <div
            className={`flex flex-col gap-0 border-l border-border-2 pl-5 transition-all duration-700 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {TIMELINE.map((t) => (
              <div
                key={t.year}
                className="relative pb-6 last:pb-0"
              >
                <div className="absolute -left-[21px] top-[4px] w-[9px] h-[9px] rounded-full border border-accent bg-bg-2" />

                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-accent mb-1">
                  {t.year}
                </div>

                <div className="text-txt-2 text-[0.825rem] leading-[1.65]">
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div
          className={`transition-all duration-700 ${
            inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "250ms" }}
        >
          <div className="border border-border flex flex-col gap-px bg-border">
            {FACTS.map((f) => (
              <div
                key={f.label}
                className="bg-bg-2 flex gap-4 px-6 py-4"
              >
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-txt-3 w-24 shrink-0 pt-[2px]">
                  {f.label}
                </span>

                <span className="font-mono text-[11px] text-txt-2 leading-[1.6]">
                  {f.value}
                </span>
              </div>
            ))}
          </div>

          {/* Founder */}
          <div className="mt-6 flex items-center gap-4 p-5 border border-border bg-bg rounded-sm">
            <img
              src="/MehediShawon.jpg"
              alt="Sm. Mehedi Hassan Shawon"
              className="w-14 h-14 rounded-full object-cover object-top border-2 border-accent/30 shrink-0"
            />

            <div>
              <div className="font-display font-bold text-sm">
                Sm. Mehedi Hassan Shawon
              </div>

              <div className="font-mono text-[10px] tracking-[0.08em] text-txt-2 mt-0.5">
                Founder · Storyline
              </div>

              <div className="font-mono text-[10px] tracking-[0.08em] text-teal mt-1">
                ● Independent Digital Storytelling Practice
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}