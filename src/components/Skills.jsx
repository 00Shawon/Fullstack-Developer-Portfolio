import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const GROUPS = [
  {
    label: "Storytelling",
    color: "text-accent",
    tags: [
      "Digital Storytelling",
      "Scrollytelling",
      "Narrative Design",
      "Visual Communication",
      "Multimedia UX",
    ],
  },
  {
    label: "Interactive Web",
    color: "text-teal",
    tags: [
      "React.js",
      "Next.js",
      "Framer Motion",
      "Leaflet.js",
      "Responsive Design",
      "Interactive UI",
    ],
  },
  {
    label: "Data & Visualization",
    color: "text-coral",
    tags: [
      "Geospatial Data",
      "Chart.js",
      "Data Visualization",
      "Interactive Maps",
      "Timelines",
      "Information Design",
    ],
  },
  {
    label: "Full-Stack Development",
    color: "text-accent",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "JWT",
      "Firebase",
    ],
  },
  {
    label: "Design & Interface",
    color: "text-teal",
    tags: [
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Custom UI",
      "Multilingual",
      "RTL",
    ],
  },
  {
    label: "Development Tools",
    color: "text-txt-2",
    tags: [
      "Git & GitHub",
      "Vercel",
      "Netlify",
      "VS Code",
      "npm",
      "Chrome DevTools",
    ],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Skills() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="skills"
      className="bg-bg-2 border-b border-border px-6 md:px-10 py-24"
    >
      <div ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-txt-3">
              How we work
            </span>

            <span className="flex-1 h-px bg-border" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
            <h2
              className="font-display font-extrabold tracking-[-0.03em] leading-tight"
              style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
            >
              Storytelling, built with technology.
            </h2>

            <p className="font-mono text-[11px] tracking-[0.06em] text-txt-2 max-w-md md:text-right leading-relaxed">
              We combine narrative, visual communication, design, and
              technology to create digital experiences that people can explore.
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {GROUPS.map((group) => (
            <motion.div
              key={group.label}
              variants={item}
              className="bg-bg-2 p-7"
            >
              <div
                className={`font-mono text-[10px] tracking-[0.15em] uppercase mb-4 ${group.color}`}
              >
                {group.label}
              </div>

              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "#e8ff5a",
                      color: "#e8ff5a",
                    }}
                    transition={{ duration: 0.15 }}
                    className="font-mono text-[11px] px-3 py-1 border border-border-2 text-txt-2 rounded-sm cursor-default inline-block"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}