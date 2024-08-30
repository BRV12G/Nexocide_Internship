import { FaFilter } from 'react-icons/fa';

const AttendanceBody = () => {
    const attendanceData = [
      { date: "01/01/2024", checkIn: "09:00 AM", checkOut: "05:00 PM", status: "Present" },
      { date: "02/01/2024", checkIn: "09:00 AM", checkOut: "05:00 PM", status: "Present" },
      { date: "03/01/2024", checkIn: "09:00 AM", checkOut: "05:00 PM", status: "Present" },
      { date: "04/01/2024", checkIn: "-", checkOut: "-", status: "Absent" },
      { date: "05/01/2024", checkIn: "09:00 AM", checkOut: "05:00 PM", status: "Present" },
      { date: "06/01/2024", checkIn: "-", checkOut: "-", status: "Absent" },
      { date: "07/01/2024", checkIn: "-", checkOut: "-", status: "Absent" },
      { date: "08/01/2024", checkIn: "09:00 AM", checkOut: "05:00 PM", status: "Present" },
    ];
  
    return (
      <div className="overflow-x-auto ">
        <div className='flex items-center justify-between mb-4'>
        <h2 className="text-xl font-semibold py-4 px-4">Attendance Log</h2>
        <FaFilter className="text-xl text-gray-600 h-4 w-4 mr-4 cursor-pointer" />
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr className='bg-stone-100  '>
              <th className="py-4 px-4 border-b  text-gray-500 ">Date</th>
              <th className="py-4 px-4 border-b  text-gray-500">Check-in</th>
              <th className="py-4 px-4 border-b  text-gray-500">Check-out</th>
              <th className="py-4 px-4 border-b  text-gray-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((entry, index) => (
              <tr key={index}>
                <td className="py-3 px-4 border-b text-gray-700">{entry.date}</td>
                <td className="py-3 px-4 border-b text-gray-700">{entry.checkIn}</td>
                <td className="py-3 px-4 border-b text-gray-700">{entry.checkOut}</td>
                <td className={`py-3 px-4 border-b ${entry.status === "Present" ? "text-green-500" : "text-red-500"}`}>{entry.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default AttendanceBody;
  