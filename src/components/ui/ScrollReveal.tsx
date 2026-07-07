"use client";

import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 700,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal();

  const enterStyles: Record<string, string> = {
    up: "translate-y-0 opacity-100",
    down: "translate-y-0 opacity-100",
    left: "translate-x-0 opacity-100",
    right: "translate-x-0 opacity-100",
    none: "opacity-100",
  };

  const exitStyles: Record<string, string> = {
    up: "translate-y-12 opacity-0",
    down: "-translate-y-12 opacity-0",
    left: "translate-x-12 opacity-0",
    right: "-translate-x-12 opacity-0",
    none: "opacity-0",
  };

  return (
    <div
      ref={ref}
      className={`${className}`}
    >
      <div
        className={isVisible ? enterStyles[direction] : exitStyles[direction]}
        style={{
          transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
