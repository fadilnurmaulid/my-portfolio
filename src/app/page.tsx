"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Caesar Cipher GUI",
    desc: "Full-featured GUI encryption tool with dynamic shifting and Python PyQt5.",
    category: "Python",
    image: "/images/caesar_cipher.png",
    link: "#",
  },
  {
    title: "ML Mini Projects",
    desc: "Machine learning experiments: classification, regression, and visualization.",
    category: "AI",
    image: "/images/ml_projects.png",
    link: "#",
  },
  {
    title: "Physics Simulations",
    desc: "Numerical and visual simulations for instrumentation and physics projects.",
    category: "Physics",
    image: "/images/physics_sim.png",
    link: "#",
  },
];

const certificates = [
  { title: "Python — Kaggle", category: "Python", image: "/images/python_cert.png" },
  { title: "SQL — Kaggle / SoloLearn", category: "SQL", image: "/images/sql_cert.png" },
  { title: "AI Fundamentals — Coursera", category: "AI", image: "/images/ai_cert.png" },
];

const activities = [
  {
    title: "UI Physics Club",
    desc: "Active member, participated in research and collaborative workshops.",
    date: "2023 - Present",
  },
  {
    title: "AI Summer School",
    desc: "Attended workshops on ML algorithms and data-driven physics simulations.",
    date: "2024",
  },
  {
    title: "Research Documentation",
    desc: "Published mini-project reports in Python & instrumentation.",
    date: "2023 - 2025",
  },
  {
    title: "STEM Outreach Volunteer",
    desc: "Led coding workshops for high school students.",
    date: "2022 - Present",
  },
];

export default function Home() {
  return (
    <main className="font-sans max-w-6xl mx-auto px-6 text-gray-100">

      {/* HERO */}
      <motion.section
        className="h-screen flex flex-col justify-center items-center text-center space-y-6 bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-700 rounded-b-3xl shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold">Fadil</h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-xl">
          Physics Instrumentation • AI Research • Computational Modeling • Python Developer
        </p>
        <a
          href="#projects"
          className="mt-6 px-6 py-3 bg-purple-600 rounded-xl shadow-lg hover:bg-purple-700 transition"
        >
          Explore My Work
        </a>
      </motion.section>

      {/* ABOUT + SKILLS */}
      <section className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-10">
        <motion.div
          className="bg-slate-700/80 border border-slate-600 rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 border-l-4 border-purple-600 pl-3">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Physics Instrumentation student at Universitas Indonesia, passionate about AI, computational physics, and scientific programming.
            This portfolio documents my projects, achievements, and professional development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-purple-600 pl-3">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Technical</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "C", "SQL", "Machine Learning", "PyTorch", "Linux", "Git", "VSCode", "LabVIEW", "Arduino"].map(skill => (
                  <span key={skill} className="bg-indigo-700 px-4 py-2 rounded-full text-purple-300 text-sm font-medium shadow-sm hover:shadow-md transition">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Non-Technical</h3>
              <div className="flex flex-wrap gap-2">
                {["Communication", "Critical Thinking", "Documentation", "Problem Solving"].map(skill => (
                  <span key={skill} className="bg-indigo-700 px-4 py-2 rounded-full text-purple-300 text-sm font-medium shadow-sm hover:shadow-md transition">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 md:py-20 space-y-10">
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-purple-600 pl-3">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(p => (
            <motion.div
              key={p.title}
              className="bg-indigo-800/70 rounded-xl shadow hover:shadow-lg overflow-hidden transition"
              whileHover={{ scale: 1.03 }}
            >
              {p.image && <Image src={p.image} alt={p.title} width={400} height={200} className="w-full object-cover"/>}
              <div className="p-4">
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="text-gray-300 text-sm">{p.desc}</p>
                <a href={p.link} className="text-purple-400 text-sm hover:underline mt-2 inline-block">GitHub →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="py-16 md:py-20 space-y-10 bg-indigo-900/60 rounded-xl p-6 md:p-12">
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-purple-600 pl-3">Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map(c => (
            <motion.div key={c.title} className="bg-indigo-800/70 p-4 rounded-xl shadow text-center" whileHover={{ scale: 1.03 }}>
              {c.image && <Image src={c.image} alt={c.title} width={150} height={100} className="rounded mb-2"/>}
              <p className="text-gray-300 text-sm">{c.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ACTIVITIES / DOCUMENTATION */}
      <section id="activities" className="py-16 md:py-20 space-y-8">
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-purple-600 pl-3">Activities & Documentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map(act => (
            <motion.div
              key={act.title}
              className="bg-indigo-800/70 p-4 rounded-xl shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
            >
              <h4 className="font-semibold text-lg">{act.title}</h4>
              <p className="text-gray-300 text-sm">{act.desc}</p>
              <p className="text-gray-400 text-xs mt-1">{act.date}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 md:py-20 text-center">
        <h2 className="text-3xl font-bold mb-4 border-l-4 border-purple-600 pl-3 inline-block">Contact</h2>
        <p className="text-gray-400 mb-3">Let's connect or collaborate.</p>
        <p>Email: fadilnurmaulid01@gmail.com</p>
        <p>GitHub: github.com/fadil-nurmaulid</p>
        <p>LinkedIn: linkedin.com/in/fadil-nurmaulid</p>
      </section>

      <footer className="text-center text-neutral-400 text-sm mt-12 pb-10">
        © {new Date().getFullYear()} Fadil. All rights reserved.
      </footer>

    </main>
  );
}
