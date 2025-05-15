// Common animation variants for Framer Motion
// These can be reused across components for consistent animations

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export const staggerFast = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideDown = {
  hidden: { y: -50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }
  }
};

export const bounce = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: "spring", 
      bounce: 0.5, 
      duration: 0.8 
    }
  }
};

// Hover animations
export const pulseHover = {
  initial: { scale: 1 },
  hover: { 
    scale: [1, 1.05, 1],
    transition: { 
      duration: 0.6, 
      repeat: Infinity,
      repeatType: "reverse" 
    }
  }
};

export const liftHover = {
  initial: { y: 0 },
  hover: { 
    y: -10,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    }
  }
};

export const scaleHover = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    }
  }
};

export const glowHover = {
  initial: { boxShadow: "0 0 0px rgba(99, 102, 241, 0)" },
  hover: { 
    boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
    transition: { duration: 0.3 }
  }
};

// Background animations
export const floatBackground = {
  initial: { y: 0 },
  animate: { 
    y: [0, -30, 0],
    transition: { 
      duration: 6, 
      repeat: Infinity,
      repeatType: "reverse", 
      ease: "easeInOut" 
    }
  }
};

export const morphBackground = {
  initial: { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
  animate: { 
    borderRadius: [
      "60% 40% 30% 70% / 60% 30% 70% 40%",
      "30% 60% 70% 40% / 50% 60% 30% 60%",
      "60% 40% 30% 70% / 60% 30% 70% 40%"
    ],
    transition: { 
      duration: 8, 
      repeat: Infinity,
      repeatType: "reverse", 
      ease: "easeInOut" 
    }
  }
};

// Button animations
export const buttonTap = {
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 } 
  }
};

// Element animations
export const rotateIn = {
  hidden: { rotate: -10, opacity: 0 },
  visible: { 
    rotate: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const blurIn = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { 
    filter: "blur(0px)", 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

// Staggered characters animation
export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
  };
};

// Animation for characters in text
export const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.04,
    },
  },
};

export const textChar = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 12, stiffness: 100 },
  },
};

// Animation for progress bars
export const progressVariant = (delay: number) => {
  return {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 0.8,
        delay,
        ease: "easeInOut",
      },
    },
  };
};

// Path drawing animation for SVGs
export const drawPath = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      pathLength: { duration: 1.5, ease: "easeInOut" },
      opacity: { duration: 0.3 }
    }
  }
};

// For scroll animations
export const scrollReveal = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

// Grid item animations
export const gridItemVariant = (index: number) => {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
};

// For page transitions
export const pageTransition = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
      duration: 0.5, 
      when: "beforeChildren",
      staggerChildren: 0.15,
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Hero section animations
export const heroImage = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2
    }
  },
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const heroHeading = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const heroContent = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut"
    }
  }
};