interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const sizes = {
  sm: { svg: 32, text: "text-sm" },
  md: { svg: 40, text: "text-lg" },
  lg: { svg: 48, text: "text-xl" },
};

const Logo = ({ className = "", size = "md", showText = true }: LogoProps) => {
  const s = sizes[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={s.svg}
        height={s.svg}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Background circle */}
        <circle cx="32" cy="32" r="30" fill="hsl(201 100% 36%)" opacity="0.15" />
        <circle cx="32" cy="32" r="30" stroke="hsl(201 100% 36%)" strokeWidth="1.5" opacity="0.4" />
        
        {/* Brain icon */}
        <g transform="translate(14, 14) scale(0.5625)" fill="none" stroke="hsl(201 100% 36%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Left hemisphere */}
          <path d="M12 32C12 32 8 28 8 22C8 16 12 12 16 10C20 8 24 8 24 8" opacity="0.9" />
          <path d="M24 8C24 8 20 4 16 4C12 4 8 8 8 14" opacity="0.9" />
          <path d="M8 22C4 22 2 26 4 30C6 34 10 34 12 32" opacity="0.9" />
          
          {/* Right hemisphere */}
          <path d="M52 32C52 32 56 28 56 22C56 16 52 12 48 10C44 8 40 8 40 8" opacity="0.9" />
          <path d="M40 8C40 8 44 4 48 4C52 4 56 8 56 14" opacity="0.9" />
          <path d="M56 22C60 22 62 26 60 30C58 34 54 34 52 32" opacity="0.9" />
          
          {/* Center line */}
          <path d="M32 4V60" stroke="hsl(0 0% 100%)" opacity="0.3" strokeWidth="1.5" />
          
          {/* Neural connections */}
          <path d="M20 16C24 18 28 16 32 18C36 16 40 18 44 16" stroke="hsl(0 0% 100%)" opacity="0.5" strokeWidth="1.5" />
          <path d="M16 24C22 26 26 22 32 26C38 22 42 26 48 24" stroke="hsl(0 0% 100%)" opacity="0.5" strokeWidth="1.5" />
          <path d="M18 34C22 32 28 36 32 32C36 36 42 32 46 34" stroke="hsl(0 0% 100%)" opacity="0.4" strokeWidth="1.5" />
          
          {/* Brain stem */}
          <path d="M28 44C28 48 30 52 32 56C34 52 36 48 36 44" opacity="0.7" />
          <path d="M12 32C16 38 24 42 32 44C40 42 48 38 52 32" opacity="0.7" />
        </g>
        
        {/* Accent dots */}
        <circle cx="32" cy="20" r="2" fill="hsl(201 100% 36%)" opacity="0.8" />
        <circle cx="24" cy="28" r="1.5" fill="hsl(201 100% 36%)" opacity="0.5" />
        <circle cx="40" cy="28" r="1.5" fill="hsl(201 100% 36%)" opacity="0.5" />
      </svg>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-bold tracking-wide text-foreground ${s.text}`}>
            AA INNOVATION
          </span>
          <span className="text-[9px] tracking-[0.25em] uppercase text-primary/70 mt-0.5">
            Always Ahead
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
