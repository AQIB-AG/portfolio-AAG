import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export const LightPullThemeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return true;
  });

  const isDraggingRef = useRef(false);
  const dragY = useMotionValue(0);

  // Cord height stretches from resting height (52px) down as dragY increases, with top anchor fixed
  const cordScaleY = useTransform(dragY, (latestY) => (52 + Math.max(0, latestY)) / 52);

  useEffect(() => {
    const checkTheme = () => {
      if (typeof document !== "undefined") {
        setIsDark(document.documentElement.classList.contains("dark"));
      }
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    const root = document.documentElement;
    const nextDark = !root.classList.contains("dark");
    root.classList.toggle("dark", nextDark);
    setIsDark(nextDark);
  };

  const handleDragEnd = (_event: any, info: any) => {
    if (info.offset.y > 12) {
      toggleDarkMode();
    }

    // Smoothly animate spring return for both bulb position and cord scale
    animate(dragY, 0, {
      type: "spring",
      stiffness: 600,
      damping: 28,
      mass: 0.35,
    });

    setTimeout(() => {
      isDraggingRef.current = false;
    }, 150);
  };

  return (
    <div className="relative flex flex-col items-center justify-start w-8 h-20 shrink-0">
      {/* 1. FIXED TOP CEILING ANCHOR POINT - Never moves */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 z-10 pointer-events-none" />

      {/* 2. ELASTIC RUBBER CORD - Fixed at Top Anchor (originY: 0), Stretches Downward */}
      <motion.div
        style={{
          scaleY: cordScaleY,
          originY: 0,
        }}
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-[52px] pointer-events-none transition-colors duration-300 z-0 ${
          isDark ? "bg-neutral-600" : "bg-neutral-400"
        }`}
      />

      {/* 3. LIGHT/DARK THEME BULB - Drags Downward while cord stretches from fixed top anchor */}
      <motion.div
        style={{ y: dragY }}
        drag="y"
        dragDirectionLock
        onDragStart={() => {
          isDraggingRef.current = false;
        }}
        onDrag={(_event, info) => {
          if (Math.abs(info.offset.y) > 4) {
            isDraggingRef.current = true;
          }
        }}
        onDragEnd={handleDragEnd}
        onClick={() => {
          if (!isDraggingRef.current) {
            toggleDarkMode();
          }
        }}
        dragConstraints={{ top: 0, bottom: 35 }}
        dragElastic={0.15}
        dragSnapToOrigin={false}
        whileDrag={{ cursor: "grabbing" }}
        className={`absolute top-[44px] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full cursor-grab active:cursor-grabbing transition-colors duration-300 z-20 ${
          isDark
            ? "bg-[radial-gradient(circle_at_center,_#4b5563,_#1f2937,_#000000)] shadow-[0_0_20px_6px_rgba(31,41,55,0.7)]"
            : "bg-[radial-gradient(circle_at_center,_#facc15,_#fcd34d,_#fef9c3)] shadow-[0_0_20px_8px_rgba(250,204,21,0.5)]"
        }`}
        title={
          isDark
            ? "Pull or click to switch to light mode"
            : "Pull or click to switch to dark mode"
        }
        aria-label="Toggle Light/Dark Theme"
      />
    </div>
  );
};
