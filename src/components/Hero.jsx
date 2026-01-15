import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const titles = ["Generative AI", "Neural Networks", "Large Language Models", "MLOps"];

  // Mouse Tracking for Interactive Glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0b]">
      
      {/* 1. Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: `linear-gradient(#3a0ca3 1px, transparent 1px), linear-gradient(90deg, #3a0ca3 1px, transparent 1px)`, 
           backgroundSize: '50px 50px' }} />
      
      {/* 2. Interactive Spotlight Glow */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: useTransform(
            [dx, dy],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(186, 160, 248, 0.15), transparent 80%)`
          ),
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Intro Badge with Pulse */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BAA0F8] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BAA0F8]"></span>
          </span>
          <span className="text-[#BAA0F8] text-xs font-mono uppercase tracking-widest">System Online: v2.0.4</span>
        </motion.div>

        {/* Main Heading with Layout Projection */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black text-white tracking-tighter"
        >
          Architecting <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#BAA0F8] via-white to-[#BAA0F8] animate-gradient-x">
            Autonomous Logic
          </span>
        </motion.h1>

        {/* Dynamic Subtitle */}
        <motion.p className="mt-8 max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
          I'm <span className="text-white font-medium">Kamlesh Kumar</span>. I bridge the gap between complex 
          mathematical models and scalable web architectures, specializing in 
          <span className="text-[#BAA0F8] font-mono ml-2 underline underline-offset-4 decoration-[#BAA0F8]/30">
             production-grade ML.
          </span>
        </motion.p>

        {/* Magnetic Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(186,160,248,0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden"
          >
            <span className="relative z-10">Deploy Portfolio</span>
            <motion.div className="absolute inset-0 bg-[#BAA0F8] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
            className="px-8 py-4 border border-white/10 text-white font-medium rounded-xl transition-all"
          >
            View Documentation
          </motion.a>
        </div>
      </div>
    </section>
  );
}