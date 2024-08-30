// const AttendanceDetailBody = () => {
//     const attendanceDetail = {
//       date: "01/01/2024",
//       checkIn: "09:00 AM",
//       checkOut: "05:00 PM",
//       status: "Present",
//     };
  
//     return (
//       <div className="p-4 flex justify-center items-center">
//         <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-300 w-full max-w-sm">
//           <div className="mb-4">
//             <span className="text-gray-500">Date</span>
//             <div className="text-gray-700">{attendanceDetail.date}</div>
//           </div>
//           <div className="mb-4">
//             <span className="text-gray-500">Check-in</span>
//             <div className="text-gray-700">{attendanceDetail.checkIn}</div>
//           </div>
//           <div className="mb-4">
//             <span className="text-gray-500">Check-out</span>
//             <div className="text-gray-700">{attendanceDetail.checkOut}</div>
//           </div>
//           <div className={`text-lg ${attendanceDetail.status === "Present" ? "text-green-500" : "text-red-500"}`}>
//             {attendanceDetail.status}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default AttendanceDetailBody;
  

import { FaArrowLeft } from 'react-icons/fa';

const AttendanceDetailBody = () => {
  const attendanceDetail = {
    date: "01/01/2024",
    checkIn: "09:00 AM",
    checkOut: "05:00 PM",
    status: "Present",
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="w-full max-w-sm">
    

        {/* Attendance Detail Card */}
        <div className=" bg-white shadow-lg rounded-lg p-4 border border-gray-300">
            <div className=" items-center mb-4">
               <FaArrowLeft className="text-gray-600 h-5 w-5 cursor-pointer" />
            </div>
            <div className='flex space-x-12 '>
            <div className='bg-gray-100 px-14 py-4 rounded-lg'>
                <div className="mb-4">
                 <span className="text-black font-bold">Date</span>
                </div>
               <div className="mb-4">
                 <span className="text-black font-bold">Check-in</span>
               </div>
               <div className="mb-4">
                 <span className="text-black font-bold">Check-out</span>
               </div>
          </div>
          <div className='mt-3  '>
           <div className='mb-4'>
           <div className="text-gray-700">{attendanceDetail.date}</div>
           </div>
           <div className='mb-4'>
           <div className="text-gray-700">{attendanceDetail.checkIn}</div>
           </div>
           <div className='mb-4'>
           <div className="text-gray-700">{attendanceDetail.checkOut}</div>
           </div>
          </div>
          
          </div>
          <div className={`text-lg text-center py-4 ${attendanceDetail.status === "Present" ? "text-green-500" : "text-red-500"}`}>
            {attendanceDetail.status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceDetailBody;
