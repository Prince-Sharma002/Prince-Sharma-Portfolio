"use client"

import React from 'react'
import { motion, type Variants } from 'framer-motion'

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
    title: 'Web Development',
    emoji: '🌐',
    items: [
      'MERN Stack',
      'Next.js',
      'Flask',
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
    title: 'Programming Languages',
    emoji: '💻',
    items: ['C', 'C++', 'JavaScript', 'Typescript', 'Python', 'Java', 'SQL'],
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
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const chipsContainerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const chipVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
};

function BadgeChip({ label }: Badge) {
  return (
    <motion.button
      variants={chipVariants}
      type="button"
      className="group/chip relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-zinc-700/60 bg-transparent px-3 py-1.5 text-sm text-zinc-300 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/60 hover:border-zinc-500/60 hover:bg-white/5 hover:text-zinc-100"
      aria-label={label}
    >
      {/* sliding dot indicator */}
      <span className="h-1.5 w-1.5 -translate-x-2 rounded-full bg-rose-500 opacity-0 transition-all duration-200 group-hover/chip:translate-x-0 group-hover/chip:opacity-100" />
      <span className="relative z-10">{label}</span>
      {/* inner ring on hover */}
      <span className="pointer-events-none absolute inset-0 rounded-full ring-0 ring-white/10 transition-all duration-200 group-hover/chip:ring-1" />
    </motion.button>
  );
}

const Skills = () => {
  return (
    <section>
      <h2 className="mb-4 text-base font-semibold text-zinc-200">~ My Techstack</h2>

      {/* Category sections */}
      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            className="rounded-xl border border-zinc-800/70 bg-zinc-900/30 p-4 ring-1 ring-white/5 transition-colors hover:bg-white/5"
            variants={cardVariants}
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="text-lg">{cat.emoji}</span>
              <h3 className="text-sm font-semibold text-zinc-200">{cat.title}</h3>
            </div>
            <motion.div
              className="flex flex-wrap items-center gap-2.5 sm:gap-2.5"
              variants={chipsContainerVariants}
              initial={false}
            >
              {cat.items.map((label) => (
                <BadgeChip key={label} label={label} />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <hr className="my-6 border-zinc-800" />
    </section>
  )
}

export default Skills;