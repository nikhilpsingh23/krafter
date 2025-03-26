"use client"

import { motion } from "framer-motion";
import Image from 'next/image';

const Overlay = () => {
    return (
        <div className="relative mt-30 w-full h-screen overflow-hidden">
            <motion.div 
                className="absolute inset-0"
                style={{ height: '200%' }}
                initial={{ y: "-50%" }}
                animate={{ 
                    y: ["0%", "-50%"]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <Image
                    src="/images/move-bg.jpg"
                    alt="Moving background"
                    fill
                    className="object-cover"
                    priority
                />
                <Image
                    src="/images/move-bg.jpg"
                    alt="Moving background"
                    fill
                    className="object-cover absolute top-full"
                    priority
                />
            </motion.div>
            {/* Rest of the component remains the same */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="relative z-10 text-white h-full flex flex-col items-center justify-center px-4 sm:px-0">
                <h2 className="text-3xl sm:text-4xl text-center font-bold mb-8">Website & Dashboard Development</h2>
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 w-full max-w-md sm:max-w-none">
                    <button className="w-full sm:w-auto px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-[30px] font-semibold transition-all duration-300">
                        Ecommerce
                    </button>
                    <button className="w-full sm:w-auto px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-[30px] font-semibold transition-all duration-300">
                        Multivendor
                    </button>
                    <button className="w-full sm:w-auto px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-[30px] font-semibold transition-all duration-300">
                        Dynamic
                    </button>
                    <button className="w-full sm:w-auto px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-[30px] font-semibold transition-all duration-300">
                        Static
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Overlay;