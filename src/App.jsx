import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#08111f] text-slate-100 selection:bg-cyan-500 selection:text-white font-sans overflow-x-hidden w-full">
      <Navbar />

      <main className="w-full flex flex-col gap-[120px] pt-[80px] pb-[120px]">
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;