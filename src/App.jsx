import Scene from './components/canvas/Scene';
import SmoothScroll from './ui/SmoothScroll';
import Navbar from './ui/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import ProjectsGrid from './sections/ProjectsGrid';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

export default function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <Scene />

      <main className="relative z-10">
        <Hero />         {/* Intro */}
        <About />        {/* 01 — About */}
        <ProjectsGrid /> {/* 02 — Projects */}
        <Skills />       {/* 03 — Skills */}
        <Contact />      {/* 04 — Contact */}
      </main>

      <footer className="py-10 text-center border-t border-white/5">
        <p className="text-[10px] tracking-[0.4em] text-neutral-600 uppercase font-medium">
          © 2025 Shiraz Buksh / All Rights Reserved
        </p>
      </footer>
    </SmoothScroll>
  );
}