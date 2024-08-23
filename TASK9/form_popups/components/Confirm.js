import { useState } from 'react';

const Confirm = ({ isVisible2, onClose2 }) => {
  if (!isVisible2) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-4/12 ">
        <h2 className="text-2xl mb-4 text-center font-bold">Confirm Details</h2>
        <hr className="mb-4 border-gray-300" ></hr>
        <form>
        <div className="mb-4 flex items-center">
            <label className="block text-sm font-medium w-1/3">Vendor</label>
            <select className="h-10 mt-1 block w-3/4 border border-gray-300 rounded-md shadow-lg">
              <option value="" disabled selected></option>
              <option value="vendor1">Vendor 1</option>
              <option value="vendor2">Vendor 2</option>
              <option value="vendor3">Vendor 3</option>
            </select>
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-sm font-medium  w-1/3">B2B Rate</label>
            <input type="text" className="mt-1 h-10 block w-3/4 border border-gray-300 rounded-md shadow-lg" />
          </div>
          <div className="mb-4 flex items-center ">
            <label className="block text-sm font-medium  w-1/3">Advance</label>
            <input type="text" className="mt-1 h-10 block w-3/4 border border-gray-300 rounded-md shadow-lg" />
          </div>
          <div className="flex justify-center space-x-4">
            <button type="button" className="px-4 py-2  text-black border border-grey-300 rounded-md shadow-lg" onClick={onClose2}>Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Confirm Booking</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Confirm;
