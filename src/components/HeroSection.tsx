import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";
import AnimatedText from "./AnimatedText";
import TextScramble from "./TextScramble";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden noise"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        style={{ y, willChange: "transform" }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]), willChange: "transform" }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      
      {/* Floating Geometric Shapes - hidden on mobile */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-20 h-20 border border-primary/30 rounded-lg hidden md:block"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ["0%", "200%"]),
          rotate,
        }}
        animate={{ 
          borderColor: ["hsl(185 100% 50% / 0.3)", "hsl(280 100% 65% / 0.3)", "hsl(185 100% 50% / 0.3)"],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-accent/20 animate-morph hidden md:block"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]) }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-16 h-16 border-2 border-dashed border-primary/20 rounded-full hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-8 h-8 hidden md:block"
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          borderRadius: ["0%", "50%", "0%", "50%", "0%"],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ background: "linear-gradient(135deg, hsl(185 100% 50% / 0.3), hsl(280 100% 65% / 0.3))" }}
      />

      {/* Orbiting Elements - hidden on small screens */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] hidden md:block">
        <motion.div
          className="absolute w-3 h-3 bg-primary rounded-full glow-primary"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "250px 250px" }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-accent rounded-full glow-accent"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="container mx-auto px-6 text-center relative z-10"
        style={{ opacity, scale, willChange: "transform, opacity" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-5 h-5 text-primary" />
          </motion.div>
          <TextScramble 
            text="CREATIVE DEVELOPER" 
            className="text-muted-foreground font-medium tracking-wider text-sm"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>

        <motion.div style={{ y: textY }}>
          <div className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
            <AnimatedText text="Crafting Digital" className="justify-center" />
            <AnimatedText text="Experiences" className="justify-center text-gradient" delay={0.3} />
          </div>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* I design and build beautiful interfaces that bring ideas to life through motion and interaction */}
در تمام لایه‌های یک محصول، از معماری و زیرساخت سمت سرور تا رابط کاربری و تجربه کاربر، فعالیت می‌کنم. تمرکز من ترکیب مهندسی نرم‌افزار در سمت سرور با طراحی تعاملی برای ساخت محصولات کاربردی، مقیاس‌پذیر و کاربرمحور است.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <MagneticButton
            onClick={() => scrollToSection("work")}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg glow-primary relative overflow-hidden group"
          >
            <span className="relative z-10">مشاهده نمونه‌کارها ⭐</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollToSection("about")}
            className="px-8 py-4 border border-border rounded-full font-semibold text-lg hover:bg-secondary transition-colors relative overflow-hidden group"
          >
            <span className="relative z-10">درباره من ⭐</span>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.span 
            className="text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll
          </motion.span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
