import { FaRegBell, FaRegUserCircle } from 'react-icons/fa';

 const Header=()=> {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow min-h-20 border border-gray-300 border-2">
      <div className="ml-auto flex items-center space-x-4 ">
        <FaRegBell className="text-gray-600 h-5 w-5" />
        <div className="flex items-center ">
          <FaRegUserCircle className="text-2xl text-gray-600 h-10 w-10" />
          <span className="ml-1 text-sm text-gray-500">▼</span>
        </div>
      </div>
    </header>
  );
}

export default Header;



