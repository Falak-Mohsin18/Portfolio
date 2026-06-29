import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full py-[100px] overflow-hidden scroll-mt-[100px]"
    >
      {/* Soft Background Radial Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/3 left-10 w-[500px] max-w-full h-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute bottom-10 right-10 w-[500px] max-w-full h-[500px] rounded-full bg-purple-600/10 blur-[180px]" />
      </div>

      <div className="global-container relative z-10">
        {/* Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-[650px] mx-auto mb-0 w-full min-w-0"
        >
          <span className="text-cyan-400 font-semibold uppercase tracking-[0.2em] text-xs md:text-sm block mb-3 max-w-full break-words">
            Contact Me
          </span>

          <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-extrabold tracking-tight text-white leading-tight mb-6 max-w-full break-words">
            Let's Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Amazing</span>
          </h2>

          <p className="text-slate-300 text-[17px] sm:text-[19px] leading-[1.8] w-full mb-[60px] break-words">
            Feel free to reach out for collaborations, project inquiries, or just to say hello. I'm always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        {/* Two-Column Grid Layout (5 cols Left / 7 cols Right) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start w-full min-w-0">
          {/* Left Column: Vertical Contact Info Cards Stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-5 w-full min-w-0"
          >
            <h3 className="text-xl font-bold text-white mb-4 block">Get in Touch</h3>

            {/* Email Card */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-[22px] p-6 shadow-[0_0_25px_rgba(6,182,212,0.08)] hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] hover:border-cyan-400/60 transition-all duration-300 group flex items-center gap-5 min-w-0 w-full">
              <div className="w-13 h-13 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl shrink-0 group-hover:scale-110 transition duration-300">
                <FaEnvelope />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden">
                <h4 className="text-base font-bold text-white mb-1 truncate">Email</h4>
                <a
                  href="mailto:falak.mohsin1702@gmail.com"
                  className="text-slate-400 text-sm hover:text-cyan-400 truncate block transition duration-300"
                  title="falak.mohsin1702@gmail.com"
                >
                  falak.mohsin1702@gmail.com
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-[22px] p-6 shadow-[0_0_25px_rgba(6,182,212,0.08)] hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] hover:border-cyan-400/60 transition-all duration-300 group flex items-center gap-5 min-w-0 w-full">
              <div className="w-13 h-13 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl shrink-0 group-hover:scale-110 transition duration-300">
                <FaGithub />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden">
                <h4 className="text-base font-bold text-white mb-1 truncate">GitHub</h4>
                <a
                  href="https://github.com/Falak-Mohsin18"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 text-sm hover:text-cyan-400 truncate block transition duration-300"
                  title="github.com/Falak-Mohsin18"
                >
                  github.com/Falak-Mohsin18
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-[22px] p-6 shadow-[0_0_25px_rgba(6,182,212,0.08)] hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] hover:border-cyan-400/60 transition-all duration-300 group flex items-center gap-5 min-w-0 w-full">
              <div className="w-13 h-13 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl shrink-0 group-hover:scale-110 transition duration-300">
                <FaLinkedin />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden">
                <h4 className="text-base font-bold text-white mb-1 truncate">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/falak-mohsin-b33a02299"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 text-sm hover:text-cyan-400 truncate block transition duration-300"
                  title="linkedin.com/in/falak-mohsin-b33a02299"
                >
                  linkedin.com/in/falak-mohsin-b33a02299
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-[22px] p-6 shadow-[0_0_25px_rgba(6,182,212,0.08)] hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] hover:border-cyan-400/60 transition-all duration-300 group flex items-center gap-5 min-w-0 w-full">
              <div className="w-13 h-13 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl shrink-0 group-hover:scale-110 transition duration-300">
                <FaMapMarkerAlt />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden">
                <h4 className="text-base font-bold text-white mb-1 truncate">Location</h4>
                <p className="text-slate-400 text-sm truncate" title="Lucknow, Uttar Pradesh, India">
                  Lucknow, Uttar Pradesh, India
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Modern Glassmorphic Contact Form Card */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-[28px] p-6 sm:p-10 space-y-6 shadow-2xl min-w-0 w-full"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Send Me a Message</h3>
              <p className="text-slate-400 text-sm">Have a project or opportunity? Let's connect.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 w-full min-w-0">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-800/80 rounded-2xl h-[54px] px-6 outline-none border border-slate-700/60 focus:border-cyan-400 text-base text-white placeholder-slate-400 transition-all duration-300 focus:shadow-[0_0_20px_rgba(6,182,212,0.25)] min-w-0"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-800/80 rounded-2xl h-[54px] px-6 outline-none border border-slate-700/60 focus:border-cyan-400 text-base text-white placeholder-slate-400 transition-all duration-300 focus:shadow-[0_0_20px_rgba(6,182,212,0.25)] min-w-0"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-slate-800/80 rounded-2xl h-[54px] px-6 outline-none border border-slate-700/60 focus:border-cyan-400 text-base text-white placeholder-slate-400 transition-all duration-300 focus:shadow-[0_0_20px_rgba(6,182,212,0.25)] min-w-0"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-slate-800/80 rounded-2xl min-h-[180px] p-6 outline-none border border-slate-700/60 focus:border-cyan-400 text-base text-white placeholder-slate-400 transition-all duration-300 focus:shadow-[0_0_20px_rgba(6,182,212,0.25)] resize-none min-w-0"
            />

            <button
              type="submit"
              className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 rounded-2xl h-[54px] flex justify-center items-center gap-3 text-lg font-semibold text-white transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:scale-[1.01]"
            >
              <FaPaperPlane className="text-base shrink-0" />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;