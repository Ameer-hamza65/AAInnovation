import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ValuesSection from "@/components/ValuesSection";
import PillarsSection from "@/components/PillarsSection";
import teamImg from "@/assets/team-collab.jpg";
import goldWaveBottom from "@/assets/gold-wave-bottom.png";

const About = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <div
        className="fixed bottom-0 left-0 right-0 h-[260px] md:h-[340px] pointer-events-none opacity-70 z-0"
        style={{ backgroundImage: `url(${goldWaveBottom})`, backgroundSize: '100% 100%', backgroundPosition: 'bottom center', backgroundRepeat: 'no-repeat' }}
      />
      <div className="relative z-10">
        <Navbar />

        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-primary text-sm font-bold mb-8 hover:gap-3 transition-all">
                <ArrowLeft size={16} /> Back to Home
              </Link>
              <div className="eyebrow-badge mb-5">
                <span>About AA Innovation</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground leading-tight">Who We Are</h1>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
                A forward-thinking technology and consulting firm delivering transformative solutions across industries.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <img src={teamImg} alt="AA Innovation team" className="w-full h-auto rounded-[22px] object-cover shadow-lg" loading="lazy" />
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="space-y-6">
                <h2 className="text-2xl font-heading font-extrabold text-foreground">What Drives Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  AA Innovation LLC is a forward-thinking technology and consulting firm dedicated to delivering
                  transformative solutions that drive business growth and operational excellence. We partner with
                  organizations across Energy, Healthcare, Manufacturing, Finance, Consulting, Federal, and Logistics.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We bring together a diverse team of experienced professionals, technologists, and industry
                  specialists with deep domain expertise across every sector we serve. We are driven by a singular
                  purpose: to empower organizations to achieve more.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <ValuesSection />
        <PillarsSection />
        <Footer />
      </div>
    </div>
  );
};

export default About;
