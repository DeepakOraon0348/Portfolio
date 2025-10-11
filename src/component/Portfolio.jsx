
import React from 'react'

export default function Portfolio() {
  const projects = [
    {
      title: 'AI Voice Assistant for Speech-Impaired Users',
      desc: 'Academic project: real-time gesture recognition and voice synthesis to aid communication for speech-impaired users. Data collection and annotation using Roboflow; YOLO-based models integrated with OpenCV; gestures converted to text and speech.',
      tech: ['Python', 'OpenCV', 'YOLO', 'Roboflow', 'pyttsx3', 'gTTS', 'Cloud'],
      link: '#'
    },
    {
      title: 'Advanced To-Do Web App',
      desc: 'Full-featured to-do application demonstrating CRUD operations, state management with Redux, API integration with Axios, and responsive UI.',
      tech: ['React', 'Redux', 'Axios', 'Node.js', 'Express', 'MongoDB'],
      link: 'https://frontend-todo-mocha.vercel.app/'
    },
    {
      title: 'AI Summarizer & Task Planner',
      desc: 'AI-enabled summarization and task planning tool that extracts action items and auto-generates tasks to help users manage notes and workflows.',
      tech: ['React','Express.js','MongoDB','JWT','Axios','Cors', 'Node.js', 'AI APIs'],
      link: 'https://ai-summrizer-fronted.vercel.app/'
    }
  ]

  const skills = [
    'MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git & GitHub', 'Bootstrap',
    'RESTful APIs', 'Redux', 'Axios', 'Authentication', 'Deployment (Vercel, Render)'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-slate-200">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
            <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 mt-10">
                <img
                   src="https://avatars.githubusercontent.com/DeepakOraon0348"
                   alt="Deepak Oraon"
                   className="w-40 h-40 rounded-full shadow-lg border-2 border-gray-700 object-cover"
                />
            </section>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Deepak Oraon</h1>
            <p className="mt-1 text-slate-400">Full Stack MERN Developer</p>
          </div>
          <nav className="space-x-4 text-sm text-slate-300">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </header>

        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-3">Hi, I’m Deepak — MERN stack developer</h2>
            <p className="text-slate-300 mb-4">I design and build scalable web applications using <strong>MongoDB, Express.js, React.js, and Node.js</strong>. I focus on clean architecture, responsive UI, and integrating AI features where appropriate.</p>
            <div className="flex gap-3">
              <a href="#projects" className="inline-block px-5 py-2 bg-indigo-600 rounded-md text-sm font-medium hover:bg-indigo-500">View Projects</a>
              <a href="#contact" className="inline-block px-5 py-2 border border-slate-700 rounded-md text-sm hover:border-slate-500">Contact Me</a>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-slate-800 to-slate-900 rounded-2xl p-6 shadow-lg">
            <div className="text-center py-12">
              <p className="text-slate-400">Available for internships and junior/full-stack roles</p>
              <div className="mt-6 text-left">
                <h3 className="text-lg font-semibold">Quick facts</h3>
                <ul className="mt-3 text-slate-300 space-y-2 text-sm">
                  <li>📍 Chaibasa Engineering College — B.Tech CSE (2021–2025)</li>
                  <li>🎓 CGPA: 7.01</li>
                  <li>🛠 Focus: MERN stack, REST APIs, state management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Selected Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <article key={idx} className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700 hover:scale-[1.01] transition-transform">
                <h4 className="text-lg font-semibold">{p.title}</h4>
                <p className="text-slate-300 text-sm mt-2">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-slate-700/40 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-sm font-medium text-indigo-300 hover:text-indigo-100">Live / Details</a>
                  <span className="text-xs text-slate-400">{idx === 0 ? 'Academic' : 'Personal'}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills & Experience */}
        <section id="skills" className="mb-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <p className="text-slate-300 mb-4">Core MERN stack skills and complementary tools used across projects.</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <span key={i} className="px-3 py-1 rounded-md bg-slate-700/40 text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Role & Contributions</h3>
            <ul className="text-slate-300 list-disc pl-5 space-y-2">
              <li>Led end-to-end development for web apps using MERN stack — schema design, API development, and frontend integration.</li>
              <li>Collected and annotated datasets for gesture recognition using Roboflow; prepared data pipelines for model training.</li>
              <li>Integrated third-party services and deployed applications on Vercel/Render for production-ready hosting.</li>
              <li>Collaborated closely with teammates, followed Git workflows, and focused on writing maintainable code.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section id="about" className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <div className="bg-slate-800/40 p-5 rounded-2xl border border-slate-700">
            <h4 className="font-semibold">Chaibasa Engineering College</h4>
            <p className="text-slate-300 text-sm">B.Tech — Computer Science & Engineering (2021–2025)</p>
            <p className="text-slate-400 text-sm mt-2">CGPA: <strong>7.01</strong></p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-6">
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/40 p-5 rounded-2xl border border-slate-700">
              <p className="text-slate-300">Email: <a href="mailto:deepakoraon0348@gmail.com" className="text-indigo-300">deepakoraon0348@gmail.com</a></p>
              <p className="text-slate-300 mt-2">Phone: <a href="tel:+917480920180" className="text-indigo-300">+91 74809 20180</a></p>
              <p className="text-slate-300 mt-2">LinkedIn: <a href="https://linkedin.com/in/deepak-oraon-532b40253" target="_blank" rel="noreferrer" className="text-indigo-300">linkedin.com/in/deepak-oraon-532b40253</a></p>
              <p className="text-slate-300 mt-2">GitHub: <a href="https://github.com/DeepakOraon0348" target="_blank" rel="noreferrer" className="text-indigo-300">github.com/DeepakOraon0348</a></p>
            </div>

            <form className="bg-slate-800/40 p-5 rounded-2xl border border-slate-700">
              <label className="block text-sm text-slate-300">Message</label>
              <textarea rows={5} className="w-full mt-2 p-3 rounded-md bg-slate-900 border border-slate-700 text-sm text-slate-200" placeholder="Type a short message..." />
              <button type="button" className="mt-3 inline-block px-4 py-2 bg-indigo-600 rounded-md font-medium">Send (demo)</button>
              <p className="text-xs text-slate-400 mt-3">(This form is UI-only in this template — wire it to an email or serverless function for production.)</p>
            </form>
          </div>
        </section>

        <footer className="mt-12 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Deepak Oraon — Built with MERN & Tailwind
        </footer>
      </div>
    </div>
  )
}
