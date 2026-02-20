import { createContext, useContext, useEffect, useState } from "react";

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

    root.classList.add("theme-transitioning");
    const timeout = setTimeout(() => {
      root.classList.remove("theme-transitioning");
    }, 350);

    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }

    localStorage.setItem("theme", theme);

    return () => clearTimeout(timeout);
  }, [theme]);

  const toggleTheme = async () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    await document.startViewTransition(() => {
      setTheme(newTheme);
    }).ready;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
