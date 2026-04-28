const ITEMS = [
  "React.js", "★", "Firebase", "★", "Node.js", "★", "MongoDB", "★",
  "Tailwind CSS", "★", "Express.js", "★", "Stripe Payments", "★",
  "JWT Auth", "★", "REST API", "★", "Next.js", "★", "Fullstack Dev", "★",
  "Data Journalism", "★", "Geospatial Viz", "★", "Freelance Ready", "★",
];

export default function MarqueeStrip() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="border-y border-border bg-bg-2 py-[14px] overflow-hidden">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={`${i}-${item}`}
            className={`font-mono text-[11px] tracking-[0.12em] uppercase px-5 whitespace-nowrap select-none ${item === "★" ? "text-accent" : "text-txt-3"}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
