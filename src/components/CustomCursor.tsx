'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position for the dot (fast)
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Position for the circle (smooth/spring)
  const springConfig = { stiffness: 300, damping: 30, mass: 0.5 };
  const circleX = useSpring(dotX, springConfig);
  const circleY = useSpring(dotY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isPointer = window.getComputedStyle(target).cursor === 'pointer' || 
                        target.tagName === 'A' || 
                        target.tagName === 'BUTTON';
      setIsHovered(isPointer);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [dotX, dotY, isVisible]);

  if (typeof window === 'undefined') return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Outer Circle */}
      <motion.div
        style={{
          translateX: circleX,
          translateY: circleY,
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        className="absolute h-8 w-8 rounded-full border border-[#6dc8f2] opacity-50"
      />
      
      {/* Inner Dot */}
      <motion.div
        style={{
          translateX: dotX,
          translateY: dotY,
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        className="absolute h-2.5 w-2.5 rounded-full bg-[#6dc8f2]"
      />
    </div>
  );
};

export default CustomCursor;
