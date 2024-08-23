// components/HoverPopup.js
import { useState } from 'react';

const HoverPopup = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Hover over me
      </button>

      {isHovered && (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="absolute   w-70 p-12 bg-white border border-gray-200 rounded shadow-lg"
        >
          <p className='border border-green-500 border-solid p-4'>This is a pop-up triggered by hover!</p>
        </div>
      )}
    </div>
  );
};

export default HoverPopup;
