"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hidden, setHidden] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Main cursor — tight spring
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Outer ring — looser spring for lag effect
  const trailConfig = { damping: 20, stiffness: 120, mass: 0.8 };
  const trailX = useSpring(mouseX, trailConfig);
  const trailY = useSpring(mouseY, trailConfig);

  useEffect(() => {
    const updatePos = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setHidden(false);
    };

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);
    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);
    const handleWindowLeave = () => setHidden(true);
    const handleWindowEnter = () => setHidden(false);

    window.addEventListener("mousemove", updatePos);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleWindowLeave);
    document.addEventListener("mouseenter", handleWindowEnter);

    // Attach hover listeners to all interactive elements
    const attachHoverListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, select, [data-cursor='hover']"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    attachHoverListeners();

    // Re-attach on DOM changes
    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", updatePos);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleWindowLeave);
      document.removeEventListener("mouseenter", handleWindowEnter);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      {/* Outer ring (trailing) */}
      <motion.div
        style={{
          left: trailX,
          top: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovering ? 2.5 : clicking ? 0.8 : 1,
          opacity: hidden ? 0 : hovering ? 0.6 : 0.3,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="fixed pointer-events-none z-[99999] w-10 h-10 rounded-full border border-electric mix-blend-difference"
      />

      {/* Inner dot (precise) */}
      <motion.div
        style={{
          left: cursorX,
          top: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicking ? 0.6 : 1,
          opacity: hidden ? 0 : 1,
          backgroundColor: hovering ? "#0066FF" : "#f0f0f8",
          width: hovering ? 8 : 6,
          height: hovering ? 8 : 6,
        }}
        transition={{ duration: 0.15 }}
        className="fixed pointer-events-none z-[99999] rounded-full mix-blend-difference"
      />
    </>
  );
}
