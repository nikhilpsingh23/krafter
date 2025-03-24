"use client"

import { motion } from "framer-motion";

const Overlay = () => {
    return (
        <div className="relative mt-30 w-full h-screen overflow-hidden">
            {/* Background Image */}
            <motion.div 
                className="absolute inset-0"
                initial={{ y: "0%" }}
                animate={{ 
                    y: ["0%", "-100%", "0%"]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <img 
                    src="/images/move-bg.jpg" 
                    alt="Background" 
                    className="w-full h-[170%] object-cover"
                />
            </motion.div>

            {/* Static Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="relative z-10 text-white h-full flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold mb-8">Website & Dashboard Development</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-[30] text-[5] font-semibold transition-all duration-300">
                        Ecommerce
                    </button>
                    <button className="px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-[30] text-[5]  font-semibold transition-all duration-300">
                        Multivendor
                    </button>
                    <button className="px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-[30] text-[5]  font-semibold transition-all duration-300">
                        Dynamic
                    </button>
                    <button className="px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-[30] text-[5]  font-semibold transition-all duration-300">
                        Static
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Overlay;