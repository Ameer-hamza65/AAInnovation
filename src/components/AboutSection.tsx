import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import teamImg from "@/assets/team-collab.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-[22px]">
              <img src={teamImg} alt="AA Innovation team collaboration" className="w-full h-[400px] md:h-[500px] object-cover" loading="lazy" decoding="async" width={800} height={500} />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl border border-border shadow-lg">
                <p className="text-xs tracking-[0.3em] uppercase text-gold-deep font-bold mb-2">Our Services</p>
                <p className="text-foreground text-sm leading-relaxed">
                  We deliver transformative digital innovations for enterprise clients across industries, combining cutting-edge technology with deep domain expertise.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="eyebrow-badge">
              <span>About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              AA Innovation LLC is a forward-thinking technology and consulting firm dedicated to delivering
              transformative solutions that drive business growth and operational excellence. We partner with
              organizations across a broad spectrum of industries — including Energy, Healthcare, Manufacturing,
              Finance, Consulting, Federal, and Logistics.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At AA Innovation, we bring together a diverse team of experienced professionals, technologists,
              and industry specialists with deep domain expertise across every sector we serve.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 text-sm font-bold rounded-xl hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-[0_10px_18px_rgba(28,57,187,0.18)]"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
