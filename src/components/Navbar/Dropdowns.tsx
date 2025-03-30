import Link from 'next/link';
import { 
  Smartphone, Apple, Layers, Globe, 
  Building2, ShoppingCart, Wrench, Layout, 
  Database, Users, File, BarChart3, Wallet ,LineChart, 
  MessageSquare, Cloud, PieChart, Search,
  Briefcase, ChartBar, LayoutDashboard, Calculator,Brain
} from 'lucide-react';



interface DropdownProps {
  isVisible?: boolean;
  isMobile?: boolean;
}

export const ITServicesDropdown = ({ isVisible, isMobile }: DropdownProps) => {
  const dropdownClasses = isMobile
    ? 'px-4 py-4 space-y-6 max-h-[70vh] overflow-y-auto'
    : 'absolute top-full left-1/2 w-[800px] bg-white shadow-lg rounded-lg p-6 grid grid-cols-3 gap-8 z-50 transform -translate-x-1/2';

  if (!isVisible && !isMobile) return null;

  return (
    <div className={dropdownClasses}>
      {/* Mobile Application Column */}
      <div>
        <h3 className="font-semibold dark:text-black text-[18px] mb-4">Mobile Application</h3>
        <div className="flex flex-col gap-3">
          <Link href="/services/android" className=" transition-colors duration-200 flex items-start gap-2">
            <Smartphone className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Android Apps</span>
              <p className="text-[14px] text-gray-500">Native Android Development</p>
            </div>
          </Link>
          <Link href="/services/ios" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <Apple className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">IOS Apps</span>
              <p className="text-[14px] text-gray-500">Native iOS Development</p>
            </div>
          </Link>
          <Link href="/services/hybrid" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <Layers className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Hybrid Apps</span>
              <p className="text-[14px] text-gray-500">Cross-platform Solutions</p>
            </div>
          </Link>
          <Link href="/services/progressive" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <Globe className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Progressive Apps</span>
              <p className="text-[14px] text-gray-500">Modern Web Applications</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Website Column */}
      <div>
        <h3 className="font-semibold text-gray-800 text-[18px] mb-4">Website</h3>
        <div className="flex flex-col gap-3">
          <Link href="/services/corporate" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <Building2 className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Corporate Website</span>
              <p className="text-[14px] text-gray-500">Professional Business Sites</p>
            </div>
          </Link>
          <Link href="/services/ecommerce"  className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <ShoppingCart className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">E-commerce Website</span>
              <p className="text-[14px] text-gray-500">Online Store Solutions</p>
            </div>
          </Link>
          <Link href="/services/service" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <Wrench className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] text-gray-800 hover:text-[#823dd9] font-medium">Service Website</span>
              <p className="text-[14px] text-gray-500">Service-based Platforms</p>
            </div>
          </Link>
          <Link href="/services/portal" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <Layout className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Portal Development</span>
              <p className="text-[14px] text-gray-500">Custom Web Portals</p>
            </div>
          </Link>
        </div>
      </div>

      {/* ERP Column */}
      <div>
        <h3 className="font-semibold text-gray-800 text-[18px] mb-4">ERP</h3>
        <div className="flex flex-col gap-3">
          <Link href="/services/erp/dharma" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <Database className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Dharma ERP</span>
              <p className="text-[14px] text-gray-500">Enterprise Resource Planning</p>
            </div>
          </Link>
          <Link href="/services/erp/crm" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <Users className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">CRM</span>
              <p className="text-[14px] text-gray-500">Customer Relationship Management</p>
            </div>
          </Link>
          <Link href="/services/erp/subcontracting" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <File className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Sub Contracting</span>
              <p className="text-[14px] text-gray-500">Contract Management Solutions</p>
            </div>
          </Link>
          <Link href="/services/erp/sales" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <BarChart3 className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Sales</span>
              <p className="text-[14px] text-gray-500">Sales Management System</p>
            </div>
          </Link>
          <Link href="/services/erp/finance" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <Wallet className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Finance</span>
              <p className="text-[14px] text-gray-500">Financial Management Tools</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const DataScienceDropdown = ({ isVisible, isMobile }: DropdownProps) => {
  const dropdownClasses = isMobile
    ? 'px-4 py-4 space-y-6 max-h-[70vh] overflow-y-auto'
    : 'absolute top-full left-1/2 w-[800px] bg-white shadow-lg rounded-lg p-6 grid grid-cols-3 gap-8 z-50 transform -translate-x-1/2';

  if (!isVisible && !isMobile) return null;

  return (
    <div className={dropdownClasses}>
      {/* Data Science Column */}
      <div>
        <h3 className="font-semibold text-gray-800 text-[18px] mb-4">Data Science</h3>
        <div className="flex flex-col gap-3">
          <Link href="/data/mining" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <Database className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Data Mining</span>
              <p className="text-[14px] text-gray-500">Extract valuable insights from data</p>
            </div>
          </Link>
          <Link href="/data/machine-learning" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <Brain className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Machine Learning</span>
              <p className="text-[14px] text-gray-500">Intelligent automated solutions</p>
            </div>
          </Link>
          <Link href="/data/big-data" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <BarChart3 className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Big Data</span>
              <p className="text-[14px] text-gray-500">Large-scale data processing</p>
            </div>
          </Link>
          <Link href="/data/analysis" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <LineChart className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Data Analysis</span>
              <p className="text-[14px] text-gray-500">Comprehensive data examination</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Advanced Analytics Column */}
      <div>
        <h3 className="font-semibold text-gray-800 text-[18px] mb-4">Advanced Analytics</h3>
        <div className="flex flex-col gap-3">
          <Link href="/data/nlp" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <MessageSquare className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Natural Language Processing</span>
              <p className="text-[14px] text-gray-500">Text and language analysis</p>
            </div>
          </Link>
          <Link href="/data/cloud" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <Cloud className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Cloud Computing</span>
              <p className="text-[14px] text-gray-500">Scalable cloud solutions</p>
            </div>
          </Link>
          <Link href="/data/visualization" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <PieChart className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Data Visualization</span>
              <p className="text-[14px] text-gray-500">Interactive data insights</p>
            </div>
          </Link>
          <Link href="/data/exploration" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <Search className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Data Exploration</span>
              <p className="text-[14px] text-gray-500">Discover patterns in data</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Business Solutions Column */}
      <div>
        <h3 className="font-semibold text-gray-800 text-[18px] mb-4">Business Solutions</h3>
        <div className="flex flex-col gap-3">
          <Link href="/data/business-analysis" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <Briefcase className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Business Analysis</span>
              <p className="text-[14px] text-gray-500">Strategic business insights</p>
            </div>
          </Link>
          <Link href="/data/business-intelligence" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <ChartBar className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Business Intelligence</span>
              <p className="text-[14px] text-gray-500">Data-driven decision making</p>
            </div>
          </Link>
          <Link href="/data/power-bi" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <LayoutDashboard className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Power BI Dashboard</span>
              <p className="text-[14px] text-gray-500">Interactive BI visualizations</p>
            </div>
          </Link>
          <Link href="/data/statistics" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
            <Calculator className="w-5 h-5 text-[#ea5e66] mt-1" />
            <div>
              <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Statistics</span>
              <p className="text-[14px] text-gray-500">Statistical analysis and modeling</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};