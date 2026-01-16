import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Terminal, Cpu } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0b] pt-16 sm:pt-20 pb-8 sm:pb-10 border-t border-white/5 overflow-x-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#BAA0F8]/50 to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-[#BAA0F8] flex items-center justify-center">
                <Terminal size={18} className="text-black" />
              </div>
              <span className="text-white font-bold text-xl tracking-tighter">KAMLESH.AI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Innovative Python AI/ML Engineer specializing in building complex neural networks 
               and scalable production-ready AI solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Kamlesh-Kumar-ai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/kamlesh-k-bb9705247" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:kk919844@gmail.com" className="text-gray-500 hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2 text-sm uppercase tracking-widest">
              <span className="h-1 w-4 bg-[#BAA0F8] rounded-full" /> Navigation
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-[#BAA0F8] transition-colors">Neural Core (Home)</a></li>
              <li><a href="#about" className="hover:text-[#BAA0F8] transition-colors">Documentation (About)</a></li>
              <li><a href="#projects" className="hover:text-[#BAA0F8] transition-colors">Deployments (Projects)</a></li>
              <li><a href="#skills" className="hover:text-[#BAA0F8] transition-colors">Tech Stack</a></li>
            </ul>
          </div>

          {/* Column 3: Certifications (from your docs) */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2 text-sm uppercase tracking-widest">
              <span className="h-1 w-4 bg-[#BAA0F8] rounded-full" /> Verification
            </h4>
            <ul className="space-y-4 text-xs text-gray-400">
              <li className="flex flex-col">
                <span className="text-white font-medium">Stanford University</span>
                <span>ML & Deep Learning Specialization</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">ThinkNEXT Technologies</span>
                <span>Python Django Web Development</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">AKTU University</span>
                <span>B.Tech in Computer Science</span>
              </li>
            </ul>
          </div>

          {/* Column 4: System Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2 text-sm uppercase tracking-widest">
              <span className="h-1 w-4 bg-[#BAA0F8] rounded-full" /> Status
            </h4>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-gray-500 font-mono">NODE_LOCATION</span>
                <span className="text-[10px] text-[#BAA0F8] font-mono">NOIDA_IN</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] text-gray-500 font-mono">AI_PROFICIENCY</span>
                <span className="text-[10px] text-green-400 font-mono">OPTIMIZED</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-[#BAA0F8] to-purple-600" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} <span className="text-white">Kamlesh Kumar</span>. All rights reserved. 
            Built with React & Intelligence.
          </p>
          <div className="flex items-center gap-2 text-[10px] text-gray-600 font-mono uppercase tracking-[0.2em]">
            <Cpu size={12} />
            Integrated AI Systems v2.0.4
          </div>
        </div>
      </div>
    </footer>
  );
}