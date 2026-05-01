import { Sparkles, Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-20 pb-0 bg-bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Stellar</span>
            </div>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              Reimagining the infrastructure for the next generation of intelligent systems. Built by researchers, for visionaries.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Github, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-brand/50 transition-colors">
                  <Icon className="w-5 h-5 text-white/60 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6">Product</h5>
            <ul className="flex flex-col gap-4 text-sm text-white/40 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Neural Core</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Company</h5>
            <ul className="flex flex-col gap-4 text-sm text-white/40 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Legal</h5>
            <ul className="flex flex-col gap-4 text-sm text-white/40 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Audit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-10 text-[10px] uppercase font-bold tracking-widest text-white/20">
          <p>© 2026 STELLAR AI INC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
               SYSTEMS OPERATIONAL
            </span>
            <span>BACKED BY NEXUS VENTURES</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
