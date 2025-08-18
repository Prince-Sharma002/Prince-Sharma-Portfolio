"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="mb-6">
      {/* Top quick links */}
      <nav className="relative mx-auto max-w-5xl rounded-xl bg-gradient-to-l from-white/5 to-white/0 backdrop-blur-sm px-3 py-2.5 text-sm text-white shadow-sm sm:px-4 sm:py-3 sm:text-base">
        <div className="flex items-center justify-between">
          <h1 className='text-xl first-letter:text-rose-600 font-bold'>My Portfolio</h1>

          {/* Desktop links */}
          <ul className="hidden md:flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <li>
              <Link href="#contact" className="transition-colors duration-200 hover:text-rose-500">
                <span className="inline-block first-letter:text-rose-600 font-bold">Connect</span>
              </Link>
            </li>
            <li>
              <Link href="#projects" className="transition-colors duration-200 hover:text-rose-500">
                <span className="inline-block first-letter:text-rose-600 font-bold">Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/resume.pdf" target="_blank" className="transition-colors duration-200 hover:text-rose-500">
                <span className="inline-block first-letter:text-rose-600 font-bold">Resume</span>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/yourhandle" target="_blank" className="transition-colors duration-200 hover:text-rose-500">
                <span className="inline-block first-letter:text-rose-600 font-bold">Github</span>
              </Link>
            </li>
          </ul>

          {/* Hamburger for mobile */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className={`h-6 w-6 transition-transform ${open ? 'rotate-90' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile panel */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <ul className="mt-2 space-y-1 rounded-lg border border-white/10 bg-black/30 p-2 backdrop-blur">
            <li>
              <Link onClick={() => setOpen(false)} href="#contact" className="block rounded-md px-3 py-2 hover:bg-white/10">
                Connect
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} href="#projects" className="block rounded-md px-3 py-2 hover:bg-white/10">
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} href="/resume.pdf" target="_blank" className="block rounded-md px-3 py-2 hover:bg-white/10">
                Resume
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} href="https://github.com/yourhandle" target="_blank" className="block rounded-md px-3 py-2 hover:bg-white/10">
                Github
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar