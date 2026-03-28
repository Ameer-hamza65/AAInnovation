import { Menu, User, HelpCircle, LogOut, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
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

  const scrollToSection = useCallback(
    (hash: string) => {
      setSheetOpen(false);
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-b-primary/40">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
          <button onClick={() => scrollToSection("")} className="flex items-center">
            <Logo size="md" />
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.hash)}
                className="text-sm tracking-wide transition-colors duration-200 text-primary-foreground/60 hover:text-primary-foreground"
              >
                {link.label}
              </button>
            ))}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1.5 text-sm tracking-wide text-primary font-medium hover:text-primary/80 transition-colors outline-none">
                  {user.name}
                  <ChevronDown size={14} className="opacity-60" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-secondary/95 backdrop-blur-xl border-primary/20 text-foreground">
                  <DropdownMenuLabel className="text-muted-foreground text-xs font-normal">{user.email}</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-primary/10" />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/10">
                    <LogOut size={14} className="mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                to="/login"
                className="text-sm tracking-wide transition-colors duration-300 text-primary-foreground/60 hover:text-primary-foreground"
              >
                Profile
              </Link>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-primary-foreground hover:text-primary transition-colors"
            onClick={() => setSheetOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Sheet menu */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="right" className="bg-secondary/95 backdrop-blur-xl border-l border-primary/20 w-[280px] sm:max-w-[280px]">
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
                className="flex items-center gap-3 px-4 py-3 text-sm text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5 transition-colors rounded-md w-full text-left"
              >
                {link.label}
              </button>
            ))}

            {user ? (
              <>
                <div className="flex items-center gap-3 px-4 py-3 text-sm text-primary font-medium rounded-md">
                  <User size={18} className="text-primary" />
                  {user.name}
                </div>
                <div className="px-4 py-1 text-xs text-muted-foreground">{user.email}</div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-destructive hover:bg-destructive/10 transition-all duration-300 rounded-md w-full text-left"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setSheetOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5 transition-all duration-300 rounded-md"
              >
                <User size={18} className="text-primary" />
                Profile
              </Link>
            )}

            <Link
              to="/faq"
              onClick={() => setSheetOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-sm text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5 transition-colors rounded-md"
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
