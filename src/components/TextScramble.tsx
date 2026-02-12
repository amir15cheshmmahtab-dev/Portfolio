import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
}

const chars = "!<>-_\\/[]{}—=+*^?#________";

const TextScramble = ({ text, className = "" }: TextScrambleProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!isInView) {
      setDisplayText(text.split("").map(() => chars[Math.floor(Math.random() * chars.length)]).join(""));
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, text]);

  return (
    <motion.span
      ref={ref}
      className={`font-mono ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayText}
    </motion.span>
  );
};

export default TextScramble;
