import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ValuesSection from "@/components/ValuesSection";
import PillarsSection from "@/components/PillarsSection";
import teamImg from "@/assets/team-collab.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const About = () => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="fixed inset-0 bg-background/50" />
      <div className="relative z-10">
        <Navbar />

        {/* Header */}
        <section className="pt-28 pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6 hover:gap-3 transition-all">
                <ArrowLeft size={16} /> Back to Home
              </Link>
              <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3 font-medium">About AA Innovations</p>
              <h1 className="text-4xl md:text-5xl font-black text-foreground">Who We Are</h1>
            </motion.div>
          </div>
        </section>

        {/* About detail */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <img src={teamImg} alt="AA Innovations team" className="w-full h-auto rounded-lg object-cover" loading="lazy" />
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="space-y-6">
                <h2 className="text-2xl font-extrabold text-foreground">What Drives Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  AA Innovations LLC is a forward-thinking technology and consulting firm dedicated to delivering
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

        {/* Mission / Vision / Values */}
        <ValuesSection />

        {/* Four Pillars */}
        <PillarsSection />

        <Footer />
      </div>
    </div>
  );
};

export default About;
