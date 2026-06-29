import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowDown,
  FaReact,
  FaPython,
  FaGitAlt,
  FaBrain,
  FaCheck,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

function Hero() {
  const [emailCopied, setEmailCopied] = useState(false);
  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-70px)] flex items-center justify-center py-[80px] overflow-hidden bg-[#08111f] scroll-mt-[100px]"
    >
      {/* Soft Background Glow Effects & Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-[500px] max-w-full h-[500px] rounded-full bg-cyan-500/10 blur-[160px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[450px] max-w-full h-[450px] rounded-full bg-purple-600/10 blur-[160px] bottom-[-50px] right-[-50px]" />
      </div>

      <div className="global-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          {/* Left Column: Information & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left min-w-0 w-full"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-6 max-w-full break-words">
              Welcome To My Portfolio
            </span>

            <h1 className="text-[38px] sm:text-[52px] lg:text-[68px] font-extrabold tracking-tight text-white leading-[1.1] mb-5 max-w-full break-words">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Falak Mohsin</span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-semibold mb-6 max-w-full break-words">
              Software Engineer & Full Stack Developer
            </h2>

            <p className="max-w-[650px] w-full text-[18px] sm:text-[19px] leading-[1.9] text-slate-300 mb-10 break-words">
              Computer Science undergraduate passionate about Full Stack Development, Artificial Intelligence, Blockchain, and scalable backend architectures. Building intuitive digital experiences and solving complex real-world challenges.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-[40px] w-full min-w-0">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full">
                <a
                  href="#projects"
                  className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition duration-300 shadow-lg shadow-cyan-500/25 text-base md:text-lg hover:scale-105"
                >
                  View Projects
                </a>

                <a
                  href="/Falak_Mohsin_Resume_Updated.docx"
                  download="Falak_Mohsin_Resume_Updated.docx"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-400 transition duration-300 flex items-center gap-3 text-base md:text-lg font-semibold hover:scale-105"
                >
                  <FaDownload className="text-cyan-400 text-sm" />
                  Resume
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-2xl text-slate-400 w-full">
                <a
                  href="https://github.com/Falak-Mohsin18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/falak-mohsin-b33a02299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <div className="relative">
                  <a
                    href="mailto:falak.mohsin1702@gmail.com"
                    onClick={(e) => {
                      navigator.clipboard?.writeText("falak.mohsin1702@gmail.com");
                      setEmailCopied(true);
                      setTimeout(() => setEmailCopied(false), 3000);
                    }}
                    className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition duration-300 relative"
                    aria-label="Email"
                    title="falak.mohsin1702@gmail.com"
                  >
                    <FaEnvelope />
                  </a>

                  {emailCopied && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-slate-900/95 border border-cyan-400 text-cyan-300 text-xs py-2 px-3.5 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] whitespace-nowrap z-30 flex items-center gap-2"
                    >
                      <FaCheck className="text-cyan-400 text-xs" />
                      <span>falak.mohsin1702@gmail.com (Copied!)</span>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating Tech Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] w-full min-w-0 overflow-visible"
          >
            {/* Center Glowing Card */}
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] h-[340px] sm:h-[360px] rounded-[32px] bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center text-center group overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[32px] opacity-20 blur-xl group-hover:opacity-40 transition duration-500 pointer-events-none" />
              
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-4xl sm:text-5xl mb-6 shadow-lg shadow-cyan-500/10">
                <FaReact className="animate-spin-slow" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Full Stack Developer</h3>
              <p className="text-slate-400 text-xs sm:text-sm">Building Next-Gen Web & AI Applications</p>
            </div>

            {/* Floating Tech Badges safely positioned within bounds */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-0 left-0 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-lg flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-semibold pointer-events-none"
            >
              <FaReact className="text-base sm:text-lg" /> React.js
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-lg flex items-center gap-2 text-yellow-400 text-xs sm:text-sm font-semibold pointer-events-none"
            >
              <FaPython className="text-base sm:text-lg" /> Python
            </motion.div>

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-1/4 right-0 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-lg flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-semibold pointer-events-none"
            >
              <SiJavascript className="text-base sm:text-lg" /> JavaScript
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
              className="absolute bottom-1/4 right-0 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-lg flex items-center gap-2 text-purple-400 text-xs sm:text-sm font-semibold pointer-events-none"
            >
              <FaBrain className="text-base sm:text-lg" /> AI & NLP
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Down Arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-2xl text-cyan-400/60 pointer-events-none hidden md:block"
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
}

export default Hero;