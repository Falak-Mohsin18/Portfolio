import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";

const timeline = [
  {
    icon: <FaGraduationCap />,
    title: "Secondary School (Class X)",
    company: "Riverside Academy",
    date: "2021",
    description:
      "Completed Secondary School with a strong foundation in Mathematics, Science, and Computer fundamentals, developing analytical thinking and problem-solving skills.",
  },

  {
    icon: <FaGraduationCap />,
    title: "Senior Secondary (Class XII)",
    company: "Riverside Academy",
    date: "2023",
    description:
      "Completed Senior Secondary education in the Science stream, strengthening my interest in Computer Science, technology, and engineering.",
  },

  {
    icon: <FaGraduationCap />,
    title: "B.Tech Computer Science (IoT & Blockchain)",
    company: "Babu Banarasi Das University",
    date: "2023 - 2027",
    description:
      "Currently pursuing Bachelor's in Computer Science with specialization in IoT & Blockchain.",
  },

  {
    icon: <FaBriefcase />,
    title: "AI Intern",
    company: "Edunet Foundation",
    date: "May 2025 - Jun 2025",
    description:
      "Developed AI Book Insight using React and Django. Worked on NLP, frontend-backend integration, REST APIs, and AI-based book analysis.",
  },

  {
    icon: <FaAward />,
    title: "Certifications",
    company: "IBM | Edunet Foundation",
    date: "2024 - Present",
    description:
      "IBM AI Fundamentals • IBM Cloud • Python • AI & ML • Web Development",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full py-[80px] overflow-hidden scroll-mt-[100px]"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-[500px] max-w-full h-[500px] rounded-full bg-purple-600/10 blur-[160px] bottom-10 left-[-100px]" />
      </div>

      <div className="global-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-[650px] mx-auto mb-16 md:mb-24 w-full min-w-0"
        >
          <span className="text-cyan-400 font-semibold uppercase tracking-[0.2em] text-xs md:text-sm block mb-3 max-w-full break-words">
            My Journey
          </span>

          <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-extrabold tracking-tight text-white leading-tight max-w-full break-words">
            Experience &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Education</span>
          </h2>
        </motion.div>

        <div className="relative w-full min-w-0">
          {/* Vertical Center Connector Line for Desktop */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500/50 to-purple-500/20" />

          <div className="space-y-20 w-full min-w-0">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-start w-full min-w-0 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Glowing Center Dot for Desktop */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 w-6 h-6 rounded-full bg-cyan-400 border-4 border-[#08111f] shadow-[0_0_20px_rgba(6,182,212,0.9)] z-20" />

                  {/* Left/Right Card Container */}
                  <div className="w-full md:w-[calc(50%-30px)] lg:w-[calc(50%-40px)] pl-12 md:pl-0 min-w-0">
                    <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-[24px] p-6 sm:p-[32px] shadow-[0_0_25px_rgba(6,182,212,0.1)] hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] hover:border-cyan-400/60 transition-all duration-300 group hover:-translate-y-2.5 min-w-0 w-full">
                      <div className="flex flex-wrap items-center gap-4 mb-4 min-w-0">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl shrink-0 group-hover:scale-110 transition duration-300">
                          {item.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-1 max-w-full break-words">
                            {item.date}
                          </span>
                          <h3 className="text-[22px] sm:text-[28px] font-bold text-white leading-snug break-words">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <h4 className="text-base font-medium text-slate-400 mb-4 break-words">
                        {item.company}
                      </h4>

                      <p className="text-slate-300 leading-[1.9] text-[16px] sm:text-[17px] break-words">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;