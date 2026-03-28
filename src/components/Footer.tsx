import { Linkedin, Twitter, Mail, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Footer = () => {
  const scrollTo = (hash: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = "/" + hash;
      return;
    }
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-secondary border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="mb-4">
              <Logo size="sm" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Empowering organizations through innovative technology solutions.
            </p>
            <p className="text-muted-foreground text-sm mb-4">info@aainnovation.com</p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Instagram, Mail].map((Icon, i) => (
                <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-medium text-sm mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Home</Link></li>
              <li><button onClick={() => scrollTo("#about")} className="text-muted-foreground text-sm hover:text-foreground transition-colors">About Us</button></li>
              <li><button onClick={() => scrollTo("#services")} className="text-muted-foreground text-sm hover:text-foreground transition-colors">Services</button></li>
              <li><button onClick={() => scrollTo("#industries")} className="text-muted-foreground text-sm hover:text-foreground transition-colors">Industries</button></li>
              <li><button onClick={() => scrollTo("#contact")} className="text-muted-foreground text-sm hover:text-foreground transition-colors">Contact Us</button></li>
              <li><Link to="/faq" className="text-muted-foreground text-sm hover:text-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-medium text-sm mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/ai-automation" className="text-muted-foreground text-sm hover:text-foreground transition-colors">AI & Automation</Link></li>
              <li><Link to="/services/data-analytics" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Data Analytics</Link></li>
              <li><Link to="/services/cloud-solutions" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services/cybersecurity" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-medium text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground text-sm hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-muted-foreground text-sm hover:text-foreground transition-colors">FAQ</Link></li>
              <li><button onClick={() => scrollTo("#contact")} className="text-muted-foreground text-sm hover:text-foreground transition-colors">Contact</button></li>
              <li><Link to="/login" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Login</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">© 2026 AA Innovation LLC. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((link) => (
              <a key={link} href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
