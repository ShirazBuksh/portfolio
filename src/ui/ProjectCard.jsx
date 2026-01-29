import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function ProjectCard({ title, tag }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useTransform(useSpring(y, springConfig), [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(useSpring(x, springConfig), [-0.5, 0.5], ["-10deg", "10deg"]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="glass group relative h-[500px] w-full rounded-[2.5rem] p-12 overflow-hidden cursor-pointer"
    >
      <div className="relative z-10 h-full flex flex-col justify-end" style={{ transform: "translateZ(60px)" }}>
        <p className="text-[10px] tracking-[0.4em] text-neutral-500 uppercase mb-4">{tag}</p>
        <h3 className="text-4xl md:text-5xl font-light tracking-tighter text-white">{title}</h3>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}