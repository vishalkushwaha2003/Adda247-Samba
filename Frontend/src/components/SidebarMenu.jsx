import React, { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useTheme } from "../context/ColorContext";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useEffect } from 'react';

const SidebarMenu = ({ navigation,courseNavigation,currentComponent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, color } = useTheme();
  const courseArray = ['SSC CGL', 'SSC GD','SSC CHSL', 'SSC MTS', 'SSC CPO', 'BANK PO and CLERK', 'JKSSB', 'RAILWAYS', 'RIMC', 'NVS', 'JKP Constable & SI', 'SAINIK SCHOOL', 'NDA', 'CDS', 'AFCAT'];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


useEffect(()=>{
    setSelectedItem(currentComponent)


},[currentComponent])





  const handleClick = (event) => {
    setSelectedItem('Courses');
    setAnchorEl(event.currentTarget)  
    navigation('Courses');
  }

  const handleClose = () => setAnchorEl(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    navigation(item);
    if (item === 'Courses') {
      handleClick(item);
    } else {
      handleClose();
    }
  };

  const menuItems = [
    { label: 'HOME', value: 'Home' },
    { label: 'COURSES', value: 'Courses' },
    { label: 'FACULTY', value: 'Faculty' },
    { label: 'REGISTRATION', value: 'Resistration' },
    { label: 'ABOUT', value: 'About' },
    { label: 'STUDENT PROFILE', value: 'StudentProfile' },
    { label: 'CONTACT US', value: 'ContactUs' },
    { label: 'JOIN COMMUNITY', value: 'JoinCommunity' },
  ];

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
        className={`fixed top-0 left-0 h-full sm:w-64 w-48 bg-slate-800 text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="sm:p-4 p-2 flex flex-col justify-between h-[100vh]">
          <div className="flex justify-between items-center sm:h-[8vh] h-[7vh]">
            <div className='sm:h-14 sm:w-14 h-12 w-12 rounded-full border-2 bg-slate-100' style={{ borderColor: color }}>
            </div>
            <CloseOutlinedIcon
              fontSize="large"
              className="hover:cursor-pointer"
              sx={{ color: color }}
              onClick={toggleSidebar}
            />
          </div>
          <div className="h-[80vh] py-4">
            <div className="sm:font-bold font-medium md:hidden">
              {menuItems.slice(0, 5).map((item, idx) => (
                <div
                  key={idx}
                  className={`border-b border-gray-300 p-2 hover:cursor-pointer ${selectedItem === item.value ? 'bg-slate-700' : 'hover:bg-slate-700'}`}
                  onClick={(event) => item.value === 'Courses' ? handleClick(event) : handleItemClick(item.value)}
                >
                  {item.label} {item.value === 'Courses' && <KeyboardArrowDownOutlinedIcon />}
                </div>
              ))}
              <Menu
                id="fade-menu"
                MenuListProps={{ 'aria-labelledby': 'fade-button' }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                disableScrollLock={true}
              >
                {courseArray.map((course, idx) => (
                  <MenuItem
                    key={idx}
                    onClick={()=>{toggleSidebar(); handleClose(); courseNavigation(course)}}
                    sx={{
                      backgroundColor: theme === 'dark' ? 'rgb(51 65 85)' : 'rgb(241 245 249)',
                      color: theme === 'dark' ? 'white' : 'rgb(2 6 23)',
                      fontWeight: '500',
                      fontSize: 'medium',
                      fontFamily: 'revert-layer',
                      '&:hover': {
                        backgroundColor: theme === 'dark' ? 'rgb(30 41 59)' : 'rgb(230 230 230)',
                      },
                    }}
                  >
                    {course}
                  </MenuItem>
                ))}
              </Menu>
            </div>
            <div className='sm:font-bold font-medium'>
              {menuItems.slice(5).map((item, idx) => (
                <div
                  key={idx}
                  className={`border-b border-gray-300 p-2 hover:cursor-pointer ${selectedItem === item.value ? 'bg-slate-700' : 'hover:bg-slate-700'}`}
                  onClick={() => handleItemClick(item.value)}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          <div className="h-[8vh] flex justify-center gap-2 items-center font-bold hover:cursor-pointer text-[rgb(255,61,61)]">
            <div className="text-xl">Logout </div>
            <LogoutOutlinedIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
