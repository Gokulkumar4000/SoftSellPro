import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'dark';
  glassEffect?: boolean;
  animated?: boolean;
  blur?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hoverEffect?: 'none' | 'lift' | 'glow' | 'scale' | 'tilt' | 'border';
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  interactive?: boolean;
  animate?: boolean | "tilt" | "float" | "pulse" | "glow";
  style?: React.CSSProperties;
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
    }
  },
  tilt: {
    rotateX: [-1, 1, -1],
    rotateY: [-1, 1, -1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  float: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  pulse: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  glow: {
    boxShadow: [
      "0 0 5px rgba(99, 102, 241, 0.3)",
      "0 0 15px rgba(99, 102, 241, 0.5)",
      "0 0 5px rgba(99, 102, 241, 0.3)"
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'default',
  glassEffect = true,
  animated = true,
  blur = 'md',
  hoverEffect = 'lift',
  padding = 'md',
  className,
  interactive = true,
  animate = false,
  style,
  ...props
}) => {
  const blurMap = {
    none: '',
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  const paddingMap = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
    xl: 'p-10',
  };

  const variantMap = {
    default: 'bg-background/70 border-border',
    primary: 'bg-primary/10 border-primary/20',
    secondary: 'bg-secondary/10 border-secondary/20',
    accent: 'bg-accent/10 border-accent/20',
    dark: 'bg-gray-900/80 border-gray-800',
  };

  // Determine which animation to use based on the animate prop
  const getAnimationVariant = () => {
    if (!animate) return "visible";
    if (typeof animate === 'string') return animate;
    return "visible";
  };

  return (
    <motion.div
      className={cn(
        'relative rounded-xl border',
        glassEffect && blurMap[blur],
        paddingMap[padding],
        variantMap[variant],
        'transition-all duration-300',
        className
      )}
      initial="hidden"
      whileInView="visible"
      whileHover={interactive ? ({
        scale: hoverEffect === 'scale' ? 1.05 : 1.02,
        y: hoverEffect === 'lift' ? -8 : 0,
        boxShadow: hoverEffect === 'glow' 
          ? "0 0 15px 5px rgba(99, 102, 241, 0.3)" 
          : hoverEffect === 'lift'
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            : undefined,
        borderColor: hoverEffect === 'border' ? "hsl(var(--primary))" : undefined,
        rotateX: hoverEffect === 'tilt' ? 5 : 0,
        rotateY: hoverEffect === 'tilt' ? 5 : 0,
      }) : undefined}
      animate={getAnimationVariant()}
      variants={cardVariants}
      viewport={{ once: true, amount: 0.2 }}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;