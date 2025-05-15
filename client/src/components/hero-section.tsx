import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
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

  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
              variants={itemVariants}
            >
              <span className="block">Unlock the Value of Your</span>
              <span className="gradient-text">Unused Software Licenses</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground mb-8"
              variants={itemVariants}
            >
              Turn your dormant software investments into immediate cash flow. SoftSell provides the fastest, most trusted marketplace for reselling enterprise software licenses.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-6 h-auto shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1">
                <a href="#contact">Sell My Licenses</a>
              </Button>
              
              <Button asChild variant="outline" className="px-8 py-6 h-auto shadow-md hover:shadow-lg transform transition-all hover:-translate-y-1">
                <a href="#how-it-works">How It Works</a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex items-center"
              variants={itemVariants}
            >
              <div className="flex -space-x-2">
                <img className="h-8 w-8 rounded-full border-2 border-background" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120" alt="Customer" />
                <img className="h-8 w-8 rounded-full border-2 border-background" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120" alt="Customer" />
                <img className="h-8 w-8 rounded-full border-2 border-background" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120" alt="Customer" />
              </div>
              <p className="ml-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">500+</span> businesses trust SoftSell
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative hidden lg:block"
            initial="hidden"
            animate={["visible", "float"]}
            variants={imageVariants}
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl"></div>
            <div className="relative rounded-2xl shadow-2xl overflow-hidden">
              <img 
                className="w-full h-auto rounded-2xl" 
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Modern tech office with team collaboration" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
