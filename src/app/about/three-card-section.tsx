"use client"
import { FaEye, FaBullseye, FaHandHoldingHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThreeCardSection = () => {
    const cards = [
        {
            icon: <FaEye className="text-4xl text-blue-600" />,
            title: "What We Believe",
            description: "We believe those who challenge themselves to be exceptional should champion that spirit in others. And that doing the right thing is rarely easy, but always worth it."
        },
        {
            icon: <FaBullseye className="text-4xl text-blue-600" />,
            title: "What We Do",
            description: "We believe those who challenge themselves to be exceptional should champion that spirit in others. And that doing the right thing is rarely easy, but always worth it."
        },
        {
            icon: <FaHandHoldingHeart className="text-4xl text-blue-600" />,
            title: "Join Codekrafters Kingdom",
            description: "We believe those who challenge themselves to be exceptional should champion that spirit in others. And that doing the right thing is rarely easy, but always worth it."
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-[1200px] mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800">Different where it matters.</h2>
                    <p className="text-xl text-gray-600 mt-2">Finatical where it counts.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                    {cards.map((card, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.03, translateY: -5 }}
                            className="flex flex-col items-center justify-between text-center p-8 rounded-lg bg-[#e6e8e9] h-full"
                        >
                            <div className="flex flex-col items-center">
                                <motion.div 
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md mb-6"
                                >
                                    {card.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold mb-4 text-gray-800">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ThreeCardSection;