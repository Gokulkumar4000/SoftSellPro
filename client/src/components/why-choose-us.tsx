import { motion } from 'framer-motion';
import { DollarSign, ShieldCheck, Timer, HeadphonesIcon, Check } from 'lucide-react';
import { AnimatedMoney, AnimatedShield, AnimatedClock, AnimatedIconContainer } from './AnimatedIcons';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <AnimatedMoney size="md" variant="primary" />,
      title: 'Best Market Rates',
      description: 'We leverage our extensive network of buyers to ensure you receive top dollar for your software licenses.',
      bgColor: 'bg-primary/10',
    },
    {
      icon: <AnimatedShield size="md" variant="secondary" />,
      title: 'Legally Compliant',
      description: 'All transactions are fully compliant with software licensing laws and vendor policies for complete peace of mind.',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: <AnimatedClock size="md" variant="primary" />,
      title: 'Quick Turnaround',
      description: 'Our streamlined process means you get valuations within 24 hours and payment within days, not weeks.',
      bgColor: 'bg-accent/10',
    },
    {
      icon: <motion.div 
              className="relative w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              animate={{ 
                boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.2)", "0 0 0 10px rgba(34, 197, 94, 0)"] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <HeadphonesIcon className="h-6 w-6 text-green-500" />
              <motion.div 
                className="absolute w-3 h-3 bg-green-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.6, 1]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ top: '10%', right: '20%' }}
              />
            </motion.div>,
      title: 'Dedicated Support',
      description: 'Our expert team guides you through every step of the process and is always available for questions.',
      bgColor: 'bg-green-500/10',
    }
  ];

  const supportedVendors = [
    'Microsoft', 'Adobe', 'Oracle', 'SAP', 
    'Autodesk', 'IBM', 'VMware', 'And many more!'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1,
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

  return (
    <section id="why-choose-us" className="py-20 bg-muted/50">
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
            variants={itemVariants}
          >
            Why Choose SoftSell
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            variants={itemVariants}
          >
            With years of experience and industry expertise, we've built a reputation for trustworthiness, speed, and maximum returns.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-background rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-5`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-background rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Supported Software Vendors</h3>
              <p className="text-muted-foreground mb-6">We accept licenses from all major software providers, including:</p>
              <ul className="grid grid-cols-2 gap-4">
                {supportedVendors.map((vendor, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center text-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="text-green-500 mr-2 flex"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + 0.05 * index 
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, 0]
                        }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.3 + 0.05 * index,
                          ease: "easeInOut" 
                        }}
                      >
                        <Check className="h-5 w-5" />
                      </motion.div>
                    </motion.div> 
                    {vendor}
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.div 
                className="rounded-xl overflow-hidden shadow-lg"
                animate={{ 
                  boxShadow: ["0 10px 25px rgba(0,0,0,0.1)", "0 20px 35px rgba(0,0,0,0.2)", "0 10px 25px rgba(0,0,0,0.1)"]
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500" 
                  alt="Software license visualization" 
                  className="w-full h-auto" 
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
