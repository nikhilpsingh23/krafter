"use client"
import { Divide } from "lucide-react";
import React, { useRef, useEffect } from "react";

const VideoBanner = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Video autoplay failed:", error);
            });
        }
    }, []);

    return (
        <div className="relative w-full h-[620px] bg-black overflow-hidden">
            <div className="container mx-auto px-4 h-full">
                <div className="flex flex-col md:flex-row items-center justify-between h-full gap-8">
                    {/* Video/Image Column */}
                    <div className="w-full md:w-1/2 h-[300px] min-[550px]:h-[400px] md:h-[500px] relative order-1 md:order-2 mt-8 md:mt-0">
                        <div className="absolute inset-0 rounded-[40px] min-[550px]:rounded-[60px] overflow-hidden transform rotate-3">
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover scale-110"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/images/videos/marketing.mp4" type="video/mp4" />
                            </video>
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-10 -right-10 w-32 min-[550px]:w-48 h-32 min-[550px]:h-48 bg-orange-500/20 rounded-full blur-xl"></div>
                        <div className="absolute -top-10 -left-10 w-32 min-[550px]:w-48 h-32 min-[550px]:h-48 bg-blue-500/20 rounded-full blur-xl"></div>
                        
                        {/* Curved Border */}
                        <div className="absolute inset-0 border-4 border-orange-500/30 rounded-[40px] min-[550px]:rounded-[60px] transform -rotate-3"></div>
                    </div>

                    {/* Text Column */}
                    <div className="w-full md:w-1/2 text-white order-2 md:order-1">
                        <h1 className="text-4xl min-[550px]:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                            Results are everything.
                            <br />
                            It's that simple.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoBanner;