"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { ParallaxSection, FloatingElement, MouseFollow } from './ParallaxSection'


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
  hidden: { opacity: 0, x: -50 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut'
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

const projects: Project[] = [
  {
    title: 'Sofia 🤖',
    date: 'May 2024',
    description:
      'A Google PaLM API-based Conversational Chatbot with voice input/output and image processing.',
    tech: ['ReactJS', 'Tailwind CSS', 'Redux', 'Google PaLM API', 'LocalStorage', 'SpeechRecognition' ],
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
    demo: 'https://gdgc-abesit.com/',
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
    <motion.span 
      className="inline-flex items-center rounded-md border border-zinc-700/60 bg-zinc-900/30 px-2.5 py-1 text-xs text-zinc-300 transition-all duration-300 hover:border-zinc-600/60 hover:bg-white/5 hover:text-zinc-200"
      whileHover={{ 
        scale: 1.05, 
        y: -1,
        backgroundColor: "rgba(255, 255, 255, 0.05)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      {label}
    </motion.span>
  );
}

type ProjectsProps = {
  limit?: number; // show only first N projects on summaries
  showMoreLink?: boolean; // show link to /projects
};

const Projects = ({ limit, showMoreLink = false }: ProjectsProps) => {
  const displayed = limit ? projects.slice(0, limit) : projects;
  return (
    <section id='projects' className="relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-36 h-36 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl"
        />
      </div>

      <motion.hr 
        className="my-6 border-zinc-800"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ transformOrigin: "left" }}
      />
      
      <motion.h2 
        className="mb-6 text-2xl font-semibold text-zinc-200"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        ~ Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {displayed.map((p, index) => (
          <MouseFollow key={p.title} intensity={0.02} className="relative">
            <motion.article
              className="rounded-xl border border-zinc-800/70 bg-zinc-900/30 p-4 ring-1 ring-white/5 transition-all duration-300 hover:bg-white/5 hover:shadow-xl hover:shadow-zinc-900/20 hover:border-zinc-700/80"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Enhanced Preview box */}
              <div className="mb-4 overflow-hidden rounded-lg border border-zinc-800/70 aspect-video relative bg-zinc-900 group/image">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 z-10"
                />
                <Image
                  src={p.image}
                  alt={`${p.title} preview`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-all duration-500 ease-out group-hover/image:scale-110 group-hover/image:rotate-1"
                  priority={false}
                />
                <motion.div
                  className="absolute inset-0 border border-zinc-700/50 rounded-lg opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Header: title and date */}
              <div className="mb-2 flex items-start justify-between gap-3">
                <motion.h3 
                  className="text-lg font-semibold text-zinc-100"
                  whileHover={{ color: "#f3f4f6" }}
                  transition={{ duration: 0.2 }}
                >
                  {p.title}
                </motion.h3>
                <motion.span 
                  className="shrink-0 text-xs text-zinc-400 px-2 py-1 bg-zinc-800/50 rounded-full"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(38, 38, 38, 0.8)" }}
                >
                  {p.date}
                </motion.span>
              </div>

              {/* Description */}
              <motion.p 
                className="mb-3 text-sm leading-6 text-zinc-300"
                whileHover={{ color: "#e5e7eb" }}
                transition={{ duration: 0.2 }}
              >
                {p.description}
              </motion.p>

              {/* Enhanced Links */}
              <div className="mb-3 flex items-center gap-4 text-sm">
                {p.demo && (
                  <a href={p.demo} target="_blank" className="text-sky-400 hover:text-sky-300 transition-colors duration-200">
                    Live Demo
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" className="text-sky-400 hover:text-sky-300 transition-colors duration-200">
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
          </MouseFollow>
        ))}
      </motion.div>
      
      {showMoreLink && (
        <div className="mt-6 flex justify-end">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-md border border-zinc-700/60 bg-zinc-900/30 px-4 py-2 text-sm text-sky-400 hover:bg-white/5 hover:border-zinc-600/60 transition-all duration-300"
          >
            More projects →
          </Link>
        </div>
      )}
    </section>
  )
}

export default Projects