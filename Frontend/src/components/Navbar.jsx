import React, { useState } from "react";
import { useTheme } from "../context/ColorContext";
import DarkLightToggleButton from "./DarkLightToggleButton";
import Button from "@mui/material/Button";
import logo from "../assets/logo2.png";
import SidebarMenu from "./SidebarMenu";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

const Navbar = ({navigation,courseNavigation,currentComponent}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, color, changeColor } = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const courseArray = ['SSC CGL', 'SSC GD', 'SSC CHSL', 'SSC MTS', 'SSC CPO','BANK PO and CLERK', 'JKSSB', 'RAILWAYS', 'RIMC','NVS','JKP Constable & SI','SAINIK SCHOOL','NDA','CDS','AFCAT'];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = (value) => {
    setAnchorEl(null);
   

    // Validate that value is a string
    // if (typeof value === 'string') {
    //   setYear(value);
    // } else {
    //   console.error('Invalid year value:', value);
    // }
  };




   




  return (
    <nav className="bg-slate-200 dark:bg-slate-900 duration-200 md:h-20 h-16 fixed w-full z-10 top-0 shadow-[_0px_0px_15px_1px_rgb(15,23,42,0.4)] dark:shadow-[_0px_0px_15px_1px_rgb(100,116,139,0.4)] ">
      <div className="lg:w-[95%] w-[96%] h-full m-auto flex justify-between items-center">
        <img src={logo} alt="Logo" className="object-fill md:h-16 lg:w-32 h-12 w-24 md:w-28" />

        {/* Buttons with conditional styling based on screen size */}
        <div className="hidden md:flex gap-2">
          <Button
            onClick={()=>navigation('Home')}
            variant="outlined"
            sx={{
              color: color,
              borderColor: color,
              "&:hover": { borderColor: color },
              fontWeight: 'bold',
              fontSize: '14px',
              padding: '8px 16px',
              '@media (max-width: 1100px)': { // Medium screens
                fontSize: '12px',
                padding: '6px 10px',
              },
              '@media (max-width: 768px)': { // Small screens
                fontSize: '10px',
                padding: '4px 8px',
              },
            }}
          >
            Home
          </Button>
          <Button

             
            variant="outlined"
            sx={{
              color: color,
              borderColor: color,
              "&:hover": { borderColor: color, cursor: 'pointer' },

              fontWeight: 'bold',
              fontSize: '14px',
              padding: '8px 10px',
              '@media (max-width: 1100px)': { // Medium screens
                fontSize: '12px',
                padding: '6px 10px',
              },
              '@media (max-width: 768px)': { // Small screens
                fontSize: '10px',
                padding: '4px 8px',
              },
            }}
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={(event)=>{handleClick(event); navigation('Courses')}}
          >
            Courses<KeyboardArrowDownOutlinedIcon />
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{ 'aria-labelledby': 'fade-button'}}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            disableScrollLock={true} // Prevent Menu from altering the scrollbar
          
          >
            {courseArray.map((course, idx) => (
              <MenuItem key={idx} onClick={()=>{handleClose(); courseNavigation(course)} }
              
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
              
              >{course}</MenuItem>
            ))}
          </Menu>
          <Button
            onClick={()=>navigation('Faculty')}
           
            variant="outlined"
            sx={{
              color: color,
              borderColor: color,
              "&:hover": { borderColor: color },
              fontWeight: 'bold',
              fontSize: '14px',
              padding: '8px 16px',
              '@media (max-width: 1100px)': { // Medium screens
                fontSize: '12px',
                padding: '6px 10px',
              },
              '@media (max-width: 768px)': { // Small screens
                fontSize: '10px',
                padding: '4px 8px',
              },
            }}
          >
            Faculty
          </Button>
          <Button
            onClick={()=>navigation('Resistration')}
           
            variant="outlined"
            sx={{
              color: color,
              borderColor: color,
              "&:hover": { borderColor: color },
              fontWeight: 'bold',
              fontSize: '14px',
              padding: '8px 16px',
              '@media (max-width: 1100px)': { // Medium screens
                fontSize: '12px',
                padding: '6px 10px',
              },
              '@media (max-width: 768px)': { // Small screens
                fontSize: '10px',
                padding: '4px 8px',
              },
            }}
          >
            Registration
          </Button>
          <Button
            onClick={()=>navigation('About')}

            variant="outlined"
            sx={{
              color: color,
              borderColor: color,
              "&:hover": { borderColor: color },
              fontWeight: 'bold',
              fontSize: '14px',
              padding: '8px 16px',
              '@media (max-width: 1100px)': { // Medium screens
                fontSize: '12px',
                padding: '6px 10px',
              },
              '@media (max-width: 768px)': { // Small screens
                fontSize: '10px',
                padding: '4px 8px',
              },
            }}
          >
            About
          </Button>
        </div>

        {/* Additional components like DarkLightToggleButton and SidebarMenu */}
        <div className="flex items-center lg:gap-10 md:gap-6 sm:gap-4 gap-2">
          <div className="flex items-center gap-2">
            <DarkLightToggleButton />
            <input
              type="color"
              id="colorPicker"
              onChange={(e) => changeColor(e.target.value)}
              value={color}
              className="h-7 w-7 cursor-pointer rounded-full bg-transparent"
            />
          </div>
          <SidebarMenu navigation={navigation} courseNavigation={courseNavigation} currentComponent={currentComponent}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
