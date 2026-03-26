"use client";

import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  href?: string;
  strength?: number;
  as?: "button" | "a" | "div";
}

export default function MagneticButton({
  children,
  className,
  style,
  onClick,
  strength = 0.35,
  as: Tag = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useSpring(0, { damping: 15, stiffness: 150 });
  const y = useSpring(0, { damping: 15, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    x.set(distX * strength);
    y.set(distY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const Comp = motion[Tag as keyof typeof motion] as typeof motion.button;

  return (
    <Comp
      ref={ref as React.RefObject<HTMLButtonElement>}
      style={{ x, y, ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      onClick={onClick}
      className={cn("magnetic-btn relative", className)}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </Comp>
  );
}
