import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Zap, Users, Database ,ShieldCheck, Workflow, } from "lucide-react";
import AnimatedText from "./AnimatedText";
import myphoto from "../../public/images/Profile picture.jpg" 

const skills = [
  { icon: Code, label:"Frontend", description: "TypeScript, JavaScript, React.js, Next.js, Vue.js, Nuxt.js, HTML5, CSS3, Tailwind CSS, Sass/SCSS, Redux, Zustand, Pinia, React Query, Vue Query, SSR, SSG, PWA" },
  {icon: Code, label: "Backend", description: "Node.js, Express.js, REST API, RESTful API Design, JWT, Authentication, Authorization, Role-Based Access Control (RBAC), Protected Routes, Business Logic, Modular Architecture"},
 { icon: Palette, label:"Design", description: "Figma, UI/UX, Motion , GSAP", color: "from-accent to-pink-500" },
  {icon: Database, label: "Database & ORM", description: "PostgreSQL, MongoDB, Prisma ORM, Database Design, Data Modeling, Schema Design, Query Optimization, Relational Database, NoSQL"},
  { icon: ShieldCheck, label:"Testing & Monitoring", description: "Jest, Cypress, Unit Testing, Integration Testing, End-to-End Testing, Prometheus", color: "from-accent to-pink-500" },
  { icon: Workflow, label:"DevOps & Tools", description: "Docker, CI/CD, Jenkins, Linux, Git, GitHub", color: "from-accent to-pink-500" },
  { icon: Zap, label:"Development Practices", description: "Agile, Scrum, Code Review, Pull Request, Modular Architecture ,Optimization, Speed , Responsive Design, SEO", color: "from-accent to-pink-500" },
  // { icon: Users, label: "Collaboration", description: "Agile, Communication , Commitment", color: "from-green-500 to-emerald-500" },
];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-32 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 dark:block hidden"
        style={{
          background: "radial-gradient(ellipse at center, hsl(220 20% 8%) 0%, transparent 70%)",
        }}
      />
      <motion.div 
        className="absolute inset-0 hidden light:block dark:hidden"
        style={{
          background: "radial-gradient(ellipse at center, hsl(185 30% 92% / 0.5) 0%, transparent 70%)",
        }}
      />
      
      {/* Floating Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.line
          x1="0%"
          y1="20%"
          x2="100%"
          y2="80%"
          stroke="hsl(185 100% 50%)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2 }}
        />
        <motion.line
          x1="100%"
          y1="30%"
          x2="0%"
          y2="70%"
          stroke="hsl(280 100% 65%)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </svg>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            style={{ y, rotate, scale }}
          >
            <motion.div
              className="relative aspect-square max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              style={{ 
                transformStyle: "preserve-3d",
                perspective: 1200,
              }}
              whileHover={{ 
                rotateX: 5,
                rotateY: -5,
                translateZ: 30,
              }}
            >
              {/* Multiple Decorative Rings - hidden on mobile to prevent overflow */}
              <motion.div
                className="absolute -inset-8 border border-primary/20 rounded-3xl hidden md:block"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-16 border border-accent/10 rounded-3xl hidden lg:block"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Enhanced 3D Glow Effect */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl"
                animate={{ 
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.15, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* 3D Card Container */}
              <motion.div 
                className="relative gradient-border rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  boxShadow: "0 25px 50px -12px hsl(185 100% 50% / 0.25), 0 12px 24px -8px hsl(280 100% 65% / 0.2), inset 0 1px 0 hsl(var(--foreground) / 0.1)",
                  transformStyle: "preserve-3d",
                }}
                whileHover={{
                  boxShadow: "0 35px 70px -15px hsl(185 100% 50% / 0.35), 0 20px 40px -10px hsl(280 100% 65% / 0.25), inset 0 1px 0 hsl(var(--foreground) / 0.15)",
                }}
              >
                <div className="aspect-square bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                  <motion.div
                    className="text-9xl font-display font-bold text-gradient"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                    whileHover={{ 
                      scale: 1.1,
                      textShadow: "0 0 40px hsl(185 100% 50% / 0.8)",
                    }}
                  >
                    <img src={myphoto}/>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Floating Badges with 3D */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-full shadow-lg"
                initial={{ opacity: 0, x: 50, rotate: 10 }}
                animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
                transition={{ delay: 0.6, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                style={{
                  boxShadow: "0 10px 30px -10px hsl(185 100% 50% / 0.3)",
                }}
              >
                {/* <span className="text-primary font-semibold">5+ Years</span> */}
              </motion.div>
              
              <motion.div
                className="absolute -top-4 -left-4 glass px-4 py-2 rounded-full shadow-lg"
                initial={{ opacity: 0, x: -50, rotate: -10 }}
                animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
                transition={{ delay: 0.8, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: -5, y: -5 }}
                style={{
                  boxShadow: "0 10px 30px -10px hsl(280 100% 65% / 0.3)",
                }}
              >
                <span className="text-accent font-semibold">5+ Projects</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-sm uppercase tracking-widest text-primary mb-4"
                animate={{ letterSpacing: isInView ? "0.2em" : "0.1em" }}
                transition={{ duration: 0.5 }}
              >
                About Me
              </motion.h2>
              <div className="text-4xl md:text-5xl font-display font-bold mb-6">
                <AnimatedText text="Passionate About" />
                <AnimatedText text="Beautiful Interactions" className="text-gradient" delay={0.2} />
              </div>
              <motion.p 
                className="text-muted-foreground text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                توسعه‌دهنده Full-stack با تجربه عملی در طراحی و توسعه اپلیکیشن‌های واقعی با استفاده از React ،Vue ،Nuxt ،Next ،Node.js و Express. دارای تجربه قوی در توسعه Frontend و Backend، طراحی و پیاده‌سازی REST API، مدیریت state، طراحی database و authentication و deployment با Docker. تمرکز بر ساخت رابطه‌های کاربری scalable و تجربه‌های کاربری روان در کنار توسعه feature های قابل اعتماد از مرحله architecture تا production.

              </motion.p>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  className="glass p-4 rounded-xl group hover:border-primary/50 transition-colors relative overflow-hidden"
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  whileHover={{ 
                    y: -10, 
                    transition: { duration: 0.2 },
                    boxShadow: "0 20px 40px -20px hsl(185 100% 50% / 0.3)",
                  }}
                  style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                >
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity `}
                  />
                  
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors relative z-10"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <skill.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h4 className="font-semibold mb-1 relative z-10">{skill.label}</h4>
                  <p className="text-sm text-muted-foreground relative z-10">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
