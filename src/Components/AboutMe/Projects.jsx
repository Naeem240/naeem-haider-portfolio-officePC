import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Header/Navbar/Navbar";
import ProjectDetail from "./ProjectDetail";

const tabs = [
  { id: "1", label: "Project-1" },
  { id: "2", label: "Project-2" },
  { id: "3", label: "Project-3" },
  { id: "4", label: "Project-4" },
];

export default function Projects() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("1");
  const [direction, setDirection] = useState(0); // 1 for forward, -1 for backward

  // On page load or URL hash change → set active tab
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && tabs.some((tab) => tab.id === hash)) {
      setActiveTab(hash);
    } else {
      navigate("/projects#1", { replace: true });
      setActiveTab("1");
    }
  }, [location.hash, navigate]);

  // Handle tab click, determine direction for animation
  const handleTabClick = (tabId) => {
    if (tabId === activeTab) return;
    setDirection(tabId > activeTab ? 1 : -1);
    navigate(`/projects#${tabId}`);
  };

  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  // Swipe handlers for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  };

  const handleSwipeGesture = () => {
    const swipeThreshold = 50; // minimum px swipe to trigger
    if (touchEndX - touchStartX > swipeThreshold) {
      // Swipe right → previous tab
      if (activeIndex > 0) {
        const prevId = tabs[activeIndex - 1].id;
        setDirection(-1);
        navigate(`/projects#${prevId}`);
      }
    } else if (touchStartX - touchEndX > swipeThreshold) {
      // Swipe left → next tab
      if (activeIndex < tabs.length - 1) {
        const nextId = tabs[activeIndex + 1].id;
        setDirection(1);
        navigate(`/projects#${nextId}`);
      }
    }
  };

  // Animation variants with direction-aware X sliding
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen pt-6 bg-linear-to-b from-gray-900 to-black text-white"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-[#f306f3] border-b pb-4">My Projects</h1>

        {/* Tabs */}
        <div className="flex justify-center gap-8 relative border-b border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`cursor-pointer pb-2 relative ${
                activeTab === tab.id ? "text-[#f306f3]" : "text-gray-400"
              } hover:opacity-80 hover:text-[#f306f3] transition-colors`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-[#f306f3]"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-8 flex justify-center relative min-h-[320px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeTab}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <ProjectDetail id={activeTab} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
