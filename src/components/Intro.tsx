'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ParallaxSection, FloatingElement, MouseFollow } from './ParallaxSection';

function Pill({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300 ${className}`}
    >
      {children}
    </span>
  );
}

// Hoverable link with preview (similar to Work.tsx CompanyHover)
function HoverPreviewLink({
  label,
  href,
  previewImage,
}: {
  label: string;
  href: string;
  previewImage?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const openTimer = React.useRef<number | null>(null);
  const closeTimer = React.useRef<number | null>(null);

  const scheduleOpen = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    if (!open) {
      openTimer.current = window.setTimeout(() => setOpen(true), 120);
    }
  };
  const scheduleClose = () => {
    if (openTimer.current) {
      window.clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    closeTimer.current = window.setTimeout(() => setOpen(false), 160);
  };

  React.useEffect(() => () => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }, []);

  return (
    <span className="relative inline-block" onMouseEnter={scheduleOpen} onMouseLeave={scheduleClose}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 decoration-zinc-400 transition-colors hover:decoration-zinc-300"
        onClick={() => setTimeout(() => setOpen(false), 250)}
      >
        {label}
      </a>
      {open && <div className="absolute left-0 top-full h-2 w-80" />}
      <AnimatePresence>
        {open && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.16, ease: 'easeOut' } }}
            exit={{ opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.1, ease: 'easeIn' } }}
            className="absolute left-0 top-full z-20 mt-1 w-80 overflow-hidden rounded-md border border-zinc-700/60 bg-zinc-900/95 shadow-lg ring-1 ring-white/5"
          >
            <div className="relative h-40 w-full bg-zinc-800/60">
              {previewImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={previewImage} alt="LinkedIn preview" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs text-zinc-400">No preview image</div>
              )}
            </div>
            <div className="p-3">
              <p className="text-xs text-zinc-300">LinkedIn highlight</p>
              <p className="mt-1 line-clamp-1 text-[11px] text-zinc-500">
                {(() => {
                  try {
                    return new URL(href).hostname;
                  } catch {
                    return 'linkedin.com';
                  }
                })()}
              </p>
              <div className="mt-2 flex items-center justify-end">
                <span className="text-[11px] text-zinc-400">Open to view</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

export default function Intro() {
  return (
    <section className="relative w-full text-zinc-200 overflow-hidden">
      {/* Animated background gradient blobs */}
      <ParallaxSection speed={0.3} offset={[0, 1]} className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          <FloatingElement duration={8} delay={0} distance={30} className="absolute -top-20 right-0">
            <div className="h-72 w-72 translate-x-10 rounded-full bg-gradient-to-tr from-rose-500/20 via-fuchsia-500/10 to-indigo-500/20 blur-3xl sm:h-96 sm:w-96" />
          </FloatingElement>
          <FloatingElement duration={6} delay={1} distance={20} className="absolute top-20 left-10">
            <div className="h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/10 via-purple-500/15 to-pink-500/10 blur-2xl" />
          </FloatingElement>
          <FloatingElement duration={10} delay={2} distance={25} className="absolute bottom-10 right-1/4">
            <div className="h-56 w-56 rounded-full bg-gradient-to-tl from-green-500/10 via-teal-500/12 to-cyan-500/10 blur-2xl" />
          </FloatingElement>
        </div>
      </ParallaxSection>

      {/* Hero grid with parallax */}
      <div className="relative grid grid-cols-1 items-start gap-10 md:grid-cols-2">
        {/* Left: Heading + Bio */}
        <ParallaxSection speed={0.2} className="col-span-1">
          <div>
            {/* Header */}
            <motion.div 
              className="flex items-start justify-between gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4">
                <div>
                  <motion.h1 
                    className="text-2xl font-semibold leading-tight sm:text-3xl"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Hi, I&apos;m <span className="text-zinc-100">Prince Sharma</span>
                  </motion.h1>
                  <motion.p 
                    className="mt-1 text-sm text-zinc-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    Full Stack Engineer
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div 
              className="mt-6 space-y-3 text-md leading-6 text-zinc-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                Intern @DRDO 🎓 |{' '}
                <HoverPreviewLink
                  label={"SIH '23 WINNER 🏆"}
                  href="https://www.linkedin.com/posts/prince-sharma-047973253_smartindiahackathon-digitalabrdruids-sih2023-activity-7144621869306945536-VaMe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6c53cBRZ6cLuxGieb3FvPGLWbXCN6UTMs"
                  previewImage="/sih23.jpeg"
                />
                {', '}
                <HoverPreviewLink
                  label={"SIH '24 ( ISRO ) Finalist🏅"}
                  href="https://www.linkedin.com/posts/prince-sharma-047973253_sih2024-techfixer-isro-activity-7277622696543186944-aGt4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6c53cBRZ6cLuxGieb3FvPGLWbXCN6UTMs"
                  previewImage="/sih24.jpeg"
                />
                {' | '}Core Member @GDGC &#39;24, @SHEBUILDS | Hackathons Won(x4), Organized(x2)
              </p>
              <p>
                Freelanced with 5+ clients, and built tools like{' '}
                <Link
                  href="https://geo-mesh-front.vercel.app/map"
                  className="underline underline-offset-4 decoration-zinc-400 transition-colors hover:decoration-zinc-400"
                >
                  SegMap
                </Link>{' '}
                &{' '}
                <Link
                  href="https://complain-frontend.vercel.app/"
                  className="underline underline-offset-4 decoration-zinc-400 transition-colors hover:decoration-zinc-400"
                >
                  Grievance Portal
                </Link>{' '}
                
                to solve real-world problems with clean, scalable solutions.
              </p>
              <p>Always building, always learning. ⚒️</p>

              {/* Quick action pills */}
              <motion.div 
                className="mt-4 flex flex-wrap gap-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <FloatingElement duration={2} distance={3}>
                  <Pill className="hover:border-zinc-600/80 hover:bg-zinc-900/80">
                    🚀 Available for Work
                  </Pill>
                </FloatingElement>
              </motion.div>
            </motion.div>
          </div>
        </ParallaxSection>

        {/* Right: Feature Image Card with enhanced hover effects */}
        <div className="relative mx-auto hidden w-full max-w-[240px] sm:max-w-[260px] md:block md:max-w-[300px]">
          <ParallaxSection speed={0.4} className="relative">
            {/* Decorative ring behind with animation */}
            <motion.div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-full bg-gradient-to-tr from-zinc-50/5 via-fuchsia-400/5 to-rose-400/5 blur-xl"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <MouseFollow intensity={0.15}>
              <motion.div
                className="group relative aspect-square overflow-hidden rounded-full border border-zinc-700/60 bg-zinc-900/60 shadow-lg ring-1 ring-inset ring-white/5 transition-transform duration-300 will-change-transform transform-gpu"
                whileHover={{ 
                  scale: 1.05,
                  rotate: -2,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                onMouseMove={(e) => {
                  const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  (e.currentTarget as HTMLDivElement).style.setProperty('--x', `${x}%`);
                  (e.currentTarget as HTMLDivElement).style.setProperty('--y', `${y}%`);
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.removeProperty('--x');
                  (e.currentTarget as HTMLDivElement).style.removeProperty('--y');
                }}
              >
                {/* Image */}
                <Image
                  alt="Portrait"
                  src="/me.jpg"
                  fill
                  sizes="(min-width: 768px) 300px, 70vw"
                  className="rounded-full object-cover object-center grayscale-[50%] contrast-110 transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100"
                  priority
                />
                
                {/* Overlay gradient on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
              </motion.div>
            </MouseFollow>
          </ParallaxSection>
        </div>
      </div>
      
      <motion.hr 
        className="my-6 mt-20 border-zinc-800"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{ transformOrigin: "left" }}
      />
    </section>
  );
}