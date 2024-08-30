// components/Footer.js
import { UserGroupIcon, ChartBarIcon, DocumentIcon, CurrencyDollarIcon, PaperAirplaneIcon } from '@heroicons/react/solid';

const Footer = () => {
  return (
    <div className="bg-white py-4 border-2">
      <div className="flex justify-center space-x-4">
        <div className="flex flex-col items-center">
          <UserGroupIcon className="h-8 w-8 text-black" />
          <span className="mt-2 text-xs text-gray-700">Attendance</span>
        </div>
        <div className="flex flex-col items-center">
          <ChartBarIcon className="h-8 w-8 text-black" />
          <span className="mt-2 text-xs text-gray-700">Performance</span>
        </div>
        <div className="flex flex-col items-center">
          <DocumentIcon className="h-8 w-8 text-black " />
          <span className="mt-2 text-xs text-gray-700">Leave</span>
        </div>
        <div className="flex flex-col items-center">
          <CurrencyDollarIcon className="h-8 w-8 text-black" />
          <span className="mt-2 text-xs text-gray-700">Payroll</span>
        </div>
        <div className="flex flex-col items-center">
          <PaperAirplaneIcon className="h-8 w-8 text-black" />
          <span className="mt-2 text-xs text-gray-700">Refer Candidate</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
