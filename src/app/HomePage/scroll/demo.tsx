"use client";
import React from "react";
import { StickyScroll } from "./sticky";
import Image from "next/image";

const content = [
  
  // Products Section (First 5 items)
  {
    title: "Enterprise Solutions",
    description: "Complete business management platform for modern enterprises",
    content: (
      <div className="h-full w-full">
        <Image
          src="/images/home/bg1.png"
          width={400}
          height={400}
          className="h-full w-full object-cover rounded-lg"
          alt="Enterprise Solutions"
        />
      </div>
    ),
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions for growing businesses",
    content: (
      <div className="h-full w-full">
        <Image
          src="/images/home/bg2.png"
          width={400}
          height={400}
          className="h-full w-full object-cover rounded-lg"
          alt="Cloud Infrastructure"
        />
      </div>
    ),
  },
  {
    title: "AI Integration",
    description: "Advanced AI solutions for process automation",
    content: (
      <div className="h-full w-full">
        <Image
          src="/images/products/ai.jpg"
          width={400}
          height={400}
          className="h-full w-full object-cover rounded-lg"
          alt="AI Integration"
        />
      </div>
    ),
  },
  {
    title: "Security Suite",
    description: "Comprehensive security solutions for your business",
    content: (
      <div className="h-full w-full">
        <Image
          src="/images/products/security.jpg"
          width={400}
          height={400}
          className="h-full w-full object-cover rounded-lg"
          alt="Security Suite"
        />
      </div>
    ),
  },
  {
    title: "Analytics Platform",
    description: "Data-driven insights for informed decisions",
    content: (
      <div className="h-full w-full">
        <Image
          src="/images/products/analytics.jpg"
          width={400}
          height={400}
          className="h-full w-full object-cover rounded-lg"
          alt="Analytics Platform"
        />
      </div>
    ),
  },

  // Services Section (Next 5 items)
  {
    title: "IT Consulting",
    description: "Expert guidance for digital transformation",
    content: (
      <div className="h-full w-full">
        <Image
          src="/images/services/consulting.jpg"
          width={400}
          height={400}
          className="h-full w-full object-cover rounded-lg"
          alt="IT Consulting"
        />
      </div>
    ),
  },
  {
    title: "System Integration",
    description: "Seamless integration of business systems",
    content: (
      <div className="h-full w-full">
        <Image
          src="/images/services/integration.jpg"
          width={400}
          height={400}
          className="h-full w-full object-cover rounded-lg"
          alt="System Integration"
        />
      </div>
    ),
  },
  {
    title: "Digital Marketing",
    description: "Strategic online presence management",
    content: (
      <div className="h-full w-full">
        <Image
          src="/images/services/marketing.jpg"
          width={400}
          height={400}
          className="h-full w-full object-cover rounded-lg"
          alt="Digital Marketing"
        />
      </div>
    ),
  },
  {
    title: "Training Programs",
    description: "Comprehensive technical training solutions",
    content: (
      <div className="h-full w-full">
        <Image
          src="/images/services/training.jpg"
          width={400}
          height={400}
          className="h-full w-full object-cover rounded-lg"
          alt="Training Programs"
        />
      </div>
    ),
  },
  {
    title: "Support Services",
    description: "24/7 technical support and maintenance",
    content: (
      <div className="h-full w-full">
        <Image
          src="/images/services/support.jpg"
          width={400}
          height={400}
          className="h-full w-full object-cover rounded-lg"
          alt="Support Services"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}

