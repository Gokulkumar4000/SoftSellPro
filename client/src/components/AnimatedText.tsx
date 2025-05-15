import { motion } from 'framer-motion';
import { textContainer, textChar } from '@/lib/animations';

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  once?: boolean;
  delayOffset?: number;
}

export default function AnimatedText({ 
  text, 
  className = '', 
  el = 'p',
  once = true,
  delayOffset = 0
}: AnimatedTextProps) {
  const content = text.split(' ').map((word, index) => (
    <motion.span
      key={index}
      className="inline-block"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        transition: { 
          duration: 0.6, 
          delay: 0.04 * index + delayOffset,
          ease: "easeOut"
        } 
      }}
      viewport={{ once }}
    >
      {word}
      {index !== text.split(' ').length - 1 && ' '}
    </motion.span>
  ));

  // Dynamically create the element
  const Component = motion[el] as any;
  
  return (
    <Component className={className}>
      {content}
    </Component>
  );
}

export function AnimatedChars({ 
  text, 
  className = '', 
  el = 'span',
  once = true
}: AnimatedTextProps) {
  const chars = text.split('').map((char, index) => (
    <motion.span 
      key={index}
      variants={textChar}
      className="inline-block"
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  ));

  // Dynamically create the element
  const Component = motion[el] as any;
  
  return (
    <Component 
      className={className}
      variants={textContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {chars}
    </Component>
  );
}

export function AnimatedGradientText({
  text,
  className = '',
  el = 'span',
  once = true
}: AnimatedTextProps) {
  // Dynamically create the element
  const Component = motion[el] as any;
  
  return (
    <Component
      className={`gradient-text inline-block ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once }}
    >
      {text}
    </Component>
  );
}