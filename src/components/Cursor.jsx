import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const rPos = useRef({ x: 0, y: 0 });
  const raf = useRef(null);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.left = e.clientX + "px";
        dot.current.style.top = e.clientY + "px";
      }
    };
    const loop = () => {
      rPos.current.x += (mouse.current.x - rPos.current.x) * 0.11;
      rPos.current.y += (mouse.current.y - rPos.current.y) * 0.11;
      if (ring.current) {
        ring.current.style.left = rPos.current.x + "px";
        ring.current.style.top = rPos.current.y + "px";
      }
      raf.current = requestAnimationFrame(loop);
    };
    const over = () => setExpand(true);
    const out = () => setExpand(false);

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", over);
      el.addEventListener("mouseleave", out);
    });
    raf.current = requestAnimationFrame(loop);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className={`cursor-ring ${expand ? "expand" : ""}`} />
    </>
  );
}
