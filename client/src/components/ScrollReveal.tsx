import { useRef, useEffect, ReactNode } from 'react';
import { motion, useInView, Variant } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  threshold?: number;
  type?: 'fade' | 'slide' | 'scale' | 'rotate' | 'custom';
  customVariants?: {
    hidden: Variant;
    visible: Variant;
  };
}

export default function ScrollReveal({
  children,
  width = "fit-content",
  className = "",
  delay = 0,
  duration = 0.5,
  once = true,
  distance = 30,
  direction = 'up',
  threshold = 0.2,
  type = 'fade',
  customVariants,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  // Prepare variants based on animation type and direction
  const getVariants = () => {
    if (customVariants) return customVariants;

    // Base fade effect (present in all animations)
    const fadeEffect = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          duration,
          delay,
          ease: "easeOut"
        }
      }
    };

    // For simple fade animation, return just the fade effect
    if (type === 'fade') return fadeEffect;

    // Add movement based on direction
    let movement = {};
    if (direction === 'up') movement = { y: distance };
    else if (direction === 'down') movement = { y: -distance };
    else if (direction === 'left') movement = { x: distance };
    else if (direction === 'right') movement = { x: -distance };

    // Different animation types
    switch (type) {
      case 'scale':
        return {
          hidden: { ...fadeEffect.hidden, scale: 0.85 },
          visible: { 
            ...fadeEffect.visible, 
            scale: 1,
            transition: { 
              ...fadeEffect.visible.transition,
              type: "spring",
              damping: 15, 
              stiffness: 300
            }
          }
        };
      case 'rotate':
        return {
          hidden: { ...fadeEffect.hidden, rotate: direction === 'left' ? -5 : 5 },
          visible: { 
            ...fadeEffect.visible, 
            rotate: 0 
          }
        };
      case 'slide':
      default:
        return {
          hidden: { ...fadeEffect.hidden, ...movement },
          visible: { 
            ...fadeEffect.visible, 
            x: 0, 
            y: 0 
          }
        };
    }
  };

  const variants = getVariants();

  useEffect(() => {
    if (isInView && ref.current) {
      ref.current.style.opacity = '1';
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}

// Additional export for specific animation presets
interface AnimationComponentProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export function FadeIn({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.5, 
  once = true 
}: AnimationComponentProps) {
  return (
    <ScrollReveal 
      className={className} 
      delay={delay} 
      duration={duration} 
      once={once} 
      type="fade"
      direction="none"
    >
      {children}
    </ScrollReveal>
  );
}

export function SlideUp({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.5, 
  distance = 30,
  once = true 
}: AnimationComponentProps) {
  return (
    <ScrollReveal 
      className={className} 
      delay={delay} 
      duration={duration} 
      distance={distance}
      once={once} 
      type="slide"
      direction="up"
    >
      {children}
    </ScrollReveal>
  );
}

export function SlideInLeft({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.5, 
  distance = 50,
  once = true 
}: AnimationComponentProps) {
  return (
    <ScrollReveal 
      className={className} 
      delay={delay} 
      duration={duration} 
      distance={distance}
      once={once} 
      type="slide"
      direction="left"
    >
      {children}
    </ScrollReveal>
  );
}

export function SlideInRight({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.5, 
  distance = 50,
  once = true 
}: AnimationComponentProps) {
  return (
    <ScrollReveal 
      className={className} 
      delay={delay} 
      duration={duration} 
      distance={distance}
      once={once} 
      type="slide"
      direction="right"
    >
      {children}
    </ScrollReveal>
  );
}

export function ScaleIn({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.5, 
  once = true 
}: AnimationComponentProps) {
  return (
    <ScrollReveal 
      className={className} 
      delay={delay} 
      duration={duration}
      once={once} 
      type="scale"
    >
      {children}
    </ScrollReveal>
  );
}