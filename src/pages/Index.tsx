import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import StatsSection from "@/components/StatsSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import ContactFormModal from "@/components/ContactFormModal";
import Footer from "@/components/Footer";
import goldWaveBg from "@/assets/gold-wave-background.png";
import goldWaveBottom from "@/assets/gold-wave-bottom.png";

const Index = () => {
  const location = useLocation();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-secondary">
      {/* Gold wave edge highlights */}
      <div
        className="fixed inset-0 bg-cover bg-no-repeat opacity-[0.15] pointer-events-none gold-wave-bg"
        style={{ backgroundImage: `url(${goldWaveBg})`, backgroundPosition: 'center 95%' }}
      />
      {/* Gold wave at bottom — background layer */}
      <div
        className="fixed bottom-0 left-0 right-0 h-[300px] md:h-[400px] pointer-events-none opacity-[0.18] gold-wave-bg"
        style={{ backgroundImage: `url(${goldWaveBottom})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="relative z-10">
        <Navbar />
        <HeroSection onContactClick={() => setContactModalOpen(true)} />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <StatsSection />
        <WhyUsSection />
        <ContactSection />
        <Footer />
      </div>
      <ContactFormModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
};

export default Index;
