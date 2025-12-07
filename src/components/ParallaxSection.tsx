"use client"
import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  offset?: [number, number]
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  className = "", 
  speed = 0.5,
  offset = [0, 1]
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as [number, number]
  })
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  })
  
  const y = useTransform(smoothProgress, [0, 1], [0, speed * 300])
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  
  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        style={{ y, opacity }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}

interface FloatingElementProps {
  children: React.ReactNode
  duration?: number
  delay?: number
  distance?: number
  className?: string
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  duration = 3,
  delay = 0,
  distance = 10,
  className = ""
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggeredRevealProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
}

export const StaggeredReveal: React.FC<StaggeredRevealProps> = ({
  children,
  className = "",
  staggerDelay = 0.1
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <div ref={containerRef} className={className}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: index * staggerDelay,
            ease: "easeOut"
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

interface MouseFollowProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export const MouseFollow: React.FC<MouseFollowProps> = ({
  children,
  className = "",
  intensity = 0.1
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) * intensity
        const y = (e.clientY - rect.top - rect.height / 2) * intensity
        setMousePosition({ x, y })
      }
    }
    
    const element = ref.current
    if (element) {
      element.addEventListener('mousemove', handleMouseMove)
    }
    
    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [intensity])
  
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}
