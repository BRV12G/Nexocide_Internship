// components/CropSelection.js
import { FaSearch, FaMicrophone, FaPlus } from 'react-icons/fa';

export default function CropSelection() {
    return (
      <div className="p-4 bg-white rounded-md shadow-sm max-w-md mx-auto sm:max-w-lg">
        <h2 className="text-lg sm:text-xl font-bold ">Please select the crops you cultivate</h2>
        <p className="text-gray-500 mb-4 text-sm sm:text-base">This will help us serve you better</p>
        <div className='relative '>
          <input
          type="text"
          placeholder="Search Crop"
          className="w-full p-3 pl-10 pr-12 border rounded-lg text-sm sm:text-base"
          
        />
        <FaSearch className="absolute top-4 left-3 text-gray-300" />
        <FaMicrophone className="absolute top-4 right-3 text-green-700" />
        </div>
      </div>
    );
  }
  


