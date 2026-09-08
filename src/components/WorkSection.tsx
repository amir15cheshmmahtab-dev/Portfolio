import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedText from "./AnimatedText";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projectsData";

const WorkSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], ["50px", "0px"]);

  return (
    <section ref={ref} id="work" className="py-32 relative">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          style={{ y: headerY }}
        >
          <motion.h2
            className="text-sm uppercase tracking-widest text-primary mb-4"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: false }}
          >
            Selected Work
          </motion.h2>
          <div className="text-4xl md:text-6xl font-display font-bold">
            <AnimatedText text="Recent" className="justify-center" />
            <AnimatedText text="Projects" className="justify-center text-gradient" delay={0.2} />
          </div>
        </motion.div>

        {/* Projects Grid - Show only first 3 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="group relative px-8 py-4 glass rounded-full border border-primary/50 overflow-hidden"
            onClick={() => navigate("/projects")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ perspective: 800 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.4 }}
            />
            
            <span className="relative flex items-center gap-3 font-medium">
              همه پروژه‌ها
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 text-primary" />
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
