import React, { useState } from 'react';

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-10">
      <button 
        onClick={toggleSidebar} 
        className="p-2 bg-blue-500 text-white rounded"
      >
        Toggle Sidebar
      </button>
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Sidebar Menu</h2>
            <button 
              onClick={toggleSidebar} 
              className="p-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
          <ul className="mt-4">
            <li className="py-2"><a href="#" className="hover:underline">Item 1</a></li>
            <li className="py-2"><a href="#" className="hover:underline">Item 2</a></li>
            <li className="py-2"><a href="#" className="hover:underline">Item 3</a></li>
            <li className="py-2"><a href="#" className="hover:underline">Item 4</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
