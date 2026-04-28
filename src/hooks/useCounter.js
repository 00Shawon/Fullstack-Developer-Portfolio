import { useEffect, useState } from "react";

export function useCounter(target, duration = 1400, decimals = 0, trigger = true) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = null;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(parseFloat((p * target).toFixed(decimals)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, decimals, trigger]);
  return val;
}
