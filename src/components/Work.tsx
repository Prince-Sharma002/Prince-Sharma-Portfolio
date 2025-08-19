"use client"

import React from 'react'
import Image from 'next/image'
import { motion, type Variants, AnimatePresence } from 'framer-motion'

type Experience = {
  company: string;
  role: string;
  date: string;
  location: string;
  logo?: string; // path in public (e.g., /logo/drdo.png)
  linkedin?: string;
  previewImage?: string; // optional thumbnail for preview card
};

const experiences: Experience[] = [
  {
    company: 'DRDO SAG ',
    role: 'Full Stack Developer (Intern)',
    date: 'June 2025 - July 2025',
    location: 'Hybrid - Delhi',
    logo: '/logo/drdo.png',
    linkedin: 'https://www.linkedin.com/posts/prince-sharma-047973253_successfully-completed-drdo-internship-activity-7350238443395833856-nVsk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6c53cBRZ6cLuxGieb3FvPGLWbXCN6UTMs',
    previewImage: '/drdo.jpeg',
  },
  {
    company: 'GDGC ABESIT',
    role: 'Full Stack Developer Head',
    date: 'July 2024 - July 2025',
    location: 'ABESIT Campus',
    logo: '/logo/gdgc.png',
    linkedin: 'https://www.linkedin.com/posts/prince-sharma-047973253_squidhunt-gdgcabesit-ctf-activity-7322531810603675648-KNMX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6c53cBRZ6cLuxGieb3FvPGLWbXCN6UTMs',
    previewImage: '/squid.jpeg',
  },
  {
    company: 'SheBuilds',
    role: 'Full Stack Developer (Intern)',
    date: 'July 2025 -  January 2026',
    location: 'Hybrid - Noida',
    logo: '/logo/SheBuilds.avif',
    linkedin: 'https://www.linkedin.com/posts/prince-sharma-047973253_shebuilds-hackemon-techlead-activity-7323403878366904322-l9eW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6c53cBRZ6cLuxGieb3FvPGLWbXCN6UTMs',
    previewImage: '/shebuilds.jpeg',
  },
  {
    company: 'Hacknovate 6.0',
    role: 'Frontend Developer Head',
    date: 'January 2025 - April 2025',
    location: 'ABESIT Campus',
    logo: '/logo/hack.png',
    linkedin: 'https://www.linkedin.com/posts/prince-sharma-047973253_hacknovate6-techteam-hackathonjourney-activity-7316085944757932032-x_12?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6c53cBRZ6cLuxGieb3FvPGLWbXCN6UTMs',
    previewImage: '/hack.jpeg',
  },
];

// Hoverable company with LinkedIn preview
function CompanyHover({ exp }: { exp: Experience }) {
  const [open, setOpen] = React.useState(false);
  const openTimer = React.useRef<number | null>(null);
  const closeTimer = React.useRef<number | null>(null);

  const scheduleOpen = () => {
    if (closeTimer.current) { window.clearTimeout(closeTimer.current); closeTimer.current = null; }
    if (!open) {
      openTimer.current = window.setTimeout(() => setOpen(true), 120); // slight intent delay
    }
  };
  const scheduleClose = () => {
    if (openTimer.current) { window.clearTimeout(openTimer.current); openTimer.current = null; }
    closeTimer.current = window.setTimeout(() => setOpen(false), 160); // slightly slower close to allow moving cursor
  };

  React.useEffect(() => () => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }, []);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={scheduleOpen}
      onMouseLeave={scheduleClose}
    >
      <p className="truncate text-sm font-semibold text-zinc-100 hover:text-rose-400 cursor-default">
        {exp.company}
      </p>
      {/* Hover bridge to avoid gap between trigger and popup */}
      {open && (
        <div className="absolute left-0 top-full h-2 w-80"></div>
      )}
      <AnimatePresence>
        {open && exp.linkedin && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.16, ease: 'easeOut' } }}
            exit={{ opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.1, ease: 'easeIn' } }}
            className="absolute left-0 top-full z-20 w-80 overflow-hidden rounded-md border border-zinc-700/60 bg-zinc-900/95 shadow-lg ring-1 ring-white/5"
          >
            {/* Image area */}
            <div className="relative h-40 w-full bg-zinc-800/60">
              {exp.previewImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={exp.previewImage} alt="LinkedIn preview" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs text-zinc-400">No preview image</div>
              )}
            </div>
            {/* Body */}
            <div className="p-3">
              <p className="text-xs text-zinc-300">LinkedIn highlight</p>
              <p className="mt-1 line-clamp-1 text-[11px] text-zinc-500">
                {(() => { try { return new URL(exp.linkedin!).hostname; } catch { return 'linkedin.com'; } })()}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[11px] text-zinc-400">View more</span>
                <a
                  href={exp.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setTimeout(() => setOpen(false), 250)}
                  className="inline-flex items-center rounded-md bg-sky-500/90 px-2 py-1 text-xs font-medium text-white hover:bg-sky-500"
                >
                  Open LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Framer Motion variants
const listVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const Work = () => {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold text-zinc-200">~ Work Experience</h2>
      {/* Motion variants */}
      <motion.ul
        className="divide-y divide-zinc-800/80"
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experiences.map((exp) => (
          <motion.li key={exp.company} className="py-3" variants={itemVariants}>
            <div className="flex items-center justify-between gap-4">
              {/* Left: logo + company + role */}
              <div className="flex min-w-0 items-center gap-3">
                {/* Avatar */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-zinc-700/60 bg-zinc-800/50 ring-1 ring-white/5">
                  {exp.logo ? (
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={40}
                      height={40}
                      className="h-10 w-10 object-cover"
                      priority={false}
                    />
                  ) : (
                    <span className="text-lg">{exp.company.charAt(0)}</span>
                  )}
                </div>
                <div className="min-w-0">
                  <CompanyHover exp={exp} />
                  <p className="truncate text-xs text-zinc-400">{exp.role}</p>
                </div>
              </div>

              {/* Right: dates + location */}
              <div className="text-right text-xs">
                <p className="text-sky-400">{exp.date}</p>
                <p className="text-zinc-400">{exp.location}</p>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

export default Work