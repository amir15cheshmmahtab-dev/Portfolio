import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, AlertCircle, CheckCircle } from "lucide-react";
import AnimatedText from "./AnimatedText";
import MagneticButton from "./MagneticButton";
import SocialIcons from "./SocialIcons";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isEmailValid = validateEmail(email);
  const showEmailError = emailTouched && email.length > 0 && !isEmailValid;
  const showEmailSuccess = email.length > 0 && isEmailValid;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
    },
  };

  return (
    <section ref={ref} id="contact" className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
      
      {/* Multiple Glowing Orbs */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.5, 0.3],
          x: ["-50%", "-45%", "-50%"],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]"
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2 
              className="text-sm uppercase tracking-widest text-primary mb-4"
              animate={{ letterSpacing: isInView ? "0.2em" : "0.1em" }}
            >
              Get In Touch
            </motion.h2>
            <div className="text-4xl md:text-6xl font-display font-bold mb-6">
              <AnimatedText text="Let's" className="justify-center" />
              <AnimatedText text="Collaborate" className="justify-center text-gradient" delay={0.2} />
            </div>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </motion.p>
          </motion.div>

          {/* Contact Card - Enhanced 3D */}
          <motion.div
            className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
            variants={itemVariants}
            style={{ 
              transformStyle: "preserve-3d",
              perspective: 1200,
            }}
            whileHover={{ 
              boxShadow: "0 35px 60px -15px hsl(185 100% 50% / 0.25), 0 15px 30px -10px hsl(280 100% 65% / 0.15)",
              rotateX: 2,
              rotateY: -1,
              translateZ: 20,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Animated border gradient */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-50"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(185 100% 50% / 0.1), transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: ["200% 0", "-200% 0"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              {/* Info Side */}
              <div className="space-y-8">
                <motion.div
                  className="flex items-center gap-4 group cursor-pointer"
                  whileHover={{ x: 10 }}
                  variants={itemVariants}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Mail className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold group-hover:text-primary transition-colors">hello@johndoe.dev</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 group cursor-pointer"
                  whileHover={{ x: 10 }}
                  variants={itemVariants}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MapPin className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold group-hover:text-primary transition-colors">San Francisco, CA</p>
                  </div>
                </motion.div>

                {/* Socials */}
                <motion.div className="pt-4" variants={itemVariants}>
                  <p className="text-sm text-muted-foreground mb-4">Follow me</p>
                  <SocialIcons isInView={isInView} />
                </motion.div>
              </div>

              {/* Form Side */}
              <form className="space-y-4">
                <motion.div variants={itemVariants} className="relative">
                  <motion.input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-secondary/50 rounded-xl border border-border focus:border-primary focus:outline-none transition-all text-base"
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === "name" ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants} className="relative">
                  <div className="relative">
                    <motion.input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-3 pr-12 bg-secondary/50 rounded-xl border transition-all focus:outline-none text-base ${
                        showEmailError 
                          ? "border-destructive focus:border-destructive" 
                          : showEmailSuccess 
                            ? "border-green-500 focus:border-green-500" 
                            : "border-border focus:border-primary"
                      }`}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => {
                        setFocusedField(null);
                        setEmailTouched(true);
                      }}
                    />
                    
                    {/* Validation Icon */}
                    <AnimatePresence mode="wait">
                      {showEmailError && (
                        <motion.div
                          className="absolute right-4 top-1/2 -translate-y-1/2"
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, scale: 0, rotate: 180 }}
                          transition={{ type: "spring", stiffness: 500, damping: 25 }}
                        >
                          <AlertCircle className="w-5 h-5 text-destructive" />
                        </motion.div>
                      )}
                      {showEmailSuccess && (
                        <motion.div
                          className="absolute right-4 top-1/2 -translate-y-1/2"
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, scale: 0, rotate: 180 }}
                          transition={{ type: "spring", stiffness: 500, damping: 25 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Animated underline */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full ${
                      showEmailError ? "bg-destructive" : showEmailSuccess ? "bg-green-500" : "bg-primary"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === "email" ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Error Message */}
                  <AnimatePresence>
                    {showEmailError && (
                      <motion.div
                        className="absolute -bottom-7 left-0 flex items-center gap-2"
                        initial={{ opacity: 0, y: -10, x: -10 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, y: -10, x: -10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <motion.div
                          className="px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 backdrop-blur-sm"
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 20 }}
                        >
                          <span className="text-xs font-medium text-destructive">
                            Please enter a valid email address
                          </span>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                <motion.div variants={itemVariants} className="relative">
                  <motion.textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-secondary/50 rounded-xl border border-border focus:border-primary focus:outline-none transition-all resize-none text-base"
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === "message" ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <MagneticButton
                    className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 glow-primary relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Send Message
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Send className="w-4 h-4" />
                      </motion.div>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </MagneticButton>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
