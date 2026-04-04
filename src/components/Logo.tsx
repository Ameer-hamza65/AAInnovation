import logoImg from "@/assets/AAI_logo.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const sizes = {
  sm: { img: 32, text: "text-sm" },
  md: { img: 42, text: "text-lg" },
  lg: { img: 48, text: "text-xl" },
};

const Logo = ({ className = "", size = "md", showText = true }: LogoProps) => {
  const s = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoImg}
        alt="AA Innovation"
        className="rounded-[10px] shrink-0 object-cover"
        style={{ width: s.img, height: s.img }}
      />
      {showText && (
        <span className={`font-heading font-bold tracking-wide text-foreground ${s.text}`}>
            AA <span className="text-gold-dim">|</span> Innovation
          </span>
      )}
    </div>
  );
};

export default Logo;
