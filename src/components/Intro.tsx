'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section className="relative w-full text-zinc-200 ">
      {/* Ambient gradient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-72 w-72 translate-x-10 rounded-full bg-gradient-to-tr from-rose-500/20 via-fuchsia-500/10 to-indigo-500/20 blur-3xl sm:h-96 sm:w-96"
      />

      {/* Hero grid */}
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
        {/* Left: Heading + Bio */}
        <div>
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-2xl font-semibold leading-tight sm:text-3xl">
                  Hi, I’m <span className="text-zinc-100">Prince Sharma</span>
                </h1>
                <p className="mt-1 text-sm text-zinc-400">Full Stack Engineer</p>
              </div>
            </div>

          </div>

          {/* Bio */}
          <div className="mt-6 space-y-3 text-md leading-6 text-zinc-300">
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
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill className="hover:border-zinc-600/80 hover:bg-zinc-900/80">
                🚀 Available for Work
              </Pill>
            </div>
          </div>

          {/* Divider */}
        </div>

        {/* Right: Feature Image Card with hover effects (hidden on mobile) */}
        <div className="relative mx-auto hidden w-full max-w-[240px] sm:max-w-[260px] md:block md:max-w-[300px]">
          {/* Decorative ring behind */}
          <div
            aria-hidden
            className="absolute -inset-3 -z-10 rounded-full bg-gradient-to-tr from-zinc-50/5 via-fuchsia-400/5 to-rose-400/5 blur-xl"
          />

          <div
            className="group relative aspect-square overflow-hidden rounded-full border border-zinc-700/60 bg-zinc-900/60 shadow-lg ring-1 ring-inset ring-white/5 transition-transform duration-300 will-change-transform transform-gpu hover:-rotate-1 hover:scale-[1.02]"
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
              className="rounded-full object-cover object-center grayscale-[50%] contrast-110 transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-100"
              priority
            />

          </div>
        </div>
      </div>
      <hr className="my-6 border-zinc-800" />
    </section>
  );
}