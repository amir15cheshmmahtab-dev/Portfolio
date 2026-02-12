import AnimatedNav from "@/components/AnimatedNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ParticleField from "@/components/ParticleField";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollSpiral from "@/components/ScrollSpiral";

const Index = () => {
  return (
    <div className="min-h-[100dvh] bg-background overflow-x-hidden cursor-auto md:cursor-none">
      <ScrollSpiral />
      <CustomCursor />
      <ScrollProgress />
      <ParticleField />
      <AnimatedNav />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
