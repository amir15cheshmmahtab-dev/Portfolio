import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "words" | "chars" | "lines";
}

const AnimatedText = ({ text, className = "", delay = 0, type = "words" }: AnimatedTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: type === "chars" ? 0.02 : 0.08,
        delayChildren: delay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const elements = type === "chars" 
    ? text.split("") 
    : type === "lines" 
    ? text.split("\n") 
    : text.split(" ");

  return (
    <motion.div
      ref={ref}
      className={`flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ perspective: 1000 }}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block"
          style={{ transformOrigin: "center bottom" }}
        >
          {element}
          {type === "words" && <span>&nbsp;</span>}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
