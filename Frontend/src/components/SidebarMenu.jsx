import React, { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useTheme } from "../context/ColorContext";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { BorderColor } from '@mui/icons-material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';



const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, color, changeColor } = useTheme();
  const courseArray = ['VISHAL', 'KUSHWAHA', 'YAAAAA', 'HAAAAAA', 'LOOOOO'];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


 



  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = (value) => {
    setAnchorEl(null);

    // Validate that value is a string
    if (typeof value === 'string') {
      setYear(value);
    } else {
      console.error('Invalid year value:', value);
    }
  };





  return (
    <div className="relative z-10">
      {isOpen ? (
        <CloseOutlinedIcon
          fontSize="large"
          className="hover:cursor-pointer"
          sx={{ color: color }}
          onClick={toggleSidebar}
        />
      ) : (
        <MenuOutlinedIcon
          fontSize="large"
          className="hover:cursor-pointer"
          sx={{ color: color }}
          onClick={toggleSidebar}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-full sm:w-64 w-48 bg-slate-800  text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="sm:p-4 p-2 flex flex-col justify-between h-[100vh]">
          <div className="flex justify-between items-center  sm:h-[8vh] h-[7vh]">
           
              <div className='sm:h-14 sm:w-14 h-12 w-12 rounded-full border-2  bg-slate-100' style={{borderColor:color}}>
              
              </div>
              
           
            <CloseOutlinedIcon
              fontSize="large"
              className="hover:cursor-pointer"
              sx={{ color: color }}
              onClick={toggleSidebar}
            />
          </div>
          <div className="h-[80vh]  ">
            <div className="sm:font-bold font-medium md:hidden  ">
              <div class="border-b border-gray-300 p-2  hover:cursor-pointer">HOME</div>
              <div class="border-b border-gray-300 p-2  hover:cursor-pointer"
              
              id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
              
              >COURSES <KeyboardArrowDownOutlinedIcon/></div>
              <Menu
            id="fade-menu"
            MenuListProps={{ 'aria-labelledby': 'fade-button' }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            disableScrollLock={true} // Prevent Menu from altering the scrollbar
          
          >
            {courseArray.map((course, idx) => (
              <MenuItem key={idx} onClick={() => handleClose(course)} 
              
         sx={{
        backgroundColor:  'rgb(51 65 85)',
        color: 'white' ,
        fontWeight: '500',
        fontSize: 'large',
        fontFamily: 'revert-layer',
        '&:hover': {
          backgroundColor: 'rgb(30 41 59)',
        },
      }}
              
              >{course}</MenuItem>
            ))}
          </Menu>
              <div class="border-b border-gray-300 p-2  hover:cursor-pointer">FACULTY</div>
              <div class="border-b border-gray-300 p-2  hover:cursor-pointer">RESISTRATION</div>
              <div class="border-b border-gray-300 p-2  hover:cursor-pointer">ABOUT</div>
              
            </div>
            <div className='sm:font-bold font-medium'>
            <div class="border-b border-gray-300 p-2  hover:cursor-pointer">STUDENT PROFILE</div>
            <div class="border-b border-gray-300 p-2  hover:cursor-pointer">CONTACT US</div>
            <div class="border-b border-gray-300 p-2  hover:cursor-pointer">JOIN COMMUNITY</div>


            </div>
          </div>
          <div className="h-[8vh]   flex justify-center gap-2 items-center font-bold hover:cursor-pointer text-red-600">
            <div className="text-xl">Logout </div>
            <LogoutOutlinedIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
