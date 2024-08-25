const SoilWaterTestingForm = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-3">ENQUIRY FORM:</p>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs mb-2">Last Crop Grown</label>
          <input
            type="text"
            placeholder="1000 kg"
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs  mb-2">Present Crop Planning</label>
          <input
            type="text"
            placeholder="Type"
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs mb-2">Last Fertilizer Used</label>
          <input
            type="text"
            placeholder="Type"
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs mb-2">Size of the Farm Land</label>
          <input
            type="text"
            placeholder="Type"
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4 flex">
          <input type="checkbox" className="mr-2 w-6 h-6" /> 
          <label className="block text-gray-700 text-sm  mb-2">
           Terms and Conditions and instructions to be displayed to send the soil to the lab.
          </label>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 text-lg font-bold mb-2">Three Types of Soil Testing Facilities</p>
          <div className="ml-2">
            <label className="block">
              <input type="checkbox" className="mr-2 w-4 h-4 leading-tight" />
              SELF SAMPLING
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2 w-4 h-4 leading-tight" />
              EMPLOYEE HANDLING
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2 leading-tight w-4 h-4" />
              RAPID SOIL TESTING
            </label>
          </div>
        </div>
        <div className="w-4/5 mt-4 p-2 bg-yellow-300 text-yellow-700 text-sm rounded-lg flex">
        <p className="material-icons ml-1 mr-4 bg-black rounded-full p-2 h-6 w-6  flex items-center justify-center">i</p>
        <p className="text-black text-md">Each above testing cost will be different</p>
        </div>
      </div>
    );
  };
  
  export default SoilWaterTestingForm;
  