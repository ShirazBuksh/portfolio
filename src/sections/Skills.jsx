import { motion } from 'framer-motion';

const skills = [
  { category: "INTERFACE", items: ["Three.js", "Next.js", "React", "Tailwind CSS", "Framer Motion"] },
  { category: "LOGIC", items: ["REST APIs", "Prisma ORM", "Background Jobs", "Event-Driven Systems", "Schema Validation"] },
  { category: "INFRASTRUCTURE", items: ["SQL Databases", "Third-party APIs & Webhooks", "Authentication & Secure Routes", "Deployment", "Git & Version Control"] },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-40 bg-[#080808]/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.4em] text-neutral-500 uppercase font-medium mb-20 text-center">
          03 — Technical Stack
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col border-l border-white/10 pl-8"
            >
              <h3 className="text-white text-sm font-medium tracking-widest uppercase mb-6">{skill.category}</h3>
              <ul className="space-y-4">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-400 font-light text-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}