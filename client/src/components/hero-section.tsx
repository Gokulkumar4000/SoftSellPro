import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedText, { AnimatedGradientText } from '@/components/AnimatedText';
import { heroHeading, heroContent, heroImage } from '@/lib/animations';
import { useRef, useEffect, useState } from 'react';
import { CtaButton } from '@/components/AnimatedButton';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5
      }
    },
    float: {
      y: [-10, 0, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };
  
  const parallaxOffset = {
    x: mousePosition.x * 30 - 15,
    y: mousePosition.y * 30 - 15
  };

  return (
    <section 
      id="hero" 
      className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative"
      ref={heroRef}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-40 right-10 w-32 h-32 rounded-full bg-primary/30 animate-morph opacity-40 dark:opacity-20"
        style={{ filter: 'blur(80px)' }}
        animate={{
          x: 20 + parallaxOffset.x * 0.5,
          y: -30 + parallaxOffset.y * 0.5,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-40 h-40 rounded-full bg-secondary/30 animate-morph opacity-50 dark:opacity-20"
        style={{ filter: 'blur(100px)' }}
        animate={{
          x: -20 + parallaxOffset.x * 0.7,
          y: 30 + parallaxOffset.y * 0.7,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-accent/20 animate-morph opacity-30 dark:opacity-10"
        style={{ filter: 'blur(120px)' }}
        animate={{
          x: -32 + parallaxOffset.x * 0.3,
          y: -32 + parallaxOffset.y * 0.3,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={heroHeading}
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
            >
              <AnimatedText 
                text="Unlock the Value of Your" 
                el="h1" 
                className="block" 
              />
              <AnimatedGradientText
                text="Unused Software Licenses"
                el="span"
                className="block mt-2"
              />
            </motion.div>
            
            <motion.div 
              variants={heroContent}
              className="relative"
            >
              <motion.p 
                className="text-lg sm:text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Turn your dormant software investments into immediate cash flow. SoftSell provides the fastest, most trusted marketplace for reselling enterprise software licenses.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <CtaButton href="#contact">
                Sell My Licenses
              </CtaButton>
              
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  asChild 
                  variant="outline" 
                  className="relative overflow-hidden px-8 py-6 h-auto shadow-md group"
                >
                  <a href="#how-it-works" className="flex items-center">
                    How It Works
                    <motion.span 
                      className="ml-2 opacity-70 group-hover:opacity-100"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                    
                    {/* Shimmer effect on hover */}
                    <motion.span 
                      className="absolute inset-0 w-full h-full"
                      initial={false}
                      whileHover={{
                        background: [
                          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)",
                          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)",
                          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)"
                        ],
                        x: ["-100%", "100%", "100%"]
                      }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <motion.div 
                className="flex -space-x-2"
                animate={{ x: [-2, 0, -2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Apply hover animation to each avatar */}
                {[
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120",
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120",
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120"
                ].map((src, i) => (
                  <motion.img 
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background object-cover"
                    src={src}
                    alt={`Customer ${i+1}`}
                    whileHover={{ y: -3, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  />
                ))}
              </motion.div>
              <motion.p 
                className="ml-4 text-sm text-muted-foreground"
                animate={{ 
                  opacity: [0.8, 1, 0.8],
                  y: [-1, 0, -1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.span 
                  className="font-medium text-foreground"
                  whileHover={{ color: "hsl(var(--primary))" }}
                >
                  500+
                </motion.span> businesses trust SoftSell
              </motion.p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative hidden lg:block"
            initial="hidden"
            animate={["visible", "float"]}
            variants={heroImage}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div 
              className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl"
              animate={{
                x: isHovered ? 20 : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.8 }}
            />
            <motion.div 
              className="absolute bottom-0 left-10 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl"
              animate={{
                x: isHovered ? -20 : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.8 }}
            />
            <div className="relative rounded-2xl shadow-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-10 opacity-0"
                animate={{ opacity: isHovered ? 0.5 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                className="w-full h-auto rounded-2xl" 
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Modern tech office with team collaboration"
                animate={{
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
