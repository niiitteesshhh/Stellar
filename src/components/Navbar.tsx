import { motion } from "motion/react";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  onLoginClick: () => void;
}

export default function Navbar({ onLoginClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-7xl glass rounded-2xl px-8 py-4 flex items-center justify-between pointer-events-auto shadow-2xl"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg shadow-[0_0_15px_rgba(147,51,234,0.4)]"></div>
          <span className="font-sans font-bold text-xl tracking-tight">Stellar</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Solutions", "Pricing", "About"].map((item) => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05 }}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={onLoginClick}
            className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Log in
          </button>
          <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all active:scale-95">
            Start Free Trial
          </button>
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-24 left-4 right-4 bg-bg-dark border border-white/10 rounded-2xl p-6 md:hidden pointer-events-auto shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            {["Features", "Solutions", "Pricing", "About"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-medium text-white/80 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="h-[1px] bg-white/10 my-2" />
            <button 
              className="w-full py-3 text-center font-medium text-white"
              onClick={() => {
                setIsOpen(false);
                onLoginClick();
              }}
            >
              Login
            </button>
            <button className="w-full py-3 bg-white text-black rounded-lg font-bold">Get Started</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
