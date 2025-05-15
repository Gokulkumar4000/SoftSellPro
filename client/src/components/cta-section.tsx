import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function CtaSection() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 bg-white/10 h-56 w-56 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"
          animate={{ 
            y: ["-50%", "-60%", "-50%"], 
            x: ["25%", "30%", "25%"] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 bg-white/10 h-56 w-56 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl"
          animate={{ 
            y: ["50%", "60%", "50%"], 
            x: ["-25%", "-30%", "-25%"] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Stop Paying for Software You Don't Use
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Transform your unused licenses into immediate cash flow. Our experts are ready to provide you with the best valuation in the market.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button 
              asChild
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1"
            >
              <a href="#contact">Get Started Now</a>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#how-it-works">Learn More</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
