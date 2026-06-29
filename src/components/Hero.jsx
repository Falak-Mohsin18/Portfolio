import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[180px] top-[-200px] left-[-150px]" />

        <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[180px] bottom-[-150px] right-[-100px]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-cyan-400 tracking-[5px] uppercase mb-5">
            Welcome To My Portfolio
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight">
            Hi,
            <br />
            I'm
            <span className="text-cyan-400"> Falak</span>
            <br />
            Mohsin
          </h1>

          <h2 className="text-2xl md:text-4xl text-slate-300 mt-8 font-semibold">
            Software Engineer
          </h2>

          <p className="max-w-2xl mt-8 text-slate-400 leading-8 text-lg">
            Computer Science undergraduate passionate about
            Full Stack Development, Artificial Intelligence,
            Blockchain and scalable backend systems.
            I enjoy creating beautiful interfaces and
            solving real-world problems through software.
          </p>

          <div className="flex flex-wrap gap-5 mt-12">

            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="px-8 py-4 rounded-xl border border-cyan-500 hover:bg-cyan-500 transition flex items-center gap-3"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          <div className="flex gap-7 mt-12 text-3xl">

            <a
              href="https://github.com/Falak-Mohsin18"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition hover:scale-125"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/falak-mohsin"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition hover:scale-125"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:falakmohsin1702@gmail.com"
              className="hover:text-cyan-400 transition hover:scale-125"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

      </div>

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-10 text-3xl text-cyan-400"
      >
        <FaArrowDown />
      </motion.div>

    </section>
  );
}

export default Hero;