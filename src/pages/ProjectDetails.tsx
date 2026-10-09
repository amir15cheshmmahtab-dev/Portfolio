// import { useParams, useNavigate } from "react-router-dom";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef, useEffect } from "react";
// import { ArrowLeft, ExternalLink, Github, Sparkles, ChevronRight } from "lucide-react";
// import { getProjectById } from "@/lib/projectsData";
// import AnimatedNav from "@/components/AnimatedNav";
// import CustomCursor from "@/components/CustomCursor";
// import ParticleField from "@/components/ParticleField";
// import ScrollProgress from "@/components/ScrollProgress";
// import Footer from "@/components/Footer";
// import LiquidGlass from "@/components/LiquidGlass";
// import AnimatedText from "@/components/AnimatedText";
// import MagneticButton from "@/components/MagneticButton";

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const project = getProjectById(id || "");
//   const heroRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
//   const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]);

//   if (!project) {
//     return (
//       <div className="min-h-screen bg-background flex items-center justify-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center"
//         >
//           <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
//           <MagneticButton
//             onClick={() => navigate("/")}
//             className="px-6 py-3 bg-primary text-primary-foreground rounded-full"
//           >
//             Go Home
//           </MagneticButton>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-[100dvh] bg-background overflow-x-hidden cursor-auto md:cursor-none">
//       <CustomCursor />
//       <ScrollProgress />
//       <ParticleField />
//       <AnimatedNav />

