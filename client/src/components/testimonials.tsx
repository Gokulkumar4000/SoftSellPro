import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      author: 'Michael Thompson',
      role: 'CIO, Nexus Technologies',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150',
      rating: 5,
      quote: '"SoftSell helped us recover over $150,000 from unused enterprise software licenses. Their process was efficient and completely transparent. We received payment in just 4 days after valuation. Impressive service!"'
    },
    {
      author: 'Sarah Jensen',
      role: 'Finance Director, Horizon Media',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150',
      rating: 4.5,
      quote: '"During our company restructuring, we needed to quickly liquidate our excess software assets. SoftSell provided a higher valuation than we expected and handled all the compliance paperwork. Their expertise was invaluable."'
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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-background overflow-hidden">
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
            What Our Customers Say
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            variants={itemVariants}
          >
            Don't just take our word for it. Here's what companies like yours have to say about their experience with SoftSell.
          </motion.p>
        </motion.div>

        <div className="relative testimonials-slider max-w-5xl mx-auto">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 dark:bg-secondary/5 rounded-full filter blur-3xl -z-10"></div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-background to-muted p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <img 
                      className="w-16 h-16 rounded-full object-cover" 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.author}</h4>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(testimonial.rating) ? 'fill-current' : (i < testimonial.rating ? 'fill-current opacity-50' : 'stroke-current fill-none')}`} 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  {testimonial.quote}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="#contact" 
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Join our satisfied customers
              <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
