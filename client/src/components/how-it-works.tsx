import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { UploadCloud, LineChart, PiggyBank } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <UploadCloud className="h-8 w-8 text-primary" />,
      number: 1,
      title: 'Upload Your Licenses',
      description: 'Simply share your license details through our secure portal. We support all major software vendors.',
      color: 'bg-primary-foreground dark:bg-primary/20',
      iconColor: 'text-primary',
      numberBg: 'bg-primary',
    },
    {
      icon: <LineChart className="h-8 w-8 text-secondary" />,
      number: 2,
      title: 'Get a Valuation',
      description: 'Our experts analyze your assets and provide a competitive quote within 24 hours, maximizing your return.',
      color: 'bg-secondary-foreground dark:bg-secondary/20',
      iconColor: 'text-secondary',
      numberBg: 'bg-secondary',
    },
    {
      icon: <PiggyBank className="h-8 w-8 text-accent" />,
      number: 3,
      title: 'Get Paid',
      description: 'Accept our offer and receive payment via your preferred method within 3-5 business days.',
      color: 'bg-accent-foreground dark:bg-accent/20',
      iconColor: 'text-accent',
      numberBg: 'bg-accent',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={titleVariants}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            variants={titleVariants}
          >
            Our streamlined process makes selling your unused software licenses quick and hassle-free.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center mb-6 relative`}>
                <span className={`absolute -top-2 -right-2 ${step.numberBg} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm`}>
                  {step.number}
                </span>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button 
            asChild
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg px-6 py-3 h-auto transform transition-all hover:-translate-y-1"
          >
            <a href="#contact">
              Start the Process Now
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
