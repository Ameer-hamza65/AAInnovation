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
import goldWaveBottom from "@/assets/gold-wave-bottom.png";

const Index = () => {
  const location = useLocation();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          const navHeight = 72;
          const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Golden wave at bottom */}
      <div
        className="fixed bottom-0 left-0 right-0 h-[260px] md:h-[340px] pointer-events-none opacity-70 z-0"
        style={{ backgroundImage: `url(${goldWaveBottom})`, backgroundSize: '100% 100%', backgroundPosition: 'bottom center', backgroundRepeat: 'no-repeat' }}
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
