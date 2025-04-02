'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const carouselItems = [
  '/images/home/frame1.png',
  '/images/home/frame2.png',
  '/images/home/frame3.png',
  '/images/home/frame4.png',
  '/images/home/frame5.png',
  '/images/home/frame6.png',
];

export default function InfiniteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const normalizedIndex = currentIndex % carouselItems.length;

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen bg-gray-300 overflow-hidden">
      <div className="relative flex items-center justify-center w-full overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex items-center"
          animate={{ x: `-${(normalizedIndex * 100) / 3}%` }}
          transition={{ 
            ease: 'linear', 
            duration: 1,
            type: "tween"
          }}
        >
          {[...carouselItems, ...carouselItems].map((src, index) => (
            <div key={index} className="w-1/3 h-[550px] flex-shrink-0 flex items-center justify-center">
              <img src={src} alt={`Slide ${index}`} className="w-72 h-[550px] object-cover rounded-xl shadow-lg" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 flex mt-5 gap-2">
        {carouselItems.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              normalizedIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
