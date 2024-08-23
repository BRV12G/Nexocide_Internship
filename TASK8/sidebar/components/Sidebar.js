




import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [active, setActive] = useState('home');

  const menuItems = [
    { name: 'Home', icon: '🏠', path: '/home' },
    { name: 'Dashboard', icon: '📊', path: '/dashboard' },
    { name: 'Sales', icon: '💼', path: '/sales' },
    { name: 'Purchases', icon: '🛒', path: '/purchases' },
    { name: 'Contacts', icon: '👥', path: '/contacts' },
    { name: 'Products', icon: '📦', path: '/products' },
    { name: 'Inventory', icon: '📋', path: '/inventory' },
    { name: 'Banks', icon: '🏦', path: '/banks' },
    { name: 'Accounting', icon: '📑', path: '/accounting' },
    { name: 'Automatics', icon: '⚙️', path: '/automatics' },
    { name: 'Reports', icon: '📊', path: '/reports' },
    { name: 'Apps', icon: '📱', path: '/apps' },
    { name: 'Logs', icon: '📜', path: '/logs' },
    { name: 'Money', icon: '💰', path: '/money' },
  ];

  const supportItems = [
    { name: 'Settings', icon: '⚙️', path: '/settings' },
    { name: ' Sign In', path: '/signin' },
    { name: ' Sign Up', path: '/signup' },
    { name: ' Reset Password', path: '/reset-password' },
  ];

  return (
    <div className="bg-gray-800 h-auto text-white flex flex-col w-80 justify items-center">
      <div className="px-4 py-4 text-lg font-bold">
        <span>PROH-WARE</span>
      </div>
      <div className="flex-grow">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`px-4 w-60 py-2 cursor-pointer hover:bg-gray-700 ${
                active === item.name.toLowerCase() ? 'bg-gray-700' : ''
              }`}
              onClick={() => setActive(item.name.toLowerCase())}
            >
              <Link href={item.path}>
                <div className="flex items-center space-x-2">
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-24"></div>
      <div>
        <div className="px-4 py-2 font-bold text-sm uppercase tracking-wide w-60">
          Support
        </div>
        <ul className="space-y-2 ">
          {supportItems.map((item) => (
            <li
              key={item.name}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-700 ${
                active === item.name.toLowerCase() ? 'bg-gray-700' : ''
              }`}
              onClick={() => setActive(item.name.toLowerCase())}
            >
              <Link href={item.path}>
                <div className="flex items-center space-x-2">
                  {item.icon && <span className="ml-4">{item.icon}</span>}
                  <span className='ml-8'>{item.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;






