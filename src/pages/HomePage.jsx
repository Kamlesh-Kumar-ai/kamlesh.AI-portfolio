import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import SkillsSection from '../components/Skills'
import Experience from '../components/Experinence'
import ProjectSection from '../components/Projects'
import SocialSection from '../components/SocialProfiles'
import Footer from '../components/Footer'

const HomePage = () => {
  // 1. Reading progress bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-[#0a0a0b] selection:bg-[#BAA0F8]/30">
      {/* Global Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#BAA0F8] origin-left z-[60]" 
        style={{ scaleX }} 
      />

      <Navbar />

      <main>
        {/* Each section is wrapped in a motion div for scroll-reveal effects */}
        <section id="home">
          <Hero />
        </section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          id="about"
        >
          <About />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="skills"
        >
          <SkillsSection />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          id="projects"
        >
          <ProjectSection />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          id="experience"
        >
          <Experience />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          id="socials"
        >
          <SocialSection />
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage