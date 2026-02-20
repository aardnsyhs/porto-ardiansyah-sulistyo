import { createContext, useContext, useEffect, useState } from "react";
import { useThemeTransition } from "@/hooks/useThemeTransition";
import ThemeTransitionOverlay from "@/components/ThemeTransitionOverlay";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const transition = useThemeTransition();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    transition.start(theme, () => {
      setTheme(theme === "dark" ? "light" : "dark");
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      {transition.overlay && (
        <ThemeTransitionOverlay
          direction={transition.overlay.direction}
          targetBg={transition.overlay.targetBg}
          onAnimationEnd={transition.overlay.onMidpoint}
        />
      )}
    </ThemeContext.Provider>
  );
};
