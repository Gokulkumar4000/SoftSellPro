import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';
import { Moon, Sun, Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect which section is currently in view
      const sections = document.querySelectorAll('section[id]');
      let currentSection = "";
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.getBoundingClientRect().height;
        
        // If the section is in the viewport (with some buffer)
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
          currentSection = section.getAttribute('id') || "";
        }
      });
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    console.log("Header - Toggling theme from", theme, "to", newTheme);
    setTheme(newTheme);
  };

  const navLinks = [
    { name: "How it Works", href: "#how-it-works" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className={`fixed w-full bg-background/80 backdrop-blur-md z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="#" className="flex items-center space-x-2">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-bold text-lg">SS</span>
              </motion.div>
              <span className="font-bold text-xl">SoftSell</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              // Check if this link is for the active section
              const isActive = activeSection === link.href.substring(1);
              
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative text-muted-foreground hover:text-primary transition-colors duration-200",
                    isActive && "text-primary font-medium"
                  )}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {link.name}
                  {isActive && (
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                      layoutId="activeSection"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </nav>
          
          <div className="flex items-center space-x-4">
            <motion.button
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-all duration-300"
              whileHover={{ 
                scale: 1.15,
                rotate: theme === 'dark' ? 15 : -15,
                backgroundColor: theme === 'dark' ? 'rgba(253, 224, 71, 0.2)' : 'rgba(91, 33, 182, 0.2)'
              }}
              whileTap={{ scale: 0.9 }}
              initial={false}
              animate={{
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                rotate: 0
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  rotate: theme === 'dark' ? 180 : 0
                }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.3 }}
                key={theme}
              >
                {theme === 'dark' 
                  ? <Sun className="h-5 w-5 text-yellow-300" /> 
                  : <Moon className="h-5 w-5 text-indigo-700" />
                }
              </motion.div>
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <Button 
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
              >
                <a href="#contact">Get a Quote</a>
              </Button>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden pb-4"
            >
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "flex items-center text-muted-foreground hover:text-primary transition-colors py-2",
                        isActive && "text-primary font-medium"
                      )}
                      whileHover={{ x: 5 }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="mobileActiveIndicator"
                          className="mr-2 w-1 h-5 bg-primary rounded-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                      {link.name}
                      {isActive && (
                        <motion.div 
                          className="ml-auto"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </motion.div>
                      )}
                    </motion.a>
                  );
                })}
                <Button 
                  asChild 
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white w-full mt-2"
                >
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</a>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
