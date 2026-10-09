import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import NavLightBar from "./NavLightBar";

const navItems = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Work", href: "work" },
  { name: "Contact", href: "contact" },
];

const AnimatedNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const location = useLocation();
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["hsl(var(--background) / 0)", "hsl(var(--background) / 0.9)"]
  );
  
  const navBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  );

  const scrollToSection = (sectionId: string) => {
    // If on a different page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        style={{ 
          backgroundColor: navBackground,
          backdropFilter: navBlur,
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/0 transition-colors"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => scrollToSection("home")}
              className="whitespace-nowrap text-base sm:text-lg md:text-2xl font-display font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Amir Cheshm Mahtab
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) => (
                <NavLightBar key={item.name}>
                  <motion.button
                    onClick={() => scrollToSection(item.href)}
                    className="relative px-5 py-2.5 text-muted-foreground hover:text-foreground transition-all font-medium rounded-xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      y: -2,
                      scale: 1.02,
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{ 
                      transformStyle: "preserve-3d",
                      perspective: 800,
                    }}
                  >
                    <span className="relative z-10">{item.name}</span>
                  </motion.button>
                </NavLightBar>
              ))}
              
              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <ThemeToggle />
              </motion.div>
              
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold glow-subtle"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(185 100% 50% / 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <ThemeToggle />
              <motion.button
                className="text-foreground p-2"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
        initial={false}
        animate={isOpen ? { opacity: 1, pointerEvents: "auto" as const } : { opacity: 0, pointerEvents: "none" as const }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-3xl font-display font-bold text-foreground"
              initial={{ opacity: 0, x: -50 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 20, color: "hsl(var(--primary))" }}
            >
              {item.name}
            </motion.button>
          ))}
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-xl glow-subtle"
            initial={{ opacity: 0, x: -50 }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            Let's Talk
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default AnimatedNav;
