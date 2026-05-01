import { motion } from "motion/react";
import { Users, Target, ShieldCheck, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-[10px] font-bold text-brand uppercase tracking-[0.4em] mb-4">Our Mission</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight">Intelligence for the <br /> modern frontier.</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 font-medium">
              Stellar was founded in 2024 to bridge the gap between complex research and scalable production. We believe that intelligence should be as accessible and reliable as electricity.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-display font-bold text-gradient">200M+</div>
                <div className="text-xs font-bold text-white/30 uppercase tracking-widest">Requests / Day</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-display font-bold text-gradient">120+</div>
                <div className="text-xs font-bold text-white/30 uppercase tracking-widest">Global Nodes</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 glass rounded-[2rem] border-white/5 space-y-4">
              <Users className="text-brand w-8 h-8" />
              <h4 className="font-bold">Human Centric</h4>
              <p className="text-sm text-gray-400 leading-relaxed font-medium">Built to augment human creativity, not replace it.</p>
            </div>
            <div className="p-8 glass rounded-[2rem] border-white/5 space-y-4 translate-y-6">
              <Target className="text-brand w-8 h-8" />
              <h4 className="font-bold">Precision Core</h4>
              <p className="text-sm text-gray-400 leading-relaxed font-medium">Uncompromising accuracy across all reasoning models.</p>
            </div>
            <div className="p-8 glass rounded-[2rem] border-white/5 space-y-4">
              <ShieldCheck className="text-brand w-8 h-8" />
              <h4 className="font-bold">Privacy First</h4>
              <p className="text-sm text-gray-400 leading-relaxed font-medium">Your data never leaves your infrastructure.</p>
            </div>
            <div className="p-8 glass rounded-[2rem] border-white/5 space-y-4 translate-y-6">
              <Zap className="text-brand w-8 h-8" />
              <h4 className="font-bold">Lightning Speed</h4>
              <p className="text-sm text-gray-400 leading-relaxed font-medium">Zero-latency responses for real-time interactions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
