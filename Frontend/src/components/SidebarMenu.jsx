import React, { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useTheme } from "../context/ColorContext";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

const SidebarMenu = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {theme, color } = useTheme();
  const courseArray = ['SSC CGL', 'SSC GD', 'SSC CHSL', 'SSC MTS', 'SSC CPO','BANK PO CLERK', 'JKSSB', 'RAILWAYS', 'RIMC','NVS','JKP(CONSTABLE & SI)','SAINIK SCHOOL','NDA','CDS','AFCAT'];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

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
              <div className="border-b border-gray-300 p-2 hover:cursor-pointer hover:bg-slate-700"onClick={()=>navigation('Home')}>HOME</div>
              <div className="border-b border-gray-300 p-2 hover:cursor-pointer hover:bg-slate-700"
                onClick={(event)=>{handleClick(event); navigation('Courses')}}

                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                
              >
                COURSES <KeyboardArrowDownOutlinedIcon />
              </div>
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
                    onClick={handleClose}
                    sx={{
                      backgroundColor: theme === 'dark' ? 'rgb(51 65 85)' : 'rgb(241 245 249)',
                      color: theme === 'dark' ? 'white' : 'rgb(2 6 23)',
                      fontWeight: '500',
                      fontSize: 'large',
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
              <div className="border-b border-gray-300 p-2 hover:cursor-pointer hover:bg-slate-700" onClick={()=>navigation('Faculty')}>FACULTY</div>
              <div className="border-b border-gray-300 p-2 hover:cursor-pointer hover:bg-slate-700" onClick={()=>navigation('Resistration')}>REGISTRATION</div>
              <div className="border-b border-gray-300 p-2 hover:cursor-pointer hover:bg-slate-700" onClick={()=>navigation('About')}>ABOUT</div>
            </div>
            <div className='sm:font-bold font-medium'>
              <div className="border-b border-gray-300 p-2 hover:cursor-pointer hover:bg-slate-700" onClick={()=>navigation('StudentProfile')}>STUDENT PROFILE</div>
              <div className="border-b border-gray-300 p-2 hover:cursor-pointer hover:bg-slate-700" onClick={()=>navigation('ContactUs')}>CONTACT US</div>
              <div className="border-b border-gray-300 p-2 hover:cursor-pointer hover:bg-slate-700" onClick={()=>navigation('JoinCommunity')}>JOIN COMMUNITY</div>
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
