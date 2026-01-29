import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center pointer-events-none relative z-10">
      <div className="text-center px-6">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-[12px] tracking-[0.6em] text-neutral-500 uppercase mb-8 font-medium"
        >
          FULL-STACK SOFTWARE DEVELOPER
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-[140px] lg:text-[180px] font-light leading-[0.85] tracking-tighter text-white"
        >
          SHIRAZ <br /> 
          <span className="opacity-30 italic md:ml-40">BUKSH</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}