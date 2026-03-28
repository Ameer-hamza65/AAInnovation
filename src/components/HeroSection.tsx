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
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-medium mb-8"
          >
            Always Ahead.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] mb-8"
          >
            Always on the <em className="italic font-light">lookout</em>
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
          >
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors"
            >
              Book a Free Strategy Call
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
