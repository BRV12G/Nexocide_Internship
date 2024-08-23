import { useState } from 'react';

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-4/12 ">
        <h2 className="text-2xl mb-4 text-center font-bold">Booking Details</h2>
        <hr className="mb-4 border-gray-300" ></hr>
        <form>
          <div className="mb-4 flex items-center">
            <label className="block text-sm font-medium  w-1/3">Number of Days</label>
            <input type="number" className="h-10 mt-1 block w-3/4 border border-gray-300 rounded-md shadow-lg" />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-sm font-medium  w-1/3">Pickup Date</label>
            <input type="date" className="mt-1 h-10 block w-3/4 border border-gray-300 rounded-md shadow-lg" />
          </div>
          <div className="mb-4 flex items-center ">
            <label className="block text-sm font-medium  w-1/3">Drop Off Date</label>
            <input type="date" className="mt-1 h-10 block w-3/4 border border-gray-300 rounded-md shadow-lg" />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-sm font-medium  w-1/3">Pickup Location</label>
            <input type="text" className="h-10 mt-1 block w-3/4 border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-sm font-medium w-1/3">Drop Off Location</label>
            <input type="text" className="h-10 mt-1 block w-3/4 border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-sm font-medium w-1/3">Pickup Time</label>
            <input type="time" className="h-10 mt-1 block w-3/4 border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-sm font-medium  w-1/3">Drop Off Time</label>
            <input type="time" className="h-10 mt-1 block w-3/4 border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-sm font-medium w-1/3">Car</label>
            <input type="text" className="h-10 mt-1 block w-3/4 border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-sm font-medium  w-1/3">Amount</label>
            <input type="number" className="h-10 w-3/4 mt-1 block  border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div className="flex justify-center space-x-4">
            <button type="button" className="px-4 py-2  text-black border border-grey-300 rounded-md shadow-lg" onClick={onClose}>Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Confirm Booking</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;



