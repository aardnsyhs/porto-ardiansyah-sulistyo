import { useEffect, useRef, useCallback } from "react";

export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export function useScrollAnimation<T extends Element>(
  animationFn: (el: T) => void,
  threshold = 0.15,
) {
  const ref = useRef<T>(null);
  const hasAnimated = useRef(false);
  const stableFn = useCallback(animationFn, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      (el as HTMLElement).style.opacity = "1";
      (el as HTMLElement).style.transform = "none";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          stableFn(el);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stableFn, threshold]);

  return ref;
}

export function useScrollAnimationRef<T extends Element>(
  animationFn: (el: T) => void,
  threshold = 0.15,
) {
  const hasAnimated = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  return useCallback(
    (el: T | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      if (!el) return;

      if (prefersReducedMotion()) {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
        return;
      }

      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animationFn(el);
          }
        },
        { threshold },
      );
      observerRef.current.observe(el);
    },
    [animationFn, threshold],
  );
}
