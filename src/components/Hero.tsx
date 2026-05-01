import { motion } from "motion/react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand/20 blur-[120px] rounded-full -z-10 opacity-50" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs font-semibold text-purple-300 mb-10 tracking-wide uppercase"
        >
          <span className="px-1.5 py-0.5 rounded-full bg-purple-500/20 text-[9px] border border-purple-500/30">New</span>
          <span>Stellar Pulse v2.0 is now in public beta</span>
          <ArrowRight className="w-3 h-3 opacity-50" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-gradient mb-8 leading-[0.95]"
        >
          Automate intelligence <br className="hidden md:block" /> with elegant design.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto text-lg text-gray-400 mb-12 leading-relaxed"
        >
          Empower your vision with AI-driven tools that handle the complexity, leaving you more time to build products your users will love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="w-full sm:w-auto px-10 py-5 bg-brand hover:bg-brand-light text-white font-bold rounded-xl shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all active:scale-95 cursor-pointer">
            Get Started for Free
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 bg-white/5 border border-white/10 rounded-xl font-bold text-white hover:bg-white/10 transition-all cursor-pointer">
            View Live Demo
          </button>
        </motion.div>

        {/* Hero AI Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-24 relative max-w-4xl mx-auto h-[400px] md:h-[500px] flex items-center justify-center"
        >
          {/* Central Neural Hub */}
          <div className="relative group">
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 90, 180, 270, 360]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-brand/20 border border-brand/50 blur-xl absolute -inset-4 group-hover:bg-brand/30 transition-all" 
            />
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full glass border border-white/20 flex items-center justify-center relative z-10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-blue-500/20" />
              <Sparkles className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-500" />
            </motion.div>

            {/* Orbiting Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2 + i, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 pointer-events-none"
                style={{ transform: `rotate(${i * 30}deg)` }}
              >
                <div 
                  className="w-2 h-2 rounded-full bg-brand absolute" 
                  style={{ top: '50%', left: i % 2 === 0 ? '-40px' : '-80px' }}
                />
              </motion.div>
            ))}
          </div>

          {/* Floating Data Nodes */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
                className="absolute glass px-4 py-2 rounded-lg border border-white/10 text-[10px] sm:text-xs font-mono text-white/50"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                }}
              >
                {i === 0 && "neural_process.active"}
                {i === 1 && "data_flow: 1.2TB/s"}
                {i === 2 && "latency: 0.02ms"}
                {i === 3 && "model_v4.2.0"}
                {i === 4 && "cluster_A01"}
                {i === 5 && "sharding: enabled"}
              </motion.div>
            ))}
          </div>

          {/* Gradient Overlay for Fade out */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg-dark to-transparent z-20" />
        </motion.div>
      </div>
    </section>
  );
}
