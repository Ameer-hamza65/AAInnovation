import { Menu, User, LogOut, ChevronDown, HelpCircle } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import Logo from "@/components/Logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Home", to: "/", hash: "" },
  { label: "About Us", to: "/", hash: "#about" },
  { label: "Services", to: "/", hash: "#services" },
  { label: "Industries", to: "/", hash: "#industries" },
  { label: "Contact Us", to: "/", hash: "#contact" },
];


const Navbar = ({ onContactClick }: { onContactClick?: () => void } = {}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  const scrollToSection = useCallback(
    (hash: string) => {
      setSheetOpen(false);
      setActiveHash(hash);
      if (location.pathname !== "/") {
        navigate("/" + hash);
        return;
      }
      if (!hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [location.pathname, navigate]
  );

  const handleLogout = () => {
    logout();
    setSheetOpen(false);
    navigate("/");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/84 backdrop-blur-[14px] border-b border-border/75 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
          <button onClick={() => scrollToSection("")} className="flex items-center group">
            <Logo size="md" />
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.hash)}
                className={`relative px-4 py-2.5 text-[13px] font-semibold tracking-wide hover:text-primary hover:bg-secondary rounded-xl transition-colors duration-200 ${activeHash === link.hash ? "text-primary" : "text-foreground/70"}`}
              >
                {link.label}
                {activeHash === link.hash && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2.5px] bg-gold rounded-full" />
                )}
              </button>
            ))}

            <div className="w-px h-5 bg-border mx-2" />

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-semibold tracking-wide text-primary hover:bg-secondary transition-colors outline-none rounded-xl border border-primary/20 hover:border-primary/40">
                  <User size={14} className="opacity-70" />
                  {user.name}
                  <ChevronDown size={12} className="opacity-50" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white border-border rounded-xl shadow-lg">
                  <DropdownMenuLabel className="text-muted-foreground text-xs font-normal px-3 py-2">{user.email}</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-border" />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/5 rounded-md mx-1">
                    <LogOut size={14} className="mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-1.5 px-4 py-1.5 text-[13px] font-semibold tracking-wide text-primary hover:bg-secondary transition-all duration-200 rounded-xl border border-primary/20 hover:border-primary/40"
              >
                <User size={14} className="opacity-60" />
                Profile
              </Link>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-secondary transition-all duration-200"
            onClick={() => setSheetOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sheet menu */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="right" className="bg-white border-l border-border w-[280px] sm:max-w-[280px]">
          <SheetHeader className="mb-8">
            <SheetTitle className="text-foreground text-left">Menu</SheetTitle>
            <SheetDescription className="text-muted-foreground text-left text-xs">
              Quick access links
            </SheetDescription>
          </SheetHeader>

          <div className="space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.hash)}
                className="flex items-center gap-3 px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-secondary transition-colors rounded-xl w-full text-left"
              >
                {link.label}
              </button>
            ))}

            {user ? (
              <>
                <div className="flex items-center gap-3 px-4 py-3 text-sm text-primary font-medium rounded-xl">
                  <User size={18} className="text-primary" />
                  {user.name}
                </div>
                <div className="px-4 py-1 text-xs text-muted-foreground">{user.email}</div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-destructive hover:bg-destructive/5 transition-all duration-200 rounded-xl w-full text-left"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setSheetOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-secondary transition-all duration-200 rounded-xl"
              >
                <User size={18} className="text-primary" />
                Profile
              </Link>
            )}

            <Link
              to="/faq"
              onClick={() => setSheetOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-secondary transition-colors rounded-xl"
            >
              <HelpCircle size={18} className="text-primary" />
              FAQ
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;
