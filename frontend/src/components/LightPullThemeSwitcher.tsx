import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";

export const LightPullThemeSwitcher: React.FC = () => {
  const controls = useAnimationControls();

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return true;
  });

  const isDraggingRef = useRef(false);

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

  return (
    <div className="relative flex items-center justify-center shrink-0">
      <motion.div
        animate={controls}
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
        onDragEnd={(_event, info) => {
          if (info.offset.y > 12) {
            toggleDarkMode();
          }

          // Explicitly animate bulb back to resting position y = 0
          controls.start({
            y: 0,
            transition: {
              type: "spring",
              stiffness: 700,
              damping: 30,
              mass: 0.35,
            },
          });

          setTimeout(() => {
            isDraggingRef.current = false;
          }, 150);
        }}
        onClick={() => {
          if (!isDraggingRef.current) {
            toggleDarkMode();
          }
        }}
        dragConstraints={{ top: 0, bottom: 30 }}
        dragElastic={0.1}
        dragSnapToOrigin={true}
        whileDrag={{ cursor: "grabbing" }}
        className={`relative w-8 h-8 rounded-full cursor-grab active:cursor-grabbing transition-colors duration-300 ${
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
      >
        {/* Single Vertical Pull Cord extending upward */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-0.5 h-14 pointer-events-none transition-colors duration-300 ${
            isDark ? "bg-neutral-700" : "bg-neutral-300"
          }`}
        />
      </motion.div>
    </div>
  );
};
