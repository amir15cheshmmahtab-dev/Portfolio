import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface NavLightBarProps {
  children: ReactNode;
  className?: string;
}

const NavLightBar = ({ children, className = "" }: NavLightBarProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rotating light border */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          padding: "1.5px",
          background: isHovered
            ? "conic-gradient(from var(--rotation), hsl(var(--primary)) 0deg, hsl(var(--accent)) 60deg, transparent 120deg, transparent 360deg)"
            : "transparent",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          mask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          // @ts-ignore
          "--rotation": "0deg",
        }}
        animate={
          isHovered
            ? { "--rotation": "360deg", opacity: 1 }
            : { "--rotation": "0deg", opacity: 0 }
        }
        transition={{
          "--rotation": {
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          },
          opacity: { duration: 0.3 },
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{
          opacity: isHovered ? 0.5 : 0,
          boxShadow: isHovered
            ? "0 0 15px hsl(var(--primary) / 0.3), inset 0 0 8px hsl(var(--primary) / 0.1)"
            : "0 0 0px transparent",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default NavLightBar;
