import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode, useState } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  effectType?: 'ripple' | 'glow' | 'particles' | 'shine';
  disabled?: boolean;
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = 'default',
  size = 'default',
  className,
  effectType = 'ripple',
  disabled = false,
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  const variants = {
    default: '',
    primary: 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg',
    secondary: 'bg-secondary text-secondary-foreground shadow-md',
    outline: 'border-2 border-primary/20 hover:border-primary/50 shadow-sm',
    ghost: 'hover:bg-accent/10',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };
  
  // Wrap with motion div for animations
  const buttonContent = (
    <motion.div
      className="relative overflow-hidden w-full h-full"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 800);
        if (onClick) onClick();
      }}
    >
      <Button
        className={cn(
          variants[variant],
          sizes[size],
          "relative overflow-hidden w-full h-full",
          className
        )}
        disabled={disabled}
      >
        {/* Effect Layers */}
        {effectType === 'ripple' && isClicked && (
          <motion.span
            className="absolute inset-0 bg-white rounded-full pointer-events-none"
            initial={{ scale: 0, opacity: 0.7, x: 0, y: 0 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              // Positioned at the click point
              transformOrigin: 'center',
            }}
          />
        )}
        
        {effectType === 'shine' && isHovered && (
          <motion.span
            className="absolute inset-0 overflow-hidden"
            initial={false}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: 0 }}
          >
            <span 
              className="absolute top-0 -left-[100%] w-[300%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-45"
              style={{
                animation: 'shine 1.5s ease-in-out'
              }}
            />
          </motion.span>
        )}
        
        {effectType === 'glow' && isHovered && (
          <motion.span
            className={cn(
              "absolute inset-0 rounded-lg",
              variant === 'primary' ? 'bg-primary/20' : 'bg-white/10'
            )}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              scale: [0.9, 1.1, 0.9]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
        
        {effectType === 'particles' && isClicked && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={cn(
                  "absolute w-1.5 h-1.5 rounded-full",
                  variant === 'primary' ? 'bg-white' : 'bg-primary'
                )}
                initial={{ 
                  x: 0, 
                  y: 0, 
                  opacity: 0.8 
                }}
                animate={{ 
                  x: (Math.random() - 0.5) * 60, 
                  y: (Math.random() - 0.5) * 60, 
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
        
        {/* Button Content */}
        <span className="relative z-10 flex items-center justify-center">
          {children}
        </span>
      </Button>
    </motion.div>
  );
  
  // Return as link or button
  return href ? (
    <a href={href} className="block w-full">
      {buttonContent}
    </a>
  ) : (
    buttonContent
  );
}

// Special animated CTA button with enhanced effects
export function CtaButton({
  children,
  href,
  onClick,
  className,
}: Omit<AnimatedButtonProps, 'variant' | 'size' | 'effectType'>) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0"
        animate={{ 
          opacity: isHovered ? 0.5 : 0,
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ duration: 0.3 }}
        style={{ filter: 'blur(15px)' }}
      />
      
      <AnimatedButton
        variant="primary"
        size="lg"
        href={href}
        onClick={onClick}
        effectType="particles"
        className={cn(
          "bg-gradient-to-r from-primary to-secondary font-medium",
          className
        )}
      >
        {children}
        
        {/* Animated arrow */}
        <motion.span
          className="ml-2"
          animate={{ 
            x: isHovered ? 5 : 0,
            opacity: isHovered ? 1 : 0.8
          }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.span>
      </AnimatedButton>
    </motion.div>
  );
}