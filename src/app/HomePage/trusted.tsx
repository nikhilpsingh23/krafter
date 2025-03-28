"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react"; // Add this import at the top

const TrustedBy = () => {
  const [currentSet, setCurrentSet] = useState(1);
  
  const logoSets = {
    1: [
      "/images/home/clientlogo/logo1.png",
      "/images/home/clientlogo/logo2.jpg",
      "/images/home/clientlogo/logo8.png",
      "/images/home/clientlogo/logo4.jpg",
      "/images/home/clientlogo/logo5.png",
      "/images/home/clientlogo/logo6.png",
      "/images/home/clientlogo/logo7.jpg",
      "/images/home/clientlogo/logo8.png",
      "/images/home/clientlogo/logo9.png",
    ],
    2: [
      "/images/home/clientlogo/logo10.jpg",
      "/images/home/clientlogo/logo11.jpg",
      "/images/logo1.png",
      "/images/home/clientlogo/logo5.png",
      "/images/home/clientlogo/logo6.png",
      "/images/home/clientlogo/logo7.jpg",
      "/images/logo1.png",
      "/images/home/clientlogo/logo10.jpg",
    ]
  };

  const handleLoadMore = () => {
    setCurrentSet(currentSet === 1 ? 2 : 1);
  };

  const LogoCell = ({ index }: { index: number }) => (
    <div className="aspect-square flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#bab8ba]/30 rounded-2xl lg:rounded-3xl transition-all duration-300 hover:bg-white w-full">
      <Image 
        src={logoSets[currentSet as keyof typeof logoSets][index]} 
        alt="Company Logo" 
        width={120} 
        height={40} 
        className="w-16 sm:w-20 lg:w-[120px] opacity-70 transition-all duration-300 hover:opacity-100 filter grayscale hover:grayscale-0" 
      />
    </div>
  );

  const EmptyCell = () => (
    <div className="aspect-square flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#d6eaf8]/50 rounded-2xl lg:rounded-3xl w-full">
    </div>
  );

  return (
    <section className="w-full py-6 sm:py-8 lg:py-12 bg-[#e5e7e9] rounded-2xl lg:rounded-3xl min-h-[400px] sm:min-h-[600px] lg:h-[800px] shadow-[rgba(0,_0,_0,_0.2)_0px_12px_28px_0px,_rgba(0,_0,_0,_0.1)_0px_2px_4px_0px,_rgba(255,_255,_255,_0.05)_0px_0px_0px_1px_inset]">
      <div className="mx-auto px-3 sm:px-4 h-full bg-[#ededed] rounded-xl pt-2 shadow-[rgba(17,_17,_26,_0.1)_0px_1px_0px,_rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_48px]" style={{ maxWidth: '1250px' }}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 lg:gap-x-10 h-full mt-4 sm:mt-6 lg:mt-8 max-w-[400px] sm:max-w-none mx-auto">
          {/* Title */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 flex items-start p-4 sm:p-6 lg:p-8 bg-[#d6eaf8]/50 border-2 border-[#2d3436]/20 rounded-2xl lg:rounded-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#2d3436]">
              Who trusts us?
            </h2>
          </div>
          
          {/* Logo grid */}
          <LogoCell index={0} />
          <LogoCell index={1} />
          <EmptyCell />
          <LogoCell index={2} />
          
          <EmptyCell />
          <LogoCell index={3} />
          <EmptyCell />
          <LogoCell index={4} />
          <LogoCell index={5} />
          <LogoCell index={6} />
          
          <LogoCell index={7} />
          <EmptyCell />
          <LogoCell index={0} />
          <EmptyCell />
          <LogoCell index={1} />
          
          {/* Load more button */}
          <div className="aspect-square relative overflow-hidden w-full">
            <div className="absolute inset-0 bg-[#e6ffe6]/30 rounded-2xl lg:rounded-3xl">
              <button 
                onClick={handleLoadMore}
                className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 lg:bottom-4 lg:right-4 bg-white px-2 py-1 sm:px-3 sm:py-2 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm group rounded-lg"
              >
                <span className="text-black">Load more</span>
                <Plus 
                  className="text-black transition-all duration-300 transform group-hover:rotate-360" 
                  size={16} 
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;