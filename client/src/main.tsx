import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./components/ThemeProvider";

// Force initial dark mode setting for consistent experience
const savedTheme = localStorage.getItem("softsell-theme");
if (!savedTheme) {
  localStorage.setItem("softsell-theme", "dark");
}

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="softsell-theme">
    <App />
  </ThemeProvider>
);
