'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ITServicesDropdown, DataScienceDropdown } from './Dropdowns';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Now on the left for all views */}
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo1.png" alt="Logo" width={150} height={50} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-[18px]">
            <div className="relative group">
              <button 
                className="hover:text-blue-600 py-4 flex items-center gap-1"
              >
                IT Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="hidden group-hover:block">
                <ITServicesDropdown isVisible={true} />
              </div>
            </div>

            <div className="relative group">
              <button 
                className="hover:text-blue-600 py-4 flex items-center gap-1"
              >
                Data Science
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="hidden group-hover:block">
                <DataScienceDropdown isVisible={true} />
              </div>
            </div>

            <Link href="/digital-marketing" className="hover:text-blue-600">
              Digital Marketing
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              About Us
            </Link>
            <Link href="/careers" className="hover:text-blue-600">
              Careers
            </Link>
            <Link href="/projects" className="hover:text-blue-600">
              Projects
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button - Now on the right */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-3 text-[18px]">
            <div className="space-y-2">
              <button 
                onClick={() => toggleDropdown('it')}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 flex items-center justify-between"
              >
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'it' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'it' && <ITServicesDropdown isMobile />}
            </div>

            <div className="space-y-2">
              <button 
                onClick={() => toggleDropdown('data')}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 flex items-center justify-between"
              >
                <span>Data Science</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'data' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'data' && <DataScienceDropdown isMobile />}
            </div>

            <Link href="/digital-marketing" 
              className="block px-3 py-2 hover:bg-gray-100"
            >
              Digital Marketing
            </Link>
            <Link href="/about" 
              className="block px-3 py-2 hover:bg-gray-100"
            >
              About Us
            </Link>
            <Link href="/careers" 
              className="block px-3 py-2 hover:bg-gray-100"
            >
              Careers
            </Link>
            <Link href="/projects" 
              className="block px-3 py-2 hover:bg-gray-100"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;