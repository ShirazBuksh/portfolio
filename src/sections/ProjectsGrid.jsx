import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';

const projects = [
  { id: 1, title: "Revo", tag: "E-Commerce SaaS" },
  { id: 2, title: "6 Empire Cartel", tag: "Ecommerce Store" },
  { id: 3, title: "COMING SOON", tag: "" },
  { id: 4, title: "TBA", tag: "" },
];

export default function ProjectsGrid() {
  return (
    <section id="work" className="px-6 py-40 max-w-[1600px] mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-[10px] tracking-[0.4em] text-neutral-500 uppercase font-medium mb-4">
            02 — Portfolio
          </p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white">
            Selected <span className="text-neutral-500">Work</span>
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-neutral-500 max-w-xs text-sm font-light leading-relaxed"
        >
          A collection of applications I've built recently.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <ProjectCard 
              title={project.title} 
              tag={project.tag} 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}