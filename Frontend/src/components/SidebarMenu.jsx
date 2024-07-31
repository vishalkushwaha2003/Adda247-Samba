import React, { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useTheme } from "../context/ColorContext";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';



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
        <div className="sm:p-4 p-2 h-[100vh]">
          <div className="flex justify-between items-center bg-red-700 h-[8vh]">
            <h2 className="text-xl font-semibold">Sidebar Menu</h2>
            <CloseOutlinedIcon fontSize="large" className="hover:cursor-pointer"  sx={{color:color}} onClick={toggleSidebar}  />
          </div>
          <div className='h-[80vh] bg-green-700'>

          </div>
          <div className='h-[8vh]  bg-amber-300 flex justify-center gap-2 items-center font-bold hover:cursor-pointer text-red-600'>
           <div className='text-2xl'>Logout </div>
           <LogoutOutlinedIcon fontSize='large'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
