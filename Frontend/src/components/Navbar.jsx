import React, { useState } from "react";
import { useTheme } from "../context/ColorContext";
import DarkLightToggleButton from "./DarkLightToggleButton";
import Button from "@mui/material/Button";
import logo from "../assets/logo2.png";
import SidebarMenu from "./SidebarMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, color, changeColor } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-100 dark:bg-slate-900 duration-200 md:h-20 h-16 fixed w-full z-10 top-0">
      <div className="lg:w-[95%] w-[96%]  h-full m-auto flex justify-between items-center">
        <img src={logo} alt="Logo" className="object-fill md:h-16 lg:w-32 h-12 w-24 md:w-28" />

        

        {/* Buttons with conditional styling based on screen size */}
        <div className="hidden md:flex gap-2">
          <Button
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
            Courses
          </Button>
          <Button
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
          {/* <Button
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
            Contact
          </Button> */}
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
          <SidebarMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
