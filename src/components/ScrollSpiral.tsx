import { motion, useScroll, useTransform } from "framer-motion";

const ScrollSpiral = () => {
  const { scrollYProgress } = useScroll();
  
  // Create a spiral path that responds to scroll
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0, willChange: "transform", contain: "layout style paint" }}>
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 500 100"
      >
        {/* Primary spiral line */}
        <motion.path
          d="M -50 -5 Q 100 15, 150 25 T 250 45 T 350 65 T 450 85 T 550 105"
          fill="none"
          stroke="url(#spiralGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ pathLength }}
          initial={{ pathLength: 0 }}
        />
        
        {/* Secondary thinner line for depth */}
        <motion.path
          d="M -30 0 Q 120 18, 170 28 T 270 48 T 370 68 T 470 88 T 570 108"
          fill="none"
          stroke="url(#spiralGradientSecondary)"
          strokeWidth="0.8"
          strokeLinecap="round"
          style={{ pathLength }}
          initial={{ pathLength: 0 }}
        />
        
        {/* Tertiary accent line */}
        <motion.path
          d="M -70 -8 Q 80 12, 130 22 T 230 42 T 330 62 T 430 82 T 530 102"
          fill="none"
          stroke="url(#spiralGradientTertiary)"
          strokeWidth="0.5"
          strokeLinecap="round"
          style={{ pathLength }}
          initial={{ pathLength: 0 }}
        />
        
        <defs>
          <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(185 100% 50% / 0.4)" />
            <stop offset="50%" stopColor="hsl(280 100% 65% / 0.3)" />
            <stop offset="100%" stopColor="hsl(185 100% 50% / 0.2)" />
          </linearGradient>
          <linearGradient id="spiralGradientSecondary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(280 100% 65% / 0.25)" />
            <stop offset="100%" stopColor="hsl(185 100% 50% / 0.15)" />
          </linearGradient>
          <linearGradient id="spiralGradientTertiary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(185 100% 50% / 0.15)" />
            <stop offset="100%" stopColor="hsl(280 100% 65% / 0.1)" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Light mode version with darker colors */}
      <svg
        className="absolute inset-0 w-full h-full dark:hidden"
        preserveAspectRatio="none"
        viewBox="0 0 500 100"
      >
        <motion.path
          d="M -50 -5 Q 100 15, 150 25 T 250 45 T 350 65 T 450 85 T 550 105"
          fill="none"
          stroke="url(#spiralGradientLight)"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ pathLength }}
          initial={{ pathLength: 0 }}
        />
        
        <motion.path
          d="M -30 0 Q 120 18, 170 28 T 270 48 T 370 68 T 470 88 T 570 108"
          fill="none"
          stroke="url(#spiralGradientLightSecondary)"
          strokeWidth="0.8"
          strokeLinecap="round"
          style={{ pathLength }}
          initial={{ pathLength: 0 }}
        />
        
        <defs>
          <linearGradient id="spiralGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(185 80% 35% / 0.3)" />
            <stop offset="50%" stopColor="hsl(280 70% 50% / 0.25)" />
            <stop offset="100%" stopColor="hsl(185 80% 35% / 0.15)" />
          </linearGradient>
          <linearGradient id="spiralGradientLightSecondary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(280 70% 50% / 0.2)" />
            <stop offset="100%" stopColor="hsl(185 80% 35% / 0.1)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ScrollSpiral;
