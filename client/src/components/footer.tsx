import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Our Team', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Guide to Software Licensing', href: '#' },
        { name: 'Valuation Calculator', href: '#' },
        { name: 'FAQ', href: '#' },
      ],
    },
    {
      title: 'Contact',
      items: [
        { icon: <Mail className="h-5 w-5 text-primary mr-3" />, content: 'info@softsell.com' },
        { icon: <Phone className="h-5 w-5 text-primary mr-3" />, content: '+1 (888) 555-8765' },
        { icon: <MapPin className="h-5 w-5 text-primary mr-3" />, content: '123 Tech Avenue, San Francisco, CA 94107' },
      ],
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
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <span className="font-bold text-xl">SoftSell</span>
            </div>
            <p className="text-gray-400 mb-6">
              Turning unused software licenses into immediate cash flow for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
          
          {footerSections.map((section, index) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="font-bold text-lg mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links && section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
                {section.items && section.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    {item.icon}
                    <span className="text-gray-400">{item.content}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration:.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} SoftSell. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Sitemap</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
