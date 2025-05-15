import { motion } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';
import { ReactNode, useEffect, useState } from 'react';

interface FloatingElementProps {
  className?: string;
  children?: ReactNode;
  duration?: number;
  delay?: number;
  yOffset?: number;
  x?: number;
  y?: number;
  rotateStart?: number;
  rotateEnd?: number;
  infinite?: boolean;
  easing?: string;
}

export const FloatingElement = ({
  className = '',
  children,
  duration = 3,
  delay = 0,
  yOffset = 20,
  x = 0,
  y = 0,
  rotateStart = 0,
  rotateEnd = 0,
  infinite = true,
  easing = 'easeInOut'
}: FloatingElementProps) => {
  return (
    <motion.div
      className={className}
      initial={{ y: y, x: x, rotate: rotateStart }}
      animate={{ 
        y: y + yOffset, 
        x: x,
        rotate: rotateEnd
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: infinite ? Infinity : 0,
        repeatType: 'reverse',
        ease: easing
      }}
    >
      {children}
    </motion.div>
  );
};

interface FloatingBackgroundProps {
  count?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  minBlur?: number;
  maxBlur?: number;
  minOpacity?: number;
  maxOpacity?: number;
  minDuration?: number;
  maxDuration?: number;
  shapes?: ('circle' | 'square' | 'triangle' | 'star' | 'blob')[];
  className?: string;
  responsive?: boolean;
}

export const FloatingBackground = ({
  count = 10,
  colors = ['primary', 'secondary', 'accent', 'indigo', 'violet', 'purple'],
  minSize = 20,
  maxSize = 120,
  minBlur = 20,
  maxBlur = 80,
  minOpacity = 0.1,
  maxOpacity = 0.5,
  minDuration = 15,
  maxDuration = 40,
  shapes = ['circle', 'square', 'blob'],
  className = '',
  responsive = true
}: FloatingBackgroundProps) => {
  const { theme } = useTheme();
  const [elements, setElements] = useState<React.ReactNode[]>([]);
  const isDark = theme === 'dark';

  // Generate random properties for each floating element
  useEffect(() => {
    const newElements = Array.from({ length: count }).map((_, i) => {
      const size = Math.floor(Math.random() * (maxSize - minSize) + minSize);
      const blur = Math.floor(Math.random() * (maxBlur - minBlur) + minBlur);
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Adjust opacity based on theme and randomness
      const baseOpacity = Math.random() * (maxOpacity - minOpacity) + minOpacity;
      const opacity = isDark ? baseOpacity * 0.7 : baseOpacity;
      
      // Randomize positions (percentage based for responsiveness)
      const xPercent = Math.random() * 100;
      const yPercent = Math.random() * 100;
      
      // Randomize animation timing
      const duration = Math.random() * (maxDuration - minDuration) + minDuration;
      const delay = Math.random() * 5;
      
      // Random Y movement distance
      const yOffset = (Math.random() * 60) - 30; // -30 to +30
      
      // Random rotation
      const rotateStart = Math.random() * 60 - 30; // -30 to +30 degrees
      const rotateEnd = Math.random() * 60 - 30; // -30 to +30 degrees
      
      // Pick a random shape
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      
      // Shape-specific styles
      let shapeStyles = '';
      if (shape === 'square') {
        shapeStyles = 'rounded-lg';
      } else if (shape === 'triangle') {
        // CSS triangle using borders
        shapeStyles = 'triangle';
      } else if (shape === 'star') {
        shapeStyles = 'star';
      } else if (shape === 'blob') {
        shapeStyles = 'animate-morph';
      }
      
      return (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${xPercent}%`,
            top: `${yPercent}%`,
          }}
        >
          <FloatingElement
            duration={duration}
            delay={delay}
            yOffset={yOffset}
            rotateStart={rotateStart}
            rotateEnd={rotateEnd}
            className={`w-${size} h-${size} bg-${color}/5 filter blur-${blur}px opacity-${Math.floor(opacity * 10)} ${shapeStyles}`}
          />
        </div>
      );
    });
    
    setElements(newElements);
  }, [count, theme]); // Re-render on theme change

  return (
    <div className={`fixed inset-0 overflow-hidden z-[-1] ${className}`}>
      {elements}
    </div>
  );
};