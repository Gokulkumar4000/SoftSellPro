import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import StatisticsSection from '@/components/statistics-section';
import HowItWorks from '@/components/how-it-works';
import WhyChooseUs from '@/components/why-choose-us';
import Testimonials from '@/components/testimonials';
import { ContactSection } from '@/components/contact-form';
import CtaSection from '@/components/cta-section';
import Footer from '@/components/footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import BackgroundGradientAnimation from '@/components/BackgroundGradientAnimation';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reset scroll position to top when the component mounts
    window.scrollTo(0, 0);
    
    // Simulate loading for smooth page entrance
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Page entrance animation
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 } 
    }
  };

  return (
    <>
      <AnimatePresence>
        {loading ? (
          <motion.div 
            key="loader"
            className="fixed inset-0 bg-background flex items-center justify-center z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="w-16 h-16 relative"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full border-4 border-primary opacity-20 rounded-full"></div>
              <motion.div 
                className="absolute top-0 left-0 w-full h-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity, 
                  ease: "linear", 
                  repeatType: "loop" 
                }}
              ></motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <ParticlesBackground 
        particleCount={40} 
        speed={0.3}
        minSize={1}
        maxSize={3}
      />
      
      <motion.div 
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative overflow-hidden"
      >
        <Header />
        <main>
          <HeroSection />
          <StatisticsSection />
          <section className="relative">
            <BackgroundGradientAnimation 
              intensity={0.8} 
              speed={0.7}
            />
            <HowItWorks />
          </section>
          <WhyChooseUs />
          <Testimonials />
          <ContactSection />
          <CtaSection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
