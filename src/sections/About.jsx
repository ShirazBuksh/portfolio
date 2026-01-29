import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="px-6 py-40 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:col-span-4"
        >
          <p className="text-[10px] tracking-[0.4em] text-neutral-500 uppercase font-medium">
            01 — ABOUT ME
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:col-span-8"
        >
          <h2 className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-white mb-10">
            I build modern web applications <span className="text-neutral-500 italic">that balance performance and clarity. </span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
          I’m a junior full-stack developer building real-world products. I care about clean systems, thoughtful interfaces, and writing code that improves with every iteration. I think about how technical decisions affect usability, performance, and long-term maintainability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}