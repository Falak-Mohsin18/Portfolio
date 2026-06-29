import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";

const timeline = [
  {
    icon: <FaBriefcase />,
    title: "AI Intern",
    company: "Edunet Foundation",
    date: "May 2025 - Jun 2025",
    description:
      "Developed AI Book Insight using React and Django. Worked on NLP, frontend-backend integration, REST APIs, and AI-based book analysis.",
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
      className="py-32 bg-[#08111f]"
    >
      <div className="max-w-6xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[5px] text-cyan-400">
            My Journey
          </p>

          <h2 className="text-6xl font-black mt-3 mb-24">
            Experience &
            <span className="text-cyan-400">
              {" "}Education
            </span>
          </h2>

        </motion.div>

        <div className="relative">

          {/* Timeline Line */}

          <div className="absolute left-7 top-0 bottom-0 w-[3px] bg-cyan-500"></div>

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex gap-8 mb-20"
            >

              {/* Icon */}

              <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center text-2xl text-white z-10 shadow-lg">
                {item.icon}
              </div>

              {/* Card */}

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex-1 hover:border-cyan-400 transition hover:-translate-y-2">

                <span className="text-cyan-400 font-semibold">
                  {item.date}
                </span>

                <h3 className="text-3xl font-bold mt-2">
                  {item.title}
                </h3>

                <h4 className="text-xl text-slate-300 mt-2">
                  {item.company}
                </h4>

                <p className="text-slate-400 mt-6 leading-8">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;