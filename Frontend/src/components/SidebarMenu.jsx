import React, { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useTheme } from "../context/ColorContext";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';



const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, color, changeColor } = useTheme();


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-10">
      {isOpen?<CloseOutlinedIcon fontSize="large" className="hover:cursor-pointer"  sx={{color:color}} onClick={toggleSidebar} />:<MenuOutlinedIcon fontSize="large" className="hover:cursor-pointer"
            sx={{color:color}}
            onClick={toggleSidebar}
          />}
      <div 
        className={`fixed top-0 left-0 h-full sm:w-64 w-48 bg-slate-800  text-white transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Sidebar Menu</h2>
            <CloseOutlinedIcon fontSize="large" className="hover:cursor-pointer"  sx={{color:color}} onClick={toggleSidebar}  />
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
