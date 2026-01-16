import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Intelligence",
    description: "Architecting neural networks and generative systems.",
    skills: [
      "Large Language Models (LLMs)", "RAG Architecture", "LangChain", 
      "TensorFlow", "Scikit-learn", "Deep Learning (CNN/RNN)", 
      "Reinforcement Learning", "PyTorch (Exploring)"
    ],
    color: "from-purple-500/20 to-transparent",
    icon: "🧠"
  },
  {
    title: "Backend & Web Architecture",
    description: "Building scalable APIs and full-stack integrations.",
    skills: [
      "Python (Advanced)", "FastAPI", "Django & DRF", 
      "PostgreSQL", "Azure DB", "REST APIs", 
      "Database Normalization", "Flutter Integration"
    ],
    color: "from-blue-500/20 to-transparent",
    icon: "🔌"
  },
  {
    title: "MLOps & Systems",
    description: "Ensuring security, reliability, and scalability.",
    skills: [
      "Docker", "CI/CD Pipelines", "Model Monitoring", 
      "Anomaly Detection Systems", "API Testing (Postman)", 
      "Git/GitHub", "Threat Detection (IPRanker)"
    ],
    color: "from-emerald-500/20 to-transparent",
    icon: "🚀"
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-24 md:py-28 bg-[#0a0a0b] relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-[#BAA0F8]">Stack</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            Bridging the gap between complex mathematical models and production-ready web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`p-8 rounded-3xl bg-gradient-to-br ${cat.color} border border-white/10 backdrop-blur-xl hover:border-[#BAA0F8]/30 transition-all`}
            >
              <div className="text-3xl mb-4">{cat.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
              <p className="text-sm text-gray-400 mb-6">{cat.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-gray-300 hover:text-[#BAA0F8] hover:border-[#BAA0F8]/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}