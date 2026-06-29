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
    skills: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <SiVite />, name: "Vite" },
    ],
  },

  {
    title: "Backend",
    skills: [
      { icon: <SiFastapi />, name: "FastAPI" },
      { icon: <SiFlask />, name: "Flask" },
      { icon: <SiDjango />, name: "Django" },
      { icon: <FaNodeJs />, name: "REST APIs" },
    ],
  },

  {
    title: "Database",
    skills: [
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiSqlite />, name: "SQLite" },
    ],
  },

  {
    title: "Blockchain",
    skills: [
      { icon: <SiEthereum />, name: "Ethereum" },
      { icon: <SiSolidity />, name: "Solidity" },
    ],
  },

  {
    title: "Tools",
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
      className="py-32 bg-[#08111f]"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[5px] text-cyan-400">
            Technical Skills
          </p>

          <h2 className="text-6xl font-black mt-3 mb-20">
            Technologies
            <span className="text-cyan-400">
              {" "}I Use
            </span>
          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

          {categories.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition"
            >

              <h3 className="text-3xl font-bold mb-8">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-5">

                {category.skills.map((skill) => (

                  <div
                    key={skill.name}
                    className="bg-slate-800 rounded-xl p-4 flex flex-col items-center gap-3 hover:bg-cyan-500 transition"
                  >

                    <div className="text-4xl">
                      {skill.icon}
                    </div>

                    <p className="text-sm font-medium">
                      {skill.name}
                    </p>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;