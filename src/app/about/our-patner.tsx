const OurPartners = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto py-12">
                <div className="grid mt-20 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* Column 1 */}
                    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="aspect-[4/3] relative">
                            <img 
                                src="/images/partner1.jpg" 
                                alt="AICWA Partnership" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3">Appointed as Advisor to the All Indian Cine Workers Association (AICWA)</h3>
                         </div>
                    </div>

                    {/* Column 2 */}
                    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="aspect-[4/3] relative">
                            <img 
                                src="/images/partner2.jpg" 
                                alt="Media Event Sponsorship" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3">Participated as a Sponsor and Partner for Media Event</h3>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="aspect-[4/3] relative">
                            <img 
                                src="/images/partner3.jpg" 
                                alt="IT Partnership" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3">Participated as the IT Partner for Dadasaheb Phalke Icon Award</h3>
                             </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPartners;