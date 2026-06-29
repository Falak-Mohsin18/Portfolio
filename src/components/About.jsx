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
      className="relative py-32 bg-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 uppercase tracking-[5px] mb-3">
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-16">
            Turning Ideas Into
            <span className="text-cyan-400">
              {" "}Software
            </span>
          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p className="text-slate-300 leading-9 text-lg">

              I'm <span className="text-cyan-400 font-semibold">
              Falak Mohsin
              </span>, a Computer Science undergraduate
              specializing in IoT & Blockchain.

              <br /><br />

              I enjoy building modern, scalable web
              applications using React, Django,
              Flask, FastAPI and Blockchain.

              <br /><br />

              My passion lies in solving real-world
              problems through software engineering,
              designing clean user experiences and
              continuously learning new technologies.

            </p>

            <div className="grid grid-cols-2 gap-8 mt-14">

              <div>
                <h3 className="text-5xl font-black text-cyan-400">
                  5+
                </h3>

                <p className="text-slate-400 mt-2">
                  Major Projects
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-cyan-400">
                  15+
                </h3>

                <p className="text-slate-400 mt-2">
                  Technologies
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-cyan-400">
                  1
                </h3>

                <p className="text-slate-400 mt-2">
                  Internship
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-cyan-400">
                  100%
                </h3>

                <p className="text-slate-400 mt-2">
                  Passion
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-8"
          >

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-cyan-400 transition hover:-translate-y-2">

              <FaLaptopCode className="text-cyan-400 text-5xl mb-6" />

              <h3 className="text-2xl font-bold">
                Frontend
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                React, Tailwind CSS, JavaScript,
                Responsive UI and modern design.
              </p>

            </div>

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-cyan-400 transition hover:-translate-y-2">

              <FaServer className="text-cyan-400 text-5xl mb-6" />

              <h3 className="text-2xl font-bold">
                Backend
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                Django, Flask, FastAPI,
                REST APIs and SQL databases.
              </p>

            </div>

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-cyan-400 transition hover:-translate-y-2">

              <FaBrain className="text-cyan-400 text-5xl mb-6" />

              <h3 className="text-2xl font-bold">
                AI
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                NLP, Machine Learning,
                AI-powered web applications.
              </p>

            </div>

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-cyan-400 transition hover:-translate-y-2">

              <FaCode className="text-cyan-400 text-5xl mb-6" />

              <h3 className="text-2xl font-bold">
                Blockchain
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                Solidity, Ethereum,
                Smart Contracts and Web3.
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;