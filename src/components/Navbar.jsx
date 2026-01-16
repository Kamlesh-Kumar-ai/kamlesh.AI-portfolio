import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [hoveredPath, setHoveredPath] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false); // Close menu after clicking
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-3 sm:px-4"
    >
      {/* Desktop Navbar */}
      <div className="hidden md:flex relative items-center gap-2 px-3 py-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl max-w-5xl">
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

      {/* Mobile/Tablet Navbar */}
      <div className="md:hidden w-full px-2">
        <div className="flex items-center justify-between px-3 sm:px-4 py-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
          <div className="text-white font-bold text-base sm:text-lg truncate">Kamlesh.AI</div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition flex-shrink-0"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-16 left-2 right-2 sm:left-4 sm:right-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50"
            >
              <div className="flex flex-col p-3 sm:p-4 gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="px-3 sm:px-4 py-2 sm:py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition text-sm font-medium"
                  >
                    {item.name}
                  </a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "#contact")}
                  whileHover={{ scale: 1.05 }}
                  className="mt-2 px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-[#BAA0F8] to-[#9d72f3] text-black text-xs font-bold uppercase tracking-tighter rounded-lg cursor-pointer text-center"
                >
                  Initialize Sync
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}