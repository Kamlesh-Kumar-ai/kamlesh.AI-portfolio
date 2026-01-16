import { motion } from "framer-motion";

const experiences = [
  {
    company: "Trayistats AI Technology",
    role: "Python AI/ML Developer",
    period: "Nov 2025 - Present",
    status: "Active Inference",
    tech: ["FastAPI", "LLMs", "Anomaly Detection", "MLOps"],
    points: [
      "Built FastAPI backend systems integrating production-grade LLM models.",
      "Developed IPRanker – a sophisticated system detecting Proxy, Bot, TOR, and VPN traffic.",
      "Optimized ML models for real-time malicious IP analysis and threat detection.",
      "Architected scalable AI solutions in collaboration with cross-functional leadership."
    ],
  },
  {
    company: "Trayistats AI Technology",
    role: "Python AI/ML Developer Intern",
    period: "Aug 2025 – Nov 2025",
    status: "Completed Deployment",
    tech: ["Azure", "Python", "API Testing", "Normalization"],
    points: [
      "Engineered high-performance FastAPI backends with a focus on latency reduction.",
      "Assisted in the design of user behavior prediction pipelines.",
      "Managed Azure databases, focusing on indexing and query optimization.",
      "Bridged the gap between experimental ML code and production-ready APIs."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-24 md:py-32 bg-[#0a0a0b] overflow-x-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#BAA0F8]/5 blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 border-l-4 border-[#BAA0F8] pl-6"
        >
          <h2 className="text-sm font-mono text-[#BAA0F8] tracking-widest uppercase mb-2">// Career_Path.exe</h2>
          <h3 className="text-4xl font-black text-white uppercase tracking-tight">Professional <span className="text-[#BAA0F8]">Timeline</span></h3>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative grid md:grid-cols-[1fr_3fr] gap-8 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#BAA0F8]/40 transition-all duration-500"
            >
              {/* Left Column: Period & Status */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-[#BAA0F8] font-mono text-sm">{exp.period}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`} />
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">{exp.status}</span>
                  </div>
                </div>
                
                {/* Tech Chips */}
                <div className="hidden md:flex flex-wrap gap-2 mt-6">
                  {exp.tech.map(t => (
                    <span key={t} className="px-2 py-1 text-[10px] bg-white/5 border border-white/10 text-white/60 rounded uppercase font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Content */}
              <div>
                <h4 className="text-2xl font-bold text-white group-hover:text-[#BAA0F8] transition-colors">
                  {exp.role}
                </h4>
                <p className="text-white/60 font-medium mb-6 italic">{exp.company}</p>
                
                <ul className="space-y-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-4 text-gray-400 text-sm md:text-base leading-relaxed">
                      <span className="text-[#BAA0F8] font-mono mt-1">0{i+1}</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}