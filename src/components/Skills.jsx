import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaBootstrap,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCubes,
  FaTools,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiFlask,
  SiDjango,
  SiFastapi,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiEthereum,
  SiSolidity,
  SiPostman,
  SiVite,
} from "react-icons/si";

const categories = [
  {
    title: "Languages",
    icon: <FaCode />,
    description: "Core programming languages for web, logic & data management.",
    skills: [
      { icon: <FaJava />, name: "Java" },
      { icon: <FaPython />, name: "Python" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
    ],
  },

  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    description: "Modern UI libraries and styling tooling for responsive apps.",
    skills: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <SiVite />, name: "Vite" },
    ],
  },

  {
    title: "Backend",
    icon: <FaServer />,
    description: "Robust Python and REST framework backend services.",
    skills: [
      { icon: <SiFastapi />, name: "FastAPI" },
      { icon: <SiFlask />, name: "Flask" },
      { icon: <SiDjango />, name: "Django" },
      { icon: <FaNodeJs />, name: "REST APIs" },
    ],
  },

  {
    title: "Database",
    icon: <FaDatabase />,
    description: "Relational database modeling and SQL query engines.",
    skills: [
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiSqlite />, name: "SQLite" },
    ],
  },

  {
    title: "Blockchain",
    icon: <FaCubes />,
    description: "Decentralized Web3 network platforms and smart contracts.",
    skills: [
      { icon: <SiEthereum />, name: "Ethereum" },
      { icon: <SiSolidity />, name: "Solidity" },
    ],
  },

  {
    title: "Tools & DevOps",
    icon: <FaTools />,
    description: "Version control systems, API testing and collaboration tools.",
    skills: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <SiPostman />, name: "Postman" },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-[80px] overflow-hidden scroll-mt-[100px]"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-[500px] max-w-full h-[500px] rounded-full bg-blue-600/10 blur-[160px] top-1/2 right-[-100px] -translate-y-1/2" />
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
            Technical Skills
          </span>

          <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-extrabold tracking-tight text-white leading-tight max-w-full break-words">
            Technologies &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Frameworks</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full min-w-0">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-[24px] p-6 sm:p-[32px] min-h-[260px] shadow-[0_0_25px_rgba(6,182,212,0.1)] hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-2.5 group min-w-0 w-full"
            >
              <div>
                <div className="flex items-center gap-4 mb-4 min-w-0">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl shrink-0 group-hover:scale-110 transition duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-[24px] sm:text-[28px] font-bold text-white break-words min-w-0">
                    {category.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-base leading-relaxed mb-6 break-words">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-3 w-full">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-slate-800/80 hover:bg-cyan-500/20 border border-slate-700/60 hover:border-cyan-400/50 rounded-xl px-3.5 py-2 flex items-center gap-2.5 transition duration-300 text-slate-200"
                    >
                      <span className="text-lg text-cyan-400 shrink-0">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium break-words">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;