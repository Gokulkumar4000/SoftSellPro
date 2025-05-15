import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { AnimatePresence } from "framer-motion";

function Router() {
  // Add scroll to top behavior when navigating
  useEffect(() => {
    const handleNavigation = () => {
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('navigate', handleNavigation);
    return () => window.removeEventListener('navigate', handleNavigation);
  }, []);
  
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  // Log when App component renders and ensure theme is applied
  useEffect(() => {
    console.log("App component rendered");
    
    // Ensure theme is properly applied at the app level
    const applyTheme = () => {
      const theme = localStorage.getItem("ui-theme") || "dark";
      const root = window.document.documentElement;
      
      if (theme === "dark") {
        root.classList.add("dark");
        root.classList.remove("light");
      } else if (theme === "light") {
        root.classList.add("light");
        root.classList.remove("dark");
      }
    };
    
    applyTheme();
    
    // Listen for storage events from other tabs
    window.addEventListener("storage", (e) => {
      if (e.key === "ui-theme") {
        applyTheme();
      }
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen transition-colors duration-300">
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
