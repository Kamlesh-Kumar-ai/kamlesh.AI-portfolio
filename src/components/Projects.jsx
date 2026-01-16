import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, Globe } from "lucide-react"; // Assuming you use lucide-react

const projects = [
  {
    title: "IPRanker: Threat Detection System",
    category: "AI Security & Backend",
    description: "An advanced security system identifying Proxy, Bot, TOR, and VPN traffic using ML/DL scoring models.",
    tech: ["FastAPI", "Deep Learning", "Anomaly Detection", "IP Intelligence"],
    features: ["Real-time behavior-based blacklisting", "Fraud prevention patterns"],
    link: "#", // Add link if available
    github: "https://github.com/Kamlesh-Kumar-ai",
    image: "/project-ipranker.jpg" // Placeholder
  },
  {
    title: "RAG-Based AI Chatbot",
    category: "Generative AI",
    description: "An intelligent assistant utilizing Retrieval-Augmented Generation to process company and educational records.",
    tech: ["LangChain", "RAG", "Python", "Vector Databases"],
    features: ["Dynamic database updates", "Automatic model retraining pipelines"],
    github: "https://github.com/Kamlesh-Kumar-ai",
  },
  {
    title: "End-to-End ML Deployment",
    category: "Full Stack ML",
    description: "Integration of trained ML models into Django web applications via REST APIs.",
    tech: ["Django", "REST API", "Scikit-Learn", "Model Serialization"],
    features: ["Complete ML lifecycle: training to UI", "Real-time inference endpoints"],
    github: "https://github.com/Kamlesh-Kumar-ai",
  },
  {
    title: "Behavioral Anomaly Detection",
    category: "Deep Learning",
    description: "A 'fingerprint-like' system that detects subtle, invisible user behavior patterns to flag suspicious traffic.",
    tech: ["Neural Networks", "Python", "Feature Engineering"],
    features: ["Distinguishes normal vs anomalous behavior", "Scalable ML system design"],
    github: "https://github.com/Kamlesh-Kumar-ai",
  }
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-[#0a0a0b] px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 md:gap-4 mb-12">
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 italic">/Featured_Deployments</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 w-full md:max-w-lg leading-relaxed">
              A selection of production-ready AI solutions, from generative agents to high-security threat detection systems.
            </p>
          </div>
          <div className="flex gap-4">
             <span className="text-[#BAA0F8] font-mono text-xs sm:text-sm animate-pulse">● System: Live</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#111113] border border-white/10 rounded-2xl overflow-hidden hover:border-[#BAA0F8]/50 transition-all"
            >
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start mb-4 gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-[#BAA0F8] font-mono text-xs uppercase tracking-widest mb-1">{project.category}</p>
                    <h3 className="text-lg sm:text-2xl font-bold text-white break-words">{project.title}</h3>
                  </div>
                  <div className="flex gap-3 flex-shrink-0">
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="space-y-2 sm:space-y-3 mb-8">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <div className="h-1 w-1 rounded-full bg-[#BAA0F8] flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-[9px] sm:text-[10px] font-medium text-gray-400 border border-white/5 whitespace-nowrap">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Decorative Background Element */}
              <div className="absolute -bottom-10 -right-10 text-[100px] opacity-[0.02] font-black group-hover:opacity-[0.05] transition-opacity">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}