
const Body=()=> {
    return (
      <main className="flex-1 p-4 bg-white">
        <h2 className="mb-4 text-2xl font-semibold mt-4">Welcome, John Doe!</h2>
        <div className="space-y-4">
          <button className="w-full p-4 text-left left-4 bg-teal-50 rounded text-sky-500 shadow-md"><span className="ml-10">Check-in</span></button>
          <button className="w-full p-4 text-left bg-teal-50 rounded text-sky-500 shadow-md "><span className="ml-10">Check-Out</span></button>
          <button className="w-full p-4 text-left bg-teal-50 rounded text-sky-500 shadow-md"><span className="ml-10">Apply For Leave</span></button>
          <button className="w-full p-4 text-left bg-teal-50 rounded text-sky-500 shadow-md"><span className="ml-10">Record Performance</span></button>
          <button className="w-full p-4 text-left bg-teal-50 rounded text-sky-500 shadow-md"><span className="ml-10">View Payroll</span></button>
        </div>
      </main>
    );
  }
  
export default Body;
