import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#08111f] border-t border-slate-800/80 py-[80px] overflow-hidden">
      <div className="global-container text-center flex flex-col items-center justify-center space-y-6 min-w-0">
        <h2 className="text-3xl font-black text-white tracking-tight">
          Falak<span className="text-cyan-400">.</span>
        </h2>

        <p className="text-slate-400 text-base max-w-md">
          Software Engineer • Full Stack Developer
        </p>

        <div className="flex items-center gap-6 text-xl text-slate-400 pt-2">
          <a
            href="https://github.com/Falak-Mohsin18"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/falak-mohsin-b33a02299"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:falak.mohsin1702@gmail.com"
            className="hover:text-cyan-400 transition duration-300"
            aria-label="Email"
            title="falak.mohsin1702@gmail.com"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="pt-4 border-t border-slate-800/60 w-full max-w-md flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© 2026 Falak Mohsin. All Rights Reserved.</p>
          <p className="text-slate-400 font-medium">Built with React + Vite</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;