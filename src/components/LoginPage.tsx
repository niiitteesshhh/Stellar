import { motion } from "motion/react";
import { Sparkles, ArrowRight, Github, Chrome } from "lucide-react";

interface LoginProps {
  onClose: () => void;
}

export default function LoginPage({ onClose }: LoginProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-bg-dark/80 backdrop-blur-2xl" 
        onClick={onClose}
      />

      {/* Login Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10 glass rounded-[3rem] p-10 border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
      >
        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-brand rounded-2xl mx-auto flex items-center justify-center mb-6 glow">
            <Sparkles className="text-white w-6 h-6" />
          </div>
          <h2 className="text-3xl font-display font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-400 font-medium">Sign in to your Stellar account</p>
        </div>

        <div className="space-y-4">
          <button className="w-full py-4 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-200 transition-all active:scale-[0.98]">
            <Chrome className="w-5 h-5" />
            Continue with Google
          </button>
          <button className="w-full py-4 glass border-white/10 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/5 transition-all active:scale-[0.98]">
            <Github className="w-5 h-5" />
            Continue with GitHub
          </button>
        </div>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
            <span className="bg-bg-card px-4 text-gray-500">Or use email</span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Email Address</label>
            <input 
              type="email" 
              placeholder="name@company.com"
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand/50 transition-colors font-medium text-white"
            />
          </div>
          <button className="w-full py-5 bg-brand text-white rounded-2xl font-bold flex items-center justify-center gap-2 glow hover:bg-brand-light transition-all">
            Continue 
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="mt-8 text-center text-xs text-gray-500 font-medium">
          New to Stellar? <button className="text-brand hover:underline">Create an account</button>
        </p>

        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
