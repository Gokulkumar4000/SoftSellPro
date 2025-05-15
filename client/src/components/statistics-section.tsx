import { motion } from 'framer-motion';

export default function StatisticsSection() {
  const stats = [
    { value: '$120M+', description: 'In Licenses Resold' },
    { value: '1,200+', description: 'Satisfied Customers' },
    { value: '24 hrs', description: 'Average Deal Time' },
    { value: '4.9/5', description: 'Customer Rating' },
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
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.p 
                className="text-3xl md:text-4xl font-bold text-primary"
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  delay: index * 0.1,
                  duration: 0.6 
                }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.p>
              <p className="text-muted-foreground mt-2">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
