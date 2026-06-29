import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaServer,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="relative w-full py-[80px] overflow-hidden scroll-mt-[100px]"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-[500px] max-w-full h-[500px] rounded-full bg-cyan-500/10 blur-[160px] top-1/2 left-[-100px] -translate-y-1/2" />
      </div>

      <div className="global-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          {/* Left Column (55%): Heading, Paragraphs, Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8 min-w-0 w-full"
          >
            <div>
              <span className="text-cyan-400 font-semibold uppercase tracking-[0.2em] text-xs md:text-sm block mb-3 max-w-full break-words">
                About Me
              </span>

              <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-extrabold tracking-tight text-white leading-tight max-w-full break-words">
                Turning Ideas Into
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Software Solutions</span>
              </h2>
            </div>

            <div className="space-y-6 text-slate-300 text-[18px] sm:text-[19px] leading-[1.9] max-w-[650px] w-full break-words">
              <p className="font-medium text-slate-100">
                Hello! I'm <span className="text-cyan-400 font-semibold">Falak Mohsin</span>, a Computer Science undergraduate specializing in IoT & Blockchain.
              </p>
              <p>
                I specialize in developing modern, full-stack web applications using cutting-edge frameworks like React, Django, Flask, FastAPI, and decentralized Blockchain technologies.
              </p>
              <p>
                My focus is on engineering scalable backend architectures, designing clean user interfaces, and creating impactful solutions for real-world problems.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-800/80 max-w-[650px] w-full min-w-0">
              <div className="p-2 min-w-0">
                <h3 className="text-3xl md:text-4xl font-extrabold text-cyan-400">5+</h3>
                <p className="text-slate-400 text-sm mt-1 break-words">Major Projects</p>
              </div>
              <div className="p-2 min-w-0">
                <h3 className="text-3xl md:text-4xl font-extrabold text-cyan-400">15+</h3>
                <p className="text-slate-400 text-sm mt-1 break-words">Technologies</p>
              </div>
              <div className="p-2 min-w-0">
                <h3 className="text-3xl md:text-4xl font-extrabold text-cyan-400">1</h3>
                <p className="text-slate-400 text-sm mt-1 break-words">Internship</p>
              </div>
              <div className="p-2 min-w-0">
                <h3 className="text-3xl md:text-4xl font-extrabold text-cyan-400">100%</h3>
                <p className="text-slate-400 text-sm mt-1 break-words">Dedication</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column (45%): 4 Feature Cards in 2x2 Grid with 32px Gap */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 grid sm:grid-cols-2 gap-8 min-w-0 w-full"
          >
            <div className="bg-slate-900/60 backdrop-blur-md rounded-[24px] p-6 sm:p-[32px] border border-slate-800/80 hover:border-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.1)] hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-2.5 group min-w-0 w-full">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-3xl mb-6 group-hover:scale-110 transition duration-300">
                  <FaLaptopCode />
                </div>
                <h3 className="text-[24px] sm:text-[28px] font-bold text-white mb-3 break-words">Frontend</h3>
                <p className="text-slate-400 text-base leading-relaxed break-words">
                  React, Tailwind CSS, JavaScript, responsive interfaces & user-centric web design.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md rounded-[24px] p-6 sm:p-[32px] border border-slate-800/80 hover:border-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.1)] hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-2.5 group min-w-0 w-full">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-3xl mb-6 group-hover:scale-110 transition duration-300">
                  <FaServer />
                </div>
                <h3 className="text-[24px] sm:text-[28px] font-bold text-white mb-3 break-words">Backend</h3>
                <p className="text-slate-400 text-base leading-relaxed break-words">
                  Django, Flask, FastAPI, REST API architectures & SQL database engineering.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md rounded-[24px] p-6 sm:p-[32px] border border-slate-800/80 hover:border-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.1)] hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-2.5 group min-w-0 w-full">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-3xl mb-6 group-hover:scale-110 transition duration-300">
                  <FaBrain />
                </div>
                <h3 className="text-[24px] sm:text-[28px] font-bold text-white mb-3 break-words">AI & ML</h3>
                <p className="text-slate-400 text-base leading-relaxed break-words">
                  NLP algorithms, intelligent machine learning systems & data analysis integration.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md rounded-[24px] p-6 sm:p-[32px] border border-slate-800/80 hover:border-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.1)] hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-2.5 group min-w-0 w-full">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-3xl mb-6 group-hover:scale-110 transition duration-300">
                  <FaCode />
                </div>
                <h3 className="text-[24px] sm:text-[28px] font-bold text-white mb-3 break-words">Blockchain</h3>
                <p className="text-slate-400 text-base leading-relaxed break-words">
                  Solidity, Ethereum network, smart contracts & decentralized Web3 applications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;