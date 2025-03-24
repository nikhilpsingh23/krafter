"use client"

import React, { useState } from "react";

const FilterSection = () => {
    const [activeTab, setActiveTab] = useState("seo-on");

    const tabs = [
        { id: "seo-on", label: "SEO On-Page" },
        { id: "seo-off", label: "SEO Off-Page" },
        { id: "social", label: "Social Media Marketing" },
        { id: "performance", label: "Performance Marketing" },
        { id: "email", label: "Email Marketing" },
    ];

   {/* const performanceContent = [
        "Pay-per-click (PPC) advertising campaigns.",
        "Display and retargeting ads.",
        "Affiliate marketing programs.",
        "Conversion rate optimization (CRO) strategies.",
        "Landing page optimization.",
        "Campaign tracking and analytics.",
        "Budget allocation and ROI analysis.",
        "Continuous optimization for better results.",
    ]; */}

    const tabContent = {
        "seo-on": {
            title: "SEO On-Page Optimization",
            description: "Optimize your website's internal elements to improve search engine rankings and user experience.",
            items: [
                "Keyword research and optimization",
                "Meta tags and descriptions",
                "Content optimization",
                "URL structure optimization",
                "Image optimization",
                "Internal linking strategy",
                "Site speed optimization",
                "Mobile responsiveness",
            ],
            image: "/images/seo-onpage.jpg"
        },
        "seo-off": {
            title: "SEO Off-Page Strategy",
            description: "Build your website's authority through external optimization techniques.",
            items: [
                "Link building strategies",
                "Social media signals",
                "Brand mentions and citations",
                "Guest posting",
                "Influencer outreach",
                "Local SEO optimization",
                "Competitor analysis",
                "Online reputation management",
            ],
            image: "/images/digital-marketing.png"
        },
        "social": {
            title: "Social Media Marketing",
            description: "Engage with your audience and build brand presence across social platforms.",
            items: [
                "Social media strategy development",
                "Content creation and curation",
                "Community management",
                "Social media advertising",
                "Influencer partnerships",
                "Analytics and reporting",
                "Brand awareness campaigns",
                "Social listening and monitoring",
            ],
            image: "/images/digital-marketing.png"
        },
        "performance": {
            title: "Performance Marketing",
            description: "Drive targeted traffic and conversions through data-driven performance marketing strategies.",
            items: [
                "Email campaign strategy",
                "List segmentation",
                "Automated email workflows",
                "A/B testing",
                "Newsletter creation",
                "Performance tracking",
                "Email template design",
                "Deliverability optimization",
            ],
            image: "/images/digital-marketing.png"
        },
        "email": {
            title: "Email Marketing",
            description: "Create targeted email campaigns that convert subscribers into customers.",
            items: [
                "Email campaign strategy",
                "List segmentation",
                "Automated email workflows",
                "A/B testing",
                "Newsletter creation",
                "Performance tracking",
                "Email template design",
                "Deliverability optimization",
            ],
            image: "/images/digital-marketing.png"
        }
    };

    return (
        <div className="py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-2 text-[#1a237e]">
                    Digital Strategic Services We Offer
                </h2>
                <p className="text-center text-sm md:text-base text-gray-600 mb-12">
                    WE KNOW THE PULSE OF DIGITAL MARKETING BECAUSE WE CREATE DIGITAL PRODUCT.
                </p>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300
                                ${activeTab === tab.id 
                                    ? "bg-[#1a237e] text-white shadow-lg" 
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Section */}
                <div className="max-w-[1000px] mx-auto">
                    <div className="grid grid-cols-12 gap-8 items-start">
                        <div className="col-span-12 lg:col-span-8 space-y-4">
                            <p className="text-gray-700 mb-6">
                                {tabContent[activeTab as keyof typeof tabContent].description}
                            </p>
                            <div className="grid grid-cols-2 gap-x-8">
                                {[0, 1].map((columnIndex) => (
                                    <ul key={columnIndex} className="space-y-3">
                                        {tabContent[activeTab as keyof typeof tabContent].items
                                            .slice(columnIndex * 4, (columnIndex + 1) * 4)
                                            .map((item, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <svg className="w-5 h-5 text-[#1a237e] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4 relative h-[250px] rounded-xl overflow-hidden shadow-2xl">
                            <img 
                                src={tabContent[activeTab as keyof typeof tabContent].image}
                                alt={tabContent[activeTab as keyof typeof tabContent].title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default FilterSection;