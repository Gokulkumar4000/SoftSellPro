import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./components/ThemeProvider";

// Force initial dark mode setting for consistent experience
let savedTheme;
try {
  savedTheme = localStorage.getItem("ui-theme");
  if (!savedTheme) {
    localStorage.setItem("ui-theme", "dark");
  }
} catch (e) {
  console.error("LocalStorage error:", e);
}

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
    <App />
  </ThemeProvider>
);
