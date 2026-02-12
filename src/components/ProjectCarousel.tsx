import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/lib/projectsData";

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const currentProject = projects[currentIndex];

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return projects.length - 1;
      if (next >= projects.length) return 0;
      return next;
    });
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => paginate(1), 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, paginate]);

  const handleProjectClick = () => {
    navigate(`/project/${currentProject.id}`);
  };

  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentProject.githubUrl) {
      window.open(currentProject.githubUrl, "_blank", "noopener,noreferrer");
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
      transition: {
        duration: 0.4,
      },
    }),
  };

  return (
    <div
      className="relative w-full max-w-5xl mx-auto"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Main Carousel */}
      <div className="relative h-[500px] md:h-[600px] perspective-1000 overflow-hidden rounded-3xl">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 cursor-pointer group"
            style={{ transformStyle: "preserve-3d" }}
            onClick={handleProjectClick}
          >
            {/* Background Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${currentProject.color} opacity-30 transition-opacity duration-500 group-hover:opacity-50`}
            />

            {/* Glass Container */}
            <div className="absolute inset-0 glass border border-border/50 dark:border-border/50 light:border-border rounded-3xl overflow-hidden shadow-lg dark:shadow-none light:shadow-[0_8px_40px_-10px_rgba(0,0,0,0.15)]">
              {/* Project Image/Pattern Area */}
              <div className="relative h-2/3 bg-gradient-to-br from-secondary to-card overflow-hidden">
                {/* Animated Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)",
                    backgroundSize: "30px 30px",
                  }}
                  animate={{
                    backgroundPosition: ["0px 0px", "30px 30px"],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                {/* Floating Shape */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className={`w-40 h-40 md:w-56 md:h-56 bg-gradient-to-br ${currentProject.color} rounded-2xl shadow-2xl`}
                    animate={{
                      borderRadius: [
                        "30% 70% 70% 30%/30% 30% 70% 70%",
                        "70% 30% 30% 70%/70% 70% 30% 30%",
                        "30% 70% 70% 30%/30% 30% 70% 70%",
                      ],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      borderRadius: { duration: 6, repeat: Infinity },
                      rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                    }}
                  />
                </div>

                {/* Hover Overlay with Icons */}
                <motion.div
                  className="absolute inset-0 bg-background/80 flex items-center justify-center gap-6"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="p-4 glass rounded-full border border-border/50"
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1.2, rotate: 0 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    onClick={handleProjectClick}
                    aria-label="View project details"
                  >
                    <ExternalLink className="w-6 h-6 text-primary" />
                  </motion.button>
                  <motion.button
                    className="p-4 glass rounded-full border border-border/50"
                    initial={{ scale: 0, rotate: 180 }}
                    whileHover={{ scale: 1.2, rotate: 0 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    onClick={handleGithubClick}
                    aria-label="View GitHub repository"
                  >
                    <Github className="w-6 h-6" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8">
                <motion.h3
                  className="text-2xl md:text-3xl font-display font-bold mb-3 text-gradient"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {currentProject.title}
                </motion.h3>
                <motion.p
                  className="text-muted-foreground mb-4 line-clamp-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentProject.shortDescription}
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass rounded-full border border-border/50 z-10"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(-1)}
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>
      <motion.button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass rounded-full border border-border/50 z-10"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(1)}
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-8">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            className={`relative h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-10 bg-primary" : "w-3 bg-muted-foreground/30"
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to project ${index + 1}`}
          >
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 bg-primary rounded-full"
                layoutId="activeDot"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Progress Bar */}
      {isAutoPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            key={currentIndex}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;
