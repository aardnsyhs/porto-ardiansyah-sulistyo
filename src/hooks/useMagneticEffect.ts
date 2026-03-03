import { useRef, useCallback } from "react";
import { animate } from "animejs";
import { prefersReducedMotion } from "@/hooks/useScrollAnimation";

export function useMagneticEffect(strength = 0.35) {
  const ref = useRef<HTMLElement>(null);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;

      animate(el, {
        translateX: dx,
        translateY: dy,
        duration: 350,
        ease: "outCubic",
      });
    },
    [strength],
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    animate(el, {
      translateX: 0,
      translateY: 0,
      duration: 500,
      ease: "spring(1, 80, 10, 0)",
    });
  }, []);

  const magneticRef = useCallback(
    (node: HTMLElement | null) => {
      const prev = ref.current;
      if (prev) {
        prev.removeEventListener("mousemove", onMouseMove);
        prev.removeEventListener("mouseleave", onMouseLeave);
      }
      (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      if (node) {
        node.addEventListener("mousemove", onMouseMove);
        node.addEventListener("mouseleave", onMouseLeave);
      }
    },
    [onMouseMove, onMouseLeave],
  );

  return magneticRef;
}

import React from "react";
