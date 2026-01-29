import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-60 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-[10px] tracking-[0.4em] text-neutral-500 uppercase font-medium mb-10">
          04 — Connection
        </p>
        <h2 className="text-5xl md:text-8xl font-light tracking-tighter text-white mb-20">
          Let’s <span className="italic opacity-40">Collaborate.</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          <SocialLink href="https://linkedin.com/in/shiraz-buksh/" label="LinkedIn" icon={<Linkedin size={20} />} />
          <SocialLink href="https://github.com" label="GitHub" icon={<Github size={20} />} />
        </div>
        
        <div className="mt-32">
          <a href="mailto:shirazdev1@gmail.com" className="text-neutral-500 hover:text-white transition-colors text-lg font-light">
            shirazdev1@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, label, icon }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex items-center gap-2 text-white text-xl font-light overflow-hidden"
    >
      <span className="opacity-50 group-hover:opacity-100 transition-opacity">{icon}</span>
      <div className="relative">
        {label}
        <motion.div className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
      <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
    </a>
  );
}