import Link from 'next/link';
import { Smartphone, Globe, Building2 } from 'lucide-react';

interface DropdownProps {
  isVisible?: boolean;
  isMobile?: boolean;
}

export const ITServicesDropdown = ({ isVisible, isMobile }: DropdownProps) => {
  const dropdownClasses = isMobile
    ? 'px-4 py-4 space-y-6'
    : 'absolute top-full left-0 w-[600px] bg-white shadow-lg rounded-lg p-6 grid grid-cols-3 gap-8 z-50';

  if (!isVisible && !isMobile) return null;

  return (
    <div className={dropdownClasses}>
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-3">
          <Smartphone className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-800 text-[18px]">Mobile Application</h3>
        </div>
        <ul className="space-y-3 pl-7">
          <li>
            <Link href="/services/android" className="hover:text-blue-600 transition-colors duration-200">
              <span className="text-[16px]">Android Apps</span>
              <p className="text-[14px] text-gray-500">Native Android Development</p>
            </Link>
          </li>
          <li>
            <Link href="/services/ios" className="hover:text-blue-600 transition-colors duration-200">
              IOS Apps
              <p className="text-sm text-gray-500">Native iOS Development</p>
            </Link>
          </li>
          <li>
            <Link href="/services/hybrid" className="hover:text-blue-600 transition-colors duration-200">
              Hybrid Apps
              <p className="text-sm text-gray-500">Cross-platform Solutions</p>
            </Link>
          </li>
          <li>
            <Link href="/services/progressive" className="hover:text-blue-600 transition-colors duration-200">
              Progressive Apps
              <p className="text-sm text-gray-500">Modern Web Applications</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-3">
          <Globe className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-800">Website</h3>
        </div>
        <ul className="space-y-3 pl-7">
          <li>
            <Link href="/services/corporate" className="hover:text-blue-600 transition-colors duration-200">
              Corporate Website
              <p className="text-sm text-gray-500">Professional Business Sites</p>
            </Link>
          </li>
          <li>
            <Link href="/services/ecommerce" className="hover:text-blue-600 transition-colors duration-200">
              E-commerce Website
              <p className="text-sm text-gray-500">Online Store Solutions</p>
            </Link>
          </li>
          <li>
            <Link href="/services/service" className="hover:text-blue-600 transition-colors duration-200">
              Service Website
              <p className="text-sm text-gray-500">Service-based Platforms</p>
            </Link>
          </li>
          <li>
            <Link href="/services/portal" className="hover:text-blue-600 transition-colors duration-200">
              Portal Development
              <p className="text-sm text-gray-500">Custom Web Portals</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-3">
          <Building2 className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-800">ERP</h3>
        </div>
        <ul className="space-y-3 pl-7">
          <li>
            <Link href="/services/erp/dharma" className="hover:text-blue-600 transition-colors duration-200">
              Dharma ERP
              <p className="text-sm text-gray-500">Enterprise Resource Planning</p>
            </Link>
          </li>
          <li>
            <Link href="/services/erp/crm" className="hover:text-blue-600 transition-colors duration-200">
              CRM
              <p className="text-sm text-gray-500">Customer Relationship Management</p>
            </Link>
          </li>
          <li>
            <Link href="/services/erp/subcontracting" className="hover:text-blue-600 transition-colors duration-200">
              Sub Contracting
              <p className="text-sm text-gray-500">Contract Management Solutions</p>
            </Link>
          </li>
          <li>
            <Link href="/services/erp/sales" className="hover:text-blue-600 transition-colors duration-200">
              Sales
              <p className="text-sm text-gray-500">Sales Management System</p>
            </Link>
          </li>
          <li>
            <Link href="/services/erp/finance" className="hover:text-blue-600 transition-colors duration-200">
              Finance
              <p className="text-sm text-gray-500">Financial Management Tools</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

import {  
   Brain, Database, BarChart, 
  MessageSquare, Cloud, LineChart, Search, PieChart, Bot, ChartBar, Lightbulb, 
  AreaChart, Calculator } from 'lucide-react';

export const DataScienceDropdown = ({ isVisible, isMobile }: DropdownProps) => {
  const dropdownClasses = isMobile
    ? 'px-4 py-4 space-y-6'
    : 'absolute top-full left-0 w-[600px] bg-white shadow-lg rounded-lg p-6 grid grid-cols-3 gap-8 z-50';

  if (!isVisible && !isMobile) return null;

  return (
    <div className={dropdownClasses}>
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-3">
          <Brain className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-800 text-[18px]">Data Science</h3>
        </div>
        <ul className="space-y-3 pl-7">
          <li>
            <Link href="/data/mining" className="hover:text-blue-600 transition-colors duration-200 flex items-start gap-2">
              <Database className="w-4 h-4 mt-1 text-blue-600" />
              <div>
                <span className="text-[16px]">Data Mining</span>
                <p className="text-[14px] text-gray-500">Extract valuable insights from data</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/data/machine-learning" className="hover:text-blue-600 transition-colors duration-200 flex items-start gap-2">
              <Brain className="w-4 h-4 mt-1 text-blue-600" />
              <div>
                <span className="text-[16px]">Machine Learning</span>
                <p className="text-[14px] text-gray-500">Intelligent automated solutions</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/data/big-data" className="hover:text-blue-600 transition-colors duration-200 flex items-start gap-2">
              <BarChart className="w-4 h-4 mt-1 text-blue-600" />
              <div>
                <span className="text-[16px]">Big Data</span>
                <p className="text-[14px] text-gray-500">Large-scale data processing</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/data/analysis" className="hover:text-blue-600 transition-colors duration-200 flex items-start gap-2">
              <LineChart className="w-4 h-4 mt-1 text-blue-600" />
              <div>
                <span className="text-[16px]">Data Analysis</span>
                <p className="text-[14px] text-gray-500">Comprehensive data examination</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-3">
          <BarChart className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-800 text-[18px]">Advanced Analytics</h3>
        </div>
        <ul className="space-y-3 pl-7">
          <li>
            <Link href="/data/nlp" className="hover:text-blue-600 transition-colors duration-200 flex items-start gap-2">
              <MessageSquare className="w-4 h-4 mt-1 text-blue-600" />
              <div>
                <span className="text-[16px]">Natural Language Processing</span>
                <p className="text-[14px] text-gray-500">Text and language analysis</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/data/cloud" className="hover:text-blue-600 transition-colors duration-200 flex items-start gap-2">
              <Cloud className="w-4 h-4 mt-1 text-blue-600" />
              <div>
                <span className="text-[16px]">Cloud Computing</span>
                <p className="text-[14px] text-gray-500">Scalable cloud solutions</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/data/visualization" className="hover:text-blue-600 transition-colors duration-200 flex items-start gap-2">
              <PieChart className="w-4 h-4 mt-1 text-blue-600" />
              <div>
                <span className="text-[16px]">Data Visualization</span>
                <p className="text-[14px] text-gray-500">Interactive data insights</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/data/exploration" className="hover:text-blue-600 transition-colors duration-200 flex items-start gap-2">
              <Search className="w-4 h-4 mt-1 text-blue-600" />
              <div>
                <span className="text-[16px]">Data Exploration</span>
                <p className="text-[14px] text-gray-500">Discover patterns in data</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-3">
          <Bot className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-800 text-[18px]">Business Solutions</h3>
        </div>
        <ul className="space-y-3 pl-7">
          <li>
            <Link href="/data/business-analysis" className="hover:text-blue-600 transition-colors duration-200 flex items-start gap-2">
              <ChartBar className="w-4 h-4 mt-1 text-blue-600" />
              <div>
                <span className="text-[16px]">Business Analysis</span>
                <p className="text-[14px] text-gray-500">Strategic business insights</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/data/business-intelligence" className="hover:text-blue-600 transition-colors duration-200 flex items-start gap-2">
              <Lightbulb className="w-4 h-4 mt-1 text-blue-600" />
              <div>
                <span className="text-[16px]">Business Intelligence</span>
                <p className="text-[14px] text-gray-500">Data-driven decision making</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/data/power-bi" className="hover:text-blue-600 transition-colors duration-200 flex items-start gap-2">
              <AreaChart className="w-4 h-4 mt-1 text-blue-600" />
              <div>
                <span className="text-[16px]">Power BI Dashboard</span>
                <p className="text-[14px] text-gray-500">Interactive BI visualizations</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/data/statistics" className="hover:text-blue-600 transition-colors duration-200 flex items-start gap-2">
              <Calculator className="w-4 h-4 mt-1 text-blue-600" />
              <div>
                <span className="text-[16px]">Statistics</span>
                <p className="text-[14px] text-gray-500">Statistical analysis and modeling</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};