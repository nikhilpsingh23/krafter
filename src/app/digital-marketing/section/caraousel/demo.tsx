"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const StickyCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "/images/digital-1.jpg",
        "/images/digital-2.jpg",
        "/images/digital-3.jpg",
        "/images/digital-4.jpg",
        "/images/digital-5.jpg",
        "/images/digital-7.jpg",
        "/images/digital-6.jpg"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(timer);
    }, [images.length]);

    const getAdjacentIndexes = () => {
        const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        return { prevIndex, nextIndex };
    };

    const getMultipleAdjacentIndexes = () => {
        const prevIndex2 = (currentIndex - 2 + images.length) % images.length;
        const prevIndex1 = (currentIndex - 1 + images.length) % images.length;
        const nextIndex1 = (currentIndex + 1) % images.length;
        const nextIndex2 = (currentIndex + 2) % images.length;
        return { prevIndex2, prevIndex1, nextIndex1, nextIndex2 };
    };

    return (
        <>
                    {/* Heading Section */}
                    <div className="text-center py-20">
                <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 text-transparent bg-clip-text">
                    Our Digital Solutions
                </h2>
            </div>

            {/* Mobile frame in center */}
        <div className="relative h-screen w-full overflow-hidden bg-white-600">
            {/* Heading Section */}
            

            {/* Mobile frame in center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          w-[290px] h-[520px] bg-black rounded-[40px] z-20 
                          border-8 border-[rgb(164, 89, 235)] shadow-2xl">
                            
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 
                              w-32 h-6 bg-black rounded-b-2xl"></div>
                
                {/* Main screen content */}
                <div className="h-full w-full overflow-hidden rounded-[32px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className="h-full w-full"
                        >
                            <img
                                src={images[currentIndex]}
                                alt={`Main ${currentIndex + 1}`}
                                className="h-full w-full object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Side images - Two on each side */}
            <motion.div 
                className="absolute top-1/2 left-[15%] transform -translate-y-1/2 -translate-x-1/2 
                          w-[200px] h-[400px] opacity-30 transition-all duration-300
                          hover:opacity-70 hover:scale-105 hover:z-10 cursor-pointer"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
            >
                <img
                    src={images[getMultipleAdjacentIndexes().prevIndex2]}
                    alt="Previous 2"
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                />
            </motion.div>

            <motion.div 
                className="absolute top-1/2 left-[30%] transform -translate-y-1/2 -translate-x-1/2 
                          w-[250px] h-[500px] opacity-50 transition-all duration-300
                          hover:opacity-90 hover:scale-105 hover:z-10 cursor-pointer"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -15 }}
            >
                <img
                    src={images[getMultipleAdjacentIndexes().prevIndex1]}
                    alt="Previous 1"
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                />
            </motion.div>

            <motion.div 
                className="absolute top-1/2 right-[30%] transform -translate-y-1/2 translate-x-1/2 
                          w-[250px] h-[500px] opacity-50 transition-all duration-300
                          hover:opacity-90 hover:scale-105 hover:z-10 cursor-pointer"
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -15 }}
            >
                <img
                    src={images[getMultipleAdjacentIndexes().nextIndex1]}
                    alt="Next 1"
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                />
            </motion.div>

            <motion.div 
                className="absolute top-1/2 right-[15%] transform -translate-y-1/2 translate-x-1/2 
                          w-[200px] h-[400px] opacity-30 transition-all duration-300
                          hover:opacity-70 hover:scale-105 hover:z-10 cursor-pointer"
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
            >
                <img
                    src={images[getMultipleAdjacentIndexes().nextIndex2]}
                    alt="Next 2"
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                />
            </motion.div>

            {/* Navigation dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 
                                  ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
        </>
    );
};

export default StickyCarousel;