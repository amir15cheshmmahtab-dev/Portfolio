import { motion, useScroll, useTransform } from "framer-motion";

const GlowingOrb = () => {
  const { scrollYProgress } = useScroll();
  
  const hue = useTransform(scrollYProgress, [0, 0.5, 1], [185, 280, 185]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "50%", "0%"]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-20%", "0%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0 blur-[150px] opacity-30"
      style={{
        x,
        y,
        scale,
        willChange: "transform",
        background: `radial-gradient(circle, hsl(${hue.get()} 100% 50%) 0%, transparent 70%)`,
      }}
      animate={{
        rotate: 360,
      }}
      transition={{
        rotate: {
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        },
      }}
    />
  );
};

export default GlowingOrb;
