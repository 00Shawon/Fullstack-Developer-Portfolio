import { motion } from "framer-motion";

// Replace these with real quotes as you collect them.
// Even one real quote beats five fake ones.
const TESTIMONIALS = [
    {
    quote: "The idea and design was amazing. Mr. Shawon Created a platform for our best memory. It will stay forever with us.This is not just a website. It's a platform for our best memory that just become heritage.Without flawless Communication and his understanding of storytelling, it would be impossible. Highly recommend.",
    name: "Shazada Asad",
    role: "Personal Storytelling Website Owner",
    company: "Wedding Storytelling Platform",
    initials: "SA",
  },
{
  quote: "This project successfully shifts the climate narrative from abstract data to human-centric storytelling. The technical execution—using Leaflet and Chart.js—to map tropical displacement in the Sundarbans demonstrates a rare ability to blend rigorous research with interactive digital journalism.",
  name: "Mazidul Islam",
  role: "Assistant Professor",
  company: "Khulna University",
  initials: "MI",
},

{
    quote: "Clear communication throughout. Delivered exactly what was scoped, on time. The Stripe integration worked first try.",
    name: "Collecting Testimonials",
    role: "Soon to be Client",
    company: "Future Client",
    initials: "AC",
  },
];

// ⚠️  INSTRUCTION: Replace placeholder testimonials with real ones.
// Ask classmates, collaborators, or your first Fiverr clients.
// Even a WhatsApp message saying "great work" can be turned into a quote
// — just ask permission to use it.

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-bg-2 border-t border-border px-6 md:px-10 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-txt-3">Social proof</span>
          <span className="flex-1 h-px bg-border" />
        </div>
        <h2
          className="font-display font-extrabold tracking-[-0.03em] leading-tight mb-14"
          style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
          What people say
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {TESTIMONIALS.map((t, i) => (
          <motion.div key={i} variants={item} className="bg-bg-2 p-8 flex flex-col gap-6 hover:bg-bg-3 transition-colors duration-300">
            {/* Quote mark */}
            <div className="text-accent font-display text-5xl font-extrabold leading-none select-none">"</div>

            {/* Quote */}
            <p className="text-txt text-sm leading-[1.85] flex-1 -mt-4">{t.quote}</p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                <span className="font-mono text-[10px] text-accent font-semibold">{t.initials}</span>
              </div>
              <div>
                <div className="font-display font-semibold text-sm">{t.name}</div>
                <div className="font-mono text-[10px] tracking-[0.06em] text-txt-3 mt-0.5">
                  {t.role} · {t.company}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* No testimonials yet — honest note */}
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="font-mono text-[10px] tracking-[0.08em] text-txt-3">
          Currently collecting reviews from early clients · Check my{" "}
          <a href="https://www.linkedin.com/in/mehedishawon1/" target="_blank" rel="noreferrer"
            className="text-accent hover:underline">LinkedIn</a>{" "}
          for recommendations
        </p>
      </motion.div>
    </section>
  );
}
