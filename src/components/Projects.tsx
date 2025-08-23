"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'


type Project = {
  title: string;
  date: string;
  description: string;
  tech: string[];
  demo?: string;
  github?: string;
  image: string;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const projects: Project[] = [
  {
    title: 'Sofia 🤖',
    date: 'May 2024',
    description:
      'A Google PaLM API-based Conversational Chatbot with voice input/output and image processing.',
    tech: ['ReactJS', 'Boostrap', 'Google PaLM API', 'LocalStorage', 'SpeechRecognition' ],
    demo: 'https://palm-api-react-project.vercel.app/',
    github: 'https://tinyurl.com/35panaf8',
    image: '/project/sofia.png',
  },
  {
    title: 'Segmap 🌍',
    date: 'March 2025',
    description:
      'An interactive map for disaster response and environmental monitoring. SegMap is a smart mapping platform designed to enhance disaster management and environmental monitoring with realtime Message support.',
    tech: ['NextJS', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', "ReactFlow", "Leaflet", "Cryptojs", "Firebase Authentication"],
    demo: 'https://geo-mesh-front.vercel.app/',
    github: 'https://github.com/Prince-Sharma002/GeoMesh-Front',
    image: '/project/segmap.png',
  },
  {
    title: 'Complain Portal 📬',
    date: 'April 2024',
    description:
      'Streamline your complaint box with a dashboard and dynamic map. Notify users of complaint progress via email for transparency and efficiency.',
    tech: ['ReactJS', 'MapBox', 'NodeJS', 'MongoDB', 'ExpressJS', 'Tailwind CSS'],
    demo: 'https://complain-frontend.vercel.app/',
    github: 'https://github.com/Prince-Sharma002/Complain-Portal-MERN',
    image: '/project/complainbox.png',
  },
  {
    title: 'GDGC’24 website',
    date: 'September 2024',
    description:
      'the official ABESIT GDGC’24 website and organized web development events to foster innovation and learning.',
    tech: ['ReactJS', 'Tailwind CSS', 'Framer Motion', 'Acentricity UI'],
    demo: 'https://main.d34x8j0y50canp.amplifyapp.com/',
    github: 'https://github.com/GDGC-abesit/gdgc-website',
    image: '/project/gdgc.png',
  },
  {
    title: 'Hacknovate 6.0 official Website 📬',
    date: 'May 2025',
    description:
      'Developed the official website for Hacknovate 6.0.The platform served as a hub for event details, registrations, and updates',
    tech: ['ReactJS', 'Tailwind CSS', 'Framer Motion', 'Magic UI'],
    demo: 'https://hacknovate6-0.vercel.app/',
    github: 'https://github.com/Prince-Sharma002/Hacknovate6.0',
    image: '/project/hacknovate.png',
  },
  {
    title: 'SheBuilds Hackemon official website',
    date: 'May 2025',
    description:
      'Developed the official website for SheBuilds Hackemon website .The platform served as a hub for event details, registrations, and updates',
    tech: ['ReactJS', 'Tailwind CSS', 'Framer Motion', 'Acentricity UI'],
    demo: 'https://www.hackemon.dev/',
    github: 'https://github.com/prince12841sharma/hackemon-website',
    image: '/project/hackemon.png',
  },
  {
    title: 'Weather Assistant 🌤️',
    date: 'September 2023',
    description:
      'A voice-operated OpenWeatherMap API-based Weather Application for real-time weather information.',
    tech: ['ReactJS', 'Tailwind CSS', 'SCSS', 'Firebase Authentication', 'OpenWeatherMap API', 'SpeechRecognition'],
    demo: 'https://my-project-8cd2e.web.app/',
    github: 'https://medium.com/@prince12845sharma/building-a-dynamic-weather-application-with-voice-and-text-search-in-react-729fc5d6717e',
    image: '/project/weather.png',
  },
  
];

function TechChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-zinc-700/60 bg-zinc-900/30 px-2.5 py-1 text-xs text-zinc-300">
      {label}
    </span>
  );
}

type ProjectsProps = {
  limit?: number; // show only first N projects on summaries
  showMoreLink?: boolean; // show link to /projects
};

const Projects = ({ limit, showMoreLink = false }: ProjectsProps) => {
  const displayed = limit ? projects.slice(0, limit) : projects;
  return (
    <section id='projects'>
      <hr className="my-6 border-zinc-800 " />
      <h2 className="mb-4 text-2xl font-semibold text-zinc-200">~ Projects</h2>

      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {displayed.map((p) => (
          <motion.article
            key={p.title}
            className="rounded-xl border border-zinc-800/70 bg-zinc-900/30 p-3 ring-1 ring-white/5 transition-colors hover:bg-white/5"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Preview box */}
            <div className="mb-3 overflow-hidden rounded-lg border border-zinc-800/70 aspect-video relative bg-zinc-900">
              <Image
                src={p.image}
                alt={`${p.title} preview`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
                priority={false}
              />
            </div>

            {/* Header: title and date */}
            <div className="mb-1 flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-zinc-100">{p.title}</h3>
              <span className="shrink-0 text-xs text-zinc-400">{p.date}</span>
            </div>

            {/* Description */}
            <p className="mb-3 text-sm leading-6 text-zinc-300">{p.description}</p>

            {/* Links */}
            <div className="mb-2 flex items-center gap-4 text-sm">
              {p.demo && (
                <a href={p.demo} target="_blank" className="text-sky-400 hover:underline">
                  Live Demo
                </a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" className="text-sky-400 hover:underline">
                  GitHub
                </a>
              )}
            </div>

            {/* Tech chips */}
            <div className="flex flex-wrap items-center gap-2">
              {p.tech.map((t) => (
                <TechChip key={t} label={t} />
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
      {showMoreLink && (
        <div className="mt-4 flex justify-end">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-md border border-zinc-700/60 bg-zinc-900/30 px-3 py-1.5 text-sm text-sky-400 hover:bg-white/5"
          >
            More projects →
          </Link>
        </div>
      )}
    </section>
  )
}

export default Projects