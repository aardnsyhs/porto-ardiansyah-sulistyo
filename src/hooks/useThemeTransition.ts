import { useCallback, useRef, useState } from "react";

type TransitionState = {
  isAnimating: boolean;
  direction: "to-bl" | "to-tr";
  targetBg: string;
};

/**
 * Manages the paint-spill animation lifecycle:
 * 1. User toggles → overlay appears with target-theme color
 * 2. Overlay animates diagonally across screen (~500ms)
 * 3. At animation end → theme class is swapped (instant under overlay)
 * 4. Overlay is removed
 */
export function useThemeTransition() {
  const [state, setState] = useState<TransitionState | null>(null);
  const lockRef = useRef(false);
  const callbackRef = useRef<(() => void) | null>(null);

  // Check if user prefers reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const start = useCallback(
    (currentTheme: "dark" | "light", applyTheme: () => void) => {
      // If reduced motion or already animating, just apply instantly
      if (prefersReducedMotion || lockRef.current) {
        applyTheme();
        return;
      }

      lockRef.current = true;
      callbackRef.current = applyTheme;

      const direction: "to-bl" | "to-tr" =
        currentTheme === "dark" ? "to-bl" : "to-tr";

      // Target background color (the theme we're transitioning TO)
      const targetBg = currentTheme === "dark" ? "#ffffff" : "#0a0a0a";

      setState({ isAnimating: true, direction, targetBg });
    },
    [prefersReducedMotion],
  );

  const onAnimationEnd = useCallback(() => {
    if (callbackRef.current) {
      callbackRef.current();
      callbackRef.current = null;
    }

    // Small delay to let the theme paint under the overlay
    requestAnimationFrame(() => {
      setState(null);
      lockRef.current = false;
    });
  }, []);

  return {
    start,
    isAnimating: state?.isAnimating ?? false,
    overlay: state
      ? {
          direction: state.direction,
          targetBg: state.targetBg,
          onMidpoint: onAnimationEnd,
        }
      : null,
  };
}
