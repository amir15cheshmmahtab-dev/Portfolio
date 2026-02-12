import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
  animate?: boolean;
}

const LiquidGlass = ({ 
  children, 
  className = "", 
  intensity = "medium",
  animate = true 
}: LiquidGlassProps) => {
  const intensityStyles = {
    low: {
      background: "rgba(255, 255, 255, 0.03)",
      blur: "12px",
      border: "1px solid rgba(255, 255, 255, 0.08)",
    },
    medium: {
      background: "rgba(255, 255, 255, 0.05)",
      blur: "20px",
      border: "1px solid rgba(255, 255, 255, 0.12)",
    },
    high: {
      background: "rgba(255, 255, 255, 0.08)",
      blur: "30px",
      border: "1px solid rgba(255, 255, 255, 0.18)",
    },
  };

  const style = intensityStyles[intensity];

  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl ${className}`}
      style={{
        background: style.background,
        backdropFilter: `blur(${style.blur})`,
        WebkitBackdropFilter: `blur(${style.blur})`,
        border: style.border,
        boxShadow: `
          0 8px 32px rgba(0, 0, 0, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.1),
          inset 0 -1px 0 rgba(0, 0, 0, 0.1)
        `,
      }}
      whileHover={animate ? { 
        boxShadow: `
          0 16px 48px rgba(0, 255, 255, 0.15),
          inset 0 1px 0 rgba(255, 255, 255, 0.15),
          inset 0 -1px 0 rgba(0, 0, 0, 0.1)
        `,
      } : undefined}
      transition={{ duration: 0.4 }}
    >
      {/* Animated gradient overlay */}
      {animate && (
        <motion.div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
      
      {/* Liquid shimmer effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(0, 255, 255, 0.05) 0%, transparent 70%)",
        }}
        animate={animate ? {
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        } : undefined}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default LiquidGlass;