//       {/* Hero Section */}
//       <motion.section
//         ref={heroRef}
//         className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
//         style={{ y: heroY }}
//       >
//         {/* Background Image with Overlay */}
//         <motion.div
//           className="absolute inset-0"
//           style={{ opacity: heroOpacity, scale: heroScale }}
//         >
//           {/* this is our image background */}
//           <div   
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${project.images.hero})` }}
//           />
//           {/* Dark mode overlay */}
//           <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background dark:block" />
//           {/* Light mode specific overlay for better readability */}
//           <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-800/70 to-background dark:hidden" />
//         </motion.div>

//         {/* Animated Background Elements */}
//         <motion.div
//           className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
//           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 6, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"
//           animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
//           transition={{ duration: 8, repeat: Infinity, delay: 2 }}
//         />

//         {/* Content */}
//         <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
//           {/* Back Button */}
//           <motion.button
//             onClick={() => navigate("/")}
//             className="flex items-center gap-2 text-white/80 hover:text-white dark:text-muted-foreground dark:hover:text-foreground mb-8 group transition-colors"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             whileHover={{ x: -5 }}
//           >
//             <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
//             <span className="font-medium">Back to Projects</span>
//           </motion.button>

//           {/* Tags */}
//           <motion.div
//             className="flex flex-wrap gap-3 mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//           >
//             {project.tags.map((tag, index) => (
//               <motion.span
//                 key={tag}
//                 className="px-4 py-2 bg-white/20 dark:bg-primary/10 backdrop-blur-sm rounded-full text-sm font-medium text-white dark:text-primary border border-white/30 dark:border-primary/20"
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.2 + index * 0.1 }}
//                 whileHover={{ scale: 1.05, backgroundColor: "hsl(185 100% 50% / 0.3)" }}
//               >
//                 {tag}
//               </motion.span>
//             ))}
//           </motion.div>

//           {/* Title */}
//           <div className="mb-8">
//             <div className="text-5xl md:text-7xl font-display font-bold text-white dark:text-foreground drop-shadow-lg">
//               <AnimatedText text={project.title} className="" />
//             </div>
//           </div>

//           {/* Description */}
//           <motion.p
//             className="text-xl md:text-2xl text-white/90 dark:text-muted-foreground mb-10 drop-shadow-md"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             {project.fullDescription}
//           </motion.p>

//           {/* Action Buttons */}
//           <motion.div
//             className="flex flex-wrap gap-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//           >
//             {project.liveUrl && (
//               <MagneticButton
//                 className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold flex items-center gap-2 glow-primary"
//               >
//                 <ExternalLink className="w-5 h-5" />
//                 View Live Site
//               </MagneticButton>
//             )}
//             {project.githubUrl && (
//               <MagneticButton
//                 className="px-8 py-4 border border-border rounded-full font-semibold flex items-center gap-2 hover:bg-secondary transition-colors"
//               >
//                 <Github className="w-5 h-5" />
//                 View Source
//               </MagneticButton>
//             )}
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           className="absolute bottom-10 left-1/2 -translate-x-1/2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//         >
//           <motion.div
//             className="flex flex-col items-center gap-2 text-muted-foreground"
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <span className="text-sm">Scroll to explore</span>
//             <ChevronRight className="w-5 h-5 rotate-90" />
//           </motion.div>
//         </motion.div>
//       </motion.section>

//       {/* Features Section */}
//       <section className="py-32 relative">
//         <div className="container mx-auto px-6">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false }}
//           >
//             <motion.div
//               className="flex items-center justify-center gap-2 mb-4"
//               animate={{ opacity: [0.5, 1, 0.5] }}
//               transition={{ duration: 3, repeat: Infinity }}
//             >
//               <Sparkles className="w-5 h-5 text-primary" />
//               <span className="text-sm uppercase tracking-widest text-primary">Key Features</span>
//               <Sparkles className="w-5 h-5 text-primary" />
//             </motion.div>
//             <h2 className="text-4xl md:text-5xl font-display font-bold">
//               <span className="text-gradient">What Makes It Special</span>
//             </h2>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {project.features.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 50, rotateX: -10 }}
//                 whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//                 viewport={{ once: false, margin: "-50px" }}
//                 transition={{ delay: index * 0.1, type: "spring" }}
//               >
//                 <LiquidGlass className="p-8 h-full" intensity="medium">
//                   <motion.div
//                     className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4"
//                     whileHover={{ rotate: 360, scale: 1.1 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <span className="text-2xl font-bold text-primary">{index + 1}</span>
//                   </motion.div>
//                   <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
//                   <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
//                 </LiquidGlass>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="py-32 relative overflow-hidden">
//         <motion.div
//           className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"
//           animate={{ scale: [1, 1.2, 1], x: [-50, 50, -50] }}
//           transition={{ duration: 10, repeat: Infinity }}
//         />

//         <div className="container mx-auto px-6">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false }}
//           >
//             <h2 className="text-4xl md:text-5xl font-display font-bold">
//               <span className="text-gradient">Project Gallery</span>
//             </h2>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-6">
//             {project.images.gallery.map((image, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: false }}
//                 transition={{ delay: index * 0.15, type: "spring" }}
//                 className="group"
//               >
//                 <LiquidGlass className="overflow-hidden" intensity="high">
//                   <motion.div
//                     className="aspect-video overflow-hidden"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.4 }}
//                   >
//                     <img
//                       src={image}
//                       alt={`${project.title} screenshot ${index + 1}`}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                   </motion.div>
//                 </LiquidGlass>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Tech Stack Section */}
//       <section className="py-32 relative">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-16">
//             {/* Tech Stack */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: false }}
//             >
//               <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
//                 <span className="text-gradient">Tech Stack</span>
//               </h2>
//               <LiquidGlass className="p-8" intensity="medium">
//                 <div className="flex flex-wrap gap-3">
//                   {project.techStack.map((tech, index) => (
//                     <motion.span
//                       key={tech}
//                       className="px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium border border-border/50"
//                       initial={{ opacity: 0, scale: 0 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: false }}
//                       transition={{ delay: index * 0.05 }}
//                       whileHover={{ 
//                         scale: 1.1, 
//                         backgroundColor: "hsl(185 100% 50% / 0.2)",
//                         borderColor: "hsl(185 100% 50% / 0.5)",
//                       }}
//                     >
//                       {tech}
//                     </motion.span>
//                   ))}
//                 </div>
//               </LiquidGlass>
//             </motion.div>

//             {/* Implementation */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: false }}
//             >
//               <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
//                 <span className="text-gradient">Implementation</span>
//               </h2>
//               <LiquidGlass className="p-8" intensity="medium">
//                 <p className="text-muted-foreground leading-relaxed text-lg">
//                   {project.implementation}
//                 </p>
//               </LiquidGlass>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-32 relative">
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"
//           animate={{ opacity: [0.5, 0.8, 0.5] }}
//           transition={{ duration: 5, repeat: Infinity }}
//         />

//         <div className="container mx-auto px-6">
//           <LiquidGlass className="p-12 md:p-16 text-center" intensity="high">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false }}
//             >
//               <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
//                 Like What You See?
//               </h2>
//               <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
//                 I'd love to discuss how I can help bring your vision to life with the same level of creativity and attention to detail.
//               </p>
//               <div className="flex flex-wrap justify-center gap-4">
//                 <MagneticButton
//                   onClick={() => navigate("/")}
//                   className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold glow-primary"
//                 >
//                   View More Projects
//                 </MagneticButton>
//                 <MagneticButton
//                   onClick={() => {
//                     navigate("/");
//                     setTimeout(() => {
//                       document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
//                     }, 100);
//                   }}
//                   className="px-8 py-4 border border-border rounded-full font-semibold hover:bg-secondary transition-colors"
//                 >
//                   Get In Touch
//                 </MagneticButton>
//               </div>
//             </motion.div>
//           </LiquidGlass>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default ProjectDetails;




import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ExternalLink, Github, Sparkles, ChevronRight } from "lucide-react";
import { getProjectById } from "@/lib/projectsData";
import AnimatedNav from "@/components/AnimatedNav";
import CustomCursor from "@/components/CustomCursor";
import ParticleField from "@/components/ParticleField";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import LiquidGlass from "@/components/LiquidGlass";
import AnimatedText from "@/components/AnimatedText";
import MagneticButton from "@/components/MagneticButton";
import ImageCarouselModal from "./ImageCarouselModal";


const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id || "");
  const heroRef = useRef<HTMLDivElement>(null);

  // ── Lightbox state ──────────────────────────────────────────────
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const handleNext = () => {
    if (lightboxIndex === null || !project) return;
    setLightboxIndex((lightboxIndex + 1) % project.images.gallery.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null || !project) return;
    setLightboxIndex(
      (lightboxIndex - 1 + project.images.gallery.length) %
        project.images.gallery.length
    );
  };
  // ───────────────────────────────────────────────────────────────

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
          <MagneticButton
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full"
          >
            Go Home
          </MagneticButton>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-background overflow-x-hidden cursor-auto md:cursor-none">
      <CustomCursor />
      <ScrollProgress />
      <ParticleField />
      <AnimatedNav />

      {/* ── Lightbox Modal ── */}
      {lightboxIndex !== null && (
        <ImageCarouselModal
          images={project.images.gallery}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={handleNext}
          onPrev={handlePrev}
          altPrefix={project.title}
        />
      )}

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        >
          {/* this is our image background */}
          <div   
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.images.hero})` }}
          />
          {/* Dark mode overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background dark:block" />
          {/* Light mode specific overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-800/70 to-background dark:hidden" />
        </motion.div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 pt-28 pb-24 md:pt-32 md:pb-20 relative z-10">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate("/")}
            className="flex min-h-11 items-center gap-2 text-white/80 hover:text-white dark:text-muted-foreground dark:hover:text-foreground mb-6 md:mb-8 group transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to Projects</span>
          </motion.button>

          {/* Tags */}
          <motion.div
            className="flex flex-wrap gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {project.tags.map((tag, index) => (
              <motion.span
                key={tag}
                className="px-4 py-2 bg-white/20 dark:bg-primary/10 backdrop-blur-sm rounded-full text-sm font-medium text-white dark:text-primary border border-white/30 dark:border-primary/20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "hsl(185 100% 50% / 0.3)" }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Title */}
          <div className="mb-8">
            <div className="text-4xl md:text-7xl font-display font-bold text-white dark:text-foreground drop-shadow-lg">
              <AnimatedText text={project.title} className="" />
            </div>
          </div>

          {/* Description */}
          <motion.p
            lang="fa"
            className="max-w-4xl break-words text-xl md:text-2xl text-white/90 dark:text-muted-foreground mb-8 md:mb-10 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {project.fullDescription}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="relative z-20 flex flex-wrap gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {project.liveUrl && (
              <MagneticButton
                onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
                className="w-full sm:w-auto max-w-full justify-center whitespace-normal px-5 py-3 sm:px-8 sm:py-4 border border-border rounded-full font-semibold flex items-center gap-2 hover:bg-secondary transition-colors glow-subtle"
              >
                <ExternalLink className="w-5 h-5 " />
                <span lang="fa">رفتن به وبسایت</span>
              </MagneticButton>
            )}
            {project.githubUrl && (
              <MagneticButton
                onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}
                className="w-full sm:w-auto max-w-full justify-center whitespace-normal px-5 py-3 sm:px-8 sm:py-4 border border-border rounded-full font-semibold flex items-center gap-2 hover:bg-secondary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span lang="fa">سورس کد محرمانه میباشد</span>
              </MagneticButton>
            )}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-muted-foreground"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronRight className="w-5 h-5 rotate-90" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="flex items-center justify-center gap-2 mb-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-widest text-primary">Key Features</span>
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              <span className="text-gradient">What Makes It Special</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ delay: index * 0.1, type: "spring" }}
              >
                <LiquidGlass className="p-8 h-full" intensity="medium">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </motion.div>
                  <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                  <p lang="fa" className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </LiquidGlass>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], x: [-50, 50, -50] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              <span className="text-gradient">Project Gallery</span>
            </h2>
            <p className="text-muted-foreground mt-3 text-sm">Click any image to view full size</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {project.images.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.15, type: "spring" }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}  // ← open modal on click
              >
                <LiquidGlass className="overflow-hidden" intensity="high">
                  <motion.div
                    className="aspect-video overflow-hidden relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* hover overlay hint */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium tracking-wide">
                        View Full Size
                      </span>
                    </div>
                  </motion.div>
                </LiquidGlass>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                <span className="text-gradient">Tech Stack</span>
              </h2>
              <LiquidGlass className="p-8" intensity="medium">
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium border border-border/50"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "hsl(185 100% 50% / 0.2)",
                        borderColor: "hsl(185 100% 50% / 0.5)",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </LiquidGlass>
            </motion.div>

            {/* Implementation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                <span className="text-gradient">Implementation</span>
              </h2>
              <LiquidGlass className="p-8" intensity="medium">
                <p lang="fa" className="text-muted-foreground leading-relaxed text-lg">
                  {project.implementation}
                </p>
              </LiquidGlass>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="container mx-auto px-6">
          <LiquidGlass className="p-12 md:p-16 text-center" intensity="high">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
            >
              <h2 lang="fa" className="text-3xl md:text-5xl font-display font-bold mb-6">
                  چیزی که می‌بینید را دوست دارید؟
              </h2>
              <p lang="fa" className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
خوشحال می‌شوم درباره ایده و چشم‌انداز شما صحبت کنیم و با همان میزان خلاقیت و دقت، در تبدیل آن به یک تجربه دیجیتال حرفه‌ای همراهتان باشم.              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                <MagneticButton
                  onClick={() => navigate("/")}
                  className="w-full sm:w-auto px-5 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground rounded-full font-semibold glow-primary"
                >
                  <span lang="fa">مشاهده پروژه های بیشتر</span>
                </MagneticButton>
                <MagneticButton
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  className="w-full sm:w-auto px-5 py-3 sm:px-8 sm:py-4 border border-border rounded-full font-semibold hover:bg-secondary transition-colors"
                >
                  <span lang="fa">ارتباط با من</span>
                </MagneticButton>
              </div>
            </motion.div>
          </LiquidGlass>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetails;