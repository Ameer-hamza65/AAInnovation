import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = ({ onContactClick }: { onContactClick?: () => void } = {}) => {
  const scrollToContact = () => {
    if (onContactClick) {
      onContactClick();
      return;
    }
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-[72px]">
      {/* Subtle gold radial glow on right */}
      <div className="absolute right-[-10%] top-[-20%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(249,204,92,0.18), transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="eyebrow-badge mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-deep" />
            <span>Always Ahead</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-foreground leading-[1.05] mb-8"
          >
            Always on the <span className="text-primary">lookout</span>
            <br />for a better way
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mb-12 leading-relaxed"
          >
            A forward-thinking technology and consulting firm dedicated to delivering transformative
            solutions that drive business growth and operational excellence across Energy, Healthcare,
            Manufacturing, Finance, Consulting, Federal, and Logistics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={scrollToContact}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-3 px-8 py-3.5 text-sm font-bold rounded-xl text-white transition-all hover:-translate-y-0.5 shadow-[0_10px_18px_rgba(53,88,216,0.22)]"
              style={{ backgroundColor: "hsl(228 65% 53%)" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "hsl(228 74% 42%)")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "hsl(228 65% 53%)")}
            >
              Book a Free Strategy Call
              <ArrowRight size={16} />
            </motion.button>
            <motion.button
              onClick={() => {
                const el = document.querySelector("#services");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-3 px-8 py-3.5 text-sm font-bold rounded-xl border-2 border-primary/20 text-foreground hover:border-primary/40 hover:bg-secondary transition-all hover:-translate-y-0.5"
            >
              Explore Services
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
