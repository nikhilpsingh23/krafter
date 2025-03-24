"use client"
import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/images/videos/honey.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F49DAA] via-[#95A6E2] to-[#9096DB] opacity-70"></div>

            {/* Text Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <div className="max-w-[1440px] mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white 
                                 tracking-wide drop-shadow-lg">
                        Where Innovation <br className="hidden sm:block" />
                        Meets Excellence
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;