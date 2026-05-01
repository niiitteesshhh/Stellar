import { motion } from "motion/react";
import { Cpu, Zap, Shield, Globe, Layers, BarChart } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Neural Engine",
    description: "Powered by our proprietary LLM core with 1.2T parameters for unmatched reasoning."
  },
  {
    icon: Zap,
    title: "Instant Deploy",
    description: "Launch your agents across 40+ regions in under 300ms with global edge computing."
  },
  {
    icon: Shield,
    title: "Enterpise Ready",
    description: "SOC2 Type II, GDPR, and HIPAA compliant infrastructure with zero-trust security."
  },
  {
    icon: Globe,
    title: "Multilingual",
    description: "Native support for 120+ languages and regional dialects with nuance awareness."
  },
  {
    icon: Layers,
    title: "Flexible APIs",
    description: "REST, GraphQL, and Webhook support for seamless integration into any stack."
  },
  {
    icon: BarChart,
    title: "Real-time Insight",
    description: "Visual dashboards for monitoring usage, costs, and performance in real-time."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-bold text-brand uppercase tracking-[0.4em] mb-4">Core Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight tracking-tight">Everything you need to <br /> scale AI intelligence</h3>
          </div>
          <p className="max-w-md text-gray-400 leading-relaxed font-medium">
            Stellar provides a complete suite of tools to prototype, test, and productionize your AI applications without worrying about the underlying architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.04)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-10 rounded-[2.5rem] glass hover:border-brand/40 transition-all group cursor-default border border-white/5"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-brand/10 to-accent/10 border border-white/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:from-brand group-hover:to-accent group-hover:text-white transition-all duration-500 text-brand shadow-[0_0_20px_rgba(147,51,234,0.1)]">
                <feature.icon className="w-5 h-5" />
              </div>
              <h4 className="text-2xl font-bold mb-5 tracking-tight group-hover:text-brand transition-colors">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed text-base font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
