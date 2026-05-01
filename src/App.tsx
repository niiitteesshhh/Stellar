import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Solutions from "./components/Solutions";
import About from "./components/About";
import Pricing from "./components/Pricing";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const logos = ["Stripe", "Netflix", "Shopify", "SpaceX", "Linear", "Vercel", "OpenAI", "Anthropic"];

const testimonials = [
  {
    text: "Stellar has completely transformed our R&D cycle. We went from prototype to production in weeks instead of months.",
    author: "Sarah Chen",
    role: "CTO at Nexus AI"
  },
  {
    text: "The lowest latency we've seen across 15+ providers. Their edge network is genuinely impressive for real-time apps.",
    author: "Alex Rivera",
    role: "Head of Engineering at Velocity"
  },
  {
    text: "Security was our #1 concern. Stellar's enterprise features gave our legal team the confidence to move everything to the cloud.",
    author: "James Wilson",
    role: "Security Director at GlobalBank"
  }
];

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="relative overflow-hidden bg-mesh">
      {/* Background Decoration blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-[-5%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <AnimatePresence>
        {showLogin && <LoginPage onClose={() => setShowLogin(false)} />}
      </AnimatePresence>

      <Navbar onLoginClick={() => setShowLogin(true)} />
      
      <main className="relative z-10">
        <Hero />

        {/* Logo Marquee */}
        <section className="py-24 border-y border-white/5 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
          <div className="max-w-7xl mx-auto px-6 overflow-hidden text-gray-500">
            <p className="text-center text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] mb-12">Trusted by the world's most innovative companies</p>
            <div className="relative flex overflow-hidden group opacity-40 hover:opacity-100 transition-opacity">
              <motion.div 
                animate={{ x: "-50%" }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-20 whitespace-nowrap"
              >
                {[...logos, ...logos].map((logo, idx) => (
                  <span key={idx} className="text-2xl md:text-3xl font-display font-bold text-white/20 hover:text-white/60 transition-colors cursor-default">
                    {logo}
                  </span>
                ))}
              </motion.div>
              <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />
            </div>
          </div>
        </section>

        <Features />
        
        <Solutions />

        {/* CTA Banner Section */}
        <section className="py-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand/20 blur-[100px] -z-10 rounded-full" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative glass rounded-[3rem] p-12 md:p-24 overflow-hidden text-center border-white/5">
              <div className="absolute top-0 left-0 w-full h-full bg-brand/10 -z-10" />
              <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tighter text-gradient">Ready to build the future?</h3>
              <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">Empower your creative process with AI logic that handles the heavy lifting.</p>
              <button className="px-12 py-5 bg-white text-black rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                Join 10,000+ Developers
              </button>
            </div>
          </div>
        </section>

        <About />

        <Pricing />

        {/* Testimonials */}
        <section id="testimonials" className="py-32 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-[10px] font-bold text-brand uppercase tracking-[0.4em] mb-4">Wall of Love</h2>
               <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight">What builders say</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="p-10 glass rounded-[2rem] flex flex-col justify-between border-white/5 hover:border-white/20 transition-all duration-300"
                >
                  <p className="text-lg text-gray-300 font-medium italic leading-relaxed mb-10">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-white text-lg">{t.author}</p>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-widest">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
