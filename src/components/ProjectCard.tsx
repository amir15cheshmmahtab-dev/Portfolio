import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/lib/projectsData";

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleProjectClick = () => {
    navigate(`/project/${project.id}`);
  };

  const handleHoverStart = () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setIsHovered(true);
    }
  };

  const handleHoverEnd = () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setIsHovered(false);
    }
  };

  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.githubUrl) {
      window.open(project.githubUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      ref={ref}
      className="group relative cursor-pointer"
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      onClick={handleProjectClick}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} ${project.hoverColor} rounded-3xl blur-xl transition-all duration-500`}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
      />
      <motion.div
        className="relative glass rounded-3xl overflow-hidden shadow-lg dark:shadow-none light:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.1),0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-border/50 dark:border-border/50 light:border-border"
        animate={{
          y: isHovered ? -10 : 0,
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? -5 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Project Preview */}
        <div className="aspect-video bg-gradient-to-br from-secondary to-card relative overflow-hidden">
          {/* Animated Pattern */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, hsl(185 100% 50%) 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
            animate={{
              backgroundPosition: isHovered
                ? ["0px 0px", "20px 20px"]
                : "0px 0px",
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={`w-32 h-32 bg-gradient-to-br ${project.color} rounded-2xl`}
              animate={{
                borderRadius: isHovered
                  ? [
                      "30% 70% 70% 30%/30% 30% 70% 70%",
                      "70% 30% 30% 70%/70% 70% 30% 30%",
                      "30% 70% 70% 30%/30% 30% 70% 70%",
                    ]
                  : "16px",
                rotate: isHovered ? 360 : 0,
              }}
              transition={{
                borderRadius: { duration: 4, repeat: Infinity },
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              }}
            />
          </motion.div>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-background/80 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="p-3 glass rounded-full border border-border/50"
              initial={{ scale: 0, rotate: -180 }}
              animate={{
                scale: isHovered ? 1 : 0,
                rotate: isHovered ? 0 : -180,
              }}
              transition={{ delay: 0.1, type: "spring" }}
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                handleProjectClick();
              }}
              aria-label="View project details"
            >
              <ExternalLink className="w-5 h-5 text-primary" />
            </motion.button>
            <motion.button
              className="p-3 glass rounded-full border border-border/50"
              initial={{ scale: 0, rotate: 180 }}
              animate={{
                scale: isHovered ? 1 : 0,
                rotate: isHovered ? 0 : 180,
              }}
              transition={{ delay: 0.2, type: "spring" }}
              whileHover={{ scale: 1.2, rotate: -15 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleGithubClick}
              aria-label="View GitHub repository"
            >
              <Github className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Project Info */}
        <div className="min-w-0 p-5 sm:p-6">
          <motion.h3
            className={`text-xl font-display font-bold mb-2 transition-all ${isHovered ? "text-gradient" : ""}`}
          >
            {project.title}
          </motion.h3>
          <p lang="fa" className="text-muted-foreground mb-4 break-words">
            {project.shortDescription}
          </p>
          {project.githubUrl && (
            <button
              type="button"
              className="touch-card-action mb-4 items-center gap-2 text-sm text-muted-foreground"
              onClick={handleGithubClick}
              aria-label="View GitHub repository"
            >
              <Github className="w-4 h-4" />
              GitHub
            </button>
          )}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + tagIndex * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "hsl(185 100% 50% / 0.2)",
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
