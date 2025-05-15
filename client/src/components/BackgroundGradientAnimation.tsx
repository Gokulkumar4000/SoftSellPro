import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from "react";
import { useTheme } from '@/components/ThemeProvider';

interface BackgroundGradientAnimationProps {
  className?: string;
  interactive?: boolean;
  intensity?: number;
  speed?: number;
}

export default function BackgroundGradientAnimation({
  className = '',
  interactive = true,
  intensity = 1,
  speed = 1
}: BackgroundGradientAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [blobs, setBlobs] = useState([
    { x: 20, y: 20, size: 50, color: 'primary' },
    { x: 80, y: 80, size: 60, color: 'secondary' },
    { x: 20, y: 70, size: 35, color: 'accent' }
  ]);

  // Get theme values
  const { theme } = useTheme();

  // Animation duration based on speed
  const animationDuration = `${20 / speed}s`;

  // Update blob positions on mouse move
  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate relative position in the container (0-100%)
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  // Calculate blob positions based on mouse interaction
  useEffect(() => {
    if (!interactive) return;
    
    const updateBlobs = () => {
      setBlobs(prev => prev.map((blob, index) => {
        // Different reactions for each blob
        const distance = index === 0 ? 15 : index === 1 ? 10 : 12;
        const delay = index === 0 ? 0.1 : index === 1 ? 0.15 : 0.12;
        
        return {
          ...blob,
          x: blob.x + (position.x > blob.x ? distance : -distance) * intensity * delay,
          y: blob.y + (position.y > blob.y ? distance : -distance) * intensity * delay
        };
      }));
    };
    
    const intervalId = setInterval(updateBlobs, 500);
    return () => clearInterval(intervalId);
  }, [position, interactive, intensity]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ pointerEvents: 'none' }}
    >
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-${blob.color}/30 animate-morph`}
          animate={{
            x: `${blob.x}%`,
            y: `${blob.y}%`,
          }}
          initial={{
            x: `${blob.x}%`,
            y: `${blob.y}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 10,
            damping: 20,
            mass: 1,
          }}
          style={{
            width: `${blob.size}%`,
            height: `${blob.size}%`,
            filter: `blur(${40 * intensity}px)`,
            opacity: theme === 'dark' ? 0.25 : 0.15,
            transform: `translate(-50%, -50%)`,
            animation: `morph ${animationDuration} ease-in-out infinite`
          }}
        />
      ))}
    </div>
  );
}