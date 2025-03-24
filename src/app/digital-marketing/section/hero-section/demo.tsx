import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/videos/dm.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-20 xl:px-32">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-3xl leading-tight">
          Don&apos;t just do.
          <br />
          Achieve.
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;