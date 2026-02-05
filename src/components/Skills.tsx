"use client"

import React from 'react'

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

function BadgeChip({ label }: Badge) {
  return (
    <button
      type="button"
      className="group/chip relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-zinc-700/60 bg-transparent px-3 py-1.5 text-sm text-zinc-300 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/60 hover:border-zinc-500/60 hover:bg-white/5 hover:text-zinc-100 hover:shadow-lg hover:shadow-zinc-900/20"
      aria-label={label}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-rose-500 opacity-0 transition-opacity duration-300 group-hover/chip:opacity-100" />
      <span className="relative z-10">{label}</span>
      <span className="pointer-events-none absolute inset-0 rounded-full ring-0 ring-white/10 transition-all duration-300 group-hover/chip:ring-1 group-hover/chip:ring-white/20" />
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/10 to-purple-500/10 opacity-0 group-hover/chip:opacity-100 transition-opacity duration-300" />
    </button>
  );
}

const Skills = () => {
  return (
    <div className="relative py-12">
      <section className="relative">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-200">
          ~ My Techstack
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-stretch">
          {categories.map((cat) => (
            <div key={cat.title} className="relative">
              <div className="rounded-xl border border-zinc-800/70 bg-zinc-900/30 p-5 ring-1 ring-white/5 transition-all duration-300 hover:bg-white/5 hover:shadow-xl hover:shadow-zinc-900/20 hover:border-zinc-700/80 h-full flex flex-col">
                <div className="mb-4 flex items-center gap-3">
                  <div className="text-2xl">
                    <span>{cat.emoji}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-200 transition-colors duration-200 group-hover:text-zinc-100">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 sm:gap-2.5">
                  {cat.items.map((label) => (
                    <div key={label}>
                      <BadgeChip label={label} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="my-6 border-zinc-800" />
      </section>
    </div>
  )
}

export default Skills;