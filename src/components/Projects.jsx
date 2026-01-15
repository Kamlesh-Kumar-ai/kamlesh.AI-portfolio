import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, Globe } from "lucide-react"; // Assuming you use lucide-react

const projects = [
  {
    title: "IPRanker: Threat Detection System",
    category: "AI Security & Backend",
    description: "An advanced security system identifying Proxy, Bot, TOR, and VPN traffic using ML/DL scoring models. [cite: 48, 80]",
    tech: ["FastAPI", "Deep Learning", "Anomaly Detection", "IP Intelligence"],
    features: ["Real-time behavior-based blacklisting [cite: 81]", "Fraud prevention patterns [cite: 82]"],
    link: "#", // Add link if available
    github: "https://github.com/Kamlesh-Kumar-ai",
    image: "/project-ipranker.jpg" // Placeholder
  },
  {
    title: "RAG-Based AI Chatbot",
    category: "Generative AI",
    description: "An intelligent assistant utilizing Retrieval-Augmented Generation to process company and educational records. [cite: 56, 57, 58]",
    tech: ["LangChain", "RAG", "Python", "Vector Databases"],
    features: ["Dynamic database updates [cite: 59]", "Automatic model retraining pipelines [cite: 60]"],
    github: "https://github.com/Kamlesh-Kumar-ai",
  },
  {
    title: "End-to-End ML Deployment",
    category: "Full Stack ML",
    description: "Integration of trained ML models into Django web applications via REST APIs. [cite: 62, 63, 64]",
    tech: ["Django", "REST API", "Scikit-Learn", "Model Serialization"],
    features: ["Complete ML lifecycle: training to UI [cite: 65]", "Real-time inference endpoints [cite: 64]"],
    github: "https://github.com/Kamlesh-Kumar-ai",
  },
  {
    title: "Behavioral Anomaly Detection",
    category: "Deep Learning",
    description: "A 'fingerprint-like' system that detects subtle, invisible user behavior patterns to flag suspicious traffic. [cite: 76, 77, 79]",
    tech: ["Neural Networks", "Python", "Feature Engineering"],
    features: ["Distinguishes normal vs anomalous behavior [cite: 78]", "Scalable ML system design [cite: 111]"],
    github: "https://github.com/Kamlesh-Kumar-ai",
  }
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-24 bg-[#0a0a0b] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4 italic">/Featured_Deployments</h2>
            <p className="text-gray-400 max-w-lg">
              A selection of production-ready AI solutions, from generative agents to high-security threat detection systems. [cite: 8, 114]
            </p>
          </div>
          <div className="flex gap-4">
             <span className="text-[#BAA0F8] font-mono text-sm animate-pulse">● System: Live</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#111113] border border-white/10 rounded-2xl overflow-hidden hover:border-[#BAA0F8]/50 transition-all"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[#BAA0F8] font-mono text-xs uppercase tracking-widest mb-1">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="space-y-3 mb-8">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <div className="h-1 w-1 rounded-full bg-[#BAA0F8]" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-medium text-gray-400 border border-white/5">
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