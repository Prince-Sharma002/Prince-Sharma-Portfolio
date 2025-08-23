"use client"
import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="mb-8 border-t mt-4 border-white/20 pt-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
          ~ Let&apos;s Connect
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 items-start">

        {/* Links side */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {/* About Me */}
          <div>
            <h3 className="mb-3 text-base sm:text-lg font-semibold text-white">About Me</h3>
            <ul className="space-y-3 text-zinc-300">
              <li>
                <a
                  href="mailto:prince12845sharma@gmail.com"
                  className="group w-full flex items-center gap-3 rounded-md border border-white/10 bg-zinc-900/40 p-3 hover:bg-zinc-900/60 transition-colors"
                >
                  <span className="mt-0.5 text-lg sm:text-xl">✉️</span>
                  <span>
                    <span className="block font-medium text-white">Email</span>
                    <span className="block text-[13px] sm:text-sm break-words">prince12845sharma@gmail.com</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.canva.com/design/DAGs3HH9Il8/wHMdo2yydgG-B08jg466Cw/edit?utm_content=DAGs3HH9Il8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group w-full flex items-center gap-3 rounded-md border border-white/10 bg-zinc-900/40 p-3 hover:bg-zinc-900/60 transition-colors"
                >
                  <span className="mt-0.5 text-lg sm:text-xl">📄</span>
                  <span>
                    <span className="block font-medium text-white">Resume</span>
                    <span className="block text-[13px] sm:text-sm break-words">Download Resume</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Code */}
          <div>
            <h3 className="mb-3 text-base sm:text-lg font-semibold text-white">Code</h3>
            <ul className="space-y-3 text-zinc-300">
              <li>
                <a
                  href="https://github.com/Prince-Sharma002"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group w-full flex items-center gap-3 rounded-md border border-white/10 bg-zinc-900/40 p-3 hover:bg-zinc-900/60 transition-colors"
                >
                  <span className="mt-0.5 text-lg sm:text-xl">💻</span>
                  <span>
                    <span className="block font-medium text-white">Github</span>
                    <span className="block text-[13px] sm:text-sm break-words">@Prince-Sharma002</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-3 text-base sm:text-lg font-semibold text-white">Social Media</h3>
            <ul className="space-y-3 text-zinc-300">
              <li>
                <a
                  href="https://www.linkedin.com/in/prince-sharma-047973253/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group w-full flex items-center gap-3 rounded-md border border-white/10 bg-zinc-900/40 p-3 hover:bg-zinc-900/60 transition-colors"
                >
                  <span className="mt-0.5 text-lg sm:text-xl">💼</span>
                  <span>
                    <span className="block font-medium text-white">LinkedIn</span>
                    <span className="block text-[13px] sm:text-sm break-words">@prince-sharma</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/prince007sharma"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group w-full flex items-center gap-3 rounded-md border border-white/10 bg-zinc-900/40 p-3 hover:bg-zinc-900/60 transition-colors"
                >
                  <span className="mt-0.5 text-lg sm:text-xl">🐦</span>
                  <span>
                    <span className="block font-medium text-white">Twitter/X</span>
                    <span className="block text-[13px] sm:text-sm break-words">@prince007sharma</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/princeparasarrr/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group w-full flex items-center gap-3 rounded-md border border-white/10 bg-zinc-900/40 p-3 hover:bg-zinc-900/60 transition-colors"
                >
                  <span className="mt-0.5 text-lg sm:text-xl">📸</span>
                  <span>
                    <span className="block font-medium text-white">Instagram</span>
                    <span className="block text-[13px] sm:text-sm break-words">@princeparasarrr</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact