import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => {
      // Use try-catch to handle any localStorage errors
      try {
        const storedTheme = localStorage.getItem(storageKey) as Theme;
        if (storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system') {
          return storedTheme;
        }
      } catch (e) {
        console.error("LocalStorage access error:", e);
      }
      return defaultTheme;
    }
  )

  // Apply theme class on mount and when theme changes
  useEffect(() => {
    const root = window.document.documentElement

    // First remove all theme classes
    root.classList.remove("light", "dark")

    // Determine the effective theme (resolving system preference if needed)
    let effectiveTheme = theme;
    if (theme === "system") {
      effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    }

    // Apply the theme class
    root.classList.add(effectiveTheme)
    
    // For debugging
    console.log("Theme applied:", effectiveTheme);
    
    // Set up a media query listener to detect system theme changes
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => {
        const newTheme = mediaQuery.matches ? "dark" : "light";
        root.classList.remove("light", "dark");
        root.classList.add(newTheme);
      };
      
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme])

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      try {
        console.log("Changing theme to:", newTheme);
        localStorage.setItem(storageKey, newTheme);
        setTheme(newTheme);
      } catch (e) {
        console.error("Failed to set theme:", e);
      }
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
