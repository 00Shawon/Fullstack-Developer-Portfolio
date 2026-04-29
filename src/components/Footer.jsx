export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-2 px-6 md:px-10 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] tracking-[0.15em] text-accent uppercase font-medium">MH.Shawon</span>
          <span className="text-border-2">·</span>
          <span className="font-mono text-[10px] text-txt-3">Fullstack Developer, Khulna, Bangladesh</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/00Shawon" target="_blank" rel="noreferrer" className="font-mono text-[10px] tracking-[0.1em] uppercase text-txt-3 hover:text-accent transition-colors duration-200">GitHub</a>
          <a href="https://www.linkedin.com/in/mehedishawon1/" target="_blank" rel="noreferrer" className="font-mono text-[10px] tracking-[0.1em] uppercase text-txt-3 hover:text-accent transition-colors duration-200">LinkedIn</a>
          <a href="mailto:mehedishawon121@gmail.com" className="font-mono text-[10px] tracking-[0.1em] uppercase text-txt-3 hover:text-accent transition-colors duration-200">Email</a>
        </div>
      </div>
      <div className="mt-5 pt-5 border-t border-border flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          <span className="font-mono text-[11px] tracking-[0.08em] text-teal">
            Currently available for freelance — response within 24 hours
          </span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <p className="font-mono text-[10px] text-txt-3">© 2026 Sm. Mehedi Hassan Shawon. All rights reserved.</p>
          <p className="font-mono text-[10px] text-txt-3">Built with React + Tailwind · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
