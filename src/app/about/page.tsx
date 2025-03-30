import React from "react";
import { ArrowRight } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <button className="w-full sm:w-auto px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-[30px] transition-all duration-300 relative overflow-hidden group">
        <div className="flex items-center justify-center">
          <ArrowRight className="absolute transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          <span className="transform group-hover:translate-x-full group-hover:opacity-0 transition-all duration-300">Static</span>
        </div>
      </button>
    </div>
  );
};

export default AboutPage;