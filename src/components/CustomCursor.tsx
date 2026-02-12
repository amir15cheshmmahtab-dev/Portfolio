import { useEffect, useState, useRef, useCallback } from "react";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const smoothPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  const updateCursor = useCallback(() => {
    // Lerp for the ring (smooth follow), instant for dot
    smoothPos.current.x += (posRef.current.x - smoothPos.current.x) * 0.15;
    smoothPos.current.y += (posRef.current.y - smoothPos.current.y) * 0.15;

    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${posRef.current.x - 8}px, ${posRef.current.y - 8}px, 0)`;
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate3d(${smoothPos.current.x - 20}px, ${smoothPos.current.y - 20}px, 0)`;
    }

    rafRef.current = requestAnimationFrame(updateCursor);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(updateCursor);

    const moveCursor = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setIsHovering(true);
        const text = target.getAttribute("data-cursor") || "";
        setCursorText(text);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setCursorText("");
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [updateCursor]);

  const dotScale = isClicking ? 0.5 : isHovering ? 0.5 : 1;
  const ringScale = isClicking ? 0.8 : isHovering ? 2.5 : 1;
  const ringOpacity = isHovering ? 0.8 : 0.5;

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          willChange: "transform",
          transition: `width 0.15s, height 0.15s`,
          transform: `translate3d(-100px, -100px, 0) scale(${dotScale})`,
        }}
      />
      
      {/* Cursor ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-primary rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center"
        style={{
          willChange: "transform",
          transition: `width 0.2s, height 0.2s, opacity 0.2s`,
          transform: `translate3d(-100px, -100px, 0) scale(${ringScale})`,
          opacity: ringOpacity,
        }}
      >
        {cursorText && (
          <span className="text-xs font-semibold text-primary">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};

export default CustomCursor;
