import logoImg from "@/assets/aa-innovation-logo.jpeg";

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
        <div className="flex flex-col leading-none">
          <span className={`font-heading font-bold tracking-wide text-foreground ${s.text}`}>
            AA <span className="text-gold-dim">|</span> Innovation
          </span>
          <span className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground mt-0.5">
            Always Ahead
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
