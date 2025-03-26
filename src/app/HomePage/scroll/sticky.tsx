"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Fix content type definition
export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  // Fix ref type
  const ref = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = React.useState(0);
  const [activeSection, setActiveSection] = useState('products'); // Add this
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "rgb(15 23 42)", // slate-900
    "rgb(0 0 0)", // black
    "rgb(23 23 23)", // neutral-900
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, rgb(6 182 212), rgb(16 185 129))", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, rgb(236 72 153), rgb(99 102 241))", // pink-500 to indigo-500
    "linear-gradient(to bottom right, rgb(249 115 22), rgb(234 179 8))", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  // Fix useEffect dependency
  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  // Add menu click handler
  // Update the content splitting logic
  const productsContent = content.slice(0, Math.ceil(content.length / 2));
  const servicesContent = content.slice(Math.ceil(content.length / 2));
  
  // Update the handleMenuClick function
  const handleMenuClick = (section: string, index: number) => {
    setActiveSection(section);
    setActiveCard(0); // Reset active card when switching sections
    if (ref.current) {
      ref.current.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when switching
    }
  };
  
  // Update the scroll event handling
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const currentContent = activeSection === 'products' ? productsContent : servicesContent;
    const sectionLength = currentContent.length;
    const cardsBreakpoints = currentContent.map((_, index) => index / sectionLength);
    
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] relative flex rounded-md p-10"
      ref={ref}
    >
      {/* Vertical Menu */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
  <div
    className={`relative px-6 py-2 cursor-pointer transition-all ${
      activeSection === 'products' 
        ? 'text-white' 
        : 'text-white/50 hover:text-white/70'
    }`}
    onClick={() => handleMenuClick('products', 0)}
  >
    {activeSection === 'products' && (
      <motion.div
        layoutId="active-indicator"
        className="absolute left-0 top-0 w-[3px] h-full bg-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    )}
    Product
  </div>
  <div
    className={`relative px-6 py-2 cursor-pointer transition-all ${
      activeSection === 'services' 
        ? 'text-white' 
        : 'text-white/50 hover:text-white/70'
    }`}
    onClick={() => handleMenuClick('services', content.length / 2)}
  >
    {activeSection === 'services' && (
      <motion.div
        layoutId="active-indicator"
        className="absolute left-0 top-0 w-[3px] h-full bg-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    )}
    Services
  </div>
</div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto flex justify-center relative space-x-10">
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {(activeSection === 'products' ? productsContent : servicesContent).map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-kg text-slate-300 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "hidden lg:block h-80 w-96 rounded-md bg-white sticky top-10 overflow-hidden transition-all duration-300",
            contentClassName
          )}
        >
          {(activeSection === 'products' ? productsContent : servicesContent)[activeCard]?.content ?? null}
        </div>
      </div>
    </motion.div>
  );
};