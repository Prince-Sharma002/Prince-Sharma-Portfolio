"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'

type Certificate = {
  id: number;
  title: string;
  date: string;
  image: string;
  linkdinLink?: string;
  description: React.ReactNode;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const certificates: Certificate[] = [
  { 
    id: 1, 
    title: "SIH 2023 Winner", 
    date: "2023-12-20", 
    image: "/certificates/sih.jpeg",
    linkdinLink: "https://www.linkedin.com/posts/prince-sharma-047973253_smartindiahackathon-digitalabrdruids-sih2023-activity-7144621869306945536-VaMe?utm_source=share&utm_medium=member_desktop",
    description: (
      <>
        Winner 🏆 of Smart India Hackathon 2023 - Developed an innovative solution for real-world problems.
        <br /><br />
        <strong>Project:</strong> Flow-tech Repairs <br />
        <strong>Problem Statement:</strong> 1288 (Ministry of Jal Shakti) <br /><br />
        <strong>Problem Tackled:</strong> Non-Revenue Water (NRW) transformation into Revenue Water. <br />
        <strong>Solution:</strong> Created "Flow-tech Repairs," an app for managing pipeline leakage complaints. <br />
        <strong>ML Model:</strong> Utilized the Hazen-Williams equation for validating NRW data and calculating water loss. <br />
        <strong>Mapping Integration:</strong> Interactive maps display leakage-prone areas and complaint zones.
      </>
    ),
  },
  { 
    id: 2, 
    title: "Project Intern @DRDO", 
    date: "2025-06-06", 
    image: "/certificates/DRDO.jpg",
    description: (
      <>
        <br /><br />
        <strong>Project:</strong> AI Fairness Detection System <br />
        <strong>Solution:</strong> Designed an AI fairness evaluation system to detect bias in ML models. <br />
        <strong>Tech Stack:</strong> Flask, AIF360, React, and statistical metrics to analyze bias across protected attributes <br />
      </>
    ),
  },
  { 
    id: 3, 
    title: "IDEATHON 2.0 3rd Position", 
    date: "2024-1-17", 
    image: "/certificates/ideathon.jpeg",
    linkdinLink: "https://www.linkedin.com/posts/prince-sharma-047973253_reactjs-firebase-developer-activity-7154081852335525888-J5fU?utm_source=share&utm_medium=member_desktop",
    description: (
      <>
        Secured the 3rd 🏆 position in IDEATHON 2.0 held at ABESIT, competing against over 200 teams consisting of 2nd-year B.Tech and 1st-year MCA students!
        <br/>
        <br/>
        <strong> Project </strong>: To-Do List App for Academic Events and Lost Items
        <br/> <br/>
        <strong>Technology Stack:</strong>
        <ul>
          <li>
          <strong> Frontend </strong>: Built with React, offering a responsive and intuitive design.
          </li>
          <li>
          <strong> Backend </strong>: Firebase for seamless data storage and real-time syncing.
          </li>
        </ul>
      </>
    )
  },
  { 
    id: 4, 
    title: "ISRO SIH'24 - Top 47 Team", 
    date: "2024-12-14", 
    image: "/certificates/isro.jpeg",
    linkdinLink: "https://www.linkedin.com/posts/prince-sharma-047973253_sih2024-techfixer-isro-activity-7277622696543186944-aGt4?utm_source=share&utm_medium=member_desktop",
    description: (
      <>
        As part of Team TECH FIXER, we had the honor of addressing ISRO's challenging.
        <br/> <br/>
        <strong> Problem </strong> : On-device semantic segmentation of WMS services with geospatial data export.
        <br/>
        <strong> Problem Statement: </strong>  1735 (ISRO)
        <br/> <br/>
        Out of thousands of participants, we ranked among the top 47 teams in India for ISRO's problem statements. This grand finale journey was a transformative experience, filled with intense competition and invaluable lessons.
        <br/> <br/>
      </>
    )
  },
  { 
    id: 5, 
    title: "Code-A-Thon 3.0 2nd Position", 
    date: "2024-12-24", 
    image: "/certificates/codeathon.jpeg",
    linkdinLink: "https://www.linkedin.com/posts/prince-sharma-047973253_codeathon-teamwork-disastermanagement-activity-7278487141259661316-8a7t?utm_source=share&utm_medium=member_desktop",
    description: (
      <>
        Proud to have secured the Consolation Prize in the CSE Department's Code-A-Thon 3.0 during Year 3 at ABESIT!
        <br/> <br/>
        Among the many remarkable projects, our submission, SegMap: An Interactive Map for Disaster Management and Environmentalists, stood out and was recognized for its innovation and impact.
        <br/> <br/>
        <strong>SegMap </strong> is built using the <strong> MERN stack </strong> and integrated with an <strong> ML analysis tool </strong> for disaster data in <strong> GeoJSON </strong>, aiming to revolutionize disaster management and environmental visualization.
      </>
    )
  },
  { 
    id: 6, 
    title: "Hacknovate 6.0 Tech Lead", 
    date: "2025-03-05", 
    image: "/certificates/hacknovate6.jpg",
    linkdinLink: "https://www.linkedin.com/posts/prince-sharma-047973253_hacknovate6-techteam-hackathonjourney-activity-7316085944757932032-x_12?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6c53cBRZ6cLuxGieb3FvPGLWbXCN6UTMs",
    description: (
      <>
       Led technical setup, event execution, and partnerships. Actively contribute in Hacknovate 6.0 official website for a seamless user experience.
      </>
    )
  },
  { 
    id: 7, 
    title: "AWS Cloud Essentials", 
    date: "2025-07-08", 
    image: "/certificates/AWS Cloud Certificate.jpg",
    description: (
      <>
      Architected and maintained AWS cloud solutions, leveraging services like EC2, S3, and Lambda to enhance scalability, reliability, and cost efficiency across projects.
      </>
    )
  },
  { 
    id: 8, 
    title: "AWS DevOps", 
    date: "2025-07-08", 
    image: "/certificates/AWS DevOps.jpg",
    description: (
      <>
        Designed and implemented CI/CD pipelines using AWS DevOps tools, optimizing deployments and infrastructure automation. Improved system efficiency, reliability, and scalability for robust application delivery.     
      </>
    )
  },
  { 
    id: 9, 
    title: "Postman API Fundamentals", 
    date: "2025-07-08", 
    image: "/certificates/Postman.png",
    description: (
      <>
        Mastered API design, testing, and documentation using Postman. Built and automated workflows, created robust collections, and improved API reliability and collaboration efficiency.
      </>
    )
  },
  { 
    id: 10, 
    title: "Basic of Python Completion", 
    date: "2023-08-31", 
    image: "/certificates/python.png",
    description: "Completed comprehensive Python programming course covering fundamentals and advanced concepts"
  },
  { 
    id: 11, 
    title: "12th Informatics Practices Topper", 
    date: "2022-06-23", 
    image: "/certificates/ip.jpeg",
    description: (
      <>
      Achieved top rank in 12th-grade <strong> Informatics Practices </strong> with an outstanding score of <strong> 97 marks </strong>.
      <br/> <br/>
      Throughout the course, I gained foundational knowledge in <strong>SQL basics</strong>, mastering concepts like database queries and operations, and <strong>Python programming</strong>, exploring its applications in data manipulation and automation. 
      <br/> <br/>
      This solidified my interest in technology and programming and laid the groundwork for my future pursuits in computer science.
      </>
    )
  }
];

type CertificatesProps = {
  limit?: number;
  showMoreLink?: boolean;
};

const Certificates = ({ limit, showMoreLink = false }: CertificatesProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const displayed = limit ? certificates.slice(0, limit) : certificates;

  return (
    <section>
      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {displayed.map((cert) => (
          <motion.article
            key={cert.id}
            className="rounded-xl border border-zinc-800/70 bg-zinc-900/30 p-3 ring-1 ring-white/5 transition-colors hover:bg-white/5"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Certificate Image */}
            <div className="mb-3 overflow-hidden rounded-lg border border-zinc-800/70 aspect-video relative bg-zinc-900 group/image">
              <Image
                src={cert.image}
                alt={`${cert.title} certificate`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-300 ease-out group-hover/image:scale-110"
                priority={false}
              />
            </div>

            {/* Header: title and date */}
            <div className="mb-1 flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-zinc-100">{cert.title}</h3>
              <span className="shrink-0 text-xs text-zinc-400">{cert.date}</span>
            </div>

            {/* Description */}
            <div 
              className={`mb-3 text-sm leading-6 text-zinc-300 overflow-hidden transition-all duration-300 ${
                expandedId === cert.id ? 'max-h-[1000px]' : 'max-h-24'
              }`}
            >
              <div className="prose prose-sm prose-invert max-w-none">
                {cert.description}
              </div>
            </div>

            {/* Read More/Less Button */}
            <button
              onClick={() => setExpandedId(expandedId === cert.id ? null : cert.id)}
              className="mb-2 text-sm text-sky-400 hover:underline focus:outline-none"
            >
              {expandedId === cert.id ? 'Show less' : 'Read more'}
            </button>

            {/* LinkedIn Link */}
            {cert.linkdinLink && (
              <div className="flex items-center gap-4 text-sm">
                <a 
                  href={cert.linkdinLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  View on LinkedIn
                </a>
              </div>
            )}
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default Certificates
