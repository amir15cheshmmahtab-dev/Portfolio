import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
}

const ParticleField = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const particles = useMemo<Particle[]>(() => {
    const count = isMobile ? 15 : 50;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      driftX: Math.random() * 50 - 25,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <style>{`
        @keyframes particleFloat {
          0% { transform: translate3d(0, 0, 0) scale(0); opacity: 0; }
          50% { transform: translate3d(var(--drift-x), -100px, 0) scale(1); opacity: 1; }
          100% { transform: translate3d(0, 0, 0) scale(0); opacity: 0; }
        }
      `}</style>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            willChange: "transform, opacity",
            // @ts-ignore
            "--drift-x": `${particle.driftX}px`,
            animation: `particleFloat ${particle.duration}s ${particle.delay}s ease-in-out infinite`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default ParticleField;
