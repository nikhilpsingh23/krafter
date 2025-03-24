const SpecialSection = () => {
    return (
        <section className="py-25 flex justify-center items-center">
            <div className="w-[1200px] h-[550px] bg-gray-300 relative flex justify-center items-center">
                <img 
                    src="/images/hands.png"
                    alt="Statue" 
                    className="w-[84%] h-[84%] object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-7xl font-bold tracking-wider bg-gradient-to-r from-red-500 via-sky-500 to-blue-900 text-transparent bg-clip-text">
                        Specialist
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default SpecialSection;