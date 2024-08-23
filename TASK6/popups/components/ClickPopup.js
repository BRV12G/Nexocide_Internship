import { useState } from 'react';

const ClickPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={togglePopup}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Click me
      </button>

      {isOpen && (
        <div className="absolute  mt-2 w-80 p-20 bg-white border border-gray-200 rounded shadow-lg">
          <div className='border border-solid p-2 border-red-500'><p>This is a pop-up triggered by a click!</p></div>
          <div><button
            onClick={togglePopup}
            className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white rounded"
          >
            Close
          </button></div>
          
        </div>
      )}
    </div>
  );
};

export default ClickPopup;
