"use client"

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { ParallaxSection, FloatingElement, MouseFollow } from './ParallaxSection'

type Badge = {
  label: string;
  icon?: React.ReactNode;
};

type Category = {
  title: string;
  emoji: string;
  items: string[];
};

const categories: Category[] = [
  {
    title: 'Programming Languages',
    emoji: '💻',
    items: ['C', 'C++', 'JavaScript', 'Typescript', 'Python', 'Java', 'SQL'],
  },
  {
    title: 'Web Development',
    emoji: '🌐',
    items: [
      'MERN Stack',
      'Next.js',
      'Flask',
      'Redux',
      'Tailwind CSS',
      'Bootstrap',
      'SCSS',
      'Figma',
      'Firebase Authentication',
      'Acentricity ui',
      'Shadcn ui',
    ],
  },
  {
    title: 'Machine Learning and Python',
    emoji: '🧠',
    items: ['Python-based ML development', 'leafmap', 'SKlearn', 'Streamlit'],
  },
  {
    title: 'Database & Tools',
    emoji: '🗄️',
    items: [
      'MongoDB',
      'Docker',
      'Firebase',
      'PostgreSQL',
      'MySQL',
      'Postman',
      'Git/GitHub',
      'Kali Linux',
      'Unity',
    ],
  },
];

// Framer Motion variants
const cardsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut',
      type: "spring",
      stiffness: 400,
      damping: 25
    } 
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      type: "spring",
      stiffness: 600,
      damping: 30
    }
  }
};

const chipsContainerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const chipVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.3, 
      ease: 'easeOut',
      type: "spring",
      stiffness: 500,
      damping: 20
    } 
  },
};

function BadgeChip({ label }: Badge) {
  return (
    <motion.button
      variants={chipVariants}
      type="button"
      className="group/chip relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-zinc-700/60 bg-transparent px-3 py-1.5 text-sm text-zinc-300 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/60 hover:border-zinc-500/60 hover:bg-white/5 hover:text-zinc-100 hover:shadow-lg hover:shadow-zinc-900/20"
      aria-label={label}
      whileHover={{ 
        scale: 1.05, 
        y: -2,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* sliding dot indicator */}
      <motion.span 
        className="h-1.5 w-1.5 -translate-x-2 rounded-full bg-rose-500 opacity-0 transition-all duration-300 group-hover/chip:translate-x-0 group-hover/chip:opacity-100"
        layout
      />
      <span className="relative z-10">{label}</span>
      {/* inner ring on hover */}
      <span className="pointer-events-none absolute inset-0 rounded-full ring-0 ring-white/10 transition-all duration-300 group-hover/chip:ring-1 group-hover/chip:ring-white/20" />
      {/* glow effect */}
      <motion.span 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/10 to-purple-500/10 opacity-0 group-hover/chip:opacity-100 transition-opacity duration-300"
        initial={false}
      />
    </motion.button>
  );
}

const Skills = () => {
  return (
    <ParallaxSection speed={0.15} className="relative">
      <section className="relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <FloatingElement duration={8} delay={0} distance={15} className="absolute top-5 right-5">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-full blur-xl" />
          </FloatingElement>
          <FloatingElement duration={6} delay={1} distance={10} className="absolute bottom-5 left-5">
            <div className="w-32 h-32 bg-gradient-to-tr from-green-500/5 to-teal-500/5 rounded-full blur-xl" />
          </FloatingElement>
        </div>

        <motion.h2 
          className="mb-6 text-2xl font-semibold text-zinc-200"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ~ My Techstack
        </motion.h2>

        {/* Category sections with enhanced animations */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 items-stretch"
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {categories.map((cat, index) => (
            <MouseFollow key={cat.title} intensity={0.02} className="relative">
              <motion.div
                className="rounded-xl border border-zinc-800/70 bg-zinc-900/30 p-5 ring-1 ring-white/5 transition-all duration-300 hover:bg-white/5 hover:shadow-xl hover:shadow-zinc-900/20 hover:border-zinc-700/80 h-full flex flex-col"
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                {/* Category header with floating emoji */}
                <motion.div 
                  className="mb-4 flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FloatingElement duration={3} distance={3} className="text-2xl">
                    <span>{cat.emoji}</span>
                  </FloatingElement>
                  <motion.h3 
                    className="text-sm font-semibold text-zinc-200"
                    whileHover={{ color: "#f3f4f6" }}
                    transition={{ duration: 0.2 }}
                  >
                    {cat.title}
                  </motion.h3>
                </motion.div>
                
                {/* Skills chips with enhanced animations */}
                <motion.div
                  className="flex flex-wrap items-center gap-2.5 sm:gap-2.5"
                  variants={chipsContainerVariants}
                  initial={false}
                >
                  {cat.items.map((label, chipIndex) => (
                    <motion.div
                      key={label}
                      custom={chipIndex}
                      style={{
                        animationDelay: `${chipIndex * 0.05}s`
                      }}
                    >
                      <BadgeChip label={label} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </MouseFollow>
          ))}
        </motion.div>

        <motion.hr 
          className="my-6 border-zinc-800"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ transformOrigin: "left" }}
        />
      </section>
    </ParallaxSection>
  )
}

export default Skills;