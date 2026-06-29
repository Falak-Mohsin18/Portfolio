import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full py-[80px] overflow-hidden scroll-mt-[100px]"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-[500px] max-w-full h-[500px] rounded-full bg-cyan-500/10 blur-[160px] top-1/3 left-[-100px]" />
      </div>

      <div className="global-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-[650px] mx-auto mb-16 md:mb-20 w-full min-w-0"
        >
          <span className="text-cyan-400 font-semibold uppercase tracking-[0.2em] text-xs md:text-sm block mb-3 max-w-full break-words">
            Portfolio
          </span>

          <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-extrabold tracking-tight text-white leading-tight max-w-full break-words">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Work & Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[40px] w-full min-w-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="rounded-[24px] overflow-hidden bg-slate-900/60 backdrop-blur-md border border-slate-800/80 shadow-[0_0_25px_rgba(6,182,212,0.1)] hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-2.5 min-w-0 w-full"
            >
              <div>
                {/* Large Project Image Banner Placeholder */}
                <div className="h-52 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950/60 border-b border-slate-800/80 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group w-full">
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-3xl mb-3 group-hover:scale-110 transition duration-300 shrink-0">
                    <FaFolder />
                  </div>
                  <h3 className="text-[24px] sm:text-[28px] font-bold text-white tracking-tight group-hover:text-cyan-300 transition duration-300 break-words max-w-full">
                    {project.title}
                  </h3>
                </div>

                {/* Content with Padding */}
                <div className="p-6 sm:p-[36px]">
                  <p className="text-slate-300 leading-[1.9] text-[16px] sm:text-[17px] break-words">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5 mt-6 w-full">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-800/80 text-cyan-400 text-xs font-medium border border-slate-700/60 break-words"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons pinned at bottom */}
              <div className="p-6 sm:px-[36px] sm:pb-[36px] pt-0 flex flex-wrap items-center gap-4 w-full">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 px-5 py-2.5 rounded-xl transition duration-300 text-sm font-semibold border border-slate-700/60 hover:border-cyan-400/50 shrink-0"
                >
                  <FaGithub className="text-base" />
                  Code
                </a>

                {project.demo && project.demo !== "#" ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2.5 rounded-xl transition duration-300 text-sm font-semibold shadow-md shadow-cyan-500/20 shrink-0"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </a>
                ) : (
                  <span className="flex items-center gap-2 bg-slate-800/40 text-slate-500 px-5 py-2.5 rounded-xl text-sm font-semibold border border-slate-800 cursor-not-allowed shrink-0">
                    <FaExternalLinkAlt className="text-xs" />
                    Demo N/A
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;