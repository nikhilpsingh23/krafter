"use client"
import React from 'react';

const OurTeam = () => {
    const teamMembers = [
        {
            name: "John Doe",
            role: "Developer",
            image: "/images/about/team2.png"
        },
        {
            name: "Sarah Smith",
            role: "Designer",
            image: "/images/about/team4.png"
        },
        {
            name: "Mike Johnson",
            role: "Project Manager",
            image: "/images/about/team1.png"
        },
        {
            name: "Emily Brown",
            role: "UX Designer",
            image: "/images/about/team5.png"
        },
        {
            name: "Alex Chen",
            role: "Developer",
            image: "/images/about/team1.png"
        },
        {
            name: "Lisa Wang",
            role: "Marketing",
            image: "/images/about/team5.png"
        },
        {
            name: "Chris Evans",
            role: "Developer",
            image: "/images/about/team1.png"
        },
        {
            name: "Tom Wilson",
            role: "Designer",
            image: "/images/about/team2.png"
        }
    ];

    return (
        <section className="bg-white py-20">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Team</h2>
                    <p className="text-gray-600">Explore Our Success Stories and Innovative Projects</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
                    {teamMembers.map((member, index) => (
                        <div 
                            key={index} 
                            className="group relative flex flex-col items-center transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="rounded-full overflow-hidden w-[220px] h-[220px] border-4 border-gray-100 shadow-lg bg-gray-200">
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="font-semibold text-lg">{member.name}</h3>
                                <p className="text-gray-600 text-sm">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;