import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Lock, BarChart, DollarSign, Award, Check, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedIconProps {
  variant?: 'default' | 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  background?: boolean;
}

// Clock icon that animates like a real clock
export function AnimatedClock({
  variant = 'default',
  size = 'md',
  className,
  background = true
}: AnimatedIconProps) {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const variantMap = {
    default: 'text-foreground',
    primary: 'text-primary',
    secondary: 'text-secondary',
    outline: 'text-foreground opacity-50'
  };

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      {background && (
        <motion.div
          className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <Clock className={cn(sizeMap[size], variantMap[variant], "relative z-10")} />
      
      {/* Hour hand */}
      <motion.div 
        className={cn(
          "absolute bg-primary rounded-full z-20",
          size === 'sm' ? 'h-2 w-0.5 -mt-1.5' : 
          size === 'md' ? 'h-3 w-0.5 -mt-2.5' : 
          'h-4 w-1 -mt-3'
        )}
        style={{ 
          transformOrigin: 'bottom center',
          bottom: '50%',
          left: '50%',
          marginLeft: size === 'lg' ? '-1px' : '-0.5px'
        }}
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 60, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      
      {/* Minute hand */}
      <motion.div 
        className={cn(
          "absolute bg-secondary rounded-full z-20",
          size === 'sm' ? 'h-3 w-0.5 -mt-2.5' : 
          size === 'md' ? 'h-4 w-0.5 -mt-3.5' : 
          'h-6 w-0.5 -mt-5.5'
        )}
        style={{ 
          transformOrigin: 'bottom center',
          bottom: '50%',
          left: '50%',
          marginLeft: '-0.5px'
        }}
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
    </div>
  );
}

// Shield icon with pulsing protection animation
export function AnimatedShield({
  variant = 'default',
  size = 'md',
  className,
  background = true
}: AnimatedIconProps) {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const variantMap = {
    default: 'text-foreground',
    primary: 'text-primary',
    secondary: 'text-secondary',
    outline: 'text-foreground opacity-50'
  };

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      {background && (
        <motion.div
          className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <Shield className={cn(sizeMap[size], variantMap[variant], "relative z-10")} />
      
      {/* Pulse effect */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-secondary/20 z-0"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Check mark */}
      <motion.div 
        className="absolute z-20"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <Check className={cn(
          "text-secondary",
          size === 'sm' ? 'w-4 h-4' : 
          size === 'md' ? 'w-5 h-5' : 
          'w-6 h-6'
        )} />
      </motion.div>
    </div>
  );
}

// Lock icon with secure lock animation
export function AnimatedLock({
  variant = 'default',
  size = 'md',
  className,
  background = true
}: AnimatedIconProps) {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const variantMap = {
    default: 'text-foreground',
    primary: 'text-primary',
    secondary: 'text-secondary',
    outline: 'text-foreground opacity-50'
  };

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      {background && (
        <motion.div
          className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
        />
      )}
      <Lock className={cn(sizeMap[size], variantMap[variant], "relative z-10")} />
      
      {/* Locking animation */}
      <motion.div 
        className={cn(
          "absolute bg-secondary rounded-full z-20",
          size === 'sm' ? 'h-1 w-1' : 
          size === 'md' ? 'h-1.5 w-1.5' : 
          'h-2 w-2'
        )}
        style={{ 
          bottom: size === 'sm' ? '37%' : size === 'md' ? '37%' : '37%',
          left: '50%',
          marginLeft: size === 'sm' ? '-2px' : size === 'md' ? '-3px' : '-4px'
        }}
        animate={{ 
          y: [0, -3, 0],
          opacity: [1, 0.5, 1]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          repeatDelay: 3,
          ease: "easeInOut" 
        }}
      />
    </div>
  );
}

// Chart icon with animated bars
export function AnimatedChart({
  variant = 'default',
  size = 'md',
  className,
  background = true
}: AnimatedIconProps) {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const variantMap = {
    default: 'text-foreground',
    primary: 'text-primary',
    secondary: 'text-secondary',
    outline: 'text-foreground opacity-50'
  };

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      {background && (
        <motion.div
          className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <BarChart className={cn(sizeMap[size], variantMap[variant], "relative z-10")} />
      
      {/* Animated bars */}
      {[1, 2, 3].map((_, i) => (
        <motion.div 
          key={i}
          className={cn(
            "absolute bg-accent rounded-sm z-20",
            size === 'sm' ? 'w-1' : 
            size === 'md' ? 'w-1.5' : 
            'w-2'
          )}
          style={{ 
            bottom: size === 'sm' ? '30%' : size === 'md' ? '30%' : '30%',
            height: 0,
            left: i === 0 ? '30%' : i === 1 ? '50%' : '70%',
            marginLeft: size === 'sm' ? '-1px' : size === 'md' ? '-1.5px' : '-2px'
          }}
          animate={{ 
            height: [
              size === 'sm' ? 5 + i * 3 : size === 'md' ? 8 + i * 4 : 10 + i * 5,
              size === 'sm' ? 10 + i * 3 : size === 'md' ? 15 + i * 4 : 20 + i * 5,
              size === 'sm' ? 5 + i * 3 : size === 'md' ? 8 + i * 4 : 10 + i * 5
            ]
          }}
          transition={{ 
            duration: 2, 
            delay: i * 0.2,
            repeat: Infinity, 
            repeatDelay: 1,
            ease: "easeInOut" 
          }}
        />
      ))}
    </div>
  );
}

// Money/Sales icon with animated dollar
export function AnimatedMoney({
  variant = 'default',
  size = 'md',
  className,
  background = true
}: AnimatedIconProps) {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const variantMap = {
    default: 'text-foreground',
    primary: 'text-primary',
    secondary: 'text-secondary',
    outline: 'text-foreground opacity-50'
  };

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      {background && (
        <motion.div
          className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <DollarSign className={cn(sizeMap[size], variantMap[variant], "relative z-10")} />
      
      {/* Animated coins */}
      {[1, 2].map((_, i) => (
        <motion.div 
          key={i}
          className={cn(
            "absolute rounded-full border-2 z-20 flex items-center justify-center",
            i === 0 ? "border-secondary bg-secondary/20" : "border-accent bg-accent/20",
            size === 'sm' ? 'w-3 h-3' : 
            size === 'md' ? 'w-4 h-4' : 
            'w-5 h-5'
          )}
          style={{ 
            bottom: '50%',
            right: '15%',
          }}
          initial={{
            y: 0,
            opacity: 0,
            x: 0
          }}
          animate={{ 
            y: [0, 30],
            opacity: [0, 1, 0],
            x: i === 0 ? [-5, 5] : [5, -5]
          }}
          transition={{ 
            duration: 2, 
            delay: i * 0.7,
            repeat: Infinity, 
            repeatDelay: 1,
            ease: "easeOut" 
          }}
        >
          <span className={cn(
            "text-xs font-bold",
            i === 0 ? "text-secondary" : "text-accent"
          )}>
            $
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// Award/Trophy with animated stars
export function AnimatedAward({
  variant = 'default',
  size = 'md',
  className,
  background = true
}: AnimatedIconProps) {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const variantMap = {
    default: 'text-foreground',
    primary: 'text-primary',
    secondary: 'text-secondary',
    outline: 'text-foreground opacity-50'
  };

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      {background && (
        <motion.div
          className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <Award className={cn(sizeMap[size], variantMap[variant], "relative z-10")} />
      
      {/* Animated stars */}
      {[1, 2, 3].map((_, i) => (
        <motion.div 
          key={i}
          className="absolute z-20"
          style={{ 
            top: i === 0 ? '10%' : i === 1 ? '20%' : '25%',
            right: i === 0 ? '15%' : i === 1 ? '30%' : '10%',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -15, -30]
          }}
          transition={{ 
            duration: 2, 
            delay: i * 0.5,
            repeat: Infinity, 
            repeatDelay: 3,
            ease: "easeOut" 
          }}
        >
          <Star className={cn(
            "text-yellow-400",
            size === 'sm' ? 'w-2 h-2' : 
            size === 'md' ? 'w-3 h-3' : 
            'w-4 h-4'
          )} fill="currentColor" strokeWidth={1} />
        </motion.div>
      ))}
      
      {/* Shine effect */}
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0 z-20 overflow-hidden rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          repeatDelay: 3
        }}
      >
        <motion.div
          className="absolute w-10 h-40 bg-white blur-md rotate-45 -translate-x-20 -translate-y-10"
          animate={{ translateX: 30, translateY: 30 }}
          transition={{ 
            duration: 1, 
            repeat: Infinity, 
            repeatDelay: 3
          }}
        />
      </motion.div>
    </div>
  );
}

interface FeatureIconProps extends AnimatedIconProps {
  icon: 'clock' | 'shield' | 'lock' | 'chart' | 'money' | 'award';
}

export function FeatureIcon({ icon, ...props }: FeatureIconProps) {
  const iconComponents = {
    clock: <AnimatedClock {...props} />,
    shield: <AnimatedShield {...props} />,
    lock: <AnimatedLock {...props} />,
    chart: <AnimatedChart {...props} />,
    money: <AnimatedMoney {...props} />,
    award: <AnimatedAward {...props} />
  };
  
  return iconComponents[icon] || null;
}

// Animated Icon Container
interface AnimatedIconContainerProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

export function AnimatedIconContainer({
  title,
  description,
  icon,
  className
}: AnimatedIconContainerProps) {
  return (
    <motion.div
      className={cn("flex flex-col items-center text-center p-6 rounded-xl glass hover-lift", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  );
}