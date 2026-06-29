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
      className="relative py-32 bg-[#0B1120] overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute -top-32 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-purple-600/20 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[5px] text-cyan-400">
            Contact
          </p>

          <h2 className="text-6xl font-black mt-3 mb-20">
            Let's Build Something
            <span className="text-cyan-400">
              {" "}Amazing
            </span>
          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition">

              <FaEnvelope className="text-4xl text-cyan-400 mb-5" />

              <h3 className="text-2xl font-bold">
                Email
              </h3>

              <p className="mt-3 text-slate-400">
                falakmohsin1702@gmail.com
              </p>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition">

              <FaGithub className="text-4xl text-cyan-400 mb-5" />

              <h3 className="text-2xl font-bold">
                GitHub
              </h3>

              <a
                href="https://github.com/Falak-Mohsin18"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-cyan-400"
              >
                github.com/Falak-Mohsin18
              </a>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition">

              <FaLinkedin className="text-4xl text-cyan-400 mb-5" />

              <h3 className="text-2xl font-bold">
                LinkedIn
              </h3>

              <a
                href="https://linkedin.com/in/falak-mohsin"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-cyan-400"
              >
                linkedin.com/in/falak-mohsin
              </a>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition">

              <FaMapMarkerAlt className="text-4xl text-cyan-400 mb-5" />

              <h3 className="text-2xl font-bold">
                Location
              </h3>

              <p className="text-slate-400 mt-3">
                Lucknow, Uttar Pradesh, India
              </p>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-10 space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-800 rounded-xl p-5 outline-none border border-slate-700 focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-800 rounded-xl p-5 outline-none border border-slate-700 focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-slate-800 rounded-xl p-5 outline-none border border-slate-700 focus:border-cyan-400"
            />

            <textarea
              rows="7"
              placeholder="Your Message"
              className="w-full bg-slate-800 rounded-xl p-5 outline-none border border-slate-700 focus:border-cyan-400 resize-none"
            />

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 rounded-xl py-5 flex justify-center items-center gap-3 text-lg font-semibold transition"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;