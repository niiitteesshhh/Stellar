import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Brain, Code, Cpu, Database, Network, Search } from "lucide-react";

const solutions = [
  {
    id: "vision",
    icon: Brain,
    title: "Computer Vision",
    description: "Neural processing for real-time object detection and spatial awareness.",
    animation: "scanning"
  },
  {
    id: "nlp",
    icon: Search,
    title: "semantic Search",
    description: "Contextual understanding that goes beyond keywords to find true meaning.",
    animation: "connecting"
  },
  {
    id: "edge",
    icon: Cpu,
    title: "Edge Intelligence",
    description: "Low-latency inference deployed directly on hardware for instant results.",
    animation: "pulsing"
  }
];

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState(solutions[0]);

  return (
    <section id="solutions" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[10px] font-bold text-brand uppercase tracking-[0.4em] mb-4">Industrial Solutions</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-gradient">Applied Intelligence</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Interactive List */}
          <div className="space-y-4">
            {solutions.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSolution(s)}
                className={`w-full text-left p-8 rounded-3xl transition-all duration-500 border ${
                  activeSolution.id === s.id 
                  ? "glass border-brand/50 bg-brand/5" 
                  : "border-transparent hover:bg-white/5"
                }`}
              >
                <div className="flex gap-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    activeSolution.id === s.id ? "bg-brand text-white" : "bg-white/5 text-gray-500"
                  }`}>
                    <s.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                    <p className="text-sm text-gray-400 font-medium leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Technical Animation Stage */}
          <div className="relative glass h-[500px] rounded-[3rem] border-white/5 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-accent/5" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                {activeSolution.id === "vision" && (
                  <div className="relative w-64 h-64 border-2 border-brand/20 rounded-2xl flex items-center justify-center">
                    <motion.div 
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-1 bg-brand shadow-[0_0_15px_rgba(147,51,234,0.8)] z-20"
                    />
                    <Network className="w-32 h-32 text-brand/40" />
                    <div className="absolute top-4 left-4 text-[10px] font-mono text-brand uppercase">scanning_obj_v1</div>
                  </div>
                )}

                {activeSolution.id === "nlp" && (
                  <div className="flex gap-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [20, 100, 20] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        className="w-4 bg-brand/30 rounded-full"
                      />
                    ))}
                    <Search className="absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-8 text-white/20" />
                  </div>
                )}

                {activeSolution.id === "edge" && (
                  <div className="relative">
                    <motion.div
                      animate={{ opacity: [0.2, 0.6, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-48 h-48 rounded-full border-4 border-dashed border-brand/30 flex items-center justify-center"
                    >
                      <Cpu className="w-20 h-20 text-brand" />
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 border border-brand rounded-full"
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Technical HUD Elements */}
            <div className="absolute bottom-8 left-8 text-[10px] font-mono text-white/20 space-y-1">
              <div>// MODE: {activeSolution.title.toUpperCase()}</div>
              <div>// STATUS: OPERATIONAL</div>
              <div>// LATENCY: {Math.floor(Math.random() * 5)}MS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
