import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [hoveredPath, setHoveredPath] = useState("");

  // Smooth scroll handler
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80, // Offset for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      // 'fixed' keeps it visible at the top during scroll
      className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4"
    >
      <div className="relative flex items-center gap-2 px-3 py-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            onMouseEnter={() => setHoveredPath(item.name)}
            onMouseLeave={() => setHoveredPath("")}
            className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
          >
            {item.name}
            
            {hoveredPath === item.name && (
              <motion.span
                layoutId="nav-glow"
                className="absolute inset-0 bg-[#BAA0F8]/20 rounded-full -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </a>
        ))}
        
        <motion.a
          href="#contact"
          onClick={(e) => handleScroll(e, "#contact")}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(186,160,248,0.4)" }}
          className="ml-4 px-5 py-2 bg-gradient-to-r from-[#BAA0F8] to-[#9d72f3] text-black text-xs font-bold uppercase tracking-tighter rounded-full cursor-pointer"
        >
          Initialize Sync
        </motion.a>
      </div>
    </motion.nav>
  );
}