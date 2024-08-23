// import { FaSearch, FaMicrophone } from 'react-icons/fa';

// export default function CropSection() {
//     return (
//       <div className="mt-4">
//         <input
//           type="text"
//           placeholder="Search for products and services"
//           className="w-full p-3 border rounded-lg"
//         />
  
//         <div className="mt-4 bg-gray-100 p-4 rounded-lg">
//           <p className="text-green-700 font-semibold">Hello Farmer!</p>
//           <p className="text-gray-600">For crop advisory add your crops here!</p>
//           <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg">Add my crops</button>
//         </div>
//       </div>
//     );
//   }
  

// import { FaSearch, FaMicrophone } from 'react-icons/fa';

// export default function CropSection() {
//     return (
//       <div className="mt-4">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search for products and services"
//             className="w-full p-3 pl-10 pr-12 border rounded-lg"
//           />
//           <FaSearch className="absolute top-4 left-3 text-gray-300" />
//           <FaMicrophone className="absolute top-4 right-3 text-green-700" />
//         </div>
        

//         <div className=" p-4 rounded-lg border border-green-700 ">
//         <h2 className='font-bold text-xl'>Add my Crops</h2>
//         <div className='flex space-x-4'>
//         <button id="t" className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg">Add my crops</button>
//         <div>
//           <p className="text-green-700 font-semibold">Hello Farmer!</p>
//           <p className="text-gray-600">For crop advisory add your crops here!</p>
//         </div>
//         </div>
//         </div>
//       </div>
//     );
// }


import { FaSearch, FaMicrophone, FaPlus } from 'react-icons/fa';

export default function CropSection() {
    return (
      <div className="mt-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products and services"
            className="w-full p-3 pl-10 pr-12 border rounded-lg "
          />
          <FaSearch className="absolute top-4 left-3 text-gray-300" />
          <FaMicrophone className="absolute top-4 right-3 text-green-700" />
        </div>

        <div className="p-4 ">
          <h2 className='font-bold text-xl'>Add my Crops</h2>
          <div className='flex items-center space-x-4 mt-2'>
            <button id="t" className="p-2 bg-white text-white rounded-sm border border-green-700">
              <FaPlus className="text-green-700 text-lg" />
            </button>
            <div>
              <p className="text-green-700 font-semibold">Hello Farmer!</p>
              <p className="text-gray-600">For crop advisory add your crops here!</p>
            </div>
          </div>
        </div>
      </div>
    );
}

