import { useInView } from "../hooks/useInView";

const SOCIALS = [
  { label: "GitHub ↗", href: "https://github.com/00Shawon" },
  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/mehedishawon1/" },
  { label: "+880-1954638110", href: "tel:+8801954638110" },
];

const SERVICES = [
  "React / Next.js Web Apps",
  "MERN Stack Development",
  "Firebase Integration",
  "Stripe Payment Systems",
  "Multilingual / RTL UIs",
  "Data Visualization",
  "Landing Pages",
  "API Development",
];

export default function Contact() {
  const [ref, inView] = useInView(0.1);
  return (
    <section id="contact" className="border-t border-border px-6 md:px-10 py-24">
      <div ref={ref}>
        {/* Header */}
        <div className={`flex items-center gap-3 mb-3 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-txt-3">Get in touch</span>
          <span className="flex-1 h-px bg-border" />
        </div>
        <h2
          className={`font-display font-extrabold tracking-[-0.03em] leading-tight mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ fontSize: "clamp(2rem,4vw,3rem)", transitionDelay: "100ms" }}>
          Let's build something<br /><span className="text-accent">together.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT: CTA block */}
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "150ms" }}>
            <p className="text-txt-2 text-sm leading-[1.8] mb-8">
              Open to freelance projects, long-term client relationships, and remote full-time roles. I communicate clearly, deliver on time, and build things that actually work.
            </p>

            {/* Big email button */}
            <a href="mailto:mehedishawon121@gmail.com"
              className="group flex items-center justify-between w-full border border-accent/40 hover:border-accent bg-bg-2 hover:bg-accent/5 px-6 py-5 rounded-sm transition-all duration-300 mb-6">
              <div>
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-txt-3 mb-1">Email me</div>
                <div className="font-display font-bold text-accent text-sm">mehedishawon121@gmail.com</div>
              </div>
              <span className="text-accent text-xl group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>

            {/* Socials */}
            <div className="flex flex-wrap gap-2">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                  className="font-mono text-[11px] tracking-[0.08em] uppercase border border-border-2 text-txt-2 px-3 py-2 rounded-sm hover:border-accent hover:text-accent transition-all duration-200">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Services */}
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "250ms" }}>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-txt-3 mb-5">Services I offer</div>
            <div className="grid grid-cols-2 gap-px bg-border border border-border">
              {SERVICES.map(s => (
                <div key={s} className="bg-bg-2 px-4 py-3 font-mono text-[11px] text-txt-2 hover:text-accent hover:bg-bg-3 transition-all duration-200 cursor-default">
                  <span className="text-accent mr-2">→</span>{s}
                </div>
              ))}
            </div>

            {/* Available badge */}
            <div className="mt-6 flex items-center gap-3 border border-teal/30 bg-teal/5 px-5 py-4 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse shrink-0" />
              <span className="font-mono text-[11px] tracking-[0.08em] text-teal">Available for new projects starting now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
