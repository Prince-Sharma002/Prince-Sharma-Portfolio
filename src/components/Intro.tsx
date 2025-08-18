'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Pill({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300 ${className}`}
    >
      {children}
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
            Intern @DRDO 🎓 | SIH '23 WINNER 🏆, SIH '24 ( ISRO ) Finalist🏅| Core Member @GDGC '24, @SHEBUILDS | Hackathons Won(x4), Organized(x2) </p>
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