"use client"
import React, { useState, useRef, useEffect } from 'react';
// Remove the unused Image import
// import Image from 'next/image';

const VerticalMenu = () => {
    const [activeSection, setActiveSection] = useState(1);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [isInView, setIsInView] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const verticalSection = document.getElementById('vertical-menu-section');
            if (verticalSection) {
                const rect = verticalSection.getBoundingClientRect();
                const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
                const isPartiallyVisible = rect.top < window.innerHeight && rect.bottom >= 0;
                setIsInView(isFullyVisible || isPartiallyVisible);

                // Check which section is most visible
                const sectionElements = sectionRefs.current;
                let maxVisibleSection = activeSection;
                let maxVisibleArea = 0;

                sectionElements.forEach((section, index) => {
                    if (section) {
                        const rect = section.getBoundingClientRect();
                        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
                        if (visibleHeight > maxVisibleArea && visibleHeight > 0) {
                            maxVisibleArea = visibleHeight;
                            maxVisibleSection = index + 1;
                        }
                    }
                });

                setActiveSection(maxVisibleSection);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    const handleMenuClick = (sectionId: number) => {
        setActiveSection(sectionId);
        sectionRefs.current[sectionId - 1]?.scrollIntoView({ behavior: 'smooth' });
    };

    const sections = [
        {
            id: 1,
            title: "Product",
            description: "Dedicated software engineering teams that include technical rising stars customer expectations and accelerate your growth.",
            bgImage: "/images/home/vr1.png",
            cards: [
                {
                    title: "Dharma-ERP",
                    description: "Enhancing Performance Through Digital Transformation"
                },
                {
                    title: "CRM",
                    description: "Building Seamless B2B2X and B2C Digital Trade"
                },
                {
                    title: "Finance",
                    description: "Accelerating Growth Through Development"
                },
                {
                    title: "Sub Contracting",
                    description: "Accelerating Growth Through Development"
                }
            ]
        },
        {
            id: 2,
            title: "Services",
            description: "Streamline your software engineering to drive greater efficiency and create resilience across your products and platforms.",
            bgImage: "/images/home/vr4.png",
            cards: [
                {
                    title: "IT Service",
                    description: "Building Core Competencies"
                },
                {
                    title: "Data Science",
                    description: "Modernizing Infrastructure"
                },
                {
                    title: "Digital Marketing",
                    description: "Data-Driven Decision Making"
                },
                {
                    title: "Advanced Analytics",
                    description: "Data-Driven Decision Making"
                }
            ]
        },
       
    ];

    return (
        <div className="relative" id="vertical-menu-section">
            {/* Vertical Navigation Menu */}
            <div className="sticky top-[20%] left-0 h-0 z-20 pointer-events-auto">
                <div className={`absolute left-8 transition-opacity duration-300 ${
                    isInView ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                    <div className="flex flex-col space-y-6">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => handleMenuClick(section.id)}
                                className={`text-left transition-all duration-300 group ${
                                    activeSection === section.id ? 'text-black' : 'text-gray-400'
                                }`}
                            >
                                <div className="flex items-center">
                                    <div className={`w-1 h-8 mr-4 transition-all duration-300 ${
                                        activeSection === section.id ? 'bg-[#463cc9]' : 'bg-transparent'
                                    }`} />
                                    <span className="text-lg font-medium">
                                        {section.title.replace('.', '')}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full">
                {sections.map((section) => (
                   
                    <div 
                        key={section.id}
                        ref={(el: HTMLDivElement | null) => {
                            sectionRefs.current[section.id - 1] = el;
                        }}
                        className="relative min-h-screen w-full flex items-center bg-[#e3e3e3]"
                    >
                        {/* Remove this entire background image div
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <div className="relative w-full h-full">
                                <Image
                                    src={section.bgImage}
                                    alt={section.title}
                                    fill
                                    className="object-cover animate-[fadeInOut_8s_ease-in-out_infinite] animate-[kenburns_20s_ease-in-out_infinite]"
                                    priority
                                />
                                <div className="absolute inset-0 bg-black/40"></div>
                            </div>
                        </div>
                        */}
                    
                        {/* Content section remains the same */}
                        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
                            <div className="flex flex-col items-center justify-center text-center mb-16">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#825ea8] mb-4">
                                    {section.title}
                                </h2>
                                <p className="text-lg md:text-xl text-[#825ea8]/80 max-w-2xl">
                                    {section.description}
                                </p>
                            </div>

                            {/* Cards */}
                            <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                                    {section.cards.map((card, index) => (
                                        <div 
                                            key={index}
                                            className="bg-white p-6 sm:p-8 border border-white/20 
                                            hover:bg-gray-50 shadow-md hover:shadow-2xl 
                                            transition-all duration-300 relative 
                                            rounded-[10]
                                            after:absolute after:bottom-0 after:left-0 
                                            after:right-0 after:h-[4px] after:bg-[#825ea8]
                                            after:rounded-b-xl"
                                        >
                                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                                {card.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                {card.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerticalMenu;