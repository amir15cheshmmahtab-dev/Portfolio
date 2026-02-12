import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedNav from "@/components/AnimatedNav";
import CustomCursor from "@/components/CustomCursor";
import ParticleField from "@/components/ParticleField";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import ProjectCarousel from "@/components/ProjectCarousel";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projectsData";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100dvh] bg-background overflow-x-hidden cursor-auto md:cursor-none">
      <CustomCursor />
      <ScrollProgress />
      <ParticleField />
      <AnimatedNav />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <motion.button
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            onClick={() => navigate("/")}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.button>

          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-display font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              All <span className="text-gradient">Projects</span>
            </motion.h1>
            <motion.p
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Explore my complete portfolio of work, featuring web applications,
              mobile apps, and creative experiments.
            </motion.p>
          </motion.div>

          {/* Featured Carousel */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-display font-bold text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-gradient">Featured</span> Projects
            </motion.h2>
            <ProjectCarousel />
          </motion.div>

          {/* All Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-display font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              All <span className="text-gradient">Work</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
