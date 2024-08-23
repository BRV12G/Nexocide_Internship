// import { FaSearch, FaShoppingCart,FaGlobe } from "react-icons/fa";
// import { HiOutlineMenu } from "react-icons/hi";
// import { MdNotifications } from "react-icons/md";
// import { FiUser } from "react-icons/fi";

// export default function TopBar() {
//   return (
//     <div className="flex justify-between items-center p-4  text-white ">
//       <div className="flex space-x-2">
//       <HiOutlineMenu className="text-4xl bg-green-700 rounded-full p-1" />
//       <img src="/logo.jpg" alt="Logo" className="h-10" />
//       </div>
//       <div className="flex space-x-4">
//         <button><MdNotifications className="text-4xl bg-stone-300 text-green-700 rounded-full p-1" /></button>
//         <button><FaShoppingCart className="text-4xl bg-stone-300 text-green-700 rounded-full p-1 " /></button>
//         <button><FaGlobe className="text-4xl p-1 bg-stone-300 text-black rounded-full" /> </button>
//         <FiUser className="text-4xl bg-stone-300 text-green-700 rounded-full p-1" />
//       </div>
//     </div>
//   );
// }

import { FaSearch, FaShoppingCart, FaGlobe } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { MdNotifications } from "react-icons/md";
import { FiUser } from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="flex justify-between items-center p-2 sm:p-4 bg-white text-white">
      <div className="flex items-center space-x-2">
        <HiOutlineMenu className="text-2xl sm:text-3xl md:text-4xl bg-green-800 rounded-full p-1" />
        <img src="/logo.jpg" alt="Logo" className="h-8 sm:h-10" />
      </div>
      <div className="flex space-x-2 sm:space-x-4">
        <button><MdNotifications className="text-2xl sm:text-3xl md:text-4xl bg-stone-300 text-green-700 rounded-full p-1" /></button>
        <button><FaShoppingCart className="text-2xl sm:text-3xl md:text-4xl bg-stone-300 text-green-700 rounded-full p-1" /></button>
        <button><FaGlobe className="text-2xl sm:text-3xl md:text-4xl p-1 bg-stone-300 text-black rounded-full" /></button>
        <button><FiUser className="text-2xl sm:text-3xl md:text-4xl bg-stone-300 text-green-700 rounded-full p-1" /></button>
      </div>
    </div>
  );
}

