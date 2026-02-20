import { useCallback, useRef } from "react";

interface ThemeTransitionOverlayProps {
  onAnimationEnd: () => void;
  direction: "to-bl" | "to-tr";
  targetBg: string;
}

/**
 * Full-screen overlay that performs a diagonal "paint spill" reveal.
 * - `to-bl`: top-right → bottom-left  (dark → light)
 * - `to-tr`: bottom-left → top-right  (light → dark)
 *
 * Uses `clip-path: polygon()` animated via CSS keyframes for 60fps
 * GPU-composited performance. No layout thrash.
 */
const ThemeTransitionOverlay = ({
  onAnimationEnd,
  direction,
  targetBg,
}: ThemeTransitionOverlayProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleAnimationEnd = useCallback(() => {
    onAnimationEnd();
  }, [onAnimationEnd]);

  const animationClass =
    direction === "to-bl"
      ? "animate-paint-spill-to-bl"
      : "animate-paint-spill-to-tr";

  return (
    <div
      ref={ref}
      className={`fixed inset-0 z-[9999] pointer-events-none ${animationClass}`}
      style={{ backgroundColor: targetBg }}
      onAnimationEnd={handleAnimationEnd}
      aria-hidden="true"
    >
      {/* Soft edge layer for liquid feel */}
      <div
        className={`absolute inset-0 ${animationClass}`}
        style={{
          backgroundColor: targetBg,
          filter: "blur(30px)",
          opacity: 0.5,
          transform: "scale(1.05)",
        }}
      />
    </div>
  );
};

export default ThemeTransitionOverlay;
