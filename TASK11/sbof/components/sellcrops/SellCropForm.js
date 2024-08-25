const SellCropForm = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-lg mb-4">Crop Details:</p>
        <div className="flex flex-row gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-xs mb-2">Type of Crop</label>
          <input
            type="text"
            placeholder="Type of crop"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-black "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs  mb-2">Variety</label>
          <input
            type="text"
            placeholder="Variety"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-black"
          />
        </div>
        </div>
        <div className="flex flex-row gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-xs mb-2">Quantity Available</label>
          <input
            type="text"
            placeholder="1000 kg"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-black"
          />
        </div>
        <div className="mb-4">
        <label className="block  text-xs mb-2">Date of Sowing</label>
        <input
          type="date"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-black"
        />
        </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-xs mb-2">Expected Harvesting Quantity</label>
          <input
            type="text"
            placeholder="1000 kg"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs mb-2">Expected Date of Harvesting</label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-black"
          />
        </div>
        <p className="mb-2 text-lg">PAYMENT DETAILS</p>
        <div className="flex flex-row gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-xs mb-2">A/C No.</label>
          <input
            type="text"
            placeholder="1234567890"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs mb-2">IFSC Code</label>
          <input
            type="text"
            placeholder="HB12547800"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-black "
          />
          </div>
        </div>
        <div className="flex flex-row gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-xs mb-2">Bank Name</label>
          <input
            type="text"
            placeholder="HDFC Bank"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs mb-2">Branch</label>
          <input
            type="text"
            placeholder="Bangalore"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-black"
          />
        </div>
        </div>
      </div>
    );
  };
  
  export default SellCropForm;
  