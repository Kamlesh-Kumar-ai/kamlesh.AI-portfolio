import { motion } from "framer-motion";

const highlights = [
  { title: "Neural Architectures", desc: "Expertise in CNNs, RNNs, and Transformers.", status: "Stable" },
  { title: "Generative AI", desc: "Building RAG pipelines and LLM agents.", status: "Active" },
  { title: "Robust Backends", desc: "FastAPI & Django for ML microservices.", status: "Online" },
  { title: "Production MLOps", desc: "Dockerizing models for scalable deployment.", status: "Depl" }
];

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-[#0a0a0b] overflow-hidden">
      {/* Background AI Mesh */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: `radial-gradient(#BAA0F8 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm font-mono text-[#BAA0F8] tracking-[0.3em] uppercase mb-4">// System.Identity</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Decoding the <span className="text-[#BAA0F8]">Engineer</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: The "Source Code" Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3a0ca3] to-[#BAA0F8] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#0d0d0e] border border-white/10 rounded-2xl p-8 font-mono text-sm md:text-base leading-relaxed">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              
              <p className="text-gray-500 mb-2">/** Professional Profile **/</p>
              <p className="text-white">
                {/* <span className="text-[#BAA0F8]">const</span> */}
                <span className="text-blue-400">engineer</span> = {"{"}
              </p>
              <div className="pl-6 space-y-2">
                <p className="text-white">name: <span className="text-orange-300">"Kamlesh Kumar"</span>,</p>
                <p className="text-white">role: <span className="text-orange-300">"AI/ML Specialist"</span>,</p>
                <p className="text-white">location: <span className="text-orange-300">"Noida, IN"</span>,</p>
                <p className="text-white">specialization: [</p>
                <p className="pl-6 text-orange-300">"Scalable ML Systems", "Generative AI", "FastAPI"</p>
                <p className="text-white">],</p>
                <p className="text-gray-400 mt-4 italic">
                  // I bridge the gap between complex mathematical models <br/>
                  // and production-ready web architectures.
                </p>
              </div>
              <p className="text-white">{"}"};</p>
            </div>
          </motion.div>

          {/* Right: The High-Tech Bento Stats */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, borderColor: "rgba(186, 160, 248, 0.5)" }}
                className="p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm relative overflow-hidden group"
              >
                {/* Animated Scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#BAA0F8]/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000" />
                
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2 bg-[#BAA0F8]/10 rounded-lg text-[#BAA0F8]">
                    <div className="w-4 h-4 rounded-full border-2 border-current animate-pulse" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase">{item.status}</span>
                </div>
                <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-gray-400 text-xs leading-tight">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}