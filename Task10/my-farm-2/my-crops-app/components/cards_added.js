// export default function Card({ imageSrc, altText, title }) {
//     return (
//       <div className=" flex flex-col items-center p-2 sm:p-4 min-w-[120px] sm:min-w-[150px] max-w-[120px] sm:max-w-[150px]">
//         <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-lg shadow-2xl flex items-center justify-center">
//           <img src={imageSrc} alt={altText} className="max-w-full max-h-full" />
//         </div>
//         <p className="text-xs sm:text-sm text-center mt-2">{title}</p>
//       </div>
//     );
//   }

import { useState } from 'react';

export default function cards_added({ imageSrc, altText, title }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative flex flex-col items-center p-2 sm:p-4 min-w-[80px] sm:min-w-[150px] max-w-[80px] sm:max-w-[150px]">
      <button
        onClick={handleDelete}
        className="absolute m-1  right-4 top-4 bg-gray-400 text-white rounded-full px-1 text-xs sm:text-sm"
        aria-label="Delete"
      >
        ✕
      </button>
      <div className="w-16 h-16 sm:w-32 sm:h-32 bg-white rounded-lg shadow-2xl flex items-center justify-center">
        <img src={imageSrc} alt={altText} className="max-w-full max-h-full" />
      </div>
      <p className="text-[10px] sm:text-sm text-center mt-2">{title}</p>
    </div>
  );
}
