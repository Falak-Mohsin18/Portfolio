import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full h-[70px] z-50 backdrop-blur-md bg-[#0B1120]/85 border-b border-slate-800/80 flex items-center"
    >
      <div className="global-container flex justify-between items-center min-w-0">
        <a href="#home" className="text-2xl font-black text-cyan-400 tracking-tight">
          Falak<span className="text-purple-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-cyan-400 font-medium text-base transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-slate-300 hover:text-cyan-400 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0B1120] border-b border-slate-800 px-8 pb-6 pt-2 space-y-3"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-slate-300 hover:text-cyan-400 font-medium text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;