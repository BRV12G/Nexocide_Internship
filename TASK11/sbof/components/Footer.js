
  
import { FaHome, FaCamera, FaStore, FaRegLightbulb, FaFile } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-around items-center shadow-lg">
      <FaHome className="text-green-600 text-2xl sm:text-3xl md:text-4xl" />
      <FaStore className="text-gray-400 text-2xl sm:text-3xl md:text-4xl" />
      <div id="t" className="relative flex justify-center">
        <div className="absolute -top-16 sm:-top-20 md:-top-24 bg-green-800 rounded-full p-2 sm:p-3 md:p-4 border border-4 sm:border-6 md:border-8 border-white shadow-lg">
          <FaCamera className="text-white text-3xl sm:text-4xl md:text-5xl" />
        </div>
      </div>
      <FaRegLightbulb className="text-gray-400 text-2xl sm:text-3xl md:text-4xl" />
      <FaFile className="text-gray-400 text-2xl sm:text-3xl md:text-4xl" />
    </div>
  );
}