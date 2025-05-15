import { motion } from 'framer-motion';
import { DollarSign, Users, Clock, Star } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { AnimatedClock, AnimatedMoney } from './AnimatedIcons';

export default function StatisticsSection() {
  const stats = [
    { 
      value: 120,
      suffix: 'M+', 
      description: 'In Licenses Resold',
      icon: <AnimatedMoney size="md" variant="primary" className="mb-4" />
    },
    { 
      value: 1200,
      suffix: '+', 
      description: 'Satisfied Customers',
      icon: <motion.div 
              className="text-primary mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
              whileInView={{ scale: [0.9, 1.1, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Users strokeWidth={1.5} size={24} className="text-primary" />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(var(--primary), 0.2)",
                    "0 0 0 10px rgba(var(--primary), 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
    },
    { 
      value: 24, 
      suffix: ' hrs', 
      description: 'Average Deal Time',
      icon: <AnimatedClock size="md" variant="primary" className="mb-4" />
    },
    { 
      value: 4.9,
      suffix: '/5', 
      description: 'Customer Rating',
      icon: <motion.div 
              className="text-primary mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
              whileInView={{ scale: [0.9, 1.1, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Star strokeWidth={1.5} size={24} className="text-primary" fill="currentColor" />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(var(--primary), 0.2)",
                    "0 0 0 10px rgba(var(--primary), 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
    },
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
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="glass p-6 rounded-xl shimmer"
            >
              <div className="flex flex-col items-center justify-center">
                {stat.icon}
                
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2}
                  delay={index * 0.2}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary"
                  decimalPlaces={stat.value % 1 === 0 ? 0 : 1}
                />
                
                <p className="text-muted-foreground mt-2 text-sm">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
