import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export type Theme = "light" | "dark" | "system";
export type ColorPalette = "default" | "blue" | "purple" | "red";

type ThemeStore = {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  colorPalette: ColorPalette;
  setTheme: (theme: Theme) => void;
  setColorPalette: (colorPalette: ColorPalette) => void;
};

const getSystemTheme = (): "light" | "dark" =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const getSavedTheme = (): Theme => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme === "light" || savedTheme === "dark" ? savedTheme : "system";
};

const getSavedColorPalette = (): ColorPalette => {
  const savedColorPalette = localStorage.getItem("colorPalette");
  return savedColorPalette === "blue" ||
    savedColorPalette === "purple" ||
    savedColorPalette === "red"
    ? savedColorPalette
    : "default";
};

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  const actual = theme === "system" ? getSystemTheme() : theme;
  root.classList.remove("light", "dark");
  root.classList.add(actual);
};

const applyColorPalette = (colorPalette: ColorPalette) => {
  document.documentElement.dataset.color = colorPalette;
};

export const useThemeStore = create<ThemeStore>()(
  subscribeWithSelector((set, get) => {
    // Always start with identical values on server and client
    const initialState = {
      theme: "system" as Theme,
      resolvedTheme: "light" as "light" | "dark",
      colorPalette: "default" as ColorPalette,
      setTheme: (theme: Theme) => {
        if (typeof window !== "undefined") {
          localStorage.setItem("theme", theme);
          applyTheme(theme);
        }
        set({
          theme,
          resolvedTheme:
            typeof window === "undefined"
              ? "light"
              : theme === "system"
                ? getSystemTheme()
                : theme,
        });
      },
      setColorPalette: (colorPalette: ColorPalette) => {
        if (typeof window !== "undefined") {
          localStorage.setItem("colorPalette", colorPalette);
          applyColorPalette(colorPalette);
        }
        set({ colorPalette });
      },
    };

    // Client-side hydration logic
    if (typeof window !== "undefined") {
      // Use requestAnimationFrame to ensure this runs after React hydration
      requestAnimationFrame(() => {
        const savedTheme = getSavedTheme();
        const savedColorPalette = getSavedColorPalette();
        const actualResolved =
          savedTheme === "system" ? getSystemTheme() : savedTheme;

        applyTheme(savedTheme);
        applyColorPalette(savedColorPalette);

        set({
          theme: savedTheme,
          resolvedTheme: actualResolved,
          colorPalette: savedColorPalette,
        });

        // System change listener
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleSystemChange = (e: MediaQueryListEvent) => {
          const currentTheme = get().theme;
          if (currentTheme === "system") {
            const newResolved = e.matches ? "dark" : "light";
            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(newResolved);
            set({ resolvedTheme: newResolved });
          }
        };

        mediaQuery.addEventListener("change", handleSystemChange);
      });
    }

    return initialState;
  }),
);
