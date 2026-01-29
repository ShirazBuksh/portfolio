import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full p-10 flex justify-between items-center z-50 mix-blend-difference"
    >
      <span className="text-2xl font-bold tracking-tighter text-white">SB.</span>
      <div className="hidden md:flex gap-12 text-[10px] tracking-[0.3em] uppercase opacity-60">
        <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
        <a href="#work" className="hover:opacity-100 transition-opacity">Projects</a>
        <a href="#skills" className="hover:opacity-100 transition-opacity">Skills</a>
        <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
      </div>
    </motion.nav>
  );
}