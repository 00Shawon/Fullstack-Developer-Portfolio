// This file is now deprecated.
// Animation is handled by framer-motion in each component.
// Keep this file to avoid import errors in older components.
import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.12, once = true) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); if (once) obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold, once]);
  return [ref, inView];
}
