import { useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { animate } from "animejs";
import { useTheme } from "@/contexts/ThemeContext";
import { prefersReducedMotion } from "@/hooks/useScrollAnimation";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isAnimating = useRef(false);

  const handleClick = () => {
    if (isAnimating.current) return;

    if (prefersReducedMotion()) {
      toggleTheme();
      return;
    }

    isAnimating.current = true;

    const isGoingLight = theme === "dark";
    const x = isGoingLight ? 0 : window.innerWidth;
    const y = isGoingLight ? window.innerHeight : 0;

    const maxR =
      Math.ceil(
        Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y),
        ),
      ) + 20;

    const applyTheme = () => {
      const root = document.documentElement;
      if (isGoingLight) root.classList.add("light");
      else root.classList.remove("light");
      toggleTheme();
    };

    if ("startViewTransition" in document) {
      const transition = document.startViewTransition(() => {
        applyTheme();
      });
      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxR}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 650,
            easing: "cubic-bezier(0.2, 0, 0, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      });

      transition.finished.then(() => {
        isAnimating.current = false;
      });

      return;
    }

    const overlayBg = isGoingLight ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 4%)";
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: ${overlayBg};
      clip-path: circle(0px at ${x}px ${y}px);
      pointer-events: none;
      will-change: clip-path;
    `;
    document.body.appendChild(overlay);

    animate(overlay, {
      clipPath: [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${maxR}px at ${x}px ${y}px)`,
      ],
      duration: 650,
      ease: "outQuart",
      onComplete: () => {
        document.documentElement.classList.add("theme-switching");
        applyTheme();
        overlay.remove();
        requestAnimationFrame(() => {
          document.documentElement.classList.remove("theme-switching");
          isAnimating.current = false;
        });
      },
    });
  };

  return (
    <button
      onClick={handleClick}
      className="relative w-10 h-10 rounded-full bg-surface border border-border hover:border-primary transition-all duration-300 flex items-center justify-center group overflow-hidden"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <Sun
          className={`w-5 h-5 transition-all duration-500 ${
            theme === "dark"
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <Moon
          className={`absolute top-0 left-0 w-5 h-5 transition-all duration-500 ${
            theme === "dark"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
      <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
    </button>
  );
};

export default ThemeToggle;
