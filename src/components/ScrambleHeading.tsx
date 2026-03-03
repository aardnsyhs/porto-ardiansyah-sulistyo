import { useRef, useEffect, HTMLAttributes } from "react";
import { scrambleText } from "@/utils/textScramble";
import { prefersReducedMotion } from "@/hooks/useScrollAnimation";

interface ScrambleHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
  text: string;
  duration?: number;
  threshold?: number;
}

const ScrambleHeading = ({
  as: Tag = "h2",
  text,
  duration = 900,
  threshold = 0.5,
  className,
  ...rest
}: ScrambleHeadingProps) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.textContent = text;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          scrambleText(el, text, duration);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text, duration, threshold]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {text}
    </Tag>
  );
};

export default ScrambleHeading;
