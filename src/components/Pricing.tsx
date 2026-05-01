import { motion } from "motion/react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for hobbyists and early prototyping.",
    features: ["1,000 requests/mo", "Basic models", "Community support", "Standard latency"]
  },
  {
    name: "Growth",
    price: "79",
    description: "For rapid growth and production startups.",
    features: ["50,000 requests/mo", "Advanced models", "Email support", "Priority latency", "Custom agents"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Dedicated resources for massive scale.",
    features: ["Unlimited requests", "Fine-tuned models", "24/7 Phone support", "Ultra-low latency", "Dedicated cluster", "SSO & Audit logs"]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 leading-tight">
          <h2 className="text-[10px] font-bold text-brand uppercase tracking-[0.4em] mb-4">Pricing Plans</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-gradient">Scales with your success</h3>
          <p className="text-gray-400 text-lg font-medium">Choose the perfect plan for your business needs. No hidden fees, cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
             <motion.div
               key={plan.name}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               whileHover={{ y: -10 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className={`p-10 rounded-[2.5rem] relative flex flex-col ${
                 plan.popular 
                 ? "bg-bg-card border border-brand scale-105 z-10 shadow-[0_20px_50px_rgba(147,51,234,0.2)] py-14" 
                 : "glass border-white/5"
               }`}
             >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
                  Most Popular
                </div>
              )}

              <h4 className="text-lg font-bold mb-2 text-gray-400 uppercase tracking-widest">{plan.name}</h4>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-display font-bold text-gradient">
                  {plan.price !== "Custom" ? `$${plan.price}` : plan.price}
                </span>
                {plan.price !== "Custom" && <span className="text-gray-500 font-medium tracking-tight">/month</span>}
              </div>
              <p className="text-sm text-gray-400 mb-8 border-b border-white/5 pb-8 font-medium">{plan.description}</p>

              <ul className="flex flex-col gap-5 mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-4 text-sm font-medium text-gray-300">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? "bg-brand/20 text-brand" : "bg-white/5 text-gray-500"}`}>
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-2xl font-bold transition-all active:scale-95 text-sm uppercase tracking-widest ${
                plan.popular 
                ? "bg-purple-600 text-white hover:bg-purple-700 shadow-[0_10px_30px_rgba(147,51,234,0.3)]" 
                : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
              }`}>
                {plan.price === "Custom" ? "Contact Sales" : "Get Started Now"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
