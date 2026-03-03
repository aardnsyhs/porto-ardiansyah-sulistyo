const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

export function scrambleText(
  el: HTMLElement,
  finalText: string,
  duration = 800,
  onComplete?: () => void,
) {
  const total = finalText.length;
  let start: number | null = null;
  let raf: number;

  const step = (timestamp: number) => {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);

    const resolved = Math.floor(progress * total);
    let output = "";
    for (let i = 0; i < total; i++) {
      if (finalText[i] === " ") {
        output += " ";
      } else if (i < resolved) {
        output += finalText[i];
      } else {
        output += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
    }
    el.textContent = output;

    if (progress < 1) {
      raf = requestAnimationFrame(step);
    } else {
      el.textContent = finalText;
      onComplete?.();
    }
  };

  raf = requestAnimationFrame(step);
  return () => cancelAnimationFrame(raf);
}

import { useEffect, useRef } from "react";

export function useScrambleOnScroll(text: string, duration = 850) {
  const ref = useRef<HTMLElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          scrambleText(el, text, duration);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text, duration]);

  return ref;
}
