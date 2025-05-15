import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  decimalPlaces?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  once?: boolean;
}

export default function AnimatedCounter({
  end,
  duration = 2,
  delay = 0,
  decimalPlaces = 0,
  prefix = '',
  suffix = '',
  className,
  once = true
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;
      const startValue = 0;
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const currentCount = Math.floor(progress * (end - startValue) + startValue);
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      
      // Delay the animation start if needed
      setTimeout(() => {
        animationFrame = requestAnimationFrame(step);
        controls.start({ opacity: 1, y: 0 });
      }, delay * 1000);
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, end, duration, delay, controls]);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className={cn("relative", className)}
    >
      <span className="font-bold">
        {prefix}
        {count.toLocaleString(undefined, {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces
        })}
        {suffix}
      </span>
      
      {/* Subtle particle effect on completion */}
      {count === end && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 0.8 
              }}
              animate={{ 
                x: (Math.random() - 0.5) * 40, 
                y: (Math.random() - 0.5) * 40, 
                opacity: 0,
                scale: 0.5
              }}
              transition={{ 
                duration: 0.8 + Math.random() * 0.5,
                ease: "easeOut"
              }}
              style={{
                top: `${50 + (Math.random() - 0.5) * 10}%`,
                left: `${50 + (Math.random() - 0.5) * 10}%`
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export function AnimatedCounterGrid({ 
  items,
  className
}: { 
  items: {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
  }[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4", className)}>
      {items.map((item, index) => (
        <div 
          key={index}
          className="flex flex-col items-center justify-center text-center p-4 glass rounded-lg"
        >
          <AnimatedCounter
            end={item.value}
            prefix={item.prefix}
            suffix={item.suffix}
            delay={index * 0.2}
            className="text-3xl md:text-4xl font-bold text-primary mb-2"
          />
          <div className="text-sm md:text-base text-muted-foreground">{item.label}</div>
        </div>
      ))}
    </div>
  );
}