import { motion } from "framer-motion";

const SERVICES = [
  {
    num: "01",
    title: "Landing Pages & Business Sites",
    desc: "Fast, modern, conversion-focused websites for startups, creators, and businesses. Responsive across every device. Deployed and ready.",
    tags: ["React", "Tailwind", "Vite", "Vercel"],
    for: "Startups · Small businesses · Creators",
  },
  {
    num: "02",
    title: "Interactive Web Experiences",
    desc: "Storytelling-focused websites with immersive UI, scroll-driven narratives, geospatial data, and smooth interactions. Built for impact.",
    tags: ["Scrollytelling", "Leaflet.js", "Chart.js", "Framer Motion"],
    for: "NGOs · Journalists · Cultural projects · Research",
  },
  {
    num: "03",
    title: "MERN Stack Applications",
    desc: "Full-stack web apps with authentication, role-based dashboards, REST APIs, and payment integration. From idea to deployed product.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Stripe", "JWT"],
    for: "Founders · Agencies · Product teams",
  },
  {
    num: "04",
    title: "Portfolio & Personal Brand Sites",
    desc: "Custom portfolio experiences designed to stand out. Multilingual support, RTL layouts, and decolonial design approaches available.",
    tags: ["Next.js", "Multilingual", "RTL", "Custom Design"],
    for: "Developers · Designers · Artists · Academics",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-10 py-24 border-b border-border">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-txt-3">What I offer</span>
          <span className="flex-1 h-px bg-border" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <h2
            className="font-display font-extrabold tracking-[-0.03em] leading-tight"
            style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Services
          </h2>
          <p className="font-mono text-[11px] tracking-[0.06em] text-txt-2 max-w-sm md:text-right leading-relaxed">
            I take projects from concept to deployed product.<br />
            Message me — I'll tell you honestly if I'm the right fit.
          </p>
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {SERVICES.map((s) => (
          <motion.div
            key={s.num}
            variants={item}
            className="bg-bg group hover:bg-bg-3 transition-colors duration-300 p-8 flex flex-col gap-5 relative overflow-hidden"
          >
            {/* Top row */}
            <div className="flex items-start justify-between">
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-txt-3">{s.num}</span>
              <span className="font-mono text-[10px] tracking-[0.08em] text-txt-3 border border-border-2 px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Available
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display font-bold text-xl tracking-[-0.02em] leading-tight group-hover:text-accent transition-colors duration-300">
              {s.title}
            </h3>

            {/* Desc */}
            <p className="text-txt-2 text-sm leading-[1.8] flex-1">{s.desc}</p>

            {/* For who */}
            <div className="font-mono text-[10px] tracking-[0.08em] text-teal">{s.for}</div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span key={t} className="font-mono text-[10px] px-2 py-1 bg-bg-3 border border-border-2 text-txt-3 rounded-sm">
                  {t}
                </span>
              ))}
            </div>

            {/* Hover accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA row */}
      <motion.div
        className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-border-2 bg-bg-2 px-6 py-5 rounded-sm"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <div className="font-display font-semibold text-sm mb-1">Not sure which service fits your project?</div>
          <div className="font-mono text-[11px] text-txt-2">Message me first. I'll scope it for free and give you an honest answer.</div>
        </div>
        <a
          href="mailto:mehedishawon121@gmail.com"
          className="font-mono text-[11px] tracking-[0.1em] uppercase bg-accent text-black px-5 py-3 rounded-sm font-semibold hover:bg-accent-2 transition-colors duration-200 whitespace-nowrap shrink-0"
        >
          Get a free scope →
        </a>
      </motion.div>
    </section>
  );
}
